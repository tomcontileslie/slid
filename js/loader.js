/*jslint browser: true*/
/*global $, Handlebars, console*/

$(document).ready(function () {
  var grid = $(".grid");
  var qsRegex;

  // load isotope
  $.getJSON("misc/info.json", function (json) {
    grid.empty();

    grid.isotope({
      itemSelector: ".card",
      layoutMode: "packery",
      filter: function() {
        return qsRegex ? $(this).text().match( qsRegex ) : true;
      },
      getSortData: {
        name: "[data-name]"
      },
      sortBy: "name"
    });

    // layout Isotope after each image loads
    grid.imagesLoaded().progress(function() {
      grid.isotope("layout");
    });

    json.forEach(function (obj) {
      var data = $(Handlebars.templates.card(obj));
      grid.append(data).isotope("appended", data).isotope("updateSortData").isotope();
    });
  });

  // use value of search field to filter
  var search = $('#search').keyup(debounce(function() {
    qsRegex = new RegExp(search.val(), "gi");
    grid.isotope();
  }, 200 ));

  // debounce so filtering doesn't happen every millisecond
  function debounce(fn, threshold) {
    var timeout;
    return function debounced() {
      if (timeout) {
        clearTimeout(timeout);
      }
      function delayed() {
        fn();
        timeout = null;
      }
      timeout = setTimeout(delayed, threshold || 100);
    }
  }
});