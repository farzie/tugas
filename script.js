$(document).ready(function() {
    $(".button").click(function() {
        let value = $(this).attr("data-filter");
        if (value === "all") {
            $(".filter").show(500);
        } else {
            $(".filter").not("." + value).hide(500);
            $(".filter." + value).show(500);
        }
    });

    $("ul .button").click(function() {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });

    $(".box").hover(
        function() {
            $(this).children(".image-container").css("filter", "none");
        },
        function() {
            $(this).children(".image-container").css("filter", "blur(1px)");
        }
    );

    $(".btn").on("click",function(){
        $(".input").toggleClass("inclicked");
        $(".btn").toggleClass("close");
        $(".input").val("");
        $(".box").show(500);
        $("ul .button").removeClass("active");
        $("ul .alles").addClass("active");
    })

    $(".input").keyup(function() {
        let searchTerm = $(this).val().toLowerCase();
        $(".box").each(function() {
            let movieTitle = $(this).find("p").text().toLowerCase();
            if (movieTitle.includes(searchTerm)) {
                $(this).show(500);
            } else {
                $(this).hide(500);
            }
        });
    });
});