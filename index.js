const loadingPage = document.querySelector(".loadingPage")
const selectFoodZone = document.querySelector(".selectFoodZone");
const foodButs = document.querySelector(".foodButs");
const foodBut = document.querySelectorAll(".foodBut");
const mainZone = document.querySelector(".mainZone");
const foodImg = document.querySelector(".foodImg");
const FixedAd = document.querySelector(".FixedAd");

const scrollFoodZone = document.querySelectorAll(".scrollFoodZone");
const selectFoodZoneWidth = selectFoodZone.offsetWidth;

const EW = "blur(0.7px) hue-rotate(400deg) saturate(80%) brightness(70%) drop-shadow(0 7.5px 7.5px #78893A) contrast(135%)";

const foodImgBackgroundImg = [
    "url('https://han.gl/XhaeW')", 
    "url('http://collectionpng.com/images/13732.png')"
];

loadingPage.style.display="flex";

window.addEventListener("load", function(){
    setTimeout(function(){
        loadingPage.style.display = "none";
    },2000)
})

for(let i = 0; i< foodBut.length; i++ ){
    foodBut[i].addEventListener("click", function(){

        for(let i2 = 0; i2 < foodBut.length; i2++){
            foodBut[i2].classList.remove('selectedBut')
        }

        foodBut[i].classList.add('selectedBut')
        foodImg.style.backgroundImage = foodImgBackgroundImg[i]; 
        foodImg.style.filter = EW;
    })
}

const foodButsWidth = foodButs.offsetWidth;

// 왼쪽 scrollFoodZone
scrollFoodZone[0].addEventListener("mouseenter", function(){
    foodButs.scrollBy({
        left: -foodButsWidth/4,
        behavior:"smooth"
    })
    scrollfoodZone1=
    setInterval(function(){
        foodButs.scrollBy({
            left: -foodButsWidth/4,
            behavior:"smooth"
        })
    },470)
})
scrollFoodZone[0].addEventListener("mouseout",function(){
    clearInterval(scrollfoodZone1)
})
//오른쪽 scrollFoodZone
scrollFoodZone[1].addEventListener("mouseenter", function(){
        foodButs.scrollBy({
            left: foodButsWidth/4,
            behavior:"smooth"
        })
        scrollfoodZone2=
        setInterval(function(){
            foodButs.scrollBy({
                left: foodButsWidth/4,
                behavior:"smooth"
            })
        },470)
})
scrollFoodZone[1].addEventListener("mouseout",function(){
    clearInterval(scrollfoodZone2)
})