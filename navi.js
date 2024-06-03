const hd = {
    gnb : [
        {
        Text : "경주 소개",
        href : "gyeongju.html",
        cls : ["gnb_li px-5 position-relative", "gnb_ul position-absolute ps-0"],
        gnb_ul_li : [
            {
                Text : "역사 및 소개",
                href : "history.html",
            },
            {
                Text : "지역특산품",
                href : "local_products.html"
            }
        ]
    },
    {
        Text : "여행 정보",
        href : "travel_info.html",
        cls : ["gnb_li px-5 position-relative", "gnb_ul position-absolute ps-0"],
        gnb_ul_li : [
            {
                Text : "관광지",
                href : "attractions.html"
            },
            {
                Text : "음식 및 카페",
                href : "food_cafes.html"
            },
            {
                Text : "축제",
                href : "festivals.html"
            },
            {
                Text : "추천코스",
                href : "recommended_courses.html"
            },
            {
                Text : "여행 후기",
                href : "travel_reviews.html.html"
            }
        ]
    },
    {
        Text : "예약 및 문의",
        href : "reservation.html",
        cls : ["gnb_li px-5 position-relative", "gnb_ul position-absolute ps-0"],
        gnb_ul_li : [
            {
                Text : "숙소 예약",
                href : "accommodation_booking.html"
            },
            {
                Text : "패키지 여행 예약",
                href : "package_tour_booking.html"
            },
            {
                Text : "문의사항",
                href : "inquiries.html"
            },
            {
                Text : "자주 묻는 문의",
                href : "faq.html"
            }
        ]
    },
    {
        Text : "이벤트",
        href : "event.html",
        cls : ["gnb_li px-5 position-relative", "gnb_ul position-absolute ps-0"],
        gnb_ul_li : [
            {
                Text : "진행중인 이벤트",
                href : "event.html"
            }
        ]
    }
    ]
    // iconMenu : [
    //     {
    //         Text : "검색",
    //         href : "search.html",
    //         img : "/마리코 개인/img/hdSearch.svg",
    //         cls : ["ms-4", "visually-hidden"]
    //     },
    //     {
    //         Text : "로그인",
    //         href : "login.html",
    //         img : "/마리코 개인/img/hdLogin.svg",
    //         cls : ["ms-4", "visually-hidden"]
    //     }
    // ]
}

window.onload = function(){
    let navitag = "";
    for(x in hd.gnb){
        navitag += `<li class="${hd.gnb[x].cls[0]}">
            <a href='${hd.gnb[x].href}'>
                ${hd.gnb[x].Text}
            </a>`;
        navitag += `<ul class="${hd.gnb[x].cls[1]}">`;
        for(j in hd.gnb[x].gnb_ul_li){
        navitag +=`<li>
            <a href='${hd.gnb[x].gnb_ul_li[j].href}'>
                ${hd.gnb[x].gnb_ul_li[j].Text}
            </a>
            </li>`  
        }
        navitag += `</ul>`;
        navitag += `</li>`;     
    }
    document.querySelector("#gnb").innerHTML = navitag;
}
