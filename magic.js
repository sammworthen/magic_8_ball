function ask() {
  var responses = ["Fo' Shizzle", "Declined", "YOLO", "Maybe, Maybe Not"]


var questions = Math.floor(Math.random() * 4 + 1);
var reply = responses[questions];

if(document.getElementById('question').value == "") {
  alert("Please ask a question");
}
  else {
    document.getElementById("p").innerHTML = reply;
    document.getElementById("question").value = "";
  }
}
