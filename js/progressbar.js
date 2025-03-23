function animateProgressBars() {
    $(".progress-bar").each(function () {
        let elementPos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        let widthValue = $(this).attr("aria-valuenow") + "%";

        if (elementPos < topOfWindow + $(window).height() - 50) {
            $(this).css({ width: widthValue, transition: "width 1.5s ease-in-out" });
        }
    });
}

function animateCounters() {
    $(".counter").each(function () {
        let elementPos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();

        if (elementPos < topOfWindow + $(window).height() - 50 && !$(this).hasClass("counted")) {
            $(this).counterUp({
                delay: 10, 
                time: 1000 
            });
            $(this).addClass("counted"); 
        }
    });
}



// Event listener voor scroll
$(window).on("scroll", function () {
    animateProgressBars();
    animateCounters();
});

// Direct uitvoeren bij paginalaad
$(document).ready(function () {
    
    animateCounters();
    animateProgressBars();
});
