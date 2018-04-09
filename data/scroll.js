$(document).ready(function(){
    function scroll() {
        $('.scroll').css('right', "-100vw");
      $('.scroll').animate({
         right: $(document).width()
      }, 50000, scroll);
    }
    scroll();
});
