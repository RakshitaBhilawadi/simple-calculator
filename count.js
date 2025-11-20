let counter=document.getElementById("counter")
let decre=document.getElementById("decre")
let reset=document.getElementById("reset")
let incre=document.getElementById("incre")

let count=0
function updateCounter(){
  if(count>0){
    counter.style.color="green";
  }
  else if(count<0){
    counter.style.color="red";
    
  }
  else{
    counter.style.color="black";
    
  }
}
function increment() {
  count++;
  counter.textContent=count;
  updateCounter();
}

function decrement() {
  count--;
  counter.textContent=count;
  updateCounter();
}

function resetCount() {
  count = 0;
  counter.textContent=count;
  updateCounter();
}

decre.addEventListener("click",decrement)
incre.addEventListener("click",increment)
reset.addEventListener("click",resetCount)