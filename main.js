$(window).scroll(function () {
  // fadeinクラスに対して順に処理を行う
  $(".fadeup").each(function () {
    // スクロールした距離
    let scroll = $(window).scrollTop();
    // fadeinクラスの要素までの距離
    let target = $(this).offset().top;
    // 画面の高さ
    let windowHeight = $(window).height();
    // fadeinクラスの要素が画面下にきてから200px通過した
    // したタイミングで要素を表示
    if (scroll > target - windowHeight + 200) {
      $(this).css("opacity", "1");
      $(this).css("transform", "translateY(0)");
    }
  });
});

/*=================================================
  上へ戻るボタン
  ===================================================*/
jQuery(function ($) {
  const pagetop = $(".pagetop");
  // ボタン非表示
  pagetop.hide();
  // 100px スクロールしたらボタン表示
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    jQuery("body, html").animate({ scrollTop: 0 }, 500);
    return false;
  });
});
