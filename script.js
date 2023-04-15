let version = "202304151344";

var root = document.querySelector(':root');
var lessonsJSON = 
{
    "i":{
        "title":"The SENĆOŦEN Language",
        "desc":"This unit is a preface to learning the SENĆOŦEN language. It contextualizes the place of SENĆOŦEN within its neighbours, and discusses the nature of words. There are no exercises in this unit.",
        "citation":"Part 1, Pages 2-7",
        "color":"green",
        "exerciseCount":0,
        "lessons":{
            "i.1":{
                "desc":"The Context of SENĆOŦEN",
                "exerciseless":true
            },
            "i.2":{
                "desc":"The SENĆOŦEN Word",
                "exerciseless":true
            }
        }
    },
    "ii":{
        "title":"The SENĆOŦEN Alphabet",
        "desc":"In the 1970's, SENĆOŦEN language was in danger of going extinct, as younger generations were growing up speaking English. Seeing the urgency, Dave Elliot Sr. (1910 - 1985) created a writing system so remaining fluent speakers could teach the language to younger generations. He devised it so it would be easy to learn: it would be based off English, there would be one symbol per sound, and there would be no unusual characters such as those found in the standard alphabets of other indigenous North American languages.<br>The SENĆOŦEN Alphabet:<br>A Á Ⱥ B C Ć Ȼ D E H I Í J K ₭ Ḵ Ḱ L Ƚ M N Ṉ O P Q S Ś T Ŧ Ⱦ Ṯ U W W̱ X X̱ Y",
        "citation":"Part 2, Pages 1-17",
        "color":"blue",
        "exerciseCount":0,
        "lessons":{
            "ii.1":{
                "desc":""
            },
            "ii.2":{
                "desc":""
            }
        }
    },
    "iii":{
        "title":"Useful Phrases",
        "desc":"Twenty-four useful phrases that should be learned right away according to Professor Montler.",
        "citation":"Part 1, Page 7",
        "color":"red",
        "exerciseCount":0,
        "lessons":{
            "iii.1":{
                "desc":""
            },
            "iii.2":{
                "desc":""
            }
        }
    },
    "1":{
        "title":"The Basic Sentence",
        "desc":"",
        "citation":"§1.1 - §1.2",
        "color":"purple",
        "exerciseCount":0,
        "lessons":{
            "1.1":{
                "desc":""
            },
            "1.2":{
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
        if(lessonsJSON?.[overviewPage] == undefined) return redirectMain();

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
    overviewCitation.innerText = "Reference: Saanich Grammar, " + lessonsJSON[pageID].citation;

    root.style.setProperty('--accent', "var(" + lessonsJSON[pageID].color + "-medium)");

    for(let lesson in lessonsJSON[pageID].lessons) {
        overviewContent.innerHTML +=
        `<div class="lesson-btn-wrap">
            <div class="material-symbols-outlined" onclick="loadLearn('${lesson}')">menu_book</div>
        </div>
        <div class="lesson-btn-wrap">
            <div class="material-symbols-outlined" onclick="loadExercise('${lesson}')">exercise</div>
        </div>
        <div class="lesson-desc">${lessonsJSON[pageID].lessons[lesson].desc}</div>`;
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











