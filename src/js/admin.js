/*jslint browser: true*/
/*global $, Handlebars, console*/

var info = null;
var cards = {};

$(document).ready(function () {
  // plugin time
  $(".scrollspy").scrollSpy();
  $(".button-collapse").sideNav({
    edge: "left",
    closeOnClick: true,
    draggable: true
  });
  $(".table-of-contents").pushpin({
    top: $("nav").height()
  });
  $("select").material_select();
  $("#add-tags").material_chip();

  // status update
  var statusPhp = document.getElementById("status_php");
  if (USING_PHP) {
    statusPhp.innerHTML = "sentiment_very_satisfied";
    statusPhp.classList.add("green-text");

    // okay, lets check for filesystem access
    var statusFs = document.getElementById("status_fs");
    $("#status_fs_block").toggle(true)

    if (FS_ACCESS) {
      statusFs.innerHTML = "sentiment_very_satisfied";
      statusFs.classList.add("green-text");
    } else {
      statusFs.innerHTML = "sentiment_very_dissatisfied";
      statusFs.classList.add("red-text");
    }
  } else {
    statusPhp.innerHTML = "sentiment_very_dissatisfied";
    statusPhp.classList.add("red-text");

    // okay, lets check for cors then
    var statusCors = document.getElementById("status_cors");

    $("#status_cors_block").toggle(true);
    $.ajax("../misc/info.json").fail(function () {
      statusCors.innerHTML = "sentiment_very_dissatisfied";
      statusCors.classList.add("red-text");
    }).done(function () {
      statusCors.innerHTML = "sentiment_very_satisfied";
      statusCors.classList.add("green-text");
    });
  }

  // chip addition
  var addForm = $("#add-form");
  var addChip = $("#add-chip");
  var addChipTitle = $("#add-chip-title");
  var addChipURL = $("#add-chip-url");
  $("#add-chip-title,#add-chip-url").on("change paste keyup", function () {
    if (addChipTitle.val() !== "" && addChipURL.val() !== "") {
      addChip.removeClass("disabled");
    } else {
      addChip.addClass("disabled");
    }
  });
  addChip.click(function () {
    $("#add-chips").append("<div class='chip' data-url='" +
      addChipURL.val() + "' data-title='" + addChipTitle.val() +
      "'>" + "<i class='close material-icons'>close</i>" +
      addChipTitle.val() + "</div>");
    addChipTitle.val("");
    addChipURL.val("");
    addForm.trigger("change");
  });
  $(".close").click(function() {
    addForm.trigger("change");
  });

  // card wysiwyg preview
  var addPreview = $("#add-preview");
  var addTitle = $("#add-title");
  var addImage = $("#add-image");
  var addColour = $("#add-colour");
  var brightnessAccent = $("#add-brightness");
  var addChips = $("#add-chips");
  var addWidth = $("#add-width");
  var addHeight = $("#add-height");
  addForm.on("change paste keyup", function () {
    var data = {};

    if (addTitle.val() !== "") {
      data.title = {
        colour: $("#add-title-colour").val(),
        brightness: $("#add-title-brightness").val(),
        text: addTitle.val()
      };
    }

    if (addWidth.val() || addHeight.val()) {
      data.size = {
        width: addWidth.val() ? addWidth.val() + "px" : "auto",
        height: addHeight.val() ? addHeight.val() + "px" : "auto"
      };
    }

    if (addImage.prop('checked')) {
      data.image = {
        style: $("#add-img-style").val(),
        src: $("#add-img").val()
      }
    }

    data.colour = addColour.val();
    data.brightness = brightnessAccent.val();
    data.style = $("#add-style").val();
    data.content = {
      text: $("#add-desc").val(),
      colour: $("#add-desc-colour").val(),
      brightness: $("#add-desc-brightness").val()
    };

    var chipsChildren = addChips.children();

    if (chipsChildren.length > 0) {
      var actions = [];

      chipsChildren.each(function() {
        var child = $(this);
        actions.push({
          text: child.data("title"),
          url: child.data("url")
        });
      });

      data.actions = {
        urls: actions
      };
    }

    addPreview.html(Handlebars.templates.card(data));
  });

  // advanced and image toggle
  $("#add-adv").change(function () {
    $("#add-adv-hide").toggle(this.checked);
  });
  addImage.change(function () {
    $(".img-hide").toggle(this.checked);
  });

  // colour change selection enable/disable
  $(".select-colour").change(function () {
    var me = $(this);
    var brightness = $("#" + me.data("brightness"));
    var accent = $("#" + me.data("brightness") + "-accent").children();
    switch (me.val()) {
      case "brown":
      case "grey":
      case "blue-grey":
        brightness.prop("disabled", false);
        accent.each(function () {
          $(this).prop("disabled", true);
        });
        break;
      case "black":
      case "white":
      case "":
        brightness.prop("disabled", true);
        break;
      default:
        brightness.prop("disabled", false);
        accent.each(function() {
          $(this).prop("disabled", false);
        });
        break;
    }
    brightness.find("optgroup").each(function () {
      $(this).children().each(function() {
        var child = $(this);
        child.removeClass(child.data("prev"));
        child.addClass(me.val());
        child.data("prev", me.val());
      });
    });
    brightness.material_select();
  }).change();

  updateDynamicNameLists();

  // load existing click
  $("#add-load-btn").click(function () {
    // get the data they want
    var data = cards[$("#add-load").val()];

    // now hack it back into the form
    if (typeof data.title !== 'undefined') {
      $("#add-title-colour").val(undefinedToEmpty(data.title.colour)).change();
      $("#add-title-brightness").val(undefinedToEmpty(data.title.brightness)).change();
      addTitle.val(undefinedToEmpty(data.title.text)).change();
    }
    if (typeof data.image !== 'undefined') {
      $("#add-img-style").val(undefinedToEmpty(data.image.style)).change();
      $("#add-img").val(undefinedToEmpty(data.image.src)).change();
    }
    if (typeof data.size !== 'undefined') {
      $("#add-width").val(data.size.width === "auto" ? "" : data.size.width.replace("px", ""));
      $("#add-height").val(data.size.height === "auto" ? "" : data.size.height.replace("px", ""));
    }
    addColour.val(undefinedToEmpty(data.colour)).change();
    brightnessAccent.val(undefinedToEmpty(data.brightness)).change();
    $("#add-style").val(undefinedToEmpty(data.style)).change();
    if (typeof data.content !== 'undefined') {
      $("#add-desc").val(undefinedToEmpty(data.content.text)).change();
      $("#add-desc-colour").val(undefinedToEmpty(data.content.colour)).change();
      $("#add-desc-brightness").val(undefinedToEmpty(data.colour.brightness)).change();
    }
    if (typeof data.actions !== 'undefined') {
      data.actions.urls.forEach(function (obj) {
        $("#add-chips").append("<div class='chip' data-url='" +
          obj.url + "' data-title='" + obj.text +
          "'>" + "<i class='close material-icons'>close</i>" +
          obj.text + "</div>");
      });
    }

    // and finally make sure they know they're editing
    addForm.data("edit-id", data.id);
    addForm.trigger("change");
    $("#add-submit").html("Edit Card");
    addPreview.html(Handlebars.templates.card(data));
  });
});

function updateDynamicNameLists() {
  // load card list
  var addLoad = document.getElementById("add-load");
  var jqAddLoad = $(addLoad);
  var deleteSelect = document.getElementById("delete-name");
  var jqDeleteSelect = $(deleteSelect);

  $.getJSON("../misc/info.json", function (json) {
    info = json;
    addLoad.options.length = 0;
    addLoad.disabled = false;
    deleteSelect.options.length = 0;
    deleteSelect.disabled = false;
    json.forEach(function (obj) {
      cards[obj.id] = obj;
      addOptionToSelect(addLoad, obj.title ? obj.title.text : obj.id, obj.id);
      jqAddLoad.material_select();
      addOptionToSelect(deleteSelect, obj.title ? obj.title.text : obj.id, obj.id);
      jqDeleteSelect.material_select();
    });
    $("#delete-submit").removeClass("disabled");
    $("#add-load-btn").removeClass("disabled");
  });
}