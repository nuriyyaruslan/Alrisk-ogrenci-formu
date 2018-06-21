var navTopPosition = 0; 
$(document).ready(function () {
    // console.log("..");
    // $(".collapsebtn").click(function () {
    //     $('.navhide').toggle('display');
    // });

    $(".custom-collapse").click(function (e) {
        e.preventDefault();
        var target = $(this).attr("data-target");
        if($(target).is(':hidden'))
            $(target).slideDown(300)
        else
            $(target).slideUp(300);
    });
});
/*fixed menu */

 /*clickleyince target olsun */
  $(".menu-item").click(function (e) {
        e.preventDefault();
        var id = $(this).attr("target");
        var top;
        if ($(document).scrollTop() >= navTopPosition)
            top = $(id).offset().top - 20;
        else
            top = $(id).offset().top - 170;

        $('html, body').animate({
            scrollTop: top
        }, 1000);
});

