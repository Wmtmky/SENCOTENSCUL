var lessons;

window.onload = function() {
    loadPage();
}

function redirectMain() {
    window.location.assign("https://wmtmky.github.io/SENCOTENSCUL")
}

function loadPage() {
    let resource = location.href.split("SENCOTENSCUL/")[1];
    if(!resource) return;

    if(resource.includes("overview")) {
        let overviewPage = resource.split("#")[1];
        if(!+overviewPage) return redirectMain();

        fetch("https://wmtmky.github.io/SENCOTENSCUL/lessons.json")
        .then(jsonFile => lessons = jsonFile.json())

        loadOverview(overviewPage);
    }
}

function loadOverview(pageID) {
    let overviewTitle = document.getElementById("overview-title");
    let overviewDesc = document.getElementById("overview-desc");
    let overviewCitation = document.getElementById("overview-citation");
    let overviewContent = document.getElementById("overview-content");

    overviewTitle.innerText = "Unit " + pageID.toUpperCase() + ": " + lessons[pageID].title;
    overviewDesc.innerText = lesson[pageID].desc;
    overviewCitation.innerText = lesson[pageID].citation;

}


function toggleInfobox() {
    let infoLightbox = document.getElementById('info-lightbox');
    infoLightbox.style.display = (infoLightbox.style.display != 'flex') ? 'flex' : 'none';
}

function toggleUnit(unitNum, event) {
    if(event.target?.innerText.match("exercise|subdirectory")) return;
    console.log(unitNum)

    //save to local storsge

    window.location.assign("https://wmtmky.github.io/SENCOTENSCUL/overview#" + unitNum);
}











