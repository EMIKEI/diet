const loadingPage = document.querySelector(".loadingPage");

const foodButs = document.querySelector(".foodButs");
const foodBut = document.querySelectorAll(".foodBut");
const main = document.querySelector("main");

const foodImgZone = document.querySelector(".foodImgZone");
const foodImgBackground = document.querySelector(".foodImgBackground");
const foodImg = document.querySelector(".foodImg");
const alertFoodImg = document.querySelector(".alertFoodImg");
const closeFoodImg = document.querySelector(".foodImgZone button");

const storeBut = document.querySelector(".storeBut");

const rightScrollZone = document.querySelector(".rightScrollZone");
const leftScrollZone = document.querySelector(".leftScrollZone");

const foodImgBackgroundImg = {
    pizza: 'https://han.gl/XhaeW', 
    chicken: 'http://collectionpng.com/images/13732.png',
    tteokbokki: 'https://han.gl/QB4GK',
    burger: 'https://han.gl/kZVeg'
};

let goScrollLeft = null;
let goScrollRight =null;

window.addEventListener("load", function(){

    setTimeout(function(){
        loadingPage.style.display = "none";
    },2000)

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

storeBut.addEventListener("click", function(){
    alert("준비 중")
})

//scrollZone
leftScrollZone.addEventListener("mouseover", function(){
    main.scrollBy({
        left:-main.offsetWidth/2,
        behavior:"smooth"
    })
    goScrollLeft=
    setInterval(function(){
        main.scrollBy({
            left:-main.offsetWidth/2,
            behavior:"smooth"
        })
    }, 500)
})
rightScrollZone.addEventListener("mouseover", function(){
    main.scrollBy({
        left:main.offsetWidth/2,
        behavior:"smooth"
    })
    goScrollRight=
    setInterval(function(){
        main.scrollBy({
            left:main.offsetWidth/2,
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