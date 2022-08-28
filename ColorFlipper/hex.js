const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button=document.getElementById("click");
const text=document.querySelector(".colort");

button.addEventListener("click",function(){
let hexColor="#";

    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
      }
      console.log(hexColor);

      document.body.style.backgroundColor=hexColor;
      text.textContent=hexColor;
})

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}