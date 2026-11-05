// ご予約フォーム：送信を止め、必須の確かめが通ったら同じページで完了の表示に切り替える。
// 入力内容はどこにも送らない・保存しない。
(function () {
  var form = document.getElementById("reserve-form");
  var done = document.getElementById("reserve-done");
  if (!form || !done) {
    return;
  }
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    form.hidden = true;
    done.hidden = false;
    done.scrollIntoView({ block: "center" });
  });
})();
