//상단 서치창
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합 검색');
}); 

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

//헤더 우측 뱃지
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('.to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
//스크롤 Y 좌표가 500보다 커지면 나타나는 배지를 숨기겠다~~
    // gsap.to(요소, 지속시간, {옵션}); :: 애니메이션 효과 gsap
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none',
    });
    //버튼 보이기!
    gsap.to('.to-top', .2, {
      x: 0
     });
  } else {
    //배지 보이기 
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block',
    });
    //버튼 숨기기!
    gsap.to('.to-top', .2, {
     x: 100
    });
  }
}, 300));
//._throttle(함수, 시간)

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

// 메인 컵 애니메이션 효과 (CSS에서 먼저 오퍼시티 0 먹이고 하기)
const fadeEls = document.querySelectorAll('.visual .fade-in'); //변수 요소이름 = document.메소드실행 ('효과 먹일 class명 : .부모 .후손')
fadeEls.forEach(function (fadeEl, index) { //요소이름.메소드(익명 (요소직관적이름/단수가능, 반복횟수=index) {})
  gsap.to(fadeEl, 1, { // gsap.to(요소, 지속시간, {옵션}); / 애니메이션 효과 gsap
    delay: (index + 1)*.7, //=0.7 > 1.4 > 2.1 > 2.8초 이렇게 순서대로 나타남
    opacity: 1
  });
});
//fade-in이라는 class를 가지고 있는 요소들에게 gsap 효과로 0.6초씩 순차적으로 opacity1로 자동화한다~~ (HTML 기준 위에서부터 나타남)  

//공지사항, 프로모션 배너 슬라이드
// new Swiper ('선택자', {옵션})
new Swiper (".notice-line .swiper", {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});
new Swiper('.promotion .swiper', {
  slidesPerView: 3, //한 번에 보여 줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백 px
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000, //500은 0.5초
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  }
});
new Swiper('.awards .swiper', {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  }
})


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;


function random(min, max) {
  // .toFixed()를 통해 반환된 "문자" 데이터를 parseFloat()을 통해 소수점을 가지는 "숫자" 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// 부유하는 요소를 만드는 함수
function floatingObject(selector, delay, size) {
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    {
      delay: random(0, delay), // 얼마나 늦게 애니메이션을 시작할 것인지
      y: size, // 수직으로 얼마나 움직일지 설정
      repeat: -1, // `-1`은 무한 반복
      yoyo: true,
      ease: Power1.easeInOut
    }
  )
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)



const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
})


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();










































































































































































































































































































































































































































































































































