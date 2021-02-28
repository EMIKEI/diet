const body = document.querySelector("body");
const loadingPage = document.querySelector(".loadingPage")
const selectFoodZone = document.querySelector(".selectFoodZone");
const foodBut = document.querySelectorAll(".foodBut");
const mainZone = document.querySelector(".mainZone");
const foodImg = document.querySelector(".foodImg");
const FixedAd = document.querySelector(".FixedAd");

const EW = "blur(0.7px) hue-rotate(400deg) saturate(80%) brightness(70%) drop-shadow(0 0 10px #e0e0e0) contrast(135%)";
const foodImgBackgroundImg = [
    "url('https://i.pinimg.com/originals/5a/d7/3b/5ad73be991746c4cad6338fb42fbc20c.png')", 
    "url('http://collectionpng.com/images/13732.png')"
];

loadingPage.style.display="flex"

window.addEventListener("load", function(){
    setTimeout(function(){
        loadingPage.style.display = "none";
    },2000)
})

foodBut[0].addEventListener("click", function(){
    foodImg.style.backgroundImage = foodImgBackgroundImg[0];
    foodImg.style.filter= EW;
})

foodBut[1].addEventListener("click", function(){
    foodImg.style.backgroundImage = foodImgBackgroundImg[1];
    foodImg.style.filter= EW;
})

