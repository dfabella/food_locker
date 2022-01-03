function buttonClick(click_value) {
    let ele = document.getElementById('pinEntry');
    ele.innerHTML += click_value;
}

function clearPin() {
    let ele = document.getElementById('pinEntry');
    ele.innerHTML = '';
}

function unlockLocker() {
    let ele = document.getElementById('pinEntry');
    let finalPin = ele.innerHTML;

    if (finalPin.length != 4) {
       alert("PIN must be 4 digits long!");
       clearPin();
    } else {
       dbHasPin(finalPin);
    }
}

