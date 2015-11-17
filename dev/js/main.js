
$(document).ready(function() {
  // navigation toggles
  // based on http://codepen.io/bradfrost/pen/sHvaz
  $('body').addClass('js');
  var $menu = $('#menu');
  var $menulink = $('.menu-link');
  var $navlink = $('nav a');

  $menulink.click(function() {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    return false;
  });
  $navlink.click(function(event) {
    var $lastclick = $('nav a.active');
    var $target = $( event.target );
    $lastclick.toggleClass('active');
    $target.toggleClass('active');
    return false;
  });

  // based on http://codepen.io/markhillard/pen/iqnlh/
  // bind click event to only internal page anchors inside nav
  $("nav a[href*=#]").bind("click", function(e) {
      // prevent default action and bubbling
      e.preventDefault();
      e.stopPropagation();
      // set target to anchor's "href" attribute
      var target = $(this).attr("href");
      // scroll to each target
      $(target).velocity("scroll", {
          duration: 500,
          offset: -40,
          easing: "ease-in-out"
      });
  });

  $("captionjs").bind("hover", function(e) {
      // prevent default action and bubbling
      e.preventDefault();
      e.stopPropagation();
      // set target to anchor's "href" attribute
      var target = $(this).attr("captionjs");
      // scroll to each target
      $(target).velocity({ width: 50 }, "easeInSine");
  });



});
