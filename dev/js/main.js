
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

  //JS slow scroll to target
  var $linkToAnchor = $('nav a[href^=#]');

  $linkToAnchor.click( function(event) {

    var target = $($(this).attr("href"));
    console.log("target: ", target);

    if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: target.offset().top
      }, 800);
    }
  });

  // handlers for forms

  $("form").submit(function(event){ //prevents all forms from reloading/refreshing page
    event.preventDefault();
  });

  $(".feed-form").submit(function(event){
    var target = $(event.target);
    target.addClass('submitted-icon');

  });

  $(".contactform").submit(function(event) {
    var target = $(event.target);
    target.addClass('submitted');
  });

  $(".searchlink").click(function(event) {
    event.preventDefault(); // prevents from reloading page
    $(".advsearch").toggle();
  });

});


