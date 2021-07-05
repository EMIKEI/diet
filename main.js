const foodBut = document.querySelectorAll(".foodBut")

const foodImg = {
    피자: 'https://han.gl/XhaeW', 
    치킨: 'http://collectionpng.com/images/13732.png',
    떡볶이: 'https://han.gl/QB4GK',
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

    for(let i=0; i<foodBut.length; i++){
        foodBut[i].addEventListener("click", clickBut);
    }

    function clickBut(){
        main.classList.remove("remove");
        foodZone_img.src = foodImg[this.name];
        food_explain.textContent = `${this.name}에 대한 설명`;
        bottom_gradient.classList.add("hide");

        foodZone_closeBut.addEventListener("click", function(){
            main.classList.add("remove");
        })
        food_explain.addEventListener("click", function(){
            alert("준비 중입니다.")
        })
    }
}//foodBut click event
{
    const bottom_gradient = document.querySelector(".bottom_gradient");
    const top = document.querySelector(".top")

    document.addEventListener("scroll", function(){
        bottom_gradient.classList.add("hide");
    })
}//bottom_gradient scroll event