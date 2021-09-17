import 'jquery';
import '../../../node_modules/air-datepicker/dist/css/datepicker.min.css';
import '../../../node_modules/air-datepicker/dist/js/datepicker.min.js';
import './roomSelection.scss'

$(function () {
  $('#start').datepicker({
    minDate: new Date(),
    clearButton: true,
    autoClose: true,
    prevHtml: `<div class="arrow_prew"></div>`,
    nextHtml: `<div class="arrow_next"></div>`,
    classes: "dropdown-date",

  });
});

$('#start').datepicker({
  navTitles: {
    days: `<div class="navTitles">MM yyyy</div>`,
  }
})

$('#end').datepicker({
  navTitles: {
    days: `<div class="navTitles">MM yyyy</div>`,
  }
})

$(function () {
  $('#end').datepicker({
    minDate: new Date(),
    clearButton: true,
    autoClose: true,
    prevHtml: `<div class="arrow_prew"></div>`,
    nextHtml: `<div class="arrow_next"></div>`,
    classes: "dropdown-date",
  });
});

var $start = $('#start'),
  $end = $('#end');
$start.datepicker({
  onSelect: function (fd, date) {
    $end.data('datepicker')
      .update('minDate', date);
    $end.focus();
  }
})
$end.datepicker({
  onSelect: function (fd, date) {
    $start.data('datepicker')
      .update('maxDate', date)
  }
})



