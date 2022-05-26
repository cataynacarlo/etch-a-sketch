
let MAX_WIDTH = document.getElementById("sketchpad").offsetWidth;
let MAX_HEIGHT = document.getElementById("sketchpad").offsetHeight;

console.log(MAX_HEIGHT)
console.log(MAX_WIDTH)
console.log("Hello")

let current_id;
let previous_dimension;
let previous_color;
const sketchpad_container = document.querySelector("#sketchpad");

console.log(sketchpad_container)


function changeColor(){
    console.log(current_id);
    let current_div = document.getElementById(current_id);
    current_div.style.backgroundColor = 'salmon';
}

function applyChanges(){
    let color = document.getElementById("inputcolor").value;
    let dimension = document.getElementById("inputrange").value;

    console.log(color);
    console.log(dimension);

    let square_dimension = MAX_HEIGHT/dimension;
    let converteddimension = String(square_dimension) + "px";

    if(square_dimension==previous_dimension && color==previous_color) return
    else if(square_dimension==previous_dimension && color!=previous_color){
        let children = sketchpad_container.childNodes;
        //get the box-id of all child and then change eventlistener
        for(var i=0; i<children.length; i++){
            var child = children[i];
            child.addEventListener('mousedown', function OnMouseDown(event) {
                // 👇️ change background color
                event.target.style.backgroundColor = color;
              
                // 👇️ optionally change text color
                // event.target.style.color = 'white';
              });

            child.addEventListener('mouseover', function OnMouseOver(event) {
                // 👇️ change background color
                event.target.style.backgroundColor = color;
                // 👇️ optionally change text color
                // event.target.style.color = 'white';
              });
        }

    }
    else{
        while (sketchpad_container.firstChild) {
            sketchpad_container.firstChild.remove()
        }
        for(let i=0;i<dimension*dimension;i++){
            new_div = document.createElement('div');
            new_div.style.cssText = 'box-sizing:border-box; display:flex; color: orange; background-color: pink; border: 1px solid; border-style:outset';          
            new_div.style.width = converteddimension;
            new_div.style.height = converteddimension;
            let new_id = "box-" + String(i);
            current_id = new_id;
            new_div.setAttribute('id',new_id);
    
            
            new_div.addEventListener('mousedown', function OnMouseDown(event) {
                // 👇️ change background color
                event.target.style.backgroundColor = color;
              
                // 👇️ optionally change text color
                // event.target.style.color = 'white';
              });

            new_div.addEventListener('mouseover', function OnMouseOver(event) {
                // 👇️ change background color
                event.target.style.backgroundColor = color;
                // 👇️ optionally change text color
                // event.target.style.color = 'white';
              });
            //new_div.addEventListener('click',changeColor);
            
            //console.log(new_div.style.width);
            //console.log(new_div.style.height);
            //console.log(new_div);
            //new_div.textContent = "w";
            //new_div.classList.add('sketch-box');
            //console.log(new_div.style.width);
            sketchpad_container.appendChild(new_div);
            //console.log("adding a new div!");
        }
    }



    previous_dimension = square_dimension;
    previous_color = color;

    //console.log(sketchpad_container.body.children);
}

var display_size = document.getElementById("inputrange").value;

function updateTextInput(val) {
    output = String(val) + " x " + String(val);
    document.getElementById('slide-value').textContent=output; 
  }


const apply_button = document.getElementById("changebutton");
apply_button.addEventListener('click',applyChanges);

