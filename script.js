let songContainer = document.querySelector(".song-container")
let songInfo = document.querySelector(".song-info")
let progressContainer = document.querySelector(".progress-container")
let progress = document.querySelector(".progress")
let title = document.querySelector(".title")
let img = document.querySelector("#img")
let audio = document.querySelector(".audio")
let playBtn = document.querySelector(".fa-play")
let backward = document.querySelector(".backward")
let forward = document.querySelector(".forward")


let musics = ["Emin_Sabitoglu-Ad_Gunu", "Pera-Adini_sen_koy", "Pera-Agla", "Yiruma-River_flows_in_you", "Miri_Yusif-Xatire", "Edis-Buz_Kiragi"]
let index = 0

loadMusic(musics[index])


function loadMusic(music) {
    title.innerText = music
    audio.src = `mp3/${music}.mp3`
    img.src = `images/${music}.jpg`
}
function playMusic() {
    songContainer.classList.add("play")
    playBtn.classList.remove('fa-play')
    playBtn.classList.add('fa-pause')
    audio.play()
}
function pauseMusic() {
    songContainer.classList.remove("play")
    playBtn.classList.add('fa-play')
    playBtn.classList.remove('fa-pause')
    audio.pause()

}
function update(e) {
    e.srcElement.duration
    e.srcElement.currentTime
    let percent = (e.srcElement.currentTime / e.srcElement.duration) * 100
    progress.style.width = `${percent}%`
    if (percent === 100) {
        forwardFunc()
    }
}
function goForward(e) {
    const w = this.clientWidth
    const x = e.offsetX
    const duration = audio.duration
    audio.currentTime = (x / w) * duration
}
playBtn.addEventListener("click", () => {
    const isPlaying = songContainer.classList.contains("play")
    if (isPlaying) {
        pauseMusic()
    } else {
        playMusic()
    }
})

forward.addEventListener("click", forwardFunc = () => {
    index++
    if (index > musics.length - 1) {
        index = 0
    }
    loadMusic(musics[index])
    playMusic()
})


backward.addEventListener("click", function () {
    index--
    if (index < 0) {
        index = musics.length - 1
    }
    loadMusic(musics[index])
    playMusic()
})


audio.addEventListener("timeupdate", update)
progressContainer.addEventListener("click", goForward)

