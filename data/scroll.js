$(document).ready(function(){
    function scroll() {
        $('.scroll').css('right', "-200px");
      $('.scroll').animate({
         right: $(document).width()
      }, 8000, scroll);
    }
    scroll();
});
