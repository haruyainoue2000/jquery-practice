$(function () {
  // 要素を取得してみよう！
  $('#btn').click(function () {
    alert('こんにちは');
  });
  $('.item').css({
    'color': 'red',
    'font-weight': 'bold'
  });

  // 擬似セレクタ！
  $('.fruit:first').css({
    'color': 'red',
    'font-weight': 'bold'
  });
  $('.fruit:eq(1)').css({
    'color': 'yellow',
    'font-weight': 'bold'
  });
  $('.fruit:last').css({
    'color': 'purple',
    'font-weight': 'bold'
  });
  $('.fruit:last').css({
    'color': 'purple',
    'font-weight': 'bold'
  });
  $('li:contains("東京")').css('color', 'red');

  // 属性セレクタ！
  $('[name="username"]').css('border', '2px solid red'); // name="username" の要素に赤枠
  $('[type="checkbox"]').prop('checked', true); // チェックボックスをONに
});