

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

