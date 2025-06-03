// document.body.style.backgroundColor = '#1F8C59';
document.body.style.margin = 'auto'
document.body.style.width = '100vw'

let product_info = document.querySelectorAll('product_info')
product_info.forEach(product =>{
  product.style.padding = '1vh 1vw'
  product.style.border =' 1px solid blue'
})

// top
let nav = document.getElementById('nav')
nav.style.display ='flex'
nav.style.alignItems ='center'
nav.style.background = '#F2BD1D'
nav.style.justifyContent = 'space-between'
nav.style.padding = '0 15vw'
nav.style.fontFamily = 'sans'

// nav on products
// let productNav = document.getElementById('productNav')
// productNav.style.width = '60vw'
// productNav.style.display = 'flex'
// productNav.style.margin = 'auto'
// productNav.style.gap = '25vw'
// productNav.style.background = '#F2BD1D'
// productNav.style.padding = '0vh 2vw'
// productNav.style.borderRadius = '1vw'
// productNav.style.color = 'green'
// productNav.style.fontFamily = 'sans'

// product_type
let product_type = document.getElementById('product_type')
product_type.style.display = 'flex'
product_type.style.width = '40vw'
product_type.style.margin ='auto'
product_type.style.justifyContent = 'space-between'

// let product_detail =document.getElementById('product_detail')
// product_detail.style.display = 'flex'
// product_detail.style.justifyContent = 'space-between'
// product_detail.style.width = '30vw'

// About us
let p1 = document.getElementById('p1');
p1.style.textAlign = 'center'
p1.style.fontFamily = 'sans';
p1.style.margin = 'auto'
p1.style.padding = '1vh'
p1.style.color ='#1F8C59'
p1.style.fontSize = 'x-large'

// headings 3
let h3 = document.querySelectorAll("h3");
h3.forEach(h3 => {
  h3.style.textTransform = "uppercase";
  h3.style.fontFamily = 'sans';
  h3.style.fontSize = 'x-large';
  h3.style.color = '#1F8C59';
  h3.style.textAlign = 'center'

});

//focusssssssssss


let img = document.querySelectorAll('img')
img.forEach(img=>{
  img.style.borderRadius ='50%';
  img.style.width = '5vw'
})

// 


// title
let title = document.getElementById("title")
title.style.color = "White";
title.style.fontSize = 'xxx-large';
title.style.textAlign = 'center';
title.style.backgroundColor = '#1F8C59';
title.style.padding = '2vh'
title.style.marginTop = '0'
// Products
let products = document.getElementById('products');
products.style.margin = 'auto'
products.style.width = '40vw'
products.style.display = 'flex'
products.style.alignItems = 'center';

products.style.justifyContent = 'space-between'

let fruitList = document.getElementById("fruList");
fruitList.style.color = '#5C4033'
fruitList.style.fontFamily = 'sans'
let newFruit = document.createElement("li");
newFruit.textContent = "Apples";

fruitList.appendChild(newFruit);
let vegList = document.getElementById("vegList");
let newVeg = document.createElement("li");
vegList.style.color = '#5C4033'
vegList.style.fontFamily = 'sans'
newVeg.textContent = "Skuma";
vegList.appendChild(newVeg);


let signup = document.getElementById('sign-up')
signup.style.color = '#1F8C59'








const icons = document.querySelectorAll('.a')
icons.forEach(icon => {
  icon.style.fontSize = 'large'
  icon.style.color = 'white'
})





