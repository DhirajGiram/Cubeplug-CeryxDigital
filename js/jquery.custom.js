(function ($) {
  $.fn.cube = function (options) {
    let value = parseInt($(this).val());
    return value * value * value;
  };
})(jQuery);
