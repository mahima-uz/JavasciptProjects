let colors=["#ACDDDE","#CAF1DE","#E1F8DC","#F7D8BA","#CFF6FF"]
const button=document.getElementById("click");
button.addEventListener("click",function(){
    
        const randomNumber = getRandomNumber();
        console.log(randomNumber);
        document.body.style.backgroundColor=colors[randomNumber];

    
    
})
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }