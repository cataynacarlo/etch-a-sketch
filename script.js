const sketchpad_container = document.querySelector("#sketchpad");
const apply_button = document.getElementById("changebutton");
const clear_button = document.getElementById("resetbutton");

let MAX_WIDTH = document.getElementById("sketchpad").offsetWidth;
let MAX_HEIGHT = document.getElementById("sketchpad").offsetHeight;

let current_id;
let previous_dimension;
let previous_color;



function updateTextInput(val) {
    output = String(val) + " x " + String(val);
    document.getElementById('slide-value').textContent = output; 
  }

function applyChanges(){
    let color = document.getElementById("inputcolor").value;
    let dimension = document.getElementById("inputrange").value;
    let square_dimension = MAX_HEIGHT/dimension;
    let converteddimension = String(square_dimension) + "px";

    if(square_dimension==previous_dimension && color==previous_color) return
    else if(square_dimension==previous_dimension && color!=previous_color){
        let children = sketchpad_container.childNodes;
        //get the box-id of all child and then change eventlistener
        for(var i=0; i<children.length; i++){
            var child = children[i];
            // child.addEventListener('mousedown', function OnMouseDown(event) {
            //     event.target.style.backgroundColor = color;
            //   });
            child.addEventListener('mouseover', function OnMouseOver(event) {
                // 👇️ change background color
                event.target.style.backgroundColor = color;
              });
        }

    }
    else{
        while (sketchpad_container.firstChild) {
            sketchpad_container.firstChild.remove()
        }
        for(let i=0;i<dimension*dimension;i++){
            new_div = document.createElement('div');
            new_div.style.cssText = 'box-sizing:border-box; display:flex; color: orange; background-color: rgb(255,255,255)';          
            new_div.style.width = converteddimension;
            new_div.style.height = converteddimension;
            let new_id = "box-" + String(i);
            current_id = new_id;
            new_div.setAttribute('id',new_id);
            
            // new_div.addEventListener('mousedown', function OnMouseDown(event) {
            //     event.target.style.backgroundColor = color;
            //   });

            new_div.addEventListener('mouseover', function OnMouseOver(event) {
                event.target.style.backgroundColor = color;
              });
            sketchpad_container.appendChild(new_div);
        }
    }
    previous_dimension = square_dimension;
    previous_color = color;
}


function clearSketchpad(){
    let color = document.getElementById("inputcolor").value;
    let dimension = document.getElementById("inputrange").value;

    let square_dimension = MAX_HEIGHT/dimension;
    let converteddimension = String(square_dimension) + "px";

    while (sketchpad_container.firstChild) {
        sketchpad_container.firstChild.remove()
    }
    for(let i=0;i<dimension*dimension;i++){
        new_div = document.createElement('div');
        new_div.style.cssText = 'box-sizing:border-box; display:flex; color: orange; background-color:rgb(255, 235, 235)';          
        new_div.style.width = converteddimension;
        new_div.style.height = converteddimension;
        let new_id = "box-" + String(i);
        current_id = new_id;
        new_div.setAttribute('id',new_id);
        //border: 1px solid; border-style:outset
        // new_div.addEventListener('mousedown', function OnMouseDown(event) {
        //     event.target.style.backgroundColor = color;
        //   });

        new_div.addEventListener('mouseover', function OnMouseOver(event) {
            event.target.style.backgroundColor = color;
          });

        sketchpad_container.appendChild(new_div);
    }
}

//adding event listeners
apply_button.addEventListener('click',applyChanges);
clear_button.addEventListener('click',clearSketchpad);

//initial call to render sketchpad
applyChanges();






