
 ////////////////////////////////////////////////////////////////////
//  モジュールインクルード
 $('header').load('header.html');
 $('footer').load('footer.html');
 
 ////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////
 // スクロールアニメーション
 var window_h = $(window).height();
 $(window).on("load scroll", function() {
   var scroll_top = $(window).scrollTop();
   $(".jsUnder").each(function() {
     //各box要素のtopの位置
     var elem_pos = $(this).offset().top;
     //タイミング
     if (scroll_top >= elem_pos - window_h + 100) {
       $(this).addClass("fadeIn");//特定の位置を超えたらクラスを追加
     }
   });
 });
////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////
//  ロード時にクラス追加（スプラッシュページやmvなど）
 $(window).on("load", function() {
  $(".jsTop").addClass("opacity");//特定の位置を超えたらクラスを追加
});
////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////
// ロード後○秒後にクラス追加する
$('.opening img').delay(1300).queue(function(next) {
  $(this).fadeOut(300);
  next();
});
////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////
// クリックでページトップへ戻るボタン
$(".back_top").click(function() {
  $("html, body").animate({
      scrollTop: 0}, 1000);
  return false;
});
////////////////////////////////////////////////////////////////////






////////////////////////////////////////////////////////////////////
//スクロールしてページトップから100に達したらボタンを表示
var btnCont = $('.btn_wrap');
$(window).on('load scroll', function(){
  if($(this).scrollTop() > 100) {
    btnCont.fadeIn(); 
  }else{
    btnCont.fadeOut();
  }
});
////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////
// フッターでヘッダーをフェードアウトさせる
window.onscroll = function () {
  var check = window.pageYOffset ;       //現在のスクロール地点 
  var docHeight = $(document).height();   //ドキュメントの高さ
  var dispHeight = $(window).height();    //表示領域の高さ
  var footerHeight = $("footer .footerWrap").height();    //表示領域の高さ
 
  if(check > docHeight-dispHeight- footerHeight){   //判別式　500はフッターからの距離です（ここはサイトのフッターに合わせて変更しましょう）
      $('.gnavi').fadeOut(500);	//1000 はフェードアウトの速度です。調整可
  }else{
      $('.gnavi').fadeIn(500);	//1000 はフェードインの速度です。調整可
  }
};
////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////
// IEにアナウンスする
$(function() {
  var ua = window.navigator.userAgent; 
  if(ua.indexOf('Trident') != -1 || ua.indexOf('MSIE') != -1){ 
    $("body").css("display", "none")
    alert('お使いのブラウザにこちらのWEBサイトは対応しておりません。\nchromeまたはEdgeブラウザのご利用をお願い致します。');
  }
});
////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////
// 下層頁とトップのヘッダー画像だしわけ
// bodyタグのIDで条件分岐させてパス変更

$(window).on('load resize', function() {
  var img = document.getElementById('headerImgSrc');
  var src = img.getAttribute('src');
  if ( window.document.body.id === 'top' ) {
    img.setAttribute('src', '/assets/images/logo.png');
  }
  else{
    if (window.matchMedia( "(min-width: 768px)" ).matches) {
      img.setAttribute('src', '/assets/images/header_logo_w.png');
     }
    else{
      img.setAttribute('src', '/assets/images/logo.png');
    }
  }
});
////////////////////////////////////////////////////////////////////










////////////////////////////////////////////////////////////////////
// タブレッドの時のビューポートの変更 その他の処理クラス追加など
var ua = navigator.userAgent.toLowerCase();
var isiPad = (ua.indexOf('ipad') > -1);
var isAndroidTablet = (ua.indexOf('android') > -1) && (ua.indexOf('mobile') == -1);
if( isiPad || isAndroidTablet ){
  $("meta[name='viewport']").attr('content', 'width=1240');
  // $(".centerSection").addClass("tablet");
  // $(".mv").addClass("tablet");
  // $(".scroll").css("display", "none");
}
////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////
// チェックボックスオンオフの使い分け
$('#next').prop('disabled', true);
  $('.checkBox').on('click', function() {
    if ( $(this).prop('checked') == false ) {
      $('#next').prop('disabled', true);
      $('#next,.btn_box').addClass('off');
    } else {
      $('#next').prop('disabled', false);
      $('#next,.btn_box').removeClass('off');
    }
  });

  // CSS
  // #next.off{
  //   opacity: 0.5;
  // }
////////////////////////////////////////////////////////////////////






////////////////////////////////////////////////////////////////////
// 画面を縦横変更した時の処理
$(window).on('load resize', function() {
  if(navigator.userAgent.match(/(iPhone|iPod|Android)/)){
    if (window.innerHeight > window.innerWidth) {
        /* 縦画面時の処理 */
        // console.log('縦のイベント');
        $("meta[name='viewport']").attr('content', 'width=device-width');
    } else {
        /* 横画面時の処理 */
        // console.log('JavaScript');
        $("meta[name='viewport']").attr('content', 'width=1360');
    }
  }
});
////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////
// gsapの基本操作
$(function () { 
  var controller = new ScrollMagic.Controller();
  var wipeAnimation = new TimelineMax()
    .to("#pcAnimation figure", 1,   {transform: "rotateY(90deg)",delay: 0.3, ease: Expo.easeInOut})
    .to("#pcAnimation figure .img02", 0,   {css:{zIndex:1}})
    wipeAnimation.staggerTo('#list2 .txtBox', 0, {className:"+=show"}, 0)
    .to("#pcAnimation figure", 1,   {transform: "rotateY(0deg)",delay: 0.3, ease: Expo.easeInOut }) 
  new ScrollMagic.Scene({
      triggerElement: "#list2",
      triggerHook: 0.2,
      duration: listDuration
    })
    .setPin("#list2")
    .setTween(wipeAnimation)
    .addTo(controller);
});
////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////
// タブ切り替え
$(".switchBtn").on("click",function(){
  var $th = $(this).index();
  $(".switchBtn").removeClass("active");
  $(this).addClass("active");
  $(".switchContent").removeClass("show");
  $(".switchContent").eq($th).addClass("show");
 });
  //  CSS（フェードイン）
  //  .switchContent{
  //   opacity: 0;
  //   display: none;
  // }
  // .switchContent.show{
  //   display: block;
  //   animation: 1s fade-in forwards;
  // }
  // @keyframes fade-in {
  //   0% {
  //     opacity: 0;
  //   }
  //   100% {
  //     opacity: 1;
  //   }
  // }

////////////////////////////////////////////////////////////////////
$(function(){

});



////////////////////////////////////////////////////////////////////

// モーダル
// CSSは過去から
$(function(){
  var winScrollTop;
  $('.js_modal_open').each(function(){
      $(this).on('click',function(){
          //スクロール位置を取得
          winScrollTop = $(window).scrollTop();
          var target = $(this).data('target');
          var modal = document.getElementById("modal");
          $(modal).fadeIn();
          $(".movie-wrap").addClass('show');
          $("#imgArea").addClass('show');
          $("#imgArea").attr("src", $(this).data("videoId"));
          return false;
      });
  });
  $('.js_modal_close').on('click',function(){
    $('.js_modal').fadeOut();
    $(".movie-wrap").removeClass('show');
    $("#imgArea").removeClass('show');
    $('#imgArea').attr('src', '');
    $('body,html').stop().animate({scrollTop:winScrollTop}, 100);
    return false;
  }); 
});



// CSS


// /* modal */
// .modal{
//   display: none;
//   height: 100vh;
//   position: fixed;
//   top: 0;
//   width: 100%;
//   z-index: 10000;
// }
// .movie-wrap.show{
//   /* overflow: auto; */
//   -webkit-transform: scaleY(1);
//     -ms-transform: scaleY(1);
//     -o-transform: scaleY(1);
//     transform: scaleY(1);
// }
// .modal.is_show{display: block;}
// .modal_bg{
//   background: unset;
//   height: 100vh;
//   position: absolute;
//   width: 100%;
//   background-color: rgba(0, 0, 0, 0.7);
// }
// .modal-content{
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%,-50%);
//   position: absolute;
//   width: 70%;
  
// }
// .movie-wrap{
//   position: relative;
//   background-color: #000;
//   width: 100%;
//   height: 80vh;
//   /* padding-top: 56.25%; */
//   /* transform: scale(0.7,0.7); */
//   -webkit-transform: scaleY(0);
//     -ms-transform: scaleY(0);
//     -o-transform: scaleY(0);
//     transform: scaleY(0);
//     -webkit-transition: -webkit-transform 0.3s ease;
//     transition: -webkit-transform 0.3s ease;
//     -o-transition: -o-transform 0.3s ease;
//     transition: transform 0.3s ease;
//     transition: transform 0.3s ease, -webkit-transform 0.3s ease, -o-transform 0.3s ease;
// }
// .movie-wrap .scr-wrap{
//   width: 100%;
//   height: 100%;
//   -webkit-transition: all 0.4s ease 0.5s;
//   -moz-transition: all 0.4s ease 0.5s;
//   -ms-transition: all 0.4s ease 0.5s;
//   -o-transition: all 0.4s ease 0.5s;
//   transition: all 0.4s ease 0.5s;
//   opacity: 0;
//   overflow: auto;
// }
// .movie-wrap .scr-wrap.show{
//   opacity: 1;
// }
// .close{
//   font-size: 20px;
//   width: 1.4em;
//   height: 1.4em;
//   border-radius: 100%;
//   position: absolute;
//   right: -3rem;
//   top: -3rem;
//   background: #000;
//   cursor: pointer;
//   transition-duration: 0.3s;
// }
// .close::before {
//   position: absolute;
//   top: 0.2em;
//   left: 0.6em;
//   width: 0.2em;
//   height: 1em;
//   content: "";
//   background-color: #FFF;
//   transform: rotate(45deg);
// }
// .close::after {
//   position: absolute;
//   top: 0.6em;
//   left: 0.2em;
//   width: 1em;
//   height: 0.2em;
//   content: "";
//   background-color: #FFF;
//   transform: rotate(225deg);
// }

// @media screen and (max-width: 768px){
//   .modal-content{
//     width: 100%;
//   }
//   .close{
//     top: -8rem;
//     right: 3rem;
//   }
//   .movieLink{
//     padding-top: 36.2rem;
//   }
//   .movieLink h2{
//     width: 39.2rem;
//     margin-left: 0;
//     position: relative;
//     margin-bottom: 7rem;
//   }
//   .movieLink .lead{
//     font-size: 3rem;
//     line-height: 1.6;
//     margin-left: 0;
//     margin-bottom: 9rem;
//   }
//   .movieWrap{
//     display: block;
//     margin-bottom: 4.3rem;
//   }
//   .movieBox a{
//     width: 100%;
//     margin-bottom: 2.6rem;
//   }
//   .movieBox a::after{
//     width: 8rem;
//     height: 8rem;
//   }
//   .movieBox p{
//     text-align: center;
//     font-size: 2.8rem;
//     font-family: YuGothic, "Yu Gothic Medium","游明朝体", "Yu Mincho", YuMincho, "ヒラギノ明朝 Pro",'Hiragino Kaku Gothic Pro','ヒラギノ角ゴ Pro W6','ヒラギノ角ゴ Pro W3','メイリオ',Meiryo,'ＭＳ Ｐゴシック',sans-serif;
//     margin-bottom: 10rem;
//   }
// }




// html


// <div id="modal" class="modal js_modal">
//     <div class="modal_bg js_modal_close"></div>
//     <div class="modal-content">
//       <div class="movie-wrap">
//         <div id="imgArea" class="scr-wrap"><img id="wpImg" src="/assets/img/works_modal_sample.jpg" alt=""></div>
//         <!-- <iframe id="youtubePlayer" width="560" height="315" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
//         <div class="close js_modal_close"></div>
//       </div>
//     </div>
//   </div>


////////////////////////////////////////////////////////////////////
























// あんまり使わないけどたまに使う系
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓












////////////////////////////////////////////////////////////////////

// タブ切り替え複数、タブ切り替えたらトップにスクロールするタイプ
$(function () {
  $(".pageList li").on("click",function(){
    var href= $(this).attr("href");
    var offset = 60;
    var speed = 500;
    var target = $("#01");
    var position = target.offset().top - offset;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    var $th = $(this).index();
    $(".pageList li").removeClass("active");
    $(this).addClass("active");
    $(".questionList").removeClass("show");
    $(".questionList").eq($th).addClass("show");
   });
   $(".questionList01 li").on("click",function(){
    var $th = $(this).index();
    $(".questionList01 li").removeClass("active");
    $(this).addClass("active");
    $(".anserBox01 .anser").removeClass("show");
    $(".anserBox01 .anser").eq($th).addClass("show");
   });
   $(".questionList02 li").on("click",function(){
    var $th = $(this).index();
    $(".questionList02 li").removeClass("active");
    $(this).addClass("active");
    $(".anserBox02 .anser").removeClass("show");
    $(".anserBox02 .anser").eq($th).addClass("show");
   });
   $(".questionList03 li").on("click",function(){
    var $th = $(this).index();
    $(".questionList03 li").removeClass("active");
    $(this).addClass("active");
    $(".anserBox03 .anser").removeClass("show");
    $(".anserBox03 .anser").eq($th).addClass("show");
   });
   if (window.matchMedia( "(max-width: 767px)" ).matches) {
    $(".questionList li").on("click",function(){
      var href= $(this).attr("href");
      var offset = 60;
      var speed = 500;
      var target = $("#01");
      var position = target.offset().top - offset;
      $("html, body").animate({scrollTop:position}, speed, "swing");
    });
    }

});
////////////////////////////////////////////////////////////////////



