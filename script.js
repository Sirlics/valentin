const no = document.getElementById("no")
const yes = document.querySelector("button")

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

no.addEventListener("click",(e)=>{
    
    no.style.position="absolute"
    no.style.top=getRandomArbitrary(10,90) + "%"
    no.style.left=getRandomArbitrary(10,90) + "%"
})

no.addEventListener("mouseover",(e)=>{
    
    no.style.position="absolute"
    no.style.top=getRandomArbitrary(10,90) + "%"
    no.style.left=getRandomArbitrary(10,90) + "%"
    yes.style.boxShadow="1px 1px 10px 10px pink"
    yes.style.width="80px"
    yes.style.height="60px"
})
