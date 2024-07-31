var header = document.getElementsByClassName("header")[0];
var app = document.getElementsByClassName("content")[0];
var f1 = document.getElementsByClassName("footerelement")[0];
var f2 = document.getElementsByClassName("footerelement")[1];
var f3 = document.getElementsByClassName("footerelement")[2];

var titles = [
  "mango",
  "blackberry",
  "jackfruit",
  "litchi",
  "banana",
  "grape",
  "papaw",
  "coconut",
  "date",
  "homie",
];
var num = [10, 13, 7, 18, 15, 9, 21, 19, 12, 8];
var score = 0;

function page1() {
  app.innerHTML = "";
  var l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (var i = 0; i < l.length; i++) {
    app.innerHTML +=
      '<div class="item" tabindex="' + i + '">' + titles[l[i]] + "</div>";
  }

  app.innerHTML +=
    '<div class="qbar"><small>Pick Up One In Your Mind, And Click Start !</small></div>';
  header.innerHTML = "Page1";
  f1.innerHTML = "Exit";
  f2.innerHTML = "";
  f3.innerHTML = "Start";

  document.body.removeEventListener("keydown", keydownmain);
  document.body.removeEventListener("keydown", keydownfinalscore);
  document.body.addEventListener("keydown", keydownpage1);
}

function page2() {
  app.innerHTML = "";

  var l = [0, 1, 2, 3, 6, 8, 9];
  for (var i = 0; i < l.length; i++) {
    app.innerHTML +=
      '<div class="item" tabindex="' + i + '">' + titles[l[i]] + "</div>";
  }

  app.innerHTML +=
    '<div class="qbar"><center><img src="idea.png" width="48px"></center>Does That Name Present In This List ?</div>';
  header.innerHTML = "Page2";
  f1.innerHTML = "No";
  f2.innerHTML = "Restart";
  f3.innerHTML = "Yes";

  document.body.removeEventListener("keydown", keydownpage1);
  document.body.addEventListener("keydown", keydownpage2);
}

function page3() {
  app.innerHTML = "";

  var l = [0, 4, 5, 6, 7, 8];
  for (var i = 0; i < l.length; i++) {
    app.innerHTML +=
      '<div class="item" tabindex="' + i + '">' + titles[l[i]] + "</div>";
  }

  app.innerHTML +=
    '<div class="qbar"><center><img src="idea.png" width="48px"></center>Does That Name Present In This List ?</div>';
  header.innerHTML = "Page3";
  f1.innerHTML = "No";
  f2.innerHTML = "Restart";
  f3.innerHTML = "Yes";

  document.body.removeEventListener("keydown", keydownpage2);
  document.body.addEventListener("keydown", keydownpage3);
}

function page4() {
  app.innerHTML = "";

  var l = [0, 1, 2, 3, 6, 7];
  for (var i = 0; i < l.length; i++) {
    app.innerHTML +=
      '<div class="item" tabindex="' + i + '">' + titles[l[i]] + "</div>";
  }

  app.innerHTML +=
    '<div class="qbar"><center><img src="idea.png" width="48px"></center>Does That Name Present In This List ?</div>';
  header.innerHTML = "Page4";
  f1.innerHTML = "No";
  f2.innerHTML = "Restart";
  f3.innerHTML = "Yes";

  document.body.removeEventListener("keydown", keydownpage3);
  document.body.addEventListener("keydown", keydownpage4);
}

function page5() {
  app.innerHTML = "";

  var l = [3, 4, 5, 6, 7, 9];
  for (var i = 0; i < l.length; i++) {
    app.innerHTML +=
      '<div class="item" tabindex="' + i + '">' + titles[l[i]] + "</div>";
  }

  app.innerHTML +=
    '<div class="qbar"><center><img src="idea.png" width="48px"></center>Does That Name Present In This List ?</div>';
  header.innerHTML = "Page5";
  f1.innerHTML = "No";
  f2.innerHTML = "Restart";
  f3.innerHTML = "Yes";

  document.body.removeEventListener("keydown", keydownpage4);
  document.body.addEventListener("keydown", keydownpage5);
}

function page6() {
  app.innerHTML = "";

  var l = [1, 3, 4, 6, 7, 8];
  for (var i = 0; i < l.length; i++) {
    app.innerHTML +=
      '<div class="item" tabindex="' + i + '">' + titles[l[i]] + "</div>";
  }

  app.innerHTML +=
    '<div class="qbar"><center><img src="idea.png" width="48px"></center>Does That Name Present In This List ?</div>';
  header.innerHTML = "Page6";
  f1.innerHTML = "No";
  f2.innerHTML = "";
  f3.innerHTML = "Yes";

  document.body.removeEventListener("keydown", keydownpage5);
  document.body.addEventListener("keydown", keydownpage6);
}

function finalScore() {
  if (num.indexOf(score) == -1) {
    alert("You Did Something Mistake, Please Try Again.");
    window.location.reload();
  } else {
    result = titles[num.indexOf(score)];
    app.innerHTML =
      '<center><img src="hero.png" width="150px"></center><center><font color="red" size="20px" weight="bold">Hacked</font><br><br>Your Select Was <strong>' +
      result +
      "</strong>.</center>";
    header.innerHTML = "Result";
    f1.innerHTML = "";
    f2.innerHTML = "Play Again";
    f3.innerHTML = "";
  }
  document.body.addEventListener("keydown", keydownfinalscore);
  document.body.removeEventListener("keydown", keydownpage6);
}

function keydownmain(e) { }

function keydownpage1(e) {
  if (e.key == "F1" || e.key == "SoftLeft") {
    window.close();
  }
  if (e.key == "F2" || e.key == "SoftRight") {
    score += 1;
    page2();
  }
}

function keydownpage2(e) {
  if (e.key == "F1" || e.key == "SoftLeft") {
    page3();
  }
  if (e.key == "Enter") {
    window.location.reload();
  }
  if (e.key == "F2" || e.key == "SoftRight") {
    score += 2;
    page3();
  }
}

function keydownpage3(e) {
  if (e.key == "F1" || e.key == "SoftLeft") {
    page4();
  }
  if (e.key == "Enter") {
    window.location.reload();
  }
  if (e.key == "F2" || e.key == "SoftRight") {
    score += 3;
    page4();
  }
}

function keydownpage4(e) {
  if (e.key == "F1" || e.key == "SoftLeft") {
    page5();
  }
  if (e.key == "Enter") {
    window.location.reload();
  }
  if (e.key == "F2" || e.key == "SoftRight") {
    score += 4;
    page5();
  }
}

function keydownpage5(e) {
  if (e.key == "F1" || e.key == "SoftLeft") {
    page6();
  }
  if (e.key == "Enter") {
    window.location.reload();
  }
  if (e.key == "F2" || e.key == "SoftRight") {
    score += 5;
    page6();
  }
}

function keydownpage6(e) {
  if (e.key == "F1" || e.key == "SoftLeft") {
    finalScore();
  }
  if (e.key == "F2" || e.key == "SoftRight") {
    score += 6;
    finalScore();
  }
}

function keydownfinalscore(e) {
  if (e.key == "Enter") {
    score = 0;
    page1();

  }
}

page1();

document.body.addEventListener("keyup", () => {
  getKaiAd({
    publisher: "080b82ab-b33a-4763-a498-50f464567e49",
    app: "Mind Reader",
    slot: "Mind Reader",
    onerror: (err) => console.error("Custom catch:", err),
    onready: (ad) => {
      ad.call("display");
    },
  });
});
