$(document).ready(function () {

  var activePanel = $("#accordion div.panel:first");

  var numPanels = $('.panel').length;

  var panelWidthCollapsed = 44;
  var borderWidth = 1.5;
  var contentPaddingHorizontal = 70; // left: 55px, right: 15px
  var panelWidthExpanded = (window.innerWidth/3*2) - (numPanels - 1) * (panelWidthCollapsed + borderWidth);
  var contentWidth = panelWidthExpanded - panelWidthCollapsed - borderWidth - contentPaddingHorizontal;
  var panelHeight = window.innerHeight - panelWidthCollapsed;

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
    panelWidthExpanded = (window.innerWidth/3*2) - (numPanels - 1) * (panelWidthCollapsed + borderWidth);
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
});
