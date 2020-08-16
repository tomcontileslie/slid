/*jslint browser: true*/
/*global $, Handlebars, console*/

$(document).ready(function () {
  var grid = $(".grid");
  var qsRegex;

  // prepare dropdowns
  $('.dropdown-trigger').dropdown({ coverTrigger : false });

  // prepare isotope filtering with dict and custom filtering function
  var filters = {};
  function concatValues( obj ) {
    var value = '';
    for ( var prop in obj ) {
      value += obj[ prop ];
    }
    return value;
  }

  // isotope: filter cards, intersect filters with different groups
  $(".slid-filter").on('click', function() {

    // retrieve what group we are filtering, and the filter value
    var filterValue = $(this).attr('filter');
    var filterGroup = $(this).attr('slid-group');

    // update filters dictionary, concatenate values for each group
    filters[filterGroup] = filterValue;
    var isotopeFilters = concatValues(filters);
    grid.isotope({filter : isotopeFilters});

    // uncheck other filters in the group and check the new one
    $(".active", ".slid-" + filterGroup + "-dropdown").removeClass('active');
    $(this).parent().addClass('active');
  });


  // load isotope
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
