// function changeWords() {
//   var words = [
//     "sense colors",
//     "identify plants",
//     "see gestures",
//     "feel emotions",
//     "check safety",
//   ];
//   var i = 0;
//   setInterval(function () {
//     $(`#words`).fadeOut(function () {
//       $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
//     )};
//   }, 1000)
// })();
function changeWords() {
  count = 0;
  wordsArray = ["cool", "amazing", "super"];
  setInterval(function () {
    count++;
    $("#word").fadeOut(500, function () {
      $(this)
        .text(wordsArray[count % wordsArray.length])
        .fadeIn(500);
    });
  }, 2000);
}
