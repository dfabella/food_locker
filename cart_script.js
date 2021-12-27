let zeroPrice = Number(0);

cartItem1 = document.getElementById('cartItem1');
cartItem2 = document.getElementById('cartItem2');
cartItem3 = document.getElementById('cartItem3');
cartItem4 = document.getElementById('cartItem4');
cartItem5 = document.getElementById('cartItem5');
cartItem6 = document.getElementById('cartItem6');

cartPriceVal1 = document.getElementById('cartPriceVal1');
cartPriceVal2 = document.getElementById('cartPriceVal2');
cartPriceVal3 = document.getElementById('cartPriceVal3');
cartPriceVal4 = document.getElementById('cartPriceVal4');
cartPriceVal5 = document.getElementById('cartPriceVal5');
cartPriceVal6 = document.getElementById('cartPriceVal6');

amountVal1 = document.getElementById('amountVal1');
amountVal2 = document.getElementById('amountVal2');
amountVal3 = document.getElementById('amountVal3');
amountVal4 = document.getElementById('amountVal4');
amountVal5 = document.getElementById('amountVal5');
amountVal6 = document.getElementById('amountVal6');


const spaces = [];
spaces[0] = cartItem1;
spaces[1] = cartItem2;
spaces[2] = cartItem3;
spaces[3] = cartItem4;
spaces[4] = cartItem5;
spaces[5] = cartItem6;

const prices = [];
prices[0] = cartPriceVal1;
prices[1] = cartPriceVal2;
prices[2] = cartPriceVal3;
prices[3] = cartPriceVal4;
prices[4] = cartPriceVal5;
prices[5] = cartPriceVal6;
for(let i = 0; i < prices.length; i++){
    prices[i].innerText = zeroPrice.toFixed(2);
}
const amounts = [];
amounts[0] = amountVal1;
amounts[1] = amountVal2;
amounts[2] = amountVal3;
amounts[3] = amountVal4;
amounts[4] = amountVal5;
amounts[5] = amountVal6;

//FIRST CART ITEM
let name1 = localStorage.getItem('name1');
console.log(name1);
let price1 = Number(localStorage.getItem("newPrice1"));
console.log("price 1 = ", price1);
let amount1 = Number(localStorage.getItem("a"));

    for(let i = 0; i < spaces.length; i++){
        if(spaces[i].innerHTML == ""){
            spaces[i].innerHTML = name1;
            prices[i].innerText = price1.toFixed(2);
            amounts[i].innerText = amount1;
            break;
        }
    }

//SECOND CART ITEM
let name2 = localStorage.getItem('name2');
console.log(name2);
let price2 = Number(localStorage.getItem("newPrice2"));
console.log("price 2 = ", price2);
let amount2 = Number(localStorage.getItem("b"));

    for(let i = 0; i < spaces.length; i++){
        if(spaces[i].innerHTML == ""){
            spaces[i].innerHTML = name2;
            prices[i].innerText = price2.toFixed(2);
            amounts[i].innerText = amount2;
            break;
        }
    }

//THIRD CART ITEM
let name3 = localStorage.getItem('name3');
console.log(name3);
let price3 = Number(localStorage.getItem("newPrice3"));
console.log("price 3 = ", price3);
let amount3 = Number(localStorage.getItem("c"));

    for(let i = 0; i < spaces.length; i++){
        if(spaces[i].innerHTML == ""){
            spaces[i].innerHTML = name3;
            prices[i].innerText = price3.toFixed(2);
            amounts[i].innerText = amount3;
            break;
        }
    }

//FOURTH CART ITEM
let name4 = localStorage.getItem('name4');
console.log(name4);
let price4 = Number(localStorage.getItem("newPrice4"));
console.log("price 4 = ", price4);
let amount4 = Number(localStorage.getItem("d"));

    for(let i = 0; i < spaces.length; i++){
        if(spaces[i].innerHTML == ""){
            spaces[i].innerHTML = name4;
            prices[i].innerText = price4.toFixed(2);
            amounts[i].innerText = amount4;
            break;
        }
    }

//FIFTH CART ITEM
let name5 = localStorage.getItem('name5');
console.log(name5);
let price5 = Number(localStorage.getItem("newPrice5"));
console.log("price 5 = ", price5);
let amount5 = Number(localStorage.getItem("e"));

    for(let i = 0; i < spaces.length; i++){
        if(spaces[i].innerHTML == ""){
            spaces[i].innerHTML = name5;
            prices[i].innerText = price5.toFixed(2);
            amounts[i].innerText = amount5;
            break;
        }
    }

//SIXTH CART ITEM
let name6 = localStorage.getItem('name6');
console.log(name6);
let price6 = Number(localStorage.getItem("newPrice6"));
console.log("price 6 = ", price6);
let amount6 = Number(localStorage.getItem("f"));

    for(let i = 0; i < spaces.length; i++){
        if(spaces[i].innerHTML == ""){
            spaces[i].innerHTML = name6;
            prices[i].innerText = price6.toFixed(2);
            amounts[i].innerText = amount6;
            break;
        }
    }

const totalPrice = document.getElementById('price');
let sum = price1 + price2 + price3 + price4 + price5 + price6;

totalPrice.innerText = sum.toFixed(2);

//DELETE ITEM
function deleteItem(r) {
    var i = r.parentNode.parentNode.rowIndex;
    var name = document.getElementById("cartItem" + i).innerText; //get item's name

    // retrieve key names to delete based on item's name
    let toDeleteID = "";
    for(let i = 1; i <= spaces.length; i++) {
        let keyVal = localStorage.getItem("name" + i);
        if (keyVal === name) {
            toDeleteID = i.toString();
        }
    }

    alert(toDeleteID);

    // delete those key names from localStorage
    const itemDetails = ["name", "newPrice"];
    const amounts = ["","a", "b", "c", "d", "e", "f"]
    for(const itemDetail of itemDetails) {
        localStorage.removeItem(itemDetail + toDeleteID);
        localStorage.removeItem(amounts[toDeleteID]);
    }

    location.reload();

const clearButton = document.getElementById('cartTitle');
clearButton.addEventListener("click", ()=>{
    localStorage.clear();

    // for(let i = 0; i < prices.length; i++){
    //     prices[i].innerText = zeroPrice.toFixed(2);
    // }


});
