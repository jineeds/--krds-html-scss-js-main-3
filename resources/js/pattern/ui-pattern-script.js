// .all-menu를 클릭했을때 id="nav-all"에게 class="active"를 추가한다
$(".all-menu").click(function () {
  $("#nav-all").addClass("active");
});

// $(".all-menu").click(function () {
//   $("#nav-all").closeClass("hide");
// });
// nav-all .close를 클릭했을때 nav-all에게 .active 클래스를 제거한다.
$("#gnb").mouseenter(function () {
  $("#header").addClass("active");
});
$("#gnb").mouseleave(function () {
  $("#header").removeClass("active");
});

$(".lang__btn").click(function () {
  $(".lang__lst").show("active");
});

// $(".button2").on("mouseenter", function () {
//   $(".box2").stop().slideDown(1000);
// });
// 버튼에 마우스를 오버했을때 창 내려오기
