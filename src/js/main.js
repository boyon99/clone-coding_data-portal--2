/* popular search - swiper */
new Swiper('.search__popular__btn .swiper-container', {
  direction:'vertical',
  autoplay: {
    delay : 2000
  },
  loop:true
});



/* data - tab */
// 탭 컨텐츠 숨기기
$(".data__content").hide();

// 첫번째 탭콘텐츠 보이기
$(".data__container").each(function () {
  $(this).children(".data__name li:first").addClass("active"); //Activate first tab
  $(this).children(".data__content").first().show();
});
//탭메뉴 클릭 이벤트
$(".data__name li a").click(function () {
  
  $(this).parent().siblings("li").removeClass("active");
  $(this).parent().addClass("active"); $(this).parent().parent().parent().parent().find(".data__content").hide();
  var activeTab = $(this).attr("rel");
   $("#" + activeTab).fadeIn();
});


/* recommand data - swiper */
