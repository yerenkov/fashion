let imgs = [
    "1950/2023-11-12 23.30.21.jpg",
    "1950/2023-11-12 23.30.36.jpg",
    "1950/2023-11-12 23.30.44.jpg",
]
let counter = 0
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

setInterval(() => {
    counter = (counter + 1) % imgs.length
    document.getElementsByClassName("mainImage")[0].src = imgs[counter]
}, 5000)