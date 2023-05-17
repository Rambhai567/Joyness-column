// function playAudio(audioId) {
//     var audio = document.getElementById(audioId);
//     audio.play();
//   }

//   function pauseAudio(audioId) {
//     var audio = document.getElementById(audioId);
//     audio.pause();
//   }








// var playButton = document.getElementById("playButton");
// var audio = document.getElementById("audioPlayer");


// playButton.addEventListener("click", function() {
//   if (audio.paused) {
//     audio.play();
//     playButton.textContent = "Pause Music";
//   } else {
//     audio.pause();
//     playButton.textContent = "Play Music";
//   }
// });


let playButton =  document.getElementById("playButton");
let audio = document.getElementById("audioPlayer");


playButton.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
    playButton.textContent = "Pause Music";
  } else {
    audio.pause();
    playButton.textContent = "Play Music";
  }
});








//  playButton.addEventlistner("click", function(){
//     if (audioPlayer.paused) {
//         audioPlayer.play();
//         playbtn.textContent = "Pause Music";
//     }else {
//             audioPlayer.pause();
//             playbtn.textContent = "Play Music";
//           }
//  });
