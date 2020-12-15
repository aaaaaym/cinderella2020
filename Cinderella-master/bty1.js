//リストに番号をふってユニーク化するため変数numberを定義
var number = 0;

//追加ボタンでリストを追加する
document.getElementById("submit1").addEventListener("click", function () {
  number++;
  var input1 = document.querySelector("#input12");
  var result = input1.value;
  var checkbox = document.createElement("input");
  checkbox.className = "custom-control-input1";
  checkbox.setAttribute("type", "checkbox");

  var checkboxdiv = document.createElement("div");
  checkboxdiv.className = "col-xs-1 custom-control custom-checkbox";
  checkboxdiv.appendChild(checkbox);

  //入力が空だった場合と、文字数制限を超えた場合にアラートを出す。
  if (result == "") {
    alert("入力してください");
  } else if (result.length > 31) {
    alert("30文字以下で入力してください");

    //上記の場合以外はリストを追加する。
  } else {
    var list = document.createElement("p");
    list.className = "list";
    list.innerHTML = result;

    var listdiv = document.createElement("div");
    listdiv.className = "col-xs-8";
    listdiv.appendChild(list);

    var deleteButton = document.createElement("button");
    var deleteid = "delete" + number;
    deleteButton.className = "delete";
    deleteButton.setAttribute("id", deleteid);
    deleteButton.setAttribute("value", number);
    deleteButton.innerHTML = "削除";

    var deletediv = document.createElement("div");
    deletediv.className = "col-xs-31";
    deletediv.appendChild(deleteButton);

    var div = document.createElement("div");
    var todolist = "todolist" + number;
    div.className = "row1";
    div.setAttribute("id", todolist);
    div.setAttribute("value", number);
    div.appendChild(checkboxdiv);
    div.appendChild(listdiv);
    div.appendChild(deletediv);

    document.getElementById("todolist_unit1").appendChild(div);

    //区切り線を引く。
    var line = document.createElement("hr");
    var listline = "listline" + number;
    line.setAttribute("id", listline);
    document.getElementById("todolist_unit1").appendChild(line);

    //フォーム入力し、追加ボタンを押したらフォームをクリアする。
    var reset = document.getElementById("input1");
    reset.value = "";

    //削除ボタンが押されたら、そのリストを削除する。
    document.getElementById(deleteid).addEventListener("click", function () {
      document.getElementById(todolist).remove(todolist);
      document.getElementById(listline).remove(listline);
    });
  }
});