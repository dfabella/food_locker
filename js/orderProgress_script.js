function completeOrder() {
    setTimeout(load, 1500);
}

let elem = document.getElementById('progressFill');
let progressText = document.getElementById('confirmedText');
let newWidth = 1;
let progress;

function load() {
    var id = setInterval(fillProgress, 10);
    function fillProgress() {
        const confirmed = "46%";
        const ready = "96%";
        console.log(progress);

        //increase length of progress bar until full
        if (progress == confirmed) {
            document.getElementById('preparing').src="./assets/order-preparing1.png";
            newWidth += 0.3;
            elem.style.width = newWidth + "%";
            progress = elem.style.width;

        } else if (progress >= ready) {
            document.getElementById('ready').src="./assets/order-ready1.png";
            clearInterval(id);

        }   else {
            newWidth += 0.3;
            elem.style.width = newWidth + "%";
            progress = elem.style.width;
        }
    }
}
