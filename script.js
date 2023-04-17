let version = "alpha-1.0";

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
                "desc":"Contextualizing SENĆOŦEN",
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
        "desc":"This unit looks at the simplest phrases employing transitive and intransitive verbs. In these phrases, the verbs always comes first, followed by the subject which in this case will be a pronoun.<br>Recall that intransitive verbs cannot have a direct object, while transitive verbs do.<br>In SENĆOŦEN, transitive verbs also always end in a <em>transitivising suffix</em> like -T, -NEW̱, or -TW̱. Intransitive verbs cannot end with these suffixes but could still naturally end with those letters.<br><br>Examples:<br>Intransitive: She runs away &rarr; ȽÁU<br>Transitive: He hit her &rarr; ŚJET",
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
            },
            "1.4":{
                "desc":"Transitive Verbs I"
            },
            "1.5":{
                "desc":"Transitive Verbs II"
            },
            "1.6":{
                "desc":"Transitive Verbs III"
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
    "1.1":"Singular pronouns refer to one participant: that is I, you, he, she, or it.<br>Observe the following models:<br><br>YÁ¸ SEN. &rarr; I go.<br>YÁ¸ SW̱. &rarr; You go.<br>YÁ¸. &rarr; He/She/It goes.<br><br>Observe how the verb comes before the subject. The pronouns after the verb are <em>particles</em>, which cannot act as words by themselves. Note the subject is implied to be a third person (he/she/it) by default.<br><br>Here are some more intransitive verbs, which all happen to be motion related.<br><br>YÁ¸ &rarr; 'go'<br>ŚTEṈ &rarr; Walk<br>ȻONEṈET &rarr; 'run'<br>W̱ITEṈ &rarr; 'jump'",
    "1.2":"1.2 lesson",
    "1.3":"1.3 lesson",
}
var exerciseJSON = {
    "ii.1":[],
    "ii.2":[],
    "iii.1":[],
    "iii.2":[],
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
        {
            "type":"gse",
            "prompt":"YÁ¸.",
            "answers":[
                "he goes",
                "she goes",
                "it goes"
            ]
        }
    ],
    "1.2":[

    ],
    "1.3":[

    ]
}
var completedJSON = {
    // intentionally blank
}
var currentExercises = [];
var maxExerciseLength = 20;

window.onload = function() {
    loadPage();
}

/* Load Page Features*/

function redirectMain() {
    window.location.assign("https://wmtmky.github.io/SENCOTENSCUL/")
}

function loadPage() {
    let resource = location.href.split("SENCOTENSCUL/")[1];
    if(!resource) {
        loadCompleted();
        for (unit in lessonsJSON) {
            document.getElementById("unit-" + unit + "-total").innerText = countUnitExercises(unit);
        }
        return;
    }

    let subPage = resource.split("#")[1];

    if(resource.includes("overview")) {
        if(lessonsJSON[subPage] == undefined) return redirectMain();
        loadOverview(subPage);
        loadCompleted(subPage);
    }

    else if(resource.includes("learn")) {
        if(textbookJSON[subPage] == undefined) return redirectMain();
        loadLearn(subPage);
    }

    else if(resource.includes("exercise")) {
        if(exerciseJSON[subPage] == undefined) return redirectMain();
        loadExercise(subPage);
    }

}

function loadOverview(pageID) {
    let overviewTitle = document.getElementById("overview-title");
    let overviewDesc = document.getElementById("overview-desc");
    let overviewCitation = document.getElementById("overview-citation");
    let overviewContent = document.getElementById("overview-content");
    let overviewExercise = document.getElementById("overview-exercise");

    overviewTitle.innerText = "Unit " + pageID.toUpperCase() + ": " + lessonsJSON[pageID].title;
    overviewDesc.innerHTML = lessonsJSON[pageID].desc;
    overviewCitation.innerText = "Reference: Saanich Grammar, " + lessonsJSON[pageID].citation;
    overviewContent.innerHTML = "";
    overviewExercise.setAttribute('onclick', `unitExercise('${pageID}')`);

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
            <div id="lesson-${lesson}-exercise" class="material-symbols-outlined ${isExerciseless}" onclick="redirectExercise('${lesson}', this)">exercise</div>
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
        <div id="lesson-exercise" class="material-symbols-outlined" onclick="redirectExercise('${lessonID}', this)">exercise</div>
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
        <h2 id="prompt"></h2>
        <div id="prompt-content"></div>
        <textarea id="input"></textarea>
        <div id="spec-chars">
            <div>Á</div>
            <div>Ⱥ</div>
            <div>Ć</div>
            <div>Ȼ</div>
            <div>Í</div>
            <div>₭</div>
            <div>Ḵ</div>
            <div>Ḱ</div>
            <div>Ƚ</div>
            <div>Ṉ</div>
            <div>Ś</div>
            <div>Ŧ</div>
            <div>Ⱦ</div>
            <div>Ṯ</div>
            <div>W̱</div>
            <div>X̱</div>
        </div>
    </main>
    <footer id="exercise-footer">
        <div id="question-status">
            <div id="question-correctness"></div>
            <div id="question-correct-answer"></div>
        </div>
        <div id="next-question-btn">Check Answer</div>
    </footer>
    `

    // Durstenfeld Shuffle
    let temp = [...exerciseJSON[lessonID]];
    for (let i = temp.length - 1; i > 0; i --) {
        let j = Math.floor(Math.random() * (i + 1));
        [ temp[i], temp[j] ] = [ temp[j], temp[i] ];
    }
    currentExercises = temp.slice(0, Math.min(temp.length, maxExerciseLength));

    document.getElementById('exercise-total').innerText = currentExercises.length;

    nextQuestion(0, lessonID);

}

function loadCompleted(unitID) {
    let storedCompleted = localStorage.getItem("completed");
    if(storedCompleted) completedJSON = JSON.parse(storedCompleted);
    
    if(unitID == undefined) {
        for(unit in completedJSON) {
            let unitProgressDiv = document.getElementById("unit-" + unit + "-progress");
            let unitStatus = document.getElementById("unit-" + unit + "-status");

            let unitProgress = Object.keys(completedJSON[unit]).length;
            unitProgressDiv.innerText = unitProgress;

            if(unitProgress >= countUnitExercises(unit)) {
                unitStatus.innerText = "done";
            }
        }
        return;
    }

    for(lesson in completedJSON[unitID]) {
        document.getElementById("lesson-" + lesson + "-exercise").innerText = "done";
    }

}

/* Redirect */

function redirectUnit(unitID, event) {
    if(event?.target?.innerText.match("exercise|subdirectory")) return;
    if(lessonsJSON[unitID] == undefined) return

    window.location.assign("https://wmtmky.github.io/SENCOTENSCUL/overview#" + unitID);
}

function redirectLearn(lessonID) {
    window.location.assign("https://wmtmky.github.io/SENCOTENSCUL/learn#" + lessonID);
}

function redirectExercise(lessonID, elem) {
    if(elem.classList.contains('exerciseless')) return;
    window.location.assign("https://wmtmky.github.io/SENCOTENSCUL/exercise#" + lessonID);
}

/* Accessory Functions */

function resetProgress() {
    localStorage.clear();
}

function toggleInfobox() {
    let infoLightbox = document.getElementById('info-lightbox');
    infoLightbox.style.display = (infoLightbox.style.display != 'flex') ? 'flex' : 'none';
}

function countUnitExercises(unit) {
    let count = 0;
    for (lesson in lessonsJSON[unit].lessons) {
        if(!lessonsJSON[unit].lessons[lesson].exerciseless) count++;
    }
    return count;
}

function unitEnter(unitID) {
    if (lessonsJSON[unitID] == undefined) return;
    for (lesson in lessonsJSON[unitID].lessons) {
        if (!completedJSON[unitID]?.[lesson]) {
            return redirectLearn(lesson);
        }
    }
}

function unitExercise(unitID) {
    console.log("Not Available at this time - Unit " + unitID);
}

/* Exercise Functions */

function nextQuestion(qNum, lessonID) {

    if(qNum >= currentExercises.length) return completeExercise(lessonID);

    let currentExercise = currentExercises[qNum];

    let prompt = document.getElementById('prompt');
    let promptContent = document.getElementById('prompt-content');
    let inputArea = document.getElementById('input');
    let specChars = document.getElementById('spec-chars');

    let exerciseProgress = document.getElementById('exercise-progress');
    let questionCorrectness = document.getElementById('question-correctness');
    let questionCorrectAnswer = document.getElementById('question-correct-answer');
    let nextQuestionBtn = document.getElementById('next-question-btn');

    exerciseProgress.innerText = qNum + 1;
    questionCorrectness.innerText = "";
    questionCorrectAnswer.innerText = "";

    nextQuestionBtn.innerText = "Check Answer";
    nextQuestionBtn.setAttribute('onclick', `checkAnswer(${qNum}, '${lessonID}')`);
    nextQuestionBtn.className = "";

    let exerciseFooter = document.getElementById('exercise-footer');
    exerciseFooter.style.backgroundColor = "var(--grey-light)";
    exerciseFooter.style.color = "var(--grey-dark)";

    inputArea.value = "";
    if (currentExercise.type == "gse") {
        prompt.innerHTML = "Translate the following sentence to English:";
        promptContent.innerHTML = currentExercise.prompt;
        specChars.style.display = "none";
    }
    else if (currentExercise.type == "ges") {
        prompt.innerHTML = "Translate the following sentence to SENĆOŦEN:";
        promptContent.innerHTML = currentExercise.prompt;
        specChars.style.display = "flex";
    }

}

function checkAnswer(qNum, lessonID) {

    let currentExercise = currentExercises[qNum];

    let inputArea = document.getElementById('input');
    let inputAnswer = inputArea.value.replace(/[^0-9a-zA-Z ÁȺĆȻÍ₭ḴḰȽṈŚŦȾṮW̱X̱]/g, "").replace(/\s{2,}/g, " ").trim();
    
    if (currentExercise.type == "gse") inputAnswer = inputAnswer.toLowerCase();
    else if(currentExercise.type == "ges") inputAnswer = inputAnswer.toUpperCase();

    let exerciseFooter = document.getElementById('exercise-footer');
    let questionCorrectness = document.getElementById('question-correctness');
    let questionCorrectAnswer = document.getElementById('question-correct-answer');
    let nextQuestionBtn = document.getElementById('next-question-btn');
    
    if (!inputAnswer) {
        questionCorrectness.innerText = "Input your answer into the text field before continuing";
        return;
    }
    
    nextQuestionBtn.innerText = "Next";
    setTimeout(function() {
        nextQuestionBtn.setAttribute('onclick', `nextQuestion(${qNum + 1}, '${lessonID}')`);
    }, 1000);

    if (currentExercise.answers.includes(inputAnswer)) {
        questionCorrectness.innerText = "Correct!";
        exerciseFooter.style.backgroundColor = "var(--green-light)";
        exerciseFooter.style.color = "var(--green-dark)";
        nextQuestionBtn.classList.add('correct-answer');
        return;
    }

    questionCorrectness.innerText = "Incorrect... The correct answer was";
    questionCorrectAnswer.innerText = currentExercise.answers[0];
    exerciseFooter.style.backgroundColor = "var(--red-light)";
    exerciseFooter.style.color = "var(--red-dark)";
    nextQuestionBtn.classList.add('incorrect-answer');

}

function completeExercise(lessonID) {
    let unitID = lessonID.split(".")[0];

    let prompt = document.getElementById('prompt');
    let promptContent = document.getElementById('prompt-content');
    let inputArea = document.getElementById('input');
    let specChars = document.getElementById('spec-chars');

    prompt.innerText = "Congratulations!"
    prompt.style.textAlign = "center";
    promptContent.replaceChildren();
    inputArea.style.display = 'none';
    specChars.style.display = 'none';

    if (!completedJSON[unitID]) completedJSON[unitID] = {};
    completedJSON[unitID][lessonID] = true;
    localStorage.setItem("completed", JSON.stringify(completedJSON));

    let nextQuestionBtn = document.getElementById('next-question-btn');
    nextQuestionBtn.setAttribute('onclick', `redirectUnit('${unitID}')`);
}