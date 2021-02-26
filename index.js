const body = document.querySelector("body")
const selectFoodZone = document.querySelector(".selectFoodZone")
const foodBut = document.querySelectorAll(".foodBut")
const mainZone = document.querySelector(".mainZone")
const foodImg = document.querySelector(".foodImg")
const FixedAd = document.querySelector(".FixedAd")

foodBut[0].addEventListener("click", function(){
    foodImg.style.backgroundImage = "url('https://i.pinimg.com/originals/5a/d7/3b/5ad73be991746c4cad6338fb42fbc20c.png')"
})
foodBut[1].addEventListener("click", function(){
    foodImg.style.backgroundImage = "url('https://img.bbq.co.kr:449/uploads/bbq_d/pc/gold_olive_stic_half_thumb.png')"
})