$(function () {
  console.log($('#content').html());
  $('#content-1').html('<i>こんばんは</i>'); // html要素ごと取得しているため、<b>タグが<i>タグに差し代わっている。
  
  console.log($('#content').text());
  $('#content-2').text('<i>こんばんは</i>'); // textのみ取得しているため、<i>タグもテキストとして認識されている。
  
  console.log($('#name').val());
  $('#name').val('鮭おにぎり');

  $('#box-1').append('<p class="mb-0">追加したテキスト（クラスも付与）</p>');

  $('#box-2').prepend('<p class="mb-0">追加したテキスト（クラスも付与）</p>');

  $('#target').remove();

  console.log($('#link').attr('href'));
  $('#link').attr('href', 'https://trello.com/c/IpAOkDU9/');

  console.log($('#check').prop('checked'));
  $('#check').prop('checked', false);
});

