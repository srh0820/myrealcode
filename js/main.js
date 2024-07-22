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
        }
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

    // 자동 재생 제어 버튼
    const autoControlButton = document.querySelector('.button_autoControl');
    let isPlaying = true;
    let slideTimeout;
    const progressBar = document.querySelector('.swiper-progress-bar .fill');
    let progressBarAnimationStartTime = 0;

    // 프로그레스 바 업데이트
    const updateProgressBar = () => {
        if (progressBar) {
            const remainingTime = Math.max(5000 - (Date.now() - progressBarAnimationStartTime), 0);
            progressBar.style.transition = `width ${remainingTime}ms linear`;
            progressBar.style.width = '100%';
        }
    };

    // 프로그레스 바 초기화
    const resetProgressBar = () => {
        if (progressBar) {
            progressBar.style.transition = 'none';
            progressBar.style.width = '0%';
            progressBarAnimationStartTime = Date.now();
        }
    };

    // 슬라이드 변경 처리
    const handleSlideChange = () => {
        if (isPlaying) {
            resetProgressBar();
            requestAnimationFrame(() => {
                updateProgressBar();
                slideTimeout = setTimeout(() => {
                    if (isPlaying) {
                        bannerText.slideNext();
                        bannerImg.slideNext();
                    }
                }, 5000);
            });
        }
    };

    // 슬라이드 및 프로그레스 바 멈춤
    const stopSlideAndProgressBar = () => {
        bannerText.autoplay.stop();
        bannerImg.autoplay.stop();
        autoControlButton.classList.add('play');
        autoControlButton.classList.remove('pause');
        clearTimeout(slideTimeout);
        resetProgressBar();
    };

    // 슬라이드 및 프로그레스 바 시작
    const startSlideAndProgressBar = () => {
        bannerText.autoplay.start();
        bannerImg.autoplay.start();
        autoControlButton.classList.remove('play');
        autoControlButton.classList.add('pause');
        handleSlideChange();
    };

    // 자동 재생 제어 버튼 클릭 이벤트
    if (autoControlButton) {
        autoControlButton.addEventListener('click', function() {
            if (isPlaying) {
                stopSlideAndProgressBar();
            } else {
                startSlideAndProgressBar();
            }
            isPlaying = !isPlaying;
        });
    } else {
        console.error('Auto control button not found.');
    }

    // 초기 프로그레스 바 설정
    if (progressBar) {
        resetProgressBar();
    } else {
        console.error('Progress bar fill element not found.');
    }

    // 슬라이드 초기화 시 프로그레스 바 업데이트
    bannerText.on('init', () => {
        if (isPlaying) {
            updateProgressBar();
        }
    });

    // 슬라이드 변경 시작 시 처리
    bannerText.on('slideChangeTransitionStart', () => {
        if (isPlaying) {
            handleSlideChange();
        }
    });
    
    // 페이지 로드 시 프로그레스 바 업데이트
    updateProgressBar();
});