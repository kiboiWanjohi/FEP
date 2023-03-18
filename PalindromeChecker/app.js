function palindrome() {
  let str = document.getElementById("str").value;
  let results = document.querySelector(".results");
  let polishedString = str.replace(/\W+|_/g, "").toLowerCase();
  let reversedString = polishedString.split("").reverse().join("");
  if (polishedString != reversedString) {
    results.innerText = "Well .... you Failed";
  }
  if (polishedString == reversedString) {
    results.innerText += "Well Done It's a paindrome";
  }
}
