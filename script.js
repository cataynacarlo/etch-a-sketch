
let MAX_WIDTH = document.getElementById("sketchpad").offsetWidth;
let MAX_HEIGHT = document.getElementById("sketchpad").offsetHeight;

console.log(MAX_HEIGHT)
console.log(MAX_WIDTH)
console.log("Hello")

let previous_dimension;
const sketchpad_container = document.querySelector("#sketchpad");

console.log(sketchpad_container)

function applyChanges(){
    let color = document.getElementById("inputcolor").value;
    let dimension = document.getElementById("inputrange").value;

    console.log(color);
    console.log(dimension);

    let square_dimension = MAX_HEIGHT/dimension;
    let converteddimension = String(square_dimension) + "px";

    if(square_dimension==previous_dimension) return

    else{
        while (sketchpad_container.firstChild) {
            sketchpad_container.firstChild.remove()
        }
    }

    for(let i=0;i<dimension*dimension;i++){
        new_div = document.createElement('div');
        new_div.style.cssText = 'box-sizing:border-box; display:flex; color: orange; background-color: pink; border: 1px solid; border-style:outset';          
        new_div.style.width = converteddimension;
        new_div.style.height = converteddimension;
        
        console.log(new_div.style.width);
        console.log(new_div.style.height);
        //new_div.textContent = "w";
        //new_div.classList.add('sketch-box');
        //console.log(new_div.style.width);
        sketchpad_container.appendChild(new_div);
        //console.log("adding a new div!");
        
    }

    previous_dimension = square_dimension;
    
}


const apply_button = document.getElementById("changebutton");

apply_button.addEventListener('click',applyChanges);

