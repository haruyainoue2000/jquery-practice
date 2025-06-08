$(function () {
  // マウス操作でのイベント
  $('#btn-01').click(function() {
    alert('ボタンがクリックされました！');
  });
  $('#btn-02').dblclick(function() {
    alert('ボタンがクリックされました！');
  });
  $('#btn-03').mouseenter(function() {
    alert('ボタンがクリックされました！');
  });

  // キーボード操作でのイベント
  $('#nameInput').keydown(function(event) {
    if (event.key === "Enter") {
      alert("入力が完了しました！");
    }
  });

  // 入力欄でのイベント
  $('#liveInput').on('input', function() { // #liveInputを取得→inputイベント(入力するたび)→#liveDisplayを取得→.textを挿入
    $('#liveDisplay').text($(this).val());
  });

  // その他イベント
  $(window).resize(function() {
    console.log('ウィンドウサイズ：', $(window).width());
  });
  $('#contactForm').on('submit', function(e) {
    const result = confirm("本当に送信してもよろしいですか？");
    if (!result) {
      e.preventDefault(); // 送信をキャンセル
    }
  });
});

