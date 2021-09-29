import 'jquery';
import '../../../node_modules/air-datepicker/dist/css/datepicker.min.css';
import '../../../node_modules/air-datepicker/dist/js/datepicker.min.js';
import './roomSelection.scss'

$(function () {
  $('.dropdown-date__range-from').datepicker({
    minDate: new Date(),
    clearButton: true,
    prevHtml: `<div class="arrow_prew"></div>`,
    nextHtml: `<div class="arrow_next"></div>`,
    classes: "dropdown-date",
    range: true,
    multipleDatesSeparator: " - ",
  });
});

$('.dropdown-date__range-from').datepicker({
  navTitles: {
    days: `<div class="datepicker--nav-title">MM yyyy</div>`,
  }
})



$('.dropdown-date__range-from').datepicker({
  onSelect: function (fd, d, picker) {
    $(".dropdown-date__range-from").val(fd.split("-")[0]);
    $(".dropdown-date__range-to").val(fd.split("-")[1]);
  }
});

$(function () {
  addApplyButton();

  let $applyButton = $('[data-action="apply"]');
  $applyButton.on('click', hideDatePicker);

  let $returnDatePicker = $('.dropdown-date__range-from');
  $returnDatePicker.on('click', showDatePicker);

});

function addApplyButton() {
  let $isPickerButtons = $('.datepickers-container').find('.datepicker--buttons');
  if ($isPickerButtons) {
    $isPickerButtons.append(
      '<span class="datepicker--button datepicker--button_apply" data-action="apply">Применить</span>'
    );
  }
}

function hideDatePicker() {
  let $isDatePicker = $('.dropdown-date');
  $isDatePicker.removeClass('active');
}
function showDatePicker() {
  let $isDatePicker = $('.dropdown-date');
  $isDatePicker.addClass('active');
}


$(function () {
  let $lalala = $('.dropdown-date__range-to');
  $lalala.on('click', lalalaDatePicker);

});

function lalalaDatePicker() {
  let $isDatePicker = $('.dropdown-date__range-from');
  $isDatePicker.focus();
}




