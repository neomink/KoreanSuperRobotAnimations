const robots = {
    ironMan007: {
        "english_title": "Iron Man 007",
        "korean_title": "철인 007",
        "year": "1974",
        "director": "Ha-rim Han",
        "production": "Dong-Ah Advertisement",
        "duration": "64 minutes",
        "skills": "rocket fists",
        "images": "iron-man-007.png",
        "youtube": "49F8xMCAjnU"
    },

}

// when I click Iron Man 007 button, I want the information to show in info box and videos and images to show in resources

//Iron Man 007
function renderIronMan007(robot) {
    const infoList = document.getElementById("container-info");
    const ironMan007Info = document.createElement('li');

    const infoHTML = `
    <ul>
        <li class="info-title">${robots.ironMan007.english_title}</li>
        <li class="info-list">${robots.ironMan007.korean_title}</li>
        <li class="info-list">director: ${robots.ironMan007.director}</li>
        <li class="info-list">production: ${robots.ironMan007.production}</li>
        <li class="info-list">duration: ${robots.ironMan007.duration}</li>
        <li class="info-list">skills: ${robots.ironMan007.skills}</li>
    </ul>
    <img src="iron-man-007.png" class="info-image">
    `

    ironMan007Info.innerHTML = infoHTML

    info.appendChild(ironMan007Info)
}

const ironMan007Button = document.getElementById("iron-man-007");

ironMan007Button.addEventListener("click", function() {
    renderIronMan007(robot)
})