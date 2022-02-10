let color = ["aliceblue", "aqua", "black", "blue", "chocolate", "crimson", "darkblue", "darkcyan"];

let btn = document.getElementById("btn");


btn.addEventListener("click", function() {
  let number = getNumber();
//   console.log(number);
  document.body.style.background = color[number] 
})

function getNumber() {
    return Math.floor(Math.random()* color.length);
}