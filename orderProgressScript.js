let timeout;
var i = 0;


function completeOrder() {
    timeout = setTimeout(load, 1500);
}

function load() {
    if (i === 0) {
        i = 1;
        var elem = document.getElementById('progressFill');
        var progressText = document.getElementById('confirmedText');
        var width = 1;
        var id = setInterval(frame, 10);
    }
        function frame() {
            if (elem.style.width == "96%") {
                document.getElementById('ready').src="./assets/order-ready1.png";
                progressText.textContent = "Order Ready For Pick-Up!"
                clearInterval(id);

            } else if (elem.style.width == "46%"){
                alert(elem.style.width);
                document.getElementById('preparing').src="./assets/order-preparing1.png";
                progressText.textContent = "Order Preparing...";
                width += 0.5;
                elem.style.width = width + "%";

            } else {
            width += 0.5;
            elem.style.width = width + "%";
            }
        }
}
