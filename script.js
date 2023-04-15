var lessonsJSON = 
{
    "i":{
        "title":"The SENĆOŦEN Language",
        "desc":"",
        "citation":"Part A",
        "exerciseCount":0,
        "lessons":{
            "i.1":{
                "desc":"",
                "exerciseless":true
            },
            "i.2":{
                "desc":"",
                "exerciseless":true
            }
        }
    },
    "ii":{
        "title":"The SENĆOŦEN Alphabet",
        "desc":"",
        "citation":"Part A",
        "exerciseCount":0,
        "lessons":{
            "ii.1":{
                "desc":""
            },
            "ii.2":{
                "desc":""
            }
        }
    }
}

window.onload = function() {
    loadPage();
}

function redirectMain() {
    window.location.assign("https://wmtmky.github.io/SENCOTENSCUL/")
}

function loadPage() {
    let resource = location.href.split("SENCOTENSCUL/")[1];
    if(!resource) return;

    if(resource.includes("overview")) {
        let overviewPage = resource.split("#")[1];
        if(lessonsJSON[overviewPage] == undefined) return redirectMain();

        loadOverview(overviewPage);
    }
}

function loadOverview(pageID) {
    let overviewTitle = document.getElementById("overview-title");
    let overviewDesc = document.getElementById("overview-desc");
    let overviewCitation = document.getElementById("overview-citation");
    let overviewContent = document.getElementById("overview-content");

    overviewTitle.innerText = "Unit " + pageID.toUpperCase() + ": " + lessonsJSON[pageID].title;
    overviewDesc.innerText = lessonsJSON[pageID].desc;
    overviewCitation.innerText = lessonsJSON[pageID].citation;

    for(let lesson in lessonsJSON[pageID].lessons) {
        overviewContent.innerHTML +=
        `<div class="lesson-btn-wrap">
            <div class="material-symbols-outlined" onclick="loadLearn('${lesson}')">menu_book</div>
        </div>
        <div class="lesson-btn-wrap">
            <div class="material-symbols-outlined" onclick="loadReview('${review}')">exercise</div>
        </div>
        <div class="lesson-desc">${lesson.desc}</div>`;
    }

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











