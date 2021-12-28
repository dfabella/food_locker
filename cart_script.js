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

const clearButton = document.getElementById('cartTitle');
clearButton.addEventListener("click", ()=>{
    localStorage.clear();
});
