const loadingPage = document.querySelector(".loadingPage");
const loadingPageImg = document.querySelector(".loadingPage img");

const foodButs = document.querySelector(".foodButs");
const foodBut = document.querySelectorAll(".foodBut");
const foodButImg = document.querySelectorAll(".foodBut img");
const foodButZone = document.querySelector(".foodButZone");


const saladButSpan = document.querySelectorAll(".saladBut span");

const foodImgZone = document.querySelector(".foodImgZone");
const foodImgBackground = document.querySelector(".foodImgBackground");
const foodImg = document.querySelector(".foodImg");
const alertFoodImg = document.querySelector(".alertFoodImg");
const closeFoodImg = document.querySelector(".foodImgZone button");

const rightScrollZone = document.querySelector(".rightScrollZone");
const leftScrollZone = document.querySelector(".leftScrollZone");

const foodImgBackgroundImg = {
    pizza: 'https://han.gl/XhaeW', 
    chicken: 'http://collectionpng.com/images/13732.png',
    tteokbokki: 'https://han.gl/QB4GK',
    burger: 'https://han.gl/kZVeg'
};
const foodImgBackgroundImgArray = ['https://han.gl/XhaeW','http://collectionpng.com/images/13732.png', 'https://han.gl/QB4GK', 'https://han.gl/kZVeg'];

let goScrollLeft = null;
let goScrollRight =null;

loadingPageImg.src = foodImgBackgroundImgArray[Math.floor(Math.random()*foodImgBackgroundImgArray.length)];

window.addEventListener("load", function(){
    loadingPageImg.style.filter = "hue-rotate(415deg) saturate(65%) brightness(80%) contrast(93%)";

    setTimeout(function(){
        loadingPage.style.display = "none";
    },2500)

    for(let ii = 0; ii< foodBut.length; ii++ ){
            foodButImg[ii].src = foodImgBackgroundImg[foodButImg[ii].alt];
        }
        
    for(let i = 0; i< foodBut.length; i++ ){
        foodBut[i].addEventListener("click", function(){
            foodImg.src = foodImgBackgroundImg[this.name];
            alertFoodImg.style.display = "flex";
        })
    }
})

//alertFoodTmg
closeFoodImg.addEventListener("click", function(){
    alertFoodImg.style.display = "none";
})

foodImgBackground.addEventListener("click", function(){
    alertFoodImg.style.display = "none";
})

for(let s = 0; s<saladButSpan.length; s++){
    saladButSpan[s].addEventListener("click", function(){
        alert("상품이 품절되었습니다")
    })
}

//scrollZone
leftScrollZone.addEventListener("mouseover", function(){
    foodButZone.scrollBy({
        left:-foodButZone.offsetWidth/2,
        behavior:"smooth"
    })
    goScrollLeft=
    setInterval(function(){
        foodButZone.scrollBy({
            left:-foodButZone.offsetWidth/2,
            behavior:"smooth"
        })
    }, 500)
})
rightScrollZone.addEventListener("mouseover", function(){
    foodButZone.scrollBy({
        left:foodButZone.offsetWidth/2,
        behavior:"smooth"
    })
    goScrollRight=
    setInterval(function(){
        foodButZone.scrollBy({
            left:foodButZone.offsetWidth/2,
            behavior:"smooth"
        })
    }, 500)
})
leftScrollZone.addEventListener("mouseout", function(){
    clearInterval(goScrollLeft)
})
rightScrollZone.addEventListener("mouseout", function(){
    clearInterval(goScrollRight)
})