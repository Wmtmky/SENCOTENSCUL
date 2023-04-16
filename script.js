let version = "04161519";

var root = document.querySelector(':root');
var body = document.querySelector('body');
var lessonsJSON = 
{
    "i":{
        "title":"The SENĆOŦEN Language",
        "desc":"This unit is a preface to learning the SENĆOŦEN language. It contextualizes the place of SENĆOŦEN within its neighbours, and discusses the nature of words.<br>There are no exercises in this unit.",
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
        "desc":"In the 1970's, the SENĆOŦEN language was in danger of going extinct, as younger generations were growing up speaking English. Seeing the urgency, Dave Elliot Sr. (1910 - 1985) created a writing system so remaining fluent speakers could teach the language to younger generations. He devised it so it would be easy to learn: it would be based off English, there would be one symbol per sound, and there would be no unusual characters such as those found in the standard alphabets of other indigenous North American languages.<br><br>The SENĆOŦEN Alphabet:<br>A Á Ⱥ B C Ć Ȼ D E H I Í J K ₭ Ḵ Ḱ L Ƚ M N Ṉ O P Q S Ś T Ŧ Ⱦ Ṯ U W W̱ X X̱ Y",
        "citation":"Part 2, Pages 1-17",
        "color":"blue",
        "exerciseCount":0,
        "lessons":{
            "ii.1":{
                "desc":"Not Available"
            },
            "ii.2":{
                "desc":"Not Available"
            }
        }
    },
    "iii":{
        "title":"Useful Phrases",
        "desc":"Twenty-four useful phrases that should be learned 'right away' according to Professor Montler. In fact, they are given before the alphabet is in <em>Saanich Grammar</em>!",
        "citation":"Part 1, Page 7",
        "color":"red",
        "exerciseCount":0,
        "lessons":{
            "iii.1":{
                "desc":"Not Available"
            },
            "iii.2":{
                "desc":"Not Available"
            }
        }
    },
    "1":{
        "title":"The Basic Sentence",
        "desc":"This unit looks at the simplest phrases employing transitive and intransitive verbs. In these phrases, the verbs always comes first, followed by the subject which in this case will be a pronoun. To clarify: Intransitive verbs cannot have a direct object, while Transitive verbs do. In SENĆOŦEN, transitive verbs also always end in a<em>transitivising suffix</em> like -T, -NEW̱, or -TW̱. Intransitive verbs cannot end with these suffixes but could still naturally end with those letters.<br><br>Examples:<br>Intransitive: She runs away &rarr; ȽÁU<br>Transitive: He hit her &rarr; ŚJET",
        "citation":"§1.1 - §1.2",
        "color":"purple",
        "exerciseCount":0,
        "lessons":{
            "1.1":{
                "desc":"Intranstive Verbs I: Singular Pronouns, Motion Verbs"
            },
            "1.2":{
                "desc":"Intransitive Verbs II: Plural Pronouns, Verbs from Everyday Life"
            },
            "1.3":{
                "desc":"Intransitive Verbs III: Extra Notes"
            }
        }
    }
}
var textbookJSON = {
    "i.1":"Lesson I.1 is Not Available",
    "i.2":"Lesson I.2 is Not Available",
    "ii.1":"Lesson II.1 is Not Available",
    "ii.2":"Lesson II.2 is Not Available",
    "iii.1":"Lesson III.1 is Not Available",
    "iii.2":"Lesson III.2 is Not Available",
    "1.1":"Singular pronouns refer to one participant: that is I, you, he, she, or it.<br>Observe the following models:<br><br>YÁ¸ SEN. &rarr; I go.<br>YÁ¸ SW̱. &rarr; You go.<br>YÁ¸. &rarr; He/She/It goes.<br><br>Observe how the verb comes before the subject. The pronouns after the verb are<em>particles</em>, which cannot act as words by themselves. Note the subject is implied to be a third person (he/she/it) by default.<br><br>Here are some more intransitive verbs, which all happen to be motion related.<br><br>YÁ¸ &rarr; 'go'<br>ŚTEṈ &rarr; Walk<br>ȻONEṈET &rarr; 'run'<br>W̱ITEṈ %rarr; 'jump'",
    "1.2":"1.2 lesson",
    "1.3":"1.2 lesson",
}
var exerciseJSON = {
    "ii.1":{},
    "ii.2":{},
    "iii.1":{},
    "iii.2":{},
    "1.1":[
        {
            "type":"gse",
            "prompt":"YÁ¸ SEN.",
            "answers":[
                "i go"
            ]
        },
        {
            "type":"gse",
            "prompt":"YÁ¸ SW̱.",
            "answers":[
                "you go"
            ]
        },
    ],
    "1.2":{

    },
    "1.3":{

    }
}
var completeJSON = {
    // intentionally blank
}

window.onload = function() {
    loadPage();
}

/* Load Page Features*/

function redirectMain() {
    window.location.assign("https://wmtmky.github.io/SENCOTENSCUL/")
}

function loadPage() {
    let resource = location.href.split("SENCOTENSCUL/")[1];
    if(!resource) return;

    let subPage = resource.split("#")[1];

    if(resource.includes("overview")) {
        if(lessonsJSON?.[subPage] == undefined) return redirectMain();
        loadOverview(subPage);
    }

    if(resource.includes("learn")) {
        if(textbookJSON?.[subPage] == undefined) return redirectMain();
        loadLearn(subPage);
    }

    if(resource.includes("exercise")) {
        if(exerciseJSON?.[subPage] == undefined) return redirectMain();
        loadExercise(subPage);
    }

}

function loadOverview(pageID) {
    let overviewTitle = document.getElementById("overview-title");
    let overviewDesc = document.getElementById("overview-desc");
    let overviewCitation = document.getElementById("overview-citation");
    let overviewContent = document.getElementById("overview-content");

    overviewTitle.innerText = "Unit " + pageID.toUpperCase() + ": " + lessonsJSON[pageID].title;
    overviewDesc.innerHTML = lessonsJSON[pageID].desc;
    overviewCitation.innerText = "Reference: Saanich Grammar, " + lessonsJSON[pageID].citation;
    overviewContent.innerHTML = "";

    root.style.setProperty('--accent-medium', "var(--" + lessonsJSON[pageID].color + "-medium)");
    root.style.setProperty('--accent-light', "var(--" + lessonsJSON[pageID].color + "-light)");
    root.style.setProperty('--accent-dark', "var(--" + lessonsJSON[pageID].color + "-dark)");

    for(let lesson in lessonsJSON[pageID].lessons) {
        let isExerciseless = "";
        if (lessonsJSON[pageID].lessons[lesson].exerciseless) isExerciseless = "exerciseless"; 

        overviewContent.innerHTML +=
        `<h3>${lesson.toUpperCase()}</h3>
        <div class="lesson-btn-wrap">
            <div class="material-symbols-outlined" onclick="redirectLearn('${lesson}')">menu_book</div>
        </div>
        <div class="lesson-btn-wrap">
            <div class="material-symbols-outlined ${isExerciseless}" onclick="redirectExercise('${lesson}')">exercise</div>
        </div>
        <div class="lesson-desc">${lessonsJSON[pageID].lessons[lesson].desc}</div>`;
    }

}

function loadLearn(lessonID) {
    let unitID = lessonID.split(".")[0];
    body.innerHTML +=
    `<nav id="learn-header">
        <div class="material-symbols-outlined" onclick="redirectUnit('${unitID}')">arrow_back_ios</div>
        <h2 id="lesson-title">Lesson ${lessonID.toUpperCase()}</h2>
    <div id="lesson-exercise" class="material-symbols-outlined" onclick="redirectExercise('${lessonID}')">exercise</div>
    </nav>
    <main id="lesson-body">
        ${textbookJSON[lessonID]}
    </main>`
}

function loadExercise(lessonID) {
    let unitID = lessonID.split(".")[0];
    body.innerHTML +=
    `<nav id="exercise-header">
        <div class="material-symbols-outlined" onclick="redirectUnit('${unitID}')">arrow_back_ios</div>
        <h2 id="exercise-title">Exercise ${lessonID.toUpperCase()}</h2>
    <div id="exercise-stats"><span id="exercise-progress">0</span> / <span id="exercise-total">0</span></div>
    </nav>
    <main id="exercise-body">
        ${exerciseJSON[lessonID]}
    </main>`
}

/* Redirect */

function redirectUnit(unitID, event) {
    if(event?.target?.innerText.match("exercise|subdirectory")) return;

    window.location.assign("https://wmtmky.github.io/SENCOTENSCUL/overview#" + unitID);
}

function redirectLearn(lessonID) {
    window.location.assign("https://wmtmky.github.io/SENCOTENSCUL/learn#" + lessonID);
}

function redirectExercise(lessonID) {
    window.location.assign("https://wmtmky.github.io/SENCOTENSCUL/exercise#" + lessonID);
}

/* Nav Functions */

function toggleInfobox() {
    let infoLightbox = document.getElementById('info-lightbox');
    infoLightbox.style.display = (infoLightbox.style.display != 'flex') ? 'flex' : 'none';
}

function exitLesson(lessonID) {
    redirectUnit(lessonID.split(".")[0]);
}



