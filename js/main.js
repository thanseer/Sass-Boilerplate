// Mobile Menu
$('.mob-menu .mwrap').append($('.nav-display').html())
$('.nav ul li:has(ul)').addClass('submenu');
$('.mob-menu ul li:has(ul)').addClass('submenu');

$('.mob-menu li:has(ul)').append("<i></i>");
$('.mob-menu i').click(function() {
    $(this).parent('li').toggleClass('open');
    $(this).parent('li').children('ul').slideToggle();
})

$('.mob-btn').click(function() {
    if (!$('html').hasClass('show-menu')) {
        $('html').addClass('show-menu');
    } else {
        $('html').removeClass('show-menu');
    }
});

$('.overlay').click(function() {
    if ($('html').hasClass('show-menu')) {
        $('html').removeClass('show-menu');
    }
});


// Slim Header
   $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
      $(".header").addClass("slim-header");   
       } else {
      $(".header").removeClass("slim-header");
          }
   });

