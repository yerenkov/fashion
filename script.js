

function openTab(e, season) {
    // let tabcontent = document.getElementsByClassName("tabcontent");
    // for (i = 0; i < tabcontent.length; i++) {
    //     tabcontent[i].style.display = "none";
    // }

    let activeBtn = document.getElementsByClassName("activeBtn")[0]
    let activeTab = document.getElementsByClassName("activeTab")[0]
    let nextTab = document.getElementById(season)
    activeBtn.classList.remove("activeBtn")
    e.target.classList.add("activeBtn")
    activeTab.classList.remove("activeTab")
    nextTab.classList.add("activeTab")
}

let radio = document.getElementById("radio")
let audio = document.getElementById("audio")
let year = parseInt(document.getElementById("year").innerHTML)

let audioCounter = 0
audio.children[0].src = year+"0.mp3"
let maxCounter = year === 1950 ? 3 : 4
audio.load();
let canPlay = true
let time = 0

radio.onclick = () => {
    if (canPlay) {
        audio.currentTime = time
        audio.play()
    } else {
        time = audio.currentTime
        audio.pause()
    }
    canPlay = !canPlay
}

audio.addEventListener("ended", () => {
    audioCounter++
    console.log(year+"" + audioCounter+".mp3");
    audio.children[0].src = year+"" + (audioCounter%maxCounter)+".mp3"
    audio.load();
    audio.play()
});