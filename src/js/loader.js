/*jslint browser: true*/
/*global $, Handlebars, console*/

$(document).ready(function () {
  var grid = $(".grid");
  var qsRegex;

  // load isotope
  $.getJSON("misc/info.json", function (json) {
    grid.empty();

    var $grid = grid.isotope({
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

    json.forEach(function (obj) {
      var data = $(Handlebars.templates.card(obj));
      grid.append(data).isotope("appended", data).isotope("updateSortData").isotope();
      grid.imagesLoaded().progress(function() {
        grid.isotope("updateSortData").isotope();
      });
    });
  });

  // Pressing shuffle button randomises sort order
  $(".shuffle-button").on('click', function() {
    grid.isotope('shuffle');
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
