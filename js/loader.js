/*jslint browser: true*/
/*global $, Handlebars, console*/

$(document).ready(function () {
  var grid = $(".grid");

  // load isotope
  $.getJSON("misc/info.json", function (json) {
    grid.empty();

    grid.isotope({
      itemSelector: ".card",
      layoutMode: "packery"
    });

    json.forEach(function (obj) {
      var data = $(Handlebars.templates.card(obj));
      grid.append(data).isotope("appended", data);
    });
  });

  // setup search bar
});