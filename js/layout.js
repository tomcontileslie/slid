var $grid

$(".shuffle.button").on('click', function() {
  $grid.isotope({ sortBy: 'random' });
});
