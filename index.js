
const decreasebutton =document.getElementById("decreasebutton");
const increasebutton =document.getElementById("increasebutton");
const resetbutton =document.getElementById("resetbutton");
const countlabel= document.getElementById("countlabel");
let count=0;

function animateLabel() {
    countlabel.style.transform = "scale(1.1)";
    setTimeout(() => countlabel.style.transform = "scale(1)", 150);
  }
increasebutton.onclick=function(){
    count++;
    countlabel.textContent=count;
    animateLabel();
}
decreasebutton.onclick=function(){
    count--;
    countlabel.textContent=count;
    animateLabel();
}
resetbutton.onclick=function(){
    count=0;
    countlabel.textContent=count;
    animateLabel();
}