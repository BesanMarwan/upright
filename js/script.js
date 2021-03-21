$(function () {
    
    new WOW().init();
    
//    menu fixed a top in the website
    
    $(document).scroll(function () {
    var $nav = $(".header-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        document.getElementById('bars').style.color ='white';  

  });
    
//    loader script 
    setTimeout(function(){
        
        $('.loader-bg').fadeToggle();
    },2000);
    
//     scroll up to the top page
    
     var scrollButton = $('#scroll-top');
  $(window).scroll(function() {
    $(this).scrollTop() >= 400 ? scrollButton.show() : scrollButton.hide();
  });
  scrollButton.click(function() {
    $('html,body').animate({ 
      scrollTop : 0 
    }, 600);
  });
    
    
//    nav menu mobile
    $('.closeIcon').click(function(){
        $('.navmo-menu').fadeOut();
    });
     $('.navbar-toggler').click(function(){
        $('.navmo-menu').fadeIn();
    });
})
