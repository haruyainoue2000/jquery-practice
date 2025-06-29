$(function () {
  // show ボタンがクリックされたとき
  $('#showBtn').click(function() {
    $('#box-1').show(500); // 0.5秒で表示
  });

  // hide ボタンがクリックされたとき
  $('#hideBtn').click(function() {
    $('#box-1').hide(500); // 0.5秒で非表示
  });

  // toggle ボタンがクリックされたとき
  $('#toggleBtn').click(function() {
    $('#box-1').toggle(500); // 0.5秒で表示/非表示を切り替え
  });



  // fadeIn ボタン
  $('#fadeInBtn').click(function() {
    $('#box-2').fadeIn(500); // 0.5秒でフェードイン
  });

  // fadeOut ボタン
  $('#fadeOutBtn').click(function() {
    $('#box-2').fadeOut(500); // 0.5秒でフェードアウト
  });

  // slideDown ボタン
  $('#slideDownBtn').click(function() {
    $('#box-2').slideDown(500); // 0.5秒で下にスライドしながら表示
  });

  // slideUp ボタン
  $('#slideUpBtn').click(function() {
    $('#box-2').slideUp(500); // 0.5秒で上にスライドしながら非表示
  });



  // 右に移動
  $('#moveRight').click(function() {
    $('#box-3').animate({
      left: '+=200px' // 現在位置から +200px
    }, 500);
  });

  // 左に戻る
  $('#moveLeft').click(function() {
    $('#box-3').animate({
      left: '0px'
    }, 500);
  });

  // 大きさ変更
  $('#resize').click(function() {
    $('#box-3').animate({
      width: '200px',
      height: '200px',
      opacity: 0.5
    }, 500);
  });

  // 元に戻す
  $('#reset').click(function() {
    $('#box-3').animate({
      width: '100px',
      height: '100px',
      opacity: 1,
      left: '0px'
    }, 500);
  });



  // 保存ボタンクリックで通知バーをスライドダウン
  $('#saveBtn').click(function() {
    $('#notification').animate({
      top: '0'
    }, 400).delay(2000).animate({
      top: '-50px'
    }, 400);
  });

  // ボタンホバーでふわっとサイズ変更
  $('#saveBtn').hover(
    function() {
      $(this).animate({
        paddingLeft: '30px',
        paddingRight: '30px'
      }, 200);
    },
    function() {
      $(this).animate({
        paddingLeft: '24px',
        paddingRight: '24px'
      }, 200);
    }
  );



  // 上に動かす
  $('#upBtn').click(function() {
    $('#box-4').animate({
      top: '-=50px'
    }, 300);
  });

  // 下に動かす
  $('#downBtn').click(function() {
    $('#box-4').animate({
      top: '+=50px'
    }, 300);
  });

  // 左に動かす
  $('#leftBtn').click(function() {
    $('#box-4').animate({
      left: '-=50px'
    }, 300);
  });

  // 右に動かす
  $('#rightBtn').click(function() {
    $('#box-4').animate({
      left: '+=50px'
    }, 300);
  });

  // 元の位置に戻す
  $('#resetBtn').click(function() {
    $('#box-4').animate({
      top: '0px',
      left: '0px'
    }, 300);
  });
});

