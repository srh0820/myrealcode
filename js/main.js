document.addEventListener('DOMContentLoaded', function() {
    const mainsliderobj = document.getElementById("mainslider");
    const fillElement = document.querySelector('.swiper-progress-bar .fill');
    let isPlaying = true; // 재생 상태 변수

    function resetProgressBar() {
        fillElement.style.transition = 'none';
        fillElement.style.width = '0%';
        setTimeout(() => {
            fillElement.style.transition = 'width 5s linear';
            fillElement.style.width = '100%';
        }, 50); // 약간의 지연 후 transition과 width 설정
    }

    const bannerText = new Swiper('.mainTextbox', {
        spaceBetween: 0,
        loop: true,
        loopAdditionalSlides: 2,
        pagination: {
            el: ".mainPagebox .numberui",
            type: 'fraction',
            formatFractionCurrent: function(number) {
                return ('0' + number).slice(-2); // 두 자리 숫자로 포맷
            },
            formatFractionTotal: function(number) {
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
            init: function() {
                resetProgressBar();
            },
            slideChange: function() {
                if (isPlaying) {
                    resetProgressBar();
                }
                const activeSlide = this.slides[this.activeIndex];
                const bgcolor = activeSlide.dataset.bgcolor;
                mainsliderobj.style.backgroundColor = bgcolor;
            },
            autoplay: {
                stop: function() {
                    fillElement.style.transition = 'none';
                    fillElement.style.width = `${(this.autoplay.paused ? this.autoplay.timeLeft : 0) / 50}%`;
                },
                start: function() {
                    resetProgressBar();
                },
            },
        },
    });

    const bannerImg = new Swiper('.mainImgbox', {
        spaceBetween: 30,
        loop: true,
        loopAdditionalSlides: 2,
        pagination: {
            el: ".mainPagebox .swiper-progress-bar .fill"
        },
        slidesPerView: 1,
    });

    bannerText.controller.control = bannerImg;
    bannerImg.controller.control = bannerText;

    // 재생/멈춤 버튼 기능
    const playPauseButton = document.querySelector(".button_autoControl");

    playPauseButton.addEventListener('click', function() {
        if (isPlaying) {
            bannerText.autoplay.stop();
            bannerImg.autoplay.stop();
            playPauseButton.classList.add('play'); // 재생 클래스 추가
            fillElement.style.transition = 'none';
            fillElement.style.width = '0%';
        } else {
            bannerText.params.autoplay = {
                delay: 5000,
                disableOnInteraction: false
            };
            bannerText.autoplay.start();
            resetProgressBar();
            playPauseButton.classList.remove('play'); // 재생 클래스 제거      
        }
        isPlaying = !isPlaying;
    });
});
