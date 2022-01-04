var delayInMilliseconds = 1500;
let splashscreen = document.getElementById('welcome');

//splashscreen fades out on init
function fadeSplash() {
    setTimeout(fadeOut, delayInMilliseconds);
}

function fadeOut() {
    splashscreen.classList.toggle('fade');
    window.location.href="menu.html";
}
