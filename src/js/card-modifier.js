/*jslint browser: true*/
/*global $,console*/

function addCardSubmit() {
  var addForm = $("#add-form");
  var addSubmit = $("#add-submit");
  var addTitle = $("#add-title");
  var addImage = $("#add-image");
  var addColour = $("#add-colour");
  var brightnessAccent = $("#add-brightness");
  var addChips = $("#add-chips");
  var data = {};
  var successful = true;
  var editing = addForm.data("edit-id") !== undefined;

  // disable the submit button and alert the user
  addSubmit.prop("disabled", true)

  // load ALL the data
  if (addTitle.val() !== "") {
    data.title = {
      colour: $("#add-title-colour").val(),
      brightness: $("#add-title-brightness").val(),
      text: addTitle.val()
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

  // and finally add the id
  data.id = editing ? addForm.data("edit-id") : uuidv4();

  if (editing) {
    successful = editCardSubmit(data);
  } else {
    // skip vanilla modification if using php
    if (USING_PHP) {
      $.post("../admin/card/add.php", {data: JSON.stringify(data)}).done(function (data) {
        if (data === "SUCCESS") {
          Materialize.toast("Updated info database successfully.", 4000);
        } else {
          console.log(data);
          successful = false;
          Materialize.toast("Failed to update the info database!", 4000);
        }
      }).fail(function () {
        successful = false;
        Materialize.toast("Failed to update the info database!", 4000);
      });
    } else {
      // add it to the existing data
      $.getJSON("../misc/info.json", function (json) {
        json.push(data);
        downloadFile("text/json", "info.json", JSON.stringify(json));

        // alert the user
        Materialize.toast("Updated info database downloaded successfully.", 4000);
      });
    }
  }

  // re-enable the submit button and clear the form
  addSubmit.prop("disabled", false);

  if (successful) {
    document.getElementById("add-form").reset();
    $("#add-preview").html(Handlebars.templates.card({}));

    if (editing) {
      // make sure they know they're no longer editing
      addForm.removeData("edit-id");
      addForm.trigger("change");
      $("#add-submit").html("Add Card");
      addPreview.html(Handlebars.templates.card(data));
    }
  }

  return false;
}

function editCardSubmit(data) {
  var successful = true;

  // skip vanilla modification if using php
  if (USING_PHP) {
    $.post("../admin/card/edit.php", {data: JSON.stringify(data)}).done(function (data) {
      if (data === "SUCCESS") {
        Materialize.toast("Edited info database successfully.", 4000);
      } else {
        console.log(data);
        successful = false;
        Materialize.toast("Failed to edit the info database!", 4000);
      }
    }).fail(function () {
      successful = false;
      Materialize.toast("Failed to edit the info database!", 4000);
    });
  } else {
    // edit the existing data
    $.getJSON("../misc/info.json", function (json) {
      for (var i = 0; i < json.length; i++) {
        if (json[i].id = data.id) {
          json[i] = data;
          break;
        }
      }

      downloadFile("text/json", "info.json", JSON.stringify(json));

      // alert the user
      Materialize.toast("Edited info database downloaded successfully.", 4000);
    });
  }

  return successful;
}

function deleteCardSubmit() {
  var id = $("#delete-name").val();

  // skip vanilla modification if using php
  if (USING_PHP) {
    $.post("../admin/card/delete.php", {id: id}).done(function (data) {
      if (data === "SUCCESS") {
        Materialize.toast("Removed card from info database successfully.", 4000);
      } else {
        console.log(data);
        Materialize.toast("Failed to remove card from the info database!", 4000);
      }
    }).fail(function () {
      Materialize.toast("Failed to remove card from the info database!", 4000);
    }).always(function() {
      updateDynamicNameLists();
    });
  } else {
    // edit the existing data
    $.getJSON("../misc/info.json", function (json) {
      findAndRemove(json, "id", id);

      downloadFile("text/json", "info.json", JSON.stringify(json));

      // alert the user
      Materialize.toast("Modified info database downloaded successfully.", 4000);

      updateDynamicNameLists();
    });
  }

  return false;
}