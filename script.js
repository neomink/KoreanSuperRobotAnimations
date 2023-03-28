console.log("hello")

const robots = {
    ironMan007: {
        "english_title": "Iron Man 007",
        "korean_title": "철인 007",
        "year": "1974",
        "director": "ha-rim han",
        "production": "dong-ah advertisement",
        "duration": "64 minutes",
        "skills": "rocket fists",
        "images": "iron-man-007.png",
        "youtube": "49F8xMCAjnU"
    },
    robotTaekwonV: {
        "english_title": "Robot Taekwon V",
        "korean_title": "로보트 태권 브이",
        "year": "1976",
        "director": "chung-gi kim",
        "production": "u production",
        "duration": "85 minutes",
        "skills": "missile",
        "images": "robot-taekwon-v.png",
        "youtube": "i4DF-L4kRCE"
    },
    robotTaekwonVSpaceOperation: {
        "english_title": "Robot Taekwon V: Space Operation",
        "korean_title": "로보트 태권 브이 제 2탄: 우주작전",
        "year": "1976",
        "director": "chung-gi kim",
        "production": "u production",
        "duration": "75 minutes",
        "skills": "missile",
        "images": "robot-taekwon-v-space-operation.png",
        "youtube": "eS_XeQiH67U"
    },
    robotKing: {
        "english_title": "Robot King",
        "korean_title": "로보트 킹",
        "year": "1977",
        "director": "yung-rang bae",
        "production": "sun production",
        "duration": "67 minutes",
        "skills": "missile",
        "images": "robot-king.png",
        "youtube": "Fu_Q_MA1alo"
    },
    goldenWing123: {
        "english_title": "Golden Wing 1.2.3.",
        "korean_title": "황금날개 1.2.3",
        "year": "1977",
        "director": "chung-gi kim",
        "production": "se-jeong culture",
        "duration": "78 minutes",
        "skills": "missile",
        "images": "golden-wing-123.png",
        "youtube": "Xn2HnPZWbYE-"
    },
    runMazingaX: {
        "english_title": "Run Mazinga X",
        "korean_title": "달려라 마징가 X",
        "year": "1978",
        "director": "hyun-yong kim",
        "production": "se-kyung hung-eub",
        "duration": "75 minutes",
        "skills": "missile",
        "images": "run-mazinga-x.png",
        "youtube": "p4RvQVDWZaM"
    },
    robotTaekwonVGoldenWing: {
        "english_title": "Robot Taekwon V VS Golden Wing",
        "korean_title": "로보트 태권 브이와 황금날개의 대결",
        "year": "1978",
        "director": "chung-gi kim",
        "production": "Se-Jeong Culture",
        "duration": "71 minutes",
        "skills": "missile",
        "images": "robot-taekwon-v-vs-golden-wing.png",
        "youtube": "v7I9j0VKHA0"
    },
    robotTaekwonVMarineForce: {
        "english_title": "Robot Taekwon V: Marine Force",
        "korean_title": "로보트 태권 브이: 수중특공대",
        "year": "1978",
        "director": "chung-gi kim",
        "production": "u production",
        "duration": "75 minutes",
        "skills": "missile",
        "images": "robot-taekwon-v-marine-force.png",
        "youtube": "WFMD84JQekw"
    },
    flySpaceTurtleShip: {
        "english_title": "Fly! Space Turtle Ship",
        "korean_title": "날아라! 우주전함 거북선",
        "year": "1979",
        "director": "jung-ryul song",
        "production": "u production",
        "duration": "78 minutes",
        "skills": "missile",
        "images": "fly-space-turtle-ship.png",
        "youtube": "RF3f2NrS-wE"
    },
    spaceRobotThunderA: {
        "english_title": "Space Robot Thunder A",
        "korean_title": "혹성 로보트 썬더 A",
        "year": "1981",
        "director": "chung-gi kim, hang-li jo",
        "production": "nam-yang",
        "duration": "75 minutes",
        "skills": "missile",
        "images": "space-robot-thunder-a.png",
        "youtube": "toK0Wca8mt0"
    },
    superalloyRobotSolar123: {
        "english_title": "Superalloy Robot Solar 1.2.3",
        "korean_title": "초합급 로보트 쏠라 1.2.3",
        "year": "1982",
        "director": "chung-gi kim",
        "production": "seoul animation production",
        "duration": "72 minutes",
        "skills": "missile",
        "images": "superalloy-robot-solar-123.png",
        "youtube": "8mKnn-xa6bQ"
    },
    superTrio: {
        "english_title": "Super Trio",
        "korean_title": "슈퍼 삼총사",
        "year": "1982",
        "director": "jung-ryul song",
        "production": "k production",
        "duration": "76 minutes",
        "skills": "missile",
        "images": "super-trio.png",
        "youtube": "NiTCfnHzntY"
    },
    superMazinga3: {
        "english_title": "Super Mazinga 3",
        "korean_title": "슈퍼 마징가 3",
        "year": "1982",
        "director": "seung-chul park",
        "production": "dae-gwang",
        "duration": "66 minutes",
        "skills": "missile",
        "images": "super-mazinga-3.png",
        "youtube": "OmlQbGqO8q0"
    },
    marineExpeditionX: {
        "english_title": "Marine Expedition",
        "korean_title": "해저탐험대 마린 X",
        "year": "1982",
        "director": "hyun-dong kim",
        "production": "nam-yang",
        "duration": "78 minutes",
        "skills": "missile",
        "images": "marine-expedition-x",
        "youtube": "GatAIcPACEA"
    },
    superTaekwonV: {
        "english_title": "Super Taekwon V",
        "korean_title": "슈퍼 태권 브이",
        "year": "1982",
        "director": "chung-gi kim",
        "production": "seoul animation production",
        "duration": "75 minutes",
        "skills": "missile",
        "images": "super-taekwon-v.png",
        "youtube": "m3lIC2Cat3U"
    },
    superTitan15: {
        "english_title": "Super Titan 15",
        "korean_title": "슈퍼 타이탄 15",
        "year": "1983",
        "director": "seung-chul park",
        "production": "han-il culture",
        "duration": "68 minutes",
        "skills": "missile",
        "images": "super-titan-15.png",
        "youtube": "rEQMkuVd7SY"
    },
    superExpressMazinga7: {
        "english_title": "Super Express Mazinga 7",
        "korean_title": "슈퍼특급 마징가 7",
        "year": "1983",
        "director": "gu-hong lee",
        "production": "dae-gwang",
        "duration": "72 minutes",
        "skills": "missile",
        "images": "super-express-mazinga-7.png",
        "youtube": "hx1IMfV5bWM"
    },
    futureBoyKuntaAndBermuda5000Years: {
        "english_title": "Future Boy Kunta and Bermuda 5000 Years",
        "korean_title": "미래소년 쿤타 / 버뮤다 5000년",
        "year": "1983",
        "director": "sul-hyung park",
        "production": "dae-won animayion",
        "duration": "75 minutes",
        "skills": "missile",
        "images": "future-boy-kunta-and-bermuda-5000-years.png",
        "youtube": "1xYUraSDqZQ"
    },
    ironTrio: {
        "english_title": "Iron Trio",
        "korean_title": "철인 삼총사",
        "year": "1983",
        "director": "seung-chul park",
        "production": "dong-yang lab",
        "duration": "65 minutes",
        "skills": "missile",
        "images": "iron-trio.png",
        "youtube": "p62BZaqxUes"
    },
    spaceGandamV: {
        "english_title": "Space Gandom V",
        "korean_title": "스페이스 간담 브이",
        "year": "1984",
        "director": "chung-gi kim",
        "production": "seoul animation production",
        "duration": "80 minutes",
        "skills": "missile",
        "images": "space-gandam-v.png",
        "youtube": "plpoyO0536M"
    },
    videoRanger007: {
        "english_title": "Video Ranger 007",
        "korean_title": "비디오 레인저 007",
        "year": "1984",
        "director": "sung-woo lee",
        "production": "dae-won animation",
        "duration": "72 minutes",
        "skills": "missile",
        "images": "video-ranger.png",
        "youtube": "vzpFocmS4wE"
    },
    taekwonV84: {
        "english_title": "84 Taekwon V",
        "korean_title": "84 태권 브이",
        "year": "1984",
        "director": "chung-gi kim",
        "production": "seoul animation production",
        "duration": "77 minutes",
        "skills": "missile",
        "images": "84-taekwon-v.png",
        "youtube": "i-mTxooy4pU"
    },
    phoenixRobotKing: {
        "english_title": "Phoenix Robot King",
        "korean_title": "불사조 로보트 피닉스 킹",
        "year": "1984",
        "director": "soo-yong jung",
        "production": "dae-gwang",
        "duration": "68 minutes",
        "skills": "missile",
        "images": "phoenix-robot-king.png",
        "youtube": "nRFui-nzoEI"
    },
    robotKingSunshark: {
        "english_title": "Robot King Sun-shark",
        "korean_title": "로보트 킹 썬샤크",
        "year": "1985",
        "director": "seung-chul park",
        "production": "jae-sam",
        "duration": "67 minutes",
        "skills": "missile",
        "images": "robot-king-sunshark.png",
        "youtube": "ugMvtBb9OsY"
    },
    microForceDiayaTron5: {
        "english_title": "Micro Force diaya Tron 5",
        "korean_title": "마이크로 특공대 다이야트론 5",
        "year": "1985",
        "director": "bong-sik ahn, soo-yong jung",
        "production": "dae-gwang, won-il",
        "duration": "63 minutes",
        "skills": "missile",
        "images": "micro-force-diaya-tron-5.png",
        "youtube": "oYJUfjsSiBY"
    },
    ironManLamboteu: {
        "english_title": "Iron Man Lamboteu",
        "korean_title": "무적 철인 람보트",
        "year": "1985",
        "director": "duk-sung moon",
        "production": "dae-won",
        "duration": "70 minutes",
        "skills": "missile",
        "images": "iron-man-lamboteu.png",
        "youtube": "SI1fXJL_cHc"
    },
    ttolAndZetaRobot: {
        "english_title": "Ttol and Zeta Robot",
        "korean_title": "똘이와 제타 로보트",
        "year": "1985",
        "director": "chung-gi kim",
        "production": "seoul animation production",
        "duration": "62 minutes",
        "skills": "missile",
        "images": "ttol-and-zeta-robot.png",
        "youtube": "cGlxYu63S00"
    },
    phoenixRobotKing: {
        "english_title": "Phoenix Robot King",
        "korean_title": "불사조 로보트 피닉스 킹",
        "year": "1984",
        "director": "soo-yong jung",
        "production": "dae-gwang",
        "duration": "68 minutes",
        "skills": "missile",
        "images": "phoenix-robot-king.png",
        "youtube": "vd8WQ1idBko"
    }
}

//Iron Man 007

function robotElement(robot) {

    //title
    const title = document.getElementById("title");
    const ironMan007Title = document.createElement('div');
    const titleHTML = `
    <p class="info-title">${robot.english_title}</p>
    `
    ironMan007Title.innerHTML = titleHTML
    title.innerHTML = ''
    title.appendChild(ironMan007Title)

    //info
    const infoList = document.getElementById("info");
    const ironMan007Info = document.createElement('div');
    const infoHTML = `
    <ul>
        <li class="info-list">year: ${robot.year}</li>
        <li class="info-list">director: ${robot.director}</li>
        <li class="info-list">production: ${robot.production}</li>
        <li class="info-list">duration: ${robot.duration}</li>
        <li class="info-list">skills: ${robot.skills}</li>

    </ul>
    <img src="${robot.images}" class="info-image">
    `
    ironMan007Info.innerHTML = infoHTML
    infoList.innerHTML = ''
    info.appendChild(ironMan007Info)

    //video
    const iframe = document.getElementById("videos")
    const robotVideo  = document.createElement("div")
    const videoHTML = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${robot.youtube}?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `
    robotVideo.innerHTML = videoHTML 
    videos.innerHTML = ''
    videos.appendChild(robotVideo)
}

const ironMan007Button = document.getElementById("iron-man-007");

const robotTaekwonVButton = document.getElementById("robot-taekwon-v");
const robotTaekwonVSpaceOperationButton = document.getElementById("robot-taekwon-v-space-operation");

const robotKingButton = document.getElementById("robot-king");
const goldenWing123Button = document.getElementById("golden-wing-123");

const runMazingaXButton = document.getElementById("run-mazinga-x");
const robotTaekwonVGoldenWingButton = document.getElementById("robot-taekwon-v-vs-golden-wing");
const robotTaekwonVMarineForceButton = document.getElementById("robot-taekwon-v-marine-force");

const flySpaceTurtleShipButton = document.getElementById("fly-space-turtle-ship");

const spaceRobotThunderAButton = document.getElementById("space-robot-thunder-a");

const superalloyRobotSolar123Button = document.getElementById("superalloy-robot-solar-123");
const superTrioButton = document.getElementById("super-trio");
const superMazinga3Button = document.getElementById("super-mazinga-3");
const marineExpeditionXButton = document.getElementById("marine-expedition-x");
const superTaekwonVButton = document.getElementById("super-taekwon-v");

const superTitan15Button = document.getElementById("super-titan-15");
const superExpress7MazingaButton = document.getElementById("super-express-mazinga-7");
const futureBoyKuntaAndBermuda5000YearsButton = document.getElementById("future-boy-kunta-and-bermuda-5000-years");
const ironTrioButton = document.getElementById("iron-trio");

const spaceGandamVButton = document.getElementById("space-gandam-v");
const videoRanger007Button = document.getElementById("video-ranger-007");
const taekwonV84Button = document.getElementById("84-taekwon-v");
const phoenixRobotKingButton = document.getElementById("phoenix-robot-king");

const robotKingSunsharkButton = document.getElementById("robot-king-sun-shark");
const microForceDiayaTron5Button = document.getElementById("micro-force-diaya-tron-5");
const ironManLamboteuButton = document.getElementById("iron-man-lamboteu");
const ttolAndZetaRobotButton = document.getElementById("ttol-and-zeta-robot");

const robotTaekwonV90 = document.getElementById("robot-taekon-v-90");

ironMan007Button.addEventListener("click", function() { 
    robotElement(robots.ironMan007)
})
robotTaekwonVButton.addEventListener("click", function() {
    robotElement(robots.robotTaekwonV)
})
robotTaekwonVSpaceOperationButton.addEventListener("click", function() {
    robotElement(robots.robotTaekwonVSpaceOperation)
})
robotKingButton.addEventListener("click", function() {
    robotElement(robots.robotKing)
})
goldenWing123Button.addEventListener("click", function() {
    robotElement(robots.goldenWing123)
})
runMazingaXButton.addEventListener("click", function() {
    robotElement(robots.runMazingaX)
})
robotTaekwonVGoldenWingButton.addEventListener("click", function() {
    robotElement(robots.robotTaekwonVGoldenWing)
})
robotTaekwonVMarineForceButton.addEventListener("click", function() {
    robotElement(robots.robotTaekwonVMarineForce)
})
flySpaceTurtleShipButton.addEventListener("click", function() {
    robotElement(robots.flySpaceTurtleShip)
})
spaceRobotThunderAButton.addEventListener("click", function() {
    robotElement(robots.spaceRobotThunderA)
})
superalloyRobotSolar123Button.addEventListener("click", function() {
    robotElement(robots.superalloyRobotSolar123)
})
superTrioButton.addEventListener("click", function() {
    robotElement(robots.superTrio)
})
superMazinga3Button.addEventListener("click", function() {
    robotElement(robots.superMazinga3)
})
marineExpeditionXButton.addEventListener("click", function() {
    robotElement(robots.marineExpeditionX)
})
superTaekwonVButton.addEventListener("click", function() {
    robotElement(robots.superTaekwonV)
})
superTitan15Button.addEventListener("click", function() {
    robotElement(robots.superTitan15)
})
superExpress7MazingaButton.addEventListener("click", function() {
    robotElement(robots.superExpressMazinga7)
})
futureBoyKuntaAndBermuda5000YearsButton.addEventListener("click", function() {
    robotElement(robots.futureBoyKuntaAndBermuda5000Years)
})
ironTrioButton.addEventListener("click", function() {
    robotElement(robots.ironTrio)
})
spaceGandamVButton.addEventListener("click", function() {
    robotElement(robots.spaceGandamV)
})
videoRanger007Button.addEventListener("click", function() {
    robotElement(robots.videoRanger007)
})
taekwonV84Button.addEventListener("click", function() {
    robotElement(robots.taekwonV84)
})
phoenixRobotKingButton.addEventListener("click", function() {
    robotElement(robots.phoenixRobotKing)
})
robotKingSunsharkButton.addEventListener("click", function() {
    robotElement(robots.robotKingSunshark)
})
microForceDiayaTron5Button.addEventListener("click", function() {
    robotElement(robots.microForceDiayaTron5)
})
ironManLamboteuButton.addEventListener("click", function() {
    robotElement(robots.ironManLamboteu)
})
ttolAndZetaRobotButton.addEventListener("click", function() {
    robotElement(robots.ttolAndZetaRobot)
})
robotTaekwonV90Button.addEventListener("click", function() {
    robotElement(robots.robotTaekwonV90)
})