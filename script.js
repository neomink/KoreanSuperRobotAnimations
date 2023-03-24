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
    //title
    const title = document.getElementById("title");
    const ironMan007Title = document.createElement('div');
    const titleHTML = `
    <p class="info-title">${robots.ironMan007.english_title}</p>
    `
    ironMan007Title.innerHTML = titleHTML
    title.appendChild(ironMan007Title)

    //info
    const infoList = document.getElementById("info");
    const ironMan007Info = document.createElement('div');
    const infoHTML = `
    <ul>
        <li class="info-list">year:${robots.ironMan007.year}</li>
        <li class="info-list">director: ${robots.ironMan007.director}</li>
        <li class="info-list">production: ${robots.ironMan007.production}</li>
        <li class="info-list">duration: ${robots.ironMan007.duration}</li>
        <li class="info-list">skills: ${robots.ironMan007.skills}</li>
    </ul>
    <img src="iron-man-007.png" class="info-image">
    `
    ironMan007Info.innerHTML = infoHTML
    info.appendChild(ironMan007Info)

    //video
    const iframe = document.getElementById("videos")
    const ironMan007Video  = document.createElement("div")
    const videoHTML = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${robots.ironMan007.youtube}?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `
    ironMan007Video.innerHTML = videoHTML 
    videos.appendChild(ironMan007Video)
}

const ironMan007Button = document.getElementById("iron-man-007");

ironMan007Button.addEventListener("click", function() {
    renderIronMan007(robot)
})