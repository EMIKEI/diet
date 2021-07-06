const foodBut = document.querySelectorAll(".foodBut")

const foodImg = {
    피자: 'https://han.gl/XhaeW', 
    치킨: 'http://collectionpng.com/images/13732.png',
    떡볶이: 'https://han.gl/hOvPV',
    버거: 'https://han.gl/kZVeg'
}

const foodsKcal = {
    피자: "266kcal",
    치킨: "246kcal",
    떡볶이: "300kcal",
    버거: "295kcal"
}

{
    for(let i=0; i<foodBut.length; i++){
        foodBut[i].style.backgroundImage = `url(${foodImg[foodBut[i].name]})`;
    }
}// foodBut background Image
{
    const main = document.querySelector(".main");
    const food_explain = document.querySelector(".food_explain");
    const foodZone_img = document.querySelector(".foodZone_img");
    const foodZone_closeBut = document.querySelector(".foodZone_closeBut");
    const bottom_gradient = document.querySelector(".bottom_gradient");
    const body = document.querySelector("body");
    let foodName = null;

    for(let i=0; i<foodBut.length; i++){
        foodBut[i].addEventListener("click", clickBut);
    }
    function clickBut(){
        main.classList.remove("remove");
        foodZone_img.src = foodImg[this.name];
        food_explain.textContent = `${this.name}에 대한 설명`;
        foodName = this.name;

        bottom_gradient.classList.add("remove");
        body.classList.add("noScroll");
    }
    
    food_explain.addEventListener("click", function(){
        alert(`${foodName}을(를) 섭취하면 ${foodsKcal[foodName]}를 얻습니다.`)
    })
    
    foodZone_closeBut.addEventListener("click", function(){
        main.classList.add("remove");
        body.classList.remove("noScroll")
    })
    
}//foodBut,foodZone_closeBut, food_explain click event
{
    const bottom_gradient = document.querySelector(".bottom_gradient");
    const top = document.querySelector(".top")

    document.addEventListener("scroll", function(){
        bottom_gradient.classList.add("hide");
        setTimeout(function(){
            bottom_gradient.classList.add("remove")
        }, 700)
    })
}//bottom_gradient scroll event