/*jslint browser: true*/
/*global $, Handlebars, console*/

$(document).ready(function () {
  var grid = $(".grid");

  // load isotope
  $.getJSON("misc/info.json", function (json) {
    grid.empty();

    $.each(json, function (index, obj) {
      grid.append(Handlebars.templates.card(obj))
    });

    grid.isotope({
      itemSelector: "card",
      stagger: 30
    });
  });

  // setup search bar
});