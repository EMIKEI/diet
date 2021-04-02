const loadingPage = document.querySelector(".loadingPage");

const foodButs = document.querySelector(".foodButs");
const foodBut = document.querySelectorAll(".foodBut");

const foodImgZone = document.querySelector(".foodImgZone");
const foodImgBack = document.querySelector(".foodImgBack");
const foodImg = document.querySelector(".foodImg");
const alertFoodImg = document.querySelector(".alertFoodImg");
const closeFoodImg = document.querySelector(".foodImgZone button");

const storeBut = document.querySelector(".storeBut")

const foodImgBackgroundImg = [
    'https://han.gl/XhaeW', 
    'http://collectionpng.com/images/13732.png',
    'https://han.gl/QB4GK',
    'https://han.gl/kZVeg'
];


window.addEventListener("load", function(){
    setTimeout(function(){
        loadingPage.style.display = "none";
        document.querySelector("html").scrollTo(0, 0)
    },2000)
})

for(let i = 0; i< foodBut.length; i++ ){
    foodBut[i].addEventListener("click", function(){
        foodImg.src = foodImgBackgroundImg[i];
        alertFoodImg.style.display = "flex";
    })
}

closeFoodImg.addEventListener("click", function(){
    alertFoodImg.style.display = "none";
})

foodImgBack.addEventListener("click", function(){
    alertFoodImg.style.display = "none";
})

storeBut.addEventListener("click", function(){
    window.location.href = "store.html"
})