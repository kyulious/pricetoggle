const toggle = document.getElementById("checkbox");
const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");
const price3 = document.getElementById("price3");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const year = document.getElementById("year");
const month = document.getElementById("month");

toggle.addEventListener('click', function(){

    if(toggle.checked == true){
        month.style.color="red";
        year.style.color="black";
        price1.innerText="$24.99";
        price2.innerText="$19.99";
        price3.innerText="$39.99";
        month.style.fontWeight="bolder";
    }
    else {
        year.style.color="red";
        month.style.color="black";
        price1.innerText="$199.99";
        price2.innerText="$249.99";
        price3.innerText="$399.99";
    }
    
})