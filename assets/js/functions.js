$( document ).ready(function() {

  partnerSelector();
});

function partnerSelector() {

  $('.partner-logo, .partner-button').click(function() {
    var $this = $(this),
        position = $this.parent().children().index($this);

        $('.partner-unit').removeClass('partner-active').eq(position).addClass('partner-active');
        $('.partner-logo').removeClass('partner-active').eq(position).addClass('partner-active');
        $('.partner-button').removeClass('partner-active').eq(position).addClass('partner-active');
  });

  $('.partner-control-prev, .partner-control-next').click(function() {
    var $this = $(this),
        currentPartner = $('.partner-belt').find('.partner-active'),
        position = $('.partner-belt').children().index(currentPartner),
        partnerNum = $('.partner-unit').length;

    if($this.hasClass('partner-control-next')) {
      if(position < partnerNum -1) {
        $('.partner-active').removeClass('partner-active').next().addClass('partner-active');
      } else {
        $('.partner-unit').removeClass('partner-active').first().addClass('partner-active');
        $('.partner-logo').removeClass('partner-active').first().addClass('partner-active');
        $('.partner-button').removeClass('partner-active').first().addClass('partner-active');

      }
    } else {
      if(position === 0) {
        $('.partner-unit').removeClass('partner-active').last().addClass('partner-active');
        $('.partner-logo').removeClass('partner-active').last().addClass('partner-active');
        $('.partner-button').removeClass('partner-active').fast().addClass('partner-active');

      } else {
        $('.partner-active').removeClass('partner-active').prev().addClass('partner-active');
      }
    }
  });


}
