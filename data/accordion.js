$(document).ready(function () {

  var activePanel = $("#accordion div.panel:first");

  var numPanels = $('.panel').length;
  var gifWidth = ($('.gif').width());
  var panelWidthCollapsed = 55;
  var borderWidth = 1.5;
  var contentPaddingHorizontal = 70;
  var windowwidth = (window.innerWidth - gifWidth);
  //if($('iframe').css('display') == 'none')
  //{
  //windowwidth = window.innerWidth;
  //}
  var panelWidthExpanded = windowwidth  - (numPanels - 1) * (panelWidthCollapsed);
  var contentWidth = panelWidthExpanded - panelWidthCollapsed - borderWidth - contentPaddingHorizontal;
  var panelHeight = window.innerHeight - panelWidthCollapsed;

  //typewrite



  $("#accordion").css('height', panelHeight);
  $('.panel-content').css('width', contentWidth);


  $("#accordion").delegate('.panel', 'click', function (e) {
    if (!$(this).is('.active')) {
      $(activePanel).animate({width: panelWidthCollapsed}, 300);
      $(this).animate({width: panelWidthExpanded}, 300);
      $('.panel').removeClass('active');
      $(this).addClass('active');
      activePanel = this;


      /* Allowing scrolling messes up the animation :-( */
//					$('.panel-content').css('overflow-y', '');
//					setTimeout(function(){
//						$('.panel-content').css('overflow-y', 'scroll');
//					}, 300);
    }
  });

  activePanel.click();

  function onResize() {
      var gifWidth = ($('.gif').width());
      var windowwidth = (window.innerWidth - gifWidth);
    /*  if($('iframe').css('display') == 'none')
      {
        windowwidth = window.innerWidth;
      }
    */
    panelWidthExpanded = windowwidth - (numPanels - 1) * (panelWidthCollapsed);
    contentWidth = panelWidthExpanded - panelWidthCollapsed - borderWidth - contentPaddingHorizontal;
    panelHeight = window.innerHeight - panelWidthCollapsed;
    $(activePanel).animate({width: panelWidthExpanded}, 300);
    $('.panel-content').css('width', contentWidth);
    $("#accordion").css('height', panelHeight);
  }

  var resizeTimeout = null;
  window.onresize = function() {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }
    resizeTimeout = setTimeout(onResize, 300);
  }

function typeWriter() {
  var i = 0;
  var txt = 'about';
  var speed = 50;
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

$('#change').on('click', function() {
    $('.fliess-text').each(function() {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).addClass('hidden');
        } else {
            $(this).removeClass('hidden');
            $(this).addClass('active');
        }
    });
});

});
