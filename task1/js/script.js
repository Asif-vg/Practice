// box-1
let p = document.createElement("p");
p.innerText = "box1";
p.id = "p1";

let item = document.getElementsByClassName("item")[0];
item.append(p);

document.getElementById("p1").setAttribute("style", "border:3px solid green; background-color:orange; height: 203px; padding: 8px 11px 0px; font-size: 13px;");




// box-2
let h1 = document.createElement("h1");
let p2 = document.createElement("p");
h1.innerText = "box1S";
h1.id = "h1";
p2.innerText = "hi";
p2.id = "p2";

let item2 = document.getElementsByClassName("item2")[0];
item2.append(h1);
h1.append(p2);

document.getElementById("h1").setAttribute("style", "border: 3px solid red;height: 203px;padding: 15px 20px 0px;font-size: 14px;");
document.getElementById("p2").setAttribute("style", "font-size: 37px !important;padding: 10px 12px 0px;");



// box - 3
let p3 = document.createElement("p");
p3.innerText = "box2";
p3.id = "p3";

let item3 = document.getElementsByClassName("item3")[0];
item3.append(p3);

document.getElementById("p3").setAttribute("style", "border: 3px solid green;width: 177px;height: 115px;padding: 5px 15px 0px;")
document.getElementById("col3").setAttribute("style", "display: flex;flex-direction: column-reverse;align-items: center")





// box - 4
let div2 = document.createElement("div");
div2.id = "div2"

let item4 = document.getElementsByClassName("item4")[0];
item4.append(div2)

document.getElementById("div2").setAttribute("style", "border:3px solid red; height: 203px;")