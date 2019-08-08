var animateHTML = function() {
    var elems;
    var elems2;

    var windowHeight;

    function init() {
        addEventHandlers();
        elems = document.querySelectorAll('.hidden');
        elems2 = document.querySelectorAll('.hidden2');
        windowHeight = window.innerHeight;
        checkPosition();
        addEventHandlers();
        checkPosition();
    }

    function addEventHandlers() {
        window.addEventListener('wheel', checkPosition);
        window.addEventListener('scroll', checkPosition);
        window.addEventListener('scroll', init);
        window.addEventListener('resize', init);
    }

    function checkPosition() {
        for (var i = 0; i < elems.length; i++) {
            var positionFromTop = elems[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {

                elems[i].className = elems[i].className.replace(
                    'hidden',
                    'fade-in-element'
                );



            }
        }

        for (var i = 0; i < elems2.length; i++) {
            var positionFromTop = elems2[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {


                elems2[i].className = elems2[i].className.replace(
                    'hidden2',
                    'fade-in-element2',

                );


            }
        }
    }
    return {
        init: init
    };
};
animateHTML().init();


$(window).on('scroll', function() {
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();

    var scrollPercent = (s / (d - c)) * 100;


    if (scrollPercent < 20) {
        $(".flashWhite").addClass('animated');
        setTimeout(function() {
            $(".flashWhite").removeClass('animated');
        }, 150);
        document.body.style.backgroundImage = "url('./img/brick1.png')"

    }
    if (scrollPercent > 20) {
        $(".flashWhite").addClass('animated');
        setTimeout(function() {
            $(".flashWhite").removeClass('animated');
        }, 150);
        document.body.style.backgroundImage = "url('./img/magma.png')"

    }

    if (scrollPercent > 50) {
        $(".flashWhite").addClass('animated');
        setTimeout(function() {
            $(".flashWhite").removeClass('animated');
        }, 150);
        document.body.style.backgroundImage = "url('./img/grass.jpg')"

    }

    if (scrollPercent > 75) {
        $(".flashWhite").addClass('animated');
        setTimeout(function() {
            $(".flashWhite").removeClass('animated');
        }, 150);
        document.body.style.backgroundImage = "url('./img/brick3.jpg')"

    }

    if (scrollPercent > 99) {
        $(".flashWhite").addClass('animated');
        setTimeout(function() {
            $(".flashWhite").removeClass('animated');
        }, 150);
        document.body.style.backgroundImage = "url('./img/brick2.png')"

    }


    console.clear();
    console.log(scrollPercent);
})