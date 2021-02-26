const body = document.querySelector("body");
const selectFoodZone = document.querySelector(".selectFoodZone");
const foodBut = document.querySelectorAll(".foodBut");
const mainZone = document.querySelector(".mainZone");
const foodImg = document.querySelector(".foodImg");
const FixedAd = document.querySelector(".FixedAd");
const EW = "blur(0.7px) hue-rotate(400deg) saturate(80%) brightness(80%) drop-shadow(0 0 10px #e0e0e0) contrast(135%)";

foodBut[0].addEventListener("click", function(){
    foodImg.style.backgroundImage = "url('https://i.pinimg.com/originals/5a/d7/3b/5ad73be991746c4cad6338fb42fbc20c.png')"
    foodImg.style.filter= EW;
})
foodBut[1].addEventListener("click", function(){
    foodImg.style.backgroundImage = "url('http://collectionpng.com/images/13732.png')"
    foodImg.style.filter= EW;
})
foodBut[2].addEventListener("click", function(){
    foodImg.style.filter="none"
    foodImg.style.backgroundImage = "url('https://bk-emea-prd.s3.amazonaws.com/sites/burgerking.co.uk/files/18492_BK_Web_SMALLSALAD_500x540px.png')"
})