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

//CLEARS CART ON INITIALIZATION
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
        --a;
    }

    newPrice = a * price;
    count.innerText = a;
    priceVal.innerText = newPrice.toFixed(2);

    let itemNum = findItemNum(name);
    localStorage.setItem(String.fromCharCode(96 + itemNum), a);
    localStorage.setItem("newPrice"+itemNum, newPrice);
}

//  //ITEM 1
//  const plus = document.getElementById('plus1'),
//  minus = document.getElementById('minus1'),
//  count = document.getElementById('amountVal1'),
//  priceVal1 = document.getElementById('cartPriceVal1'),
//  name = document.getElementById('cartItem1').innerText;
//
// let a = Number(count.innerText);
// let price1 = Number(priceVal1.innerText) / a;
// let newPrice1 = price1;
//
// plus.addEventListener("click", ()=>{
//     a++;
//     newPrice1 = a * price1;
//
//     count.innerText = a;
//     priceVal1.innerText = newPrice1.toFixed(2);
//
//     localStorage.setItem("a", a);
//     localStorage.setItem("newPrice1", newPrice1);
//
//     console.log(a);
//     console.log(newPrice1);
//
//     location.reload();
//
// });
//
// minus.addEventListener("click", ()=>{
//     if(a > 1){
//         a--;
//         newPrice1 = a * price1;
//         priceVal1.innerText = "";
//         priceVal1.innerText = newPrice1.toFixed(2);
//     }
//     count.innerText = a;
//
//     localStorage.setItem("a", a);
//     localStorage.setItem("newPrice1", newPrice1);
//
//     console.log(a);
//     console.log(newPrice1);
//
//     location.reload();
// });
//
// //ITEM 2
// const plus2 = document.getElementById('plus2'),
//  minus2 = document.getElementById('minus2'),
//  count2 = document.getElementById('amountVal2'),
//  priceVal2 = document.getElementById('cartPriceVal2'),
//  name2 = document.getElementById('cartItem2').innerText;
//
// let b = Number(count2.innerText);
// let price2 = Number(priceVal2.innerText) / b;
// let newPrice2 = price2;
//
// plus2.addEventListener("click", ()=>{
//     b++;
//     newPrice2 = b * price2;
//
//     count2.innerText = b;
//     priceVal2.innerText = newPrice2.toFixed(2);
//
//     localStorage.setItem("b", b);
//     localStorage.setItem("newPrice2", newPrice2);
//
//     console.log(b);
//     console.log(newPrice2);
//
//     location.reload();
//
// });
//
// minus2.addEventListener("click", ()=>{
//     if(b > 1){
//         b--;
//         newPrice2 = b * price2;
//         priceVal2.innerText = "";
//         priceVal2.innerText = newPrice2.toFixed(2);
//     }
//     count2.innerText = b;
//
//     localStorage.setItem("b", b);
//     localStorage.setItem("newPrice2", newPrice2);
//
//     console.log(b);
//     console.log(newPrice2);
//
//     location.reload();
// });
//
// //ITEM 3
// const plus3 = document.getElementById('plus3'),
//  minus3 = document.getElementById('minus3'),
//  count3 = document.getElementById('amountVal3'),
//  priceVal3 = document.getElementById('cartPriceVal3'),
//  name3 = document.getElementById('cartItem3').innerText;
//
// let c = Number(count3.innerText);
// let price3 = Number(priceVal3.innerText) / c;
// let newPrice3 = price3;
//
// plus3.addEventListener("click", ()=>{
//     c++;
//     newPrice3 = c * price3;
//
//     count3.innerText = c;
//     priceVal3.innerText = newPrice3.toFixed(2);
//
//     localStorage.setItem("c", c);
//     localStorage.setItem("newPrice3", newPrice3);
//
//     console.log(c);
//     console.log(newPrice3);
//
//     location.reload();
//
// });
//
// minus3.addEventListener("click", ()=>{
//     if(c > 1){
//         c--;
//         newPrice3 = c * price3;
//         priceVal3.innerText = "";
//         priceVal3.innerText = newPrice3.toFixed(2);
//     }
//     count3.innerText = c;
//
//     localStorage.setItem("c", c);
//     localStorage.setItem("newPrice3", newPrice3);
//
//     console.log(c);
//     console.log(newPrice3);
//
//     location.reload();
// });
//
// //ITEM 4
// const plus4 = document.getElementById('plus4'),
//  minus4 = document.getElementById('minus4'),
//  count4 = document.getElementById('amountVal4'),
//  priceVal4 = document.getElementById('cartPriceVal4'),
//  name4 = document.getElementById('cartItem4').innerText;
//
// let d = Number(count4.innerText);
// let price4 = Number(priceVal4.innerText) / d;
// let newPrice4 = price4;
//
// plus4.addEventListener("click", ()=>{
//     d++;
//     newPrice4 = d * price4;
//
//     count4.innerText = d;
//     priceVal4.innerText = newPrice4.toFixed(2);
//
//     localStorage.setItem("d", d);
//     localStorage.setItem("newPrice4", newPrice4);
//
//     console.log(d);
//     console.log(newPrice4);
//
//     location.reload();
//
// });
//
// minus4.addEventListener("click", ()=>{
//     if(d > 1){
//         d--;
//         newPrice4 = d * price4;
//         priceVal4.innerText = "";
//         priceVal4.innerText = newPrice4.toFixed(2);
//     }
//     count4.innerText = d;
//
//     localStorage.setItem("d", d);
//     localStorage.setItem("newPrice4", newPrice4);
//
//     console.log(d);
//     console.log(newPrice4);
//
//     location.reload();
// });

//DELETE ITEM
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

//PlACE ORDER
function toOrderProg() {
    if (totalPrice.innerText != "0.00") {
        window.location.href = 'orderProgress.html';
    }
}
const clearButton = document.getElementById('cartTitle');
clearButton.addEventListener("click", ()=>{
    localStorage.clear();
});
