"use strict";

var songContainer = document.querySelector(".song-container");
var songInfo = document.querySelector(".song-info");
var progressContainer = document.querySelector(".progress-container");
var progress = document.querySelector(".progress");
var title = document.querySelector(".title");
var img = document.querySelector("#img");
var audio = document.querySelector(".audio");
var playBtn = document.querySelector(".fa-play");
var backward = document.querySelector(".backward");
var forward = document.querySelector(".forward");
var musics = ["Emin_Sabitoglu-Ad_Gunu", "Pera-Adini_sen_koy", "Pera-Agla", "Yiruma-River_flows_in_you", "Miri_Yusif-Xatire", "Edis-Buz_Kiragi"];
var index = 0;
loadMusic(musics[index]);

function loadMusic(music) {
  title.innerText = music;
  audio.src = "mp3/".concat(music, ".mp3");
  img.src = "images/".concat(music, ".jpg");
}

function playMusic() {
  songContainer.classList.add("play");
  playBtn.classList.remove('fa-play');
  playBtn.classList.add('fa-pause');
  audio.play();
}

function pauseMusic() {
  songContainer.classList.remove("play");
  playBtn.classList.add('fa-play');
  playBtn.classList.remove('fa-pause');
  audio.pause();
}

function update(e) {
  e.srcElement.duration;
  e.srcElement.currentTime;
  var percent = e.srcElement.currentTime / e.srcElement.duration * 100;
  progress.style.width = "".concat(percent, "%");

  if (percent === 100) {
    forwardFunc();
  }
}

function goForward(e) {
  var w = this.clientWidth;
  var x = e.offsetX;
  var duration = audio.duration;
  audio.currentTime = x / w * duration;
}

playBtn.addEventListener("click", function () {
  var isPlaying = songContainer.classList.contains("play");

  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});
forward.addEventListener("click", forwardFunc = function forwardFunc() {
  index++;

  if (index > musics.length - 1) {
    index = 0;
  }

  loadMusic(musics[index]);
  playMusic();
});
backward.addEventListener("click", function () {
  index--;

  if (index < 0) {
    index = musics.length - 1;
  }

  loadMusic(musics[index]);
  playMusic();
});
audio.addEventListener("timeupdate", update);
progressContainer.addEventListener("click", goForward);