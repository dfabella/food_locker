let zeroPrice = Number(0);

const spaces = [];
spaces[0] = document.getElementById('cartItem1');
spaces[1] = document.getElementById('cartItem2');
spaces[2] = document.getElementById('cartItem3');
spaces[3] = document.getElementById('cartItem4');
spaces[4] = document.getElementById('cartItem5');
spaces[5] = document.getElementById('cartItem6');

const prices = [];
prices[0] = document.getElementById('cartPriceVal1');
prices[1] = document.getElementById('cartPriceVal2');
prices[2] = document.getElementById('cartPriceVal3');
prices[3] = document.getElementById('cartPriceVal4');
prices[4] = document.getElementById('cartPriceVal5');
prices[5] = document.getElementById('cartPriceVal6');
for(let i = 0; i < prices.length; i++){
    prices[i].innerText = zeroPrice.toFixed(2);
}
const amounts = [];
amounts[0] = document.getElementById('amountVal1');
amounts[1] = document.getElementById('amountVal2');
amounts[2] = document.getElementById('amountVal3');
amounts[3] = document.getElementById('amountVal4');
amounts[4] = document.getElementById('amountVal5');
amounts[5] = document.getElementById('amountVal6');

const trIDs = [];
trIDs[0] = document.getElementById('tr1');
trIDs[1] = document.getElementById('tr2');
trIDs[2] = document.getElementById('tr3');
trIDs[3] = document.getElementById('tr4');
trIDs[4] = document.getElementById('tr5');
trIDs[5] = document.getElementById('tr6');

function updateCart(name, price, amount) {
  for(let i = 0; i < spaces.length; i++){
      if(trIDs[i].style.visibility === "hidden"){
          spaces[i].innerHTML = name;
          prices[i].innerText = price.toFixed(2);
          amounts[i].innerText = amount;
          trIDs[i].style.visibility="visible";
          break;
      }
  }
}

/*----------hide item rows on initalization----------*/
/*--------------------------------------------------*/
for(let i = 0; i < spaces.length; i++){
  trIDs[i].style.visibility="hidden";
}

let sum = 0.0;
for(let i = 1; i <= spaces.length; i++){
  let name = localStorage.getItem("name"+i);
  let price = localStorage.getItem("newPrice"+i);
  let amount = localStorage.getItem(String.fromCharCode(96 + i));
  if(name != null){
    sum = sum + Number(price);
    updateCart(name, Number(price), amount);
  }
}

const totalPrice = document.getElementById('price');

totalPrice.innerText = sum.toFixed(2);

function findItemNum(itemName) {
// Finds a given item's number suffix (i.e. 1-6) so it can be retrieved from the API
    let itemNum = "";
    for(let i = 1; i <= spaces.length; i++) {
        let keyVal = localStorage.getItem("name" + i);
        if (keyVal === itemName) {
            itemNum = i.toString();
        }
    }
    return itemNum;
}

/*--------increment and decrement quantity--------*/
/*--------------------------------------------------*/
function adjQuant (r, operator) {
    var id = r.parentNode.parentNode.rowIndex;
    count = document.getElementById("amountVal" + id),
    priceVal = document.getElementById("cartPriceVal" + id),
    name = document.getElementById("cartItem" + id).innerText;

    let a = Number(count.innerText);
    let price = Number(priceVal.innerText) / a;
    let newPrice = price;

    if (operator === '+') {
        ++a;
    } else if (operator === '-') {
        if(a > 1){
        --a;
        }
    }

    newPrice = a * price;
    count.innerText = a;
    priceVal.innerText = newPrice.toFixed(2);

    let itemNum = findItemNum(name);
    localStorage.setItem(String.fromCharCode(96 + Number(itemNum)), a);
    localStorage.setItem("newPrice"+itemNum, newPrice);

    location.reload();
}

/*-------------------delete Item---------------------*/
/*--------------------------------------------------*/
function deleteItem(r) {
    var i = r.parentNode.parentNode.rowIndex;
    var name = document.getElementById("cartItem" + i).innerText; //get item's name

    // retrieve key names to delete based on item's name
    let toDeleteID = findItemNum(name);

    // delete those key names from localStorage
    localStorage.removeItem("name"+toDeleteID);
    localStorage.removeItem("newPrice"+toDeleteID);
    localStorage.removeItem(amounts[String.fromCharCode(96 + toDeleteID)]);
    location.reload();
}

/*-------------------place order---------------------*/
/*--------------------------------------------------*/
function toOrderProg() {
    if (totalPrice.innerText != "0.00") {
        window.location.href = 'orderProgress.html';
    }
}

//concats food order for one line description
function combineFoodOrder() {
    oneLineOrder = "";

    for (let i = 0; i < spaces.length; i++) {
        if (amounts[i].innerText == 0) {
            break;
        }

        if (i > 0) {
            oneLineOrder = oneLineOrder.concat(", ");
        }

        oneLineOrder = oneLineOrder.concat(spaces[i].innerText, " x", amounts[i].innerText);

        if (i == spaces.length - 1) {
            break;
        }
    }

    return oneLineOrder;
}

// assigns 4 digit pin and locker number 1 to 10
function assignLockerAndPin() {
    pin = Math.floor(1000 + Math.random() * 9000);
    lockerNum = Math.floor(1 + Math.random() * 9);
    console.log(pin);
    console.log(lockerNum);
    localStorage.setItem("orderPin", pin);
    localStorage.setItem("orderLocker", lockerNum);
}
