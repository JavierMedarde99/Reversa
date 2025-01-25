$(document).ready(function(){

    $(".indexs").next("ul").hide();

    $(".indexs").on("click",function () {
        var $nextUl = $(this).next("ul");

        if ($nextUl.is(":visible")) {
            $nextUl.slideUp("slow");
        } else {
            $(".indexs").next("ul").slideUp("slow");
            $nextUl.slideToggle("slow");
        }
    })

})