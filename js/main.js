document.addEventListener('DOMContentLoaded', function() {
    const mainsliderobj = document.getElementById("mainslider");

    const bannerText = new Swiper('.mainTextbox', {
        spaceBetween: 0,
        loop: true,
        loopAdditionalSlides: 2,
        pagination: {    
            el: ".mainPagebox .numberui",
            type: 'fraction',
            formatFractionCurrent: function (number) {
                return ('0' + number).slice(-2); // 두 자리 숫자로 포맷
            },
            formatFractionTotal: function (number) {
                return ('0' + number).slice(-2); // 두 자리 숫자로 포맷
            },
        },
        navigation: {
            nextEl: ".mainPagebox .button-next",
            prevEl: ".mainPagebox .button-prev"
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        on: {
            slideChange: function () {
                const activeSlide = this.slides[this.activeIndex];               
                const bgcolor = activeSlide.dataset.bgcolor;
                mainsliderobj.style.backgroundColor = bgcolor;
            }
        },
    });

    const bannerImg = new Swiper('.mainImgbox', {
        spaceBetween: 30,
        loop: true,
        loopAdditionalSlides: 2,
        pagination: {    
            el: ".mainPagebox .swiper-progress-bar .fill"
        },
        slidesPerView: 1
    });

    bannerText.controller.control = bannerImg;
    bannerImg.controller.control = bannerText;

    // 재생/멈춤 버튼 기능 추가
    const playPauseButton = document.querySelector(".button_autoControl");
    let isPlaying = true;

    playPauseButton.addEventListener('click', function() {
        if (isPlaying) {
            bannerText.autoplay.stop();
            bannerImg.autoplay.stop();
            playPauseButton.classList.add('play'); // 재생 클래스 추가
        } else {
            bannerText.autoplay.start();
            bannerImg.autoplay.start();
            playPauseButton.classList.remove('play'); // 재생 클래스 제거
        }
        isPlaying = !isPlaying;
    });
   
 
});
