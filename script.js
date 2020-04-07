var fortuneWords = ["you will get married at the end of the year", "you will be rich", "you will be able to go outside soon", "you will have many reliable friends", " you will travel next year", "you will be a bridesmaid next year", "you will have a baby or your best friend will have a baby before the year is up", "you will loose money next month", "you will reconnect with an old friend very soon", "you will further your career this week", "stay positive because you will recieve what you sow", "relax because you need it. The future looks stressful", "you will hear from Google Inc sometime soon"]
var executeButton = document.getElementById("half-button");
var outputParagraph = document.getElementById("fortune-output");
var inputElement = document.getElementById('half-input');
var inputElement2 = document.getElementById('fortune-input');
var fortuneButton = document.getElementById('fortune-button')
var space = " ";

executeButton.addEventListener("click", halfNumber);
function halfNumber(){
  inputValue = inputElement.value;
  alert(inputValue/2);
  console.log("half of" + space + inputValue + space + "is" + space + inputValue/2);
}

fortuneButton.addEventListener("click", fortune);
function fortune () {
  var randomIndex = Math.floor(Math.random() * fortuneWords.length);
  if(inputElement2.value){
  outputParagraph.innerHTML = inputElement2.value + ": " + fortuneWords[randomIndex];
  } else {
  console.log("no name, no game");
  }
  restyle();
}
function restyle(){
  var myElement = document.getElementById("fortune-output");
  var randomColor = ["yellow", "orange", "blue","#533d5e", "green", "bue",]
  var randomSize = ["2vmin", "3vmin", "4vmin", "5vmin", "6vmin", "7vmin"]
  var randomIndex1 = Math.floor(Math.random() * randomColor.length);
  var randomIndex2 = Math.floor(Math.random() * randomSize.length);
  myElement.style.color = randomColor[randomIndex1];
  myElement.style.fontSize = randomSize[randomIndex2];



}
