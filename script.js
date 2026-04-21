let score = 0;
//let yellowRobotImg = document.getElementById("yellowRobot");
//let redRobotImg = document.getElementById("redRobot");
let scoreBoard = document.getElementById("scoreBoard");
let message = document.getElementById("wrapper")

document.addEventListener('mousedown', startGame);
// document.getElementById("reset").addEventListener('mousedown', restart);

document.getElementById("soumi").style.visibility = "hidden";
function startGame(pEvent) {
   if(pEvent.target.className == "yellowRobot"){
      pEvent.target.style.visibility = "hidden";
      score = score + 1;
      scoreBoard.textContent = score;
      endGame();
   
   }else if(pEvent.target.className == "redRobot"){
      pEvent.target.style.visibility = "hidden";
      score = score - 1;
      scoreBoard.textContent = score;
      alert("You need to click👆🏽 on the Happy😀 character")
   }else if(pEvent.target.id == "reset"){
      restart();
   }
}
function restart() {
   document.getElementById("yellowRobot1").style.visibility = "visible";
   document.getElementById("yellowRobot2").style.visibility = "visible";
   document.getElementById("yellowRobot3").style.visibility = "visible"; 
   document.getElementById("yellowRobot4").style.visibility = "visible";
   document.getElementById("redRobot1").style.visibility = "visible";
   document.getElementById("redRobot2").style.visibility = "visible";
   // yellowRobotImg.style.visibility = "visible";
   // redRobotImg.style.visibility = "visible";
   // score = 0;
   // scoreBoard.textContent = score;
   //location.reload();
}
function endGame(){
   if(score==10){
      message.textContent = "Well done !🩷 you won💖"
      document.getElementById("soumi").style.visibility = "visible";
   }

}