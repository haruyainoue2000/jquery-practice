$(function () {
  // .css() を使ってスタイルを直接変更
  $('#cssChangeBtn').click(function () {
    $('#title').css('color', 'red');
  });

  // .addClass() を使って class を追加
  $('#addClassBtn').click(function () {
    $('#title').addClass('highlight');
  });

  // .removeClass() を使って class を削除
  $('#removeClassBtn').click(function () {
    $('#title').removeClass('highlight');
  });

  // .toggleClass() を使って class を付け外し切り替える
  $('#toggleClassBtn').click(function () {
    $('#title').toggleClass('highlight');
  });

  $('#togglePanelBtn').click(function () {
    const panel = $('#infoPanel');

    // クラスの切り替え（パネル開閉）パネルの表示・非表示をクラスで制御（display: none/block）
    panel.toggleClass('active');

    // ボタンの見た目を切り替え（直接 .css() で）現在の状態を判定して、ボタンの表示テキストやスタイルを切り替える
    if (panel.hasClass('active')) {
      $(this).text('パネルを閉じる');
      $(this).css({
        backgroundColor: '#007BFF',
        color: '#fff'
      });
    } else {
      $(this).text('パネルを開く');
      $(this).css({
        backgroundColor: '#f0f0f0',
        color: '#333'
      });
    }
  });

  $('.menu-item').click(function () {
    // すべてのメニューから active クラスを削除
    $('.menu-item').removeClass('active');

    // クリックされたメニューに active クラスを追加
    $(this).addClass('active');

    // 動的に下線をつけてみる（.css の活用）
    $('.menu-item').css('text-decoration', 'none'); // いったん全消し
    $(this).css('text-decoration', 'underline'); // 選択中だけ下線を付けてみる
  });
});

