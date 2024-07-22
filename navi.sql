-- 데이터베이스를 생성합니다. (이미 존재하면 생략 가능합니다)
CREATE DATABASE IF NOT EXISTS website;

-- 데이터베이스를 사용합니다.
USE website;

-- 최상위 메뉴 항목을 저장할 테이블을 생성합니다.
CREATE TABLE IF NOT EXISTS gnb (
    id INT AUTO_INCREMENT PRIMARY KEY,
    text VARCHAR(255) NOT NULL,
    href VARCHAR(255) NOT NULL,
    cls VARCHAR(255) NOT NULL
);

-- 하위 메뉴 항목을 저장할 테이블을 생성합니다.
CREATE TABLE IF NOT EXISTS gnb_ul_li (
    id INT AUTO_INCREMENT PRIMARY KEY,
    gnb_id INT NOT NULL,
    text VARCHAR(255) NOT NULL,
    href VARCHAR(255) NOT NULL,
    FOREIGN KEY (gnb_id) REFERENCES gnb(id) ON DELETE CASCADE
);

-- 최상위 메뉴 항목을 삽입합니다.
INSERT INTO gnb (text, href, cls) VALUES
('경주 소개', 'gyeongju.html', 'gnb_li px-5 position-relative,gnb_ul position-absolute ps-0'),
('여행 정보', 'travel_info.html', 'gnb_li px-5 position-relative,gnb_ul position-absolute ps-0'),
('예약 및 문의', 'reservation.html', 'gnb_li px-5 position-relative,gnb_ul position-absolute ps-0'),
('이벤트', 'event.html', 'gnb_li px-5 position-relative,gnb_ul position-absolute ps-0');

-- 하위 메뉴 항목을 삽입합니다.
INSERT INTO gnb_ul_li (gnb_id, text, href) VALUES
-- 경주 소개 하위 메뉴
(1, '역사 및 소개', 'history.html'),
(1, '지역특산품', 'local_products.html'),
-- 여행 정보 하위 메뉴
(2, '관광지', 'attractions.html'),
(2, '음식 및 카페', 'food_cafes.html'),
(2, '축제', 'festivals.html'),
(2, '추천코스', 'recommended_courses.html'),
(2, '여행 후기', 'travel_reviews.html.html'),
-- 예약 및 문의 하위 메뉴
(3, '숙소 예약', 'accommodation_booking.html'),
(3, '패키지 여행 예약', 'package_tour_booking.html'),
(3, '문의사항', 'inquiries.html'),
(3, '자주 묻는 문의', 'faq.html'),
-- 이벤트 하위 메뉴
(4, '진행중인 이벤트', 'event.html');
