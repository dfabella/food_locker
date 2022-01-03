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
 name1 = document.getElementById('name1').innerText,
 cart1 = document.getElementById('cart1'),
 image1 = document.getElementById('image1');

let price1 = Number(priceVal1.innerText);
let a = 1;
let newPrice1 = price1;
btn1.addEventListener("click", ()=>{
    modal1.style.display = "block";
    console.log(a);
    console.log(newPrice1);
});

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
var item1Click = new Boolean(false);
cart1.addEventListener("click", ()=>{
    item1Click = true;
    localStorage.setItem("item1Click", item1Click);
    localStorage.setItem("name1", name1);
    localStorage.setItem("a", a);
    localStorage.setItem("newPrice1", newPrice1);
});


/*--------ITEM 2--------*/
const plus2 = document.getElementById('plus2'),
 minus2 = document.getElementById('minus2'),
 count2 = document.getElementById('count2'),
 priceVal2 = document.getElementById('priceVal2'),
 name2 = document.getElementById('name2').innerText,
 cart2 = document.getElementById('cart2');

let price2 = Number(priceVal2.innerText);

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

    newPrice2 = b * price2;

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
var item2Click = new Boolean(false);
cart2.addEventListener("click", ()=>{
    item2Click = true;
    //localStorage.setItem("item2Click", item2Click);
    localStorage.setItem("name2", name2);
    localStorage.setItem("b", b);
    localStorage.setItem("newPrice2", newPrice2);

});

/*--------ITEM 3--------*/
const plus3 = document.getElementById('plus3'),
 minus3 = document.getElementById('minus3'),
 count3 = document.getElementById('count3'),
 priceVal3 = document.getElementById('priceVal3'),
 name3 = document.getElementById('name3').innerText,
 cart3 = document.getElementById('cart3');

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

    newPrice3 = c * price3;

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

cart3.addEventListener("click", ()=>{
    //localStorage.setItem("item2Click", item2Click);
    localStorage.setItem("name3", name3);
    localStorage.setItem("c", c);
    localStorage.setItem("newPrice3", newPrice3);
});

/*--------ITEM 4--------*/
const plus4 = document.getElementById('plus4'),
 minus4 = document.getElementById('minus4'),
 count4 = document.getElementById('count4'),
 priceVal4 = document.getElementById('priceVal4'),
 name4 = document.getElementById('name4').innerText,
 cart4 = document.getElementById('cart4');

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

    newPrice4 = d * price4;

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

cart4.addEventListener("click", ()=>{
    //localStorage.setItem("item2Click", item2Click);
    localStorage.setItem("name4", name4);
    localStorage.setItem("d", d);
    localStorage.setItem("newPrice4", newPrice4);
});

/*--------ITEM 5--------*/
const plus5 = document.getElementById('plus5'),
 minus5 = document.getElementById('minus5'),
 count5 = document.getElementById('count5'),
 priceVal5 = document.getElementById('priceVal5'),
 name5 = document.getElementById('name5').innerText,
 cart5 = document.getElementById('cart5');

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

    newPrice5 = e * price5;

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

cart5.addEventListener("click", ()=>{
    //localStorage.setItem("item2Click", item2Click);
    localStorage.setItem("name5", name5);
    localStorage.setItem("e", e);
    localStorage.setItem("newPrice5", newPrice5);
});

/*--------ITEM 6--------*/
const plus6 = document.getElementById('plus6'),
 minus6 = document.getElementById('minus6'),
 count6 = document.getElementById('count6'),
 priceVal6 = document.getElementById('priceVal6'),
 name6 = document.getElementById('name6').innerText,
 cart6 = document.getElementById('cart6');

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

    newPrice6 = f * price6;

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

cart6.addEventListener("click", ()=>{
    //localStorage.setItem("item2Click", item2Click);
    localStorage.setItem("name6", name6);
    localStorage.setItem("f", f);
    localStorage.setItem("newPrice6", newPrice6);
});
