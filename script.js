console.log("hello")

const robots = {
    ironMan007: {
        "english_title": "Iron Man 007",
        "korean_title": "철인 007",
        "year": "1974",
        "director": "ha-rim Han",
        "production": "Dong-Ah Advertisement",
        "duration": "64 minutes",
        "skills": "rocket fists",
        "images": "iron-man-007.png",
        "youtube": "49F8xMCAjnU"
    },
    robotTaekwonV: {
        "english_title": "Robot Taekwon V",
        "korean_title": "로보트 태권 브이",
        "year": "1976",
        "director": "chung-gi Kim",
        "production": "U Production",
        "duration": "85 minutes",
        "skills": "missile",
        "images": "robot-taekwon-v.png",
        "youtube": "i4DF-L4kRCE"
    }

}

//Iron Man 007

function renderIronMan007(robot) {

    //title
    const title = document.getElementById("title");
    const ironMan007Title = document.createElement('div');
    const titleHTML = `
    <p class="info-title">${robot.english_title}</p>
    `
    ironMan007Title.innerHTML = titleHTML
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
    info.appendChild(ironMan007Info)

    //video
    const iframe = document.getElementById("videos")
    const ironMan007Video  = document.createElement("div")
    const videoHTML = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${robot.youtube}?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `
    ironMan007Video.innerHTML = videoHTML 
    videos.appendChild(ironMan007Video)
}

const ironMan007Button = document.getElementById("iron-man-007");
const robotTaekwonVButton = document.getElementById("robot-taekwon-v");

ironMan007Button.addEventListener("click", function() {
    renderIronMan007(robots.ironMan007)
})
robotTaekwonVButton.addEventListener("click", function() {
    renderIronMan007(robots.robotTaekwonV)
})
