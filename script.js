var lessons;

window.onload = function() {
    loadPage();
}

function loadPage() {
    let resource = location.href.split("SENCOTENSCUL/")[1];
    if(!resource) return;

    if(resource.includes("overview")) {
        let overviewPage = resource.split("#")[1];
        if(!overviewPage) return location.href.replace("https://wmtmky.github.io/SENCOTENSCUL");

        fetch("https://wmtmky.github.io/SENCOTENSCUL/lessons.json")
        .then(jsonFile => jsonFile.json())
        .then(jsonObject => lessons = JSON.parse(jsonObject))

        loadOverview(overviewPage);
    }
}

function loadOverview(pageID) {
    let overviewTitle = document.getElementById("overview-title");

    overviewTitle.innerText = "Unit " + pageID.toUpperCase() + ": " + lessons[pageID].title;
}


function toggleInfobox() {
    let infoLightbox = document.getElementById('info-lightbox');
    infoLightbox.style.display = (infoLightbox.style.display != 'flex') ? 'flex' : 'none';
}

function toggleUnit(unitNum, event) {
    if(event.target?.innerText.match("exercise|subdirectory")) return;

    //save to local storsge

    location.href.replace("https://wmtmky.github.io/SENCOTENSCUL/overview#" + unitNum);
}











