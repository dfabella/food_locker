let timeout;
var i = 0;

function completeOrder() {
    timeout = setTimeout(load, 1000);
}

function load() {
    if (i = 0) {
        i = 1;
        var elem = document.getElementByID('progressFill');
        var width = 1;
        var id = setInterval(frame, 10);
    }
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
}
