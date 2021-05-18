const main = document.querySelector("main")
const foodButZone = document.querySelector(".foodButZone")
const foodBut = document.querySelectorAll(".foodBut")
const foodImgZone = document.querySelector(".foodImgZone")
const foodImg = document.querySelector(".foodImgZone img")

const foodButImg = {
    pizza: 'https://han.gl/XhaeW', 
    chicken: 'http://collectionpng.com/images/13732.png',
    tteokbokki: 'https://han.gl/QB4GK',
    burger: 'https://han.gl/kZVeg'
}
//window load
{
    window.addEventListener("load", load)

    function load(){
        for(let i = 0; i < foodBut.length; i++){
            foodBut[i].style.backgroundImage = `url(${foodButImg[foodBut[i].name]})`;
        }
    }
}
//click food button
{
    for(let i = 0; i < foodBut.length; i++){
        foodBut[i].addEventListener("click", click)
    }
    function click(){
        foodImg.classList.remove("hide")
       foodImg.src = `${foodButImg[this.name]}`;
    }
}
//mouse over scroll
{
    const leftscroll = document.querySelector(".scroll.left")
    const rightscroll = document.querySelector(".scroll.right")
    
    leftscroll.addEventListener("mouseover", function(){
        foodButZone.scrollBy({
            left: -foodButZone.offsetWidth/4,
            behavior: "smooth"
        })
    })
    rightscroll.addEventListener("mouseover", function(){
        foodButZone.scrollBy({
            left: foodButZone.offsetWidth/4,
            behavior: "smooth"
        })
    })
}
/*
연속적으로 스크롤하도록 만들어야 함
*/ 