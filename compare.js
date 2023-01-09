for(var i=1;i<product.length;i++) {
    document.getElementById("select1").innerHTML +=`
    <option value="${i}">${product[i].title}</option>
    `;
    document.getElementById("select2").innerHTML +=`
    <option value="${i}">${product[i].title}</option>
    `;
    document.getElementById("select3").innerHTML +=`
    <option value="${i}">${product[i].title}</option>
    `;
    document.getElementById("select4").innerHTML +=`
    <option value="${i}">${product[i].title}</option>
    `;
    document.getElementById("select5").innerHTML +=`
    <option value="${i}">${product[i].title}</option>
    `;
}
function item1(a){
    document.getElementById("img1").src=product[a].img;
    document.getElementById("price1").innerHTML=product[a].price;
    document.getElementById("screen1").innerHTML=product[a].screen;
    document.getElementById("pixel1").innerHTML=product[a].resolution;
    document.getElementById("glass1").innerHTML=product[a].touch;
    document.getElementById("cpu1").innerHTML=product[a].cpumain;
    document.getElementById("bat1").innerHTML=product[a].battery;
}
function item2(a){ 
    var choice1 = document.getElementById("select1").value; 
    if(a != choice1) 
    {       
    document.getElementById("img2").src=product[a].img;
    document.getElementById("price2").innerHTML=product[a].price;
    document.getElementById("screen2").innerHTML=product[a].screen;
    document.getElementById("pixel2").innerHTML=product[a].resolution;
    document.getElementById("glass2").innerHTML=product[a].touch;
    document.getElementById("cpu2").innerHTML=product[a].cpumain;
    document.getElementById("bat2").innerHTML=product[a].battery;
    }
    else
    {
        alert("2 products is the same. Please choose an other product!");
        document.getElementById("select2").selectedIndex = 0;
    }    
}
function item3(a){               
    var choice1 = document.getElementById("select1").value;
    var choice2 = document.getElementById("select2").value;
    if(a != choice1 && a != choice2)
    { 
        document.getElementById("img3").src=product[a].img;
        document.getElementById("price3").innerHTML=product[a].price;
        document.getElementById("screen3").innerHTML=product[a].screen;
        document.getElementById("pixel3").innerHTML=product[a].resolution;
        document.getElementById("glass3").innerHTML=product[a].touch;
        document.getElementById("cpu3").innerHTML=product[a].cpumain;
        document.getElementById("bat3").innerHTML=product[a].battery;
    }
    else
    {
        alert("2 products is the same. Please choose an other product!");
        document.getElementById("select3").selectedIndex = 0;
    }
}
function item4(a){               
    var choice1 = document.getElementById("select1").value;
    var choice2 = document.getElementById("select2").value;
    var choice3 = document.getElementById("select3").value;
    if(a != choice1 && a != choice2 && a != choice3)
    {       
    document.getElementById("img4").src=product[a].img;
    document.getElementById("price4").innerHTML=product[a].price;
    document.getElementById("screen4").innerHTML=product[a].screen;
    document.getElementById("pixel4").innerHTML=product[a].resolution;
    document.getElementById("glass4").innerHTML=product[a].touch;
    document.getElementById("cpu4").innerHTML=product[a].cpumain;
    document.getElementById("bat4").innerHTML=product[a].battery;
    }
    else
    {
        alert("2 products is the same. Please choose an other product!");
        document.getElementById("select4").selectedIndex = 0;
    }
}
function item5(a){               
    var choice1 = document.getElementById("select1").value;
    var choice2 = document.getElementById("select2").value;
    var choice3 = document.getElementById("select3").value;
    var choice4 = document.getElementById("select4").value;
    if(a != choice1 && a != choice2 && a != choice3 && a != choice4)
    {       
    document.getElementById("img5").src=product[a].img;
    document.getElementById("price5").innerHTML=product[a].price;
    document.getElementById("screen5").innerHTML=product[a].screen;
    document.getElementById("pixel5").innerHTML=product[a].resolution;
    document.getElementById("glass5").innerHTML=product[a].touch;
    document.getElementById("cpu5").innerHTML=product[a].cpumain;
    document.getElementById("bat5").innerHTML=product[a].battery;
    }
    else
    {
        alert("2 products is the same. Please choose an other product!");
        document.getElementById("select5").selectedIndex = 0;
    }
}

// Only compare 2 same brands or maximum 5 different brands
for(var i=0;i<product.length;i++) {
    document.getElementById("brand1").innerHTML +=`
    <option value="${i}">${product[i].brand}</option>
    `;
    document.getElementById("brand2").innerHTML +=`
    <option value="${i}">${product[i].brand}</option>
    `;
    document.getElementById("brand3").innerHTML +=`
    <option value="${i}">${product[i].brand}</option>
    `;
    document.getElementById("brand4").innerHTML +=`
    <option value="${i}">${product[i].brand}</option>
    `;
    document.getElementById("brand5").innerHTML +=`
    <option value="${i}">${product[i].brand}</option>
    `;
}
function brands3(a){
    var brand1 = document.getElementById("select1").value;
    var brand2 = document.getElementById("select2").value;
    var brand3 = document.getElementById("select3").value;
}