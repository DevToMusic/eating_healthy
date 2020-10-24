
let box = document.querySelector('.textbox');

const basis = [ "Rigatoni", "Rice", "Spaghettie", "Potatoes" ]

const vegetales = [

 
    "Garlic",
    "Onience",
    "Hot Peppers"
    


]
const vegetales1 = [

    "Avocado",
    "Tomatoes",
    "Red Peppers",
  
    

]
const vegetales3 = [

    "Mushrooms",
    "Carrots",
    "Beans",
  
    

]



const getVegetale1 = () => {

    let num = Math.floor(Math.random()* 3)

    for(let i = 0; i < vegetales.length; ++i){

    return vegetales[num];
        if(vegetales.length){
            break;
        }
    }

}

const getVegetale2 = () => {

    let num = Math.floor(Math.random()* 3)

    for(let i = 0; i < vegetales1.length; ++i){

    return vegetales1[num];
        if(vegetales1.length){
            break;
        }
    }

}
const getVegetale3 = () => {

    let num = Math.floor(Math.random()* 3)

    for(let i = 0; i < vegetales3.length; ++i){

    return vegetales3[num];
        if(vegetales3.length){
            break;
        }
    }

}
const basisMeal = () => {

    let num = Math.floor(Math.random()* 4)

    for(let i = 0; i < basis.length; ++i){

    return basis[num];
        if(basis.length){
            break;
        }
    }

}
basisMeal();

const fire = () =>{
    meal = basisMeal();
    veg1 = getVegetale1();
    veg2 = getVegetale2();
    veg3 = getVegetale3();

    document.getElementById('textmeal').innerHTML = `Today my best Meal would be ${meal} with ${veg1}, ${veg2} and ${veg3}. ENJOY!!!`;
    

}


box.onclick = function() {
     box.style.backgroundColor = "#fff";
}
box.onmouseleave = function(){
    box.style.animation = "shadow-drop-2-center 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse both";

}
box.onmouseover = function(){
    box.style.animation = "shadow-drop-3-center 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940)  both";

}