// $(function () {
//     $('#lg_menu_toggler').on('click', function () {
//        $('#nav_logo, #nav #main_menu > ul').toggleClass('active')
//     })
 
//     $('.banner_slider').slick({
//        prevArrow: $('#banner_left_arrow'),
//        nextArrow: $('#banner_right_arrow'),
//     });
//  })

$(function(){
   $('#lg_menu_toggler').on('click', function () {
    $('#nav_logo, #nav #main_menu > ul').toggleClass('active')
    })
       
   $('.banner_item_wrapper').slick({
       prevArrow: $('#prev_arrow'),
       nextArrow: $('#next_arrow')
   });
})