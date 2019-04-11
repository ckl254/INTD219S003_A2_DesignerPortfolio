// $(window).bind('scroll', function() {
//     var currentTop = $(window).scrollTop();
//     var elems = $('.scrollspy');
//     elems.each(function(index){
//       var elemTop 	= $(this).offset().top;
//       var elemBottom 	= elemTop + $(this).height();
//       if(currentTop >= elemTop - 1 && currentTop <= elemBottom){
//         var id 		= $(this).attr('id');
//         var navElem = $('a[href="#' + id+ '"]');
//     navElem.parent().addClass('active').siblings().removeClass( 'active' );
//       }
//     })
// });





function openNav() {
    document.getElementById("myNav").style.height = "100%";

}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";

}

$('.parallax-window').parallax({
    naturalWidth: 1250,
    naturalHeight: 703
  });

// jQuery(window).trigger('resize').trigger('scroll');



$(function(){
        if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
          $('#ios-notice').removeClass('hidden');
          $('.parallax-container').height( $(window).height() * 0.5 | 0 );
        } else {
          $(window).resize(function(){
            var parallaxHeight = Math.max($(window).height() * 0.7, 200) | 0;
            $('.parallax-container').height(parallaxHeight);
          }).trigger('resize');
        }
      });