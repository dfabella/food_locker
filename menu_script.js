// Get the modal
var modal1 = document.getElementById("popups1");
var modal2 = document.getElementById("popups2");
var modal3 = document.getElementById("popups3");
var modal4 = document.getElementById("popups4");
var modal5 = document.getElementById("popups5");
var modal6 = document.getElementById("popups6");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



//var buttonTarget = document.getElementsByClassName("plus")[0];
//var counter = 1;

// function addBtn(){
//     buttonTarget.innerHTML = counter.toString();
//     counter++;
//     return counter;
// }


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }

  if (event.target == modal2) {
    modal2.style.display = "none";
  }

  if (event.target == modal3) {
    modal3.style.display = "none";
  }

  if (event.target == modal4) {
    modal4.style.display = "none";
  }

  if (event.target == modal5) {
    modal5.style.display = "none";
  }

  if (event.target == modal6) {
    modal6.style.display = "none";
  }
  
}

/*--------increment and decrement cart count--------*/
/*--------------------------------------------------*/


/*--------ITEM 1--------*/
const plus = document.getElementById('plus1'),
 minus = document.getElementById('minus1'),
 count = document.getElementById('count1'),
 priceVal1 = document.getElementById('priceVal1'),
 cart1 = document.getElementById('cart1'),
 cartPriceVal1 = document.getElementById('cartPriceVal1');

 
let price1 = Number(document.getElementById('priceVal1').innerText);
let a = 1;
let newPrice1 = price1;
btn1.addEventListener("click", ()=>{
    modal1.style.display = "block";
    console.log(a);
    console.log(newPrice1);
})

plus.addEventListener("click", ()=>{
    a++;

    count.innerText = a;

    newPrice1 = a * price1;

    priceVal1.innerText = "";
    priceVal1.innerText = newPrice1.toFixed(2);

    console.log(a);
    console.log(newPrice1);
});

minus.addEventListener("click", ()=>{
    if(a > 1){
        a--;
        newPrice1 = a * price1;
        priceVal1.innerText = "";
        priceVal1.innerText = newPrice1.toFixed(2);
    }
    count.innerText = a;

    console.log(a);
    console.log(newPrice1);
});

cart1.addEventListener("click", ()=>{
    console.log()
    cartPriceVal1.innerText = "";
    cartPriceVal1.innerText = newPrice1.toFixed(2);
})


/*--------ITEM 2--------*/
const plus2 = document.getElementById('plus2'),
 minus2 = document.getElementById('minus2'),
 count2 = document.getElementById('count2'),
 priceVal2 = document.getElementById('priceVal2');
 
 let price2 = Number(document.getElementById('priceVal2').innerText);

let b = 1;
let newPrice2 = price2;
btn2.addEventListener("click", ()=>{
    modal2.style.display = "block";
    console.log(b);
    console.log(newPrice2);
})

plus2.addEventListener("click", ()=>{
    b++;

    count2.innerText = b;

    let newPrice2 = b * price2;

    priceVal2.innerText = "";
    priceVal2.innerText = newPrice2.toFixed(2);

    console.log(b);
    console.log(newPrice2);
});

minus2.addEventListener("click", ()=>{
    if(b > 1){
        b--;
        newPrice2 = b * price2;
        priceVal2.innerText = "";
        priceVal2.innerText = newPrice2.toFixed(2);
    }
    count2.innerText = b;

    console.log(b);
    console.log(newPrice2);
});

/*--------ITEM 3--------*/
const plus3 = document.getElementById('plus3'),
 minus3 = document.getElementById('minus3'),
 count3 = document.getElementById('count3'),
 priceVal3 = document.getElementById('priceVal3');
 
 let price3 = Number(document.getElementById('priceVal3').innerText);

let c = 1;
let newPrice3 = price3;
btn3.addEventListener("click", ()=>{
    modal3.style.display = "block";
    console.log(c);
    console.log(newPrice3);
})

plus3.addEventListener("click", ()=>{
    c++;

    count3.innerText = c;

    let newPrice3 = c * price3;

    priceVal3.innerText = "";
    priceVal3.innerText = newPrice3.toFixed(2);

    console.log(c);
    console.log(newPrice3);
});

minus3.addEventListener("click", ()=>{
    if(c > 1){
        c--;
        newPrice3 = c * price3;
        priceVal3.innerText = "";
        priceVal3.innerText = newPrice3.toFixed(2);
    }
    count3.innerText = c;

    console.log(c);
    console.log(newPrice3);
});

/*--------ITEM 4--------*/
const plus4 = document.getElementById('plus4'),
 minus4 = document.getElementById('minus4'),
 count4 = document.getElementById('count4'),
 priceVal4 = document.getElementById('priceVal4');
 
 let price4 = Number(document.getElementById('priceVal4').innerText);

let d = 1;
let newPrice4 = price4;
btn4.addEventListener("click", ()=>{
    modal4.style.display = "block";
    console.log(d);
    console.log(newPrice4);
})

plus4.addEventListener("click", ()=>{
    d++;

    count4.innerText = d;

    let newPrice4 = d * price4;

    priceVal4.innerText = "";
    priceVal4.innerText = newPrice4.toFixed(2);

    console.log(d);
    console.log(newPrice4);
});

minus4.addEventListener("click", ()=>{
    if(d > 1){
        d--;
        newPrice4 = d * price4;
        priceVal4.innerText = "";
        priceVal4.innerText = newPrice4.toFixed(2);
    }
    count4.innerText = d;

    console.log(d);
    console.log(newPrice4);
});

/*--------ITEM 5--------*/
const plus5 = document.getElementById('plus5'),
 minus5 = document.getElementById('minus5'),
 count5 = document.getElementById('count5'),
 priceVal5 = document.getElementById('priceVal5');
 
 let price5 = Number(document.getElementById('priceVal5').innerText);

let e = 1;
let newPrice5 = price5;
btn5.addEventListener("click", ()=>{
    modal5.style.display = "block";
    console.log(e);
    console.log(newPrice5);
})

plus5.addEventListener("click", ()=>{
    e++;

    count5.innerText = e;

    let newPrice5 = e * price5;

    priceVal5.innerText = "";
    priceVal5.innerText = newPrice5.toFixed(2);

    console.log(e);
    console.log(newPrice5);
});

minus5.addEventListener("click", ()=>{
    if(e > 1){
        e--;
        newPrice5 = e * price5;
        priceVal5.innerText = "";
        priceVal5.innerText = newPrice5.toFixed(2);
    }
    count5.innerText = e;

    console.log(e);
    console.log(newPrice5);
});

/*--------ITEM 6--------*/
const plus6 = document.getElementById('plus6'),
 minus6 = document.getElementById('minus6'),
 count6 = document.getElementById('count6'),
 priceVal6 = document.getElementById('priceVal6');
 
 let price6 = Number(document.getElementById('priceVal6').innerText);

let f = 1;
let newPrice6 = price6;
btn6.addEventListener("click", ()=>{
    modal6.style.display = "block";
    console.log(f);
    console.log(newPrice6);
})

plus6.addEventListener("click", ()=>{
    f++;

    count6.innerText = f;

    let newPrice6 = f * price6;

    priceVal6.innerText = "";
    priceVal6.innerText = newPrice6.toFixed(2);

    console.log(f);
    console.log(newPrice6);
});

minus6.addEventListener("click", ()=>{
    if(f > 1){
        f--;
        newPrice6 = f * price6;
        priceVal6.innerText = "";
        priceVal6.innerText = newPrice6.toFixed(2);
    }
    count6.innerText = f;

    console.log(f);
    console.log(newPrice6);
});


