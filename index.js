document.body.style.backgroundColor = 'silver';
document.body.style.margin = 'auto'
document.body.style.width = '30vw'

let hey = document.getElementById("title").style.color = "green";
title.style.fontSize = 'xxx-large';
title.style.textAlign = 'center';

let p1 = document.getElementById('p1');
p1.style.textAlign = 'center'
p1.style.fontSize = 'large';
p1.style.fontFamily = 'sans';
p1.style.border = '1px solid #5C4033'
p1.style.width ='15vw'
p1.style.margin = 'auto'
p1.style.padding = '1vh'
p1.style.color ='#5C4033'


let h3 = document.querySelectorAll("h3");
h3.forEach(h3 => {
  h3.style.textTransform = "uppercase";
  h3.style.fontFamily = 'sans';
  h3.style.fontSize = 'x-large';
  h3.style.color = 'brown';

});

let products = document.getElementById('products');
products.style.display = 'flex'
products.style.alignItems = 'center';
products.style.justifyContent = 'space-between'

let fruitList = document.getElementById("fruList");
fruitList.style.color = '#5C4033'
fruitList.style.fontFamily = 'sans'
let newFruit = document.createElement("li");
newFruit.textContent = "Apples";

fruitList.appendChild(newFruit);
// 
let vegList = document.getElementById("vegList");
let newVeg = document.createElement("li");
vegList.style.color = '#5C4033'
vegList.style.fontFamily = 'sans'
newVeg.textContent = "Skuma";
vegList.appendChild(newVeg);
