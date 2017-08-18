/*jslint browser: true*/
/*global $,console*/

function addCardSubmit() {
  var addSubmit = $("#add-submit");
  var addTitle = $("#add-title");
  var addImage = $("#add-image");
  var addColour = $("#add-colour");
  var brightnessAccent = $("#add-brightness");
  var addChips = $("#add-chips");
  var data = {};
  var successful = true;

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
      Materialize.toast("Updated info database downloaded successfully.", 4000)

      // reset the form
      document.getElementById("add-form").reset()
    });
  }

  // re-enable the submit button and clear the form
  addSubmit.prop("disabled", false);

  if (!successful) {
    document.getElementById("add-form").reset();
  }

  return false;
}
