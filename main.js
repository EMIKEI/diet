const foodBut = document.querySelectorAll(".foodBut")

const foodImg = {
    피자: 'https://han.gl/XhaeW', 
    치킨: 'http://collectionpng.com/images/13732.png',
    떡볶이: 'https://han.gl/QB4GK',
    버거: 'https://han.gl/kZVeg'
}

const foodsKcal = {
    pizza: "266kcal",
    chicken: "246kcal",
    tteokbokki: "300kcal",
    burger: "295kcal"
}
{
    for(let i=0; i<foodBut.length; i++){
        foodBut[i].style.backgroundImage = `url(${foodImg[foodBut[i].name]})`;
    }
}
{
    for(let i=0; i<foodBut.length; i++){
        foodBut[i].addEventListener("click", clickBut)
    }

    function clickBut(){
        alert(this.name)
    }
}
{
    const bottom_gradient = document.querySelector(".bottom_gradient")
    const top = document.querySelector(".top")

    document.addEventListener("scroll", function(){
        bottom_gradient.classList.add("hide")
    })
}