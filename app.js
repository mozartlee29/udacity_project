
    // Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
}

    // Create Dino Objects
var Triceratops = new Dino("Triceratops", 13000, 114, "herbavor", "America", "Late Cretaceous", "First discovered in 1889 by Othniel Charles Marsh");
var TyrannosaurusRex = new Dino("Tyrannosaurus Rex", 11905, 144, "carnivor", "North America", "Late Cretaceous", "The largest known skull measures in at 5 feet long.");
var Anklyosaurus = new Dino("Anklyosaurus", 10500, 55, "herbavor", "North America", "Late Cretaceous", "Anklyosaurus survived for approximately 135 million years.");
var Brachiosaurus = new Dino("Brachiosaurus", 70000, 372, "herbavor", "North America", "Late Jurasic", "An asteroid was named 9954 Brachiosaurus in 1991.");
var Stegosaurus = new Dino("Stegosaurus", 11600, 79, "herbavor", "North America, Europe, Asia", "Late Jurasic to Early Cretaceous", "The Stegosaurus had between 17 and 22 seperate places and flat spines.");
var Elasmosaurus = new Dino("Elasmosaurus", 16000, 59, "carnivor", "North America", "Late Cretaceous", "Elasmosaurus was a marine reptile first discovered in Kansas.");
var Pteranodon = new Dino("Pteranodon", 44, 20, "carnivor", "North America", "Late Cretaceous", "Actually a flying reptile, the Pteranodon is not a dinosaur.");
var Pigeon = new Dino("Pigeon", 0.5, 9, "herbavor", "World Wide", "Holocene", "All birds are living dinosaurs.");

    // Create Human Object
function Human(species, weight, height, diet, where, when, fact) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
}


// check form length for getting form values\
var element_form = document.getElementById("dino-compare");
console.log(element_form);
var form_submit_value = document.getElementById("dino-compare").elements.length;
console.log("form_submit_value", form_submit_value);


// var kvpairs = [];
// for ( var i = 0; i < element_form.elements.length; i++ ) {
//     var e = element_form.elements[i];
//     console.log("e", e);
//     kvpairs.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value));
// }
// var queryString = kvpairs.join("&");
// console.log("queryString", queryString);

    // Use IIFE to get human data from form
let human_value;

document.getElementById('btn').addEventListener('click', function(e) {
    let name = document.getElementById('name').value;
    let feet = parseFloat(document.getElementById('feet').value);
    let inches = parseFloat(document.getElementById('inches').value);
    let height = (feet * 12) + inches;
    let weight = parseFloat(document.getElementById('weight').value);
    let diet = document.getElementById('diet').value;
    human_value = new Human(name, height, weight, diet);
    console.log(human_value)
});

console.log("human_value", human_value);

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
function showDiv() {
    document.getElementById('grid').style.display = "";
    document.getElementById('dino-compare').style.display = "none";

}