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
    const foodImgZoneText = document.querySelector(".foodImgZone h4");
    const explainBut = document.querySelector(".explainBut");

    const foodsKcal = {
        pizza: "266kcal",
        chicken: "246kcal",
        tteokbokki: "300kcal",
        burger: "295kcal"
    }
    
    for(let i = 0; i < foodBut.length; i++){
        foodBut[i].addEventListener("click", click)
    }
    
    function click(){
        foodImg.classList.remove("hide")
        explainBut.classList.remove("hide")
        foodImgZoneText.classList.add("hide")
        foodImg.src = `${foodButImg[this.name]}`;
        explainBut.innerHTML = `${this.name} l ${foodsKcal[this.name]}`
        explainBut.name = this.name;
    }
    
    explainBut.addEventListener("click", function(){
        alert(`${this.name}의 열량은 100g에 ${foodsKcal[this.name]}입니다.`)
    })
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