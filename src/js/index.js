// ipad tabletの時のビューポート
$(function () {
  var ua = navigator.userAgent.toLowerCase();
  var isiPad = (ua.indexOf('ipad') > -1);
  var isAndroidTablet = (ua.indexOf('android') > -1) && (ua.indexOf('mobile') == -1);
  var agent = window.navigator.userAgent.toLowerCase()
  // if (ua.indexOf('ipad') > -1
  //   || ua.indexOf('macintosh') > -1 && 'ontouchend' in document) {
  //   // iPad用の処理
  //   $("meta[name='viewport']").attr('content', 'width=1400');
  //   $("body").addClass("tablet");
  // }
  if (isiPad || ua.indexOf('macintosh') > -1 && 'ontouchend' in document) {
    $("body").addClass("tablet");
    if (agent.indexOf("chrome") != -1) {
      $("meta[name='viewport']").attr('content', 'width=1400');
    } else if (navigator.userAgent.indexOf('CriOS') >= 0) {
      $("meta[name='viewport']").attr('content', 'width=1400');
    } else if (agent.indexOf("safari") != -1) {
      $("meta[name='viewport']").attr('content', 'width=1920');
    } else {
      $("meta[name='viewport']").attr('content', 'width=1400');
    }

   }else if (isAndroidTablet) {
      $("body").addClass("tablet");
      $("meta[name='viewport']").attr('content', 'width=1400');
   }
});
$(function () {
  var winScrollTop;
  // var videoElement = document.getElementsByTagName("video");
  $('.common__js_modal_open').each(function () {
    $(this).on('click', function () {
      //スクロール位置を取得
      winScrollTop = $(window).scrollTop();
      var target = $(this).data('target');
      var videoId = $(this).data('video');
      var posterPath = $(this).data('poster');
      var modal = document.getElementById(target);
      $(modal).fadeIn();
      $(".common__movie-wrap").addClass('show');
      var modalChild = $(modal).find("video");
      $(modalChild).attr("src", videoId);
      // $(modalChild).attr("poster", posterPath);
      // 動画が空の時にカミングスーンにする。
      if (modalChild.is('[src=""]')) {
        $(modal).find(".common__movie-container").addClass('common__modal__commingsoon');
      } else {
        $(modal).find(".common__movie-container").removeClass('common__modal__commingsoon');
      }
      return false;
    });
  });

  

  // let loc = location.pathname.replace(/\/+$/, "").split('/').pop();
  // let dir = loc.substring(0, loc.lastIndexOf('/')) + '/';




  // $('.js-lang-button').each(function () {
  //     //スクロール位置を取得
  //     var lang = $(this).data('lang');
  //     $(this).attr("href", "/kiki/" + lang + "/paw" + dir);
  // });




  let url = window.location.href;
  $('.js-lang-button').each(function () {
    let lang = $(this).data('lang');
    if(url.search(/\/jp\//) !== -1) {
      let langUrl = url.replace('/jp/', lang );
      $(this).attr("href", langUrl);
      

    }else if(url.search(/\/en\//) !== -1) {
      let langUrl = url.replace('/en/', lang );
      $(this).attr("href", langUrl);

    }else  if(url.search(/\/sc\//) !== -1) {
      let langUrl = url.replace('/sc/', lang );
      $(this).attr("href", langUrl);
    }
  
  });

  // if(url.search(/\/jp\//) !== -1) {
  //   // 日本語の時
  //   let enUrl = url.replace('/jp/', '/en/');
  //   let scUrl = url.replace('/jp/', '/sc/');
  //   enBtn.attr('href', enUrl);
  //   scUrl.attr('href', scUrl);
  // }else if(url.search(/\/en\//) !== -1) {
  //   langUrl = url.replace('/en/', '/jp/');
  //   $('p#language a').attr('href', langUrl);
  // }


  $('.common__js_modal_close').on('click', function () {
    $('.common__js_modal').fadeOut();
    $(".common__movie-play-tumb").show();
    $(".common__movie-wrap").removeClass('show');
    $(".common__js_modal video").attr("src", "");
    // $(".common__js_modal video").attr("poster", "");
    $('body,html').stop().animate({ scrollTop: winScrollTop }, 100);
    return false;
  });

  // movie再生
  $('.common__movie-play-tumb').on('click', function() {
		$(this).toggleClass("active");
		var index = $(this).data('index');
		var video = $("video").get(index);
    let is_playing = false;
		if (!is_playing) {
      video.play();
      is_playing = true;
      $(".common__movie-play-tumb").delay(200).fadeOut();
		} else {
      video.pause();
		}
	});
});
$(function () {
  // gnav
  var navToggle = $('#nav-toggle'),
    gNav = $('#g-nav'),
    navBg = $('#nav-bg');

  navToggle.on('click', function () {
    $(this).toggleClass('is-open');
    if ($(this).hasClass('is-open')) {
      gNav.addClass('is-open');
      navBg.addClass('is-open');
    } else {
      gNav.removeClass('is-open');
      navBg.removeClass('is-open');
    }
  });

  gNav.find('a').on('click', function () {
    navToggle.click();
  });
});

$(function () {
  //  アンカーリンクスムーススクロール
  $('a[href^="#"]').click(function () {
    var headerHeight = $('#header').height();
    var speed = 500;
    var offset = 60;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - headerHeight - 20;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});



// スマホとPCでhref変更する場合
if (IsSmartPhone())
{
    $(function()
    {
      $('body').find('[data-sp-href]').each(function()
      {
          $(this).attr('href', $(this).attr('data-sp-href'));
      });
    });
}
function IsSmartPhone()
{
  // デバイスの種類。
  var media =
  [
    'iPhone',
    'Windows Phone',
    'Android'
  ];
  var pattern = new RegExp(media.join('|'), 'i'); //デバイスの種類を正規表現にする。
  return pattern.test(navigator.userAgent); //ユーザーエージェントにデバイスが含まれるかを調べる。
}


