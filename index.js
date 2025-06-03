document.body.style.margin = 'auto'
document.body.style.width = '100vw'

let nav = document.getElementById('nav')
nav.style.display = 'flex'
nav.style.alignItems = 'center'
nav.style.background = '#F2BD1D'
nav.style.justifyContent = 'space-between'
nav.style.padding = '0 15vw'
nav.style.fontFamily = 'sans'

let title = document.getElementById("title")
title.style.color = "White";
title.style.fontSize = 'xxx-large';
title.style.textAlign = 'center';
title.style.backgroundColor = '#1F8C59';
title.style.padding = '2vh'
title.style.marginTop = '0'


let h3 = document.querySelectorAll("h3");
h3.forEach(h3 => {
    h3.style.textTransform = "uppercase";
    h3.style.fontFamily = 'sans';
    h3.style.fontSize = 'large';
    h3.style.color = '#1F8C59';
    h3.style.textAlign = 'center'
});


let p1 = document.getElementById('p1');
p1.style.textAlign = 'center'
p1.style.fontFamily = 'sans';
p1.style.margin = 'auto'
p1.style.padding = '1vh'
p1.style.color = '#1F8C59'
p1.style.fontSize = 'x-large'

let category = document.getElementById('category')
category.style.display = 'flex'
category.style.width = '40vw'
category.style.margin = 'auto'
category.style.justifyContent = 'space-between'


const veggie_cat = document.getElementById('veggie-cate');
const fruit_cat = document.getElementById('fruit-cate');
veggie_cat.style.cursor = fruit_cat.style.cursor = 'pointer';


const fruList = document.getElementById('fruList');
const vegList = document.getElementById('vegList');


function changeCategory(category) {
    if (category === 'veggies') {
        veggie_cat.style.textDecoration = 'underline';
        fruit_cat.style.textDecoration = 'none';
        vegList.style.display = '';

        fruList.style.display = 'none';
    } else {
        fruit_cat.style.textDecoration = 'underline';
        veggie_cat.style.textDecoration = 'none';
        fruList.style.display = '';
        vegList.style.display = 'none';
    }
}

veggie_cat.onclick = () => changeCategory('veggies');
fruit_cat.onclick = () => changeCategory('fruits');

let productNav = document.querySelectorAll(".productNav")
productNav.forEach(productNav =>{
    productNav.style.fontSize = 'large'
    productNav.style.width = '50vw';
    productNav.style.display = 'flex'
    productNav.style.margin = 'auto'
    productNav.style.justifyContent = 'space-between'
    productNav.style.background = '#F2BD1D'
    productNav.style.padding = '0vh 2vw'
    productNav.style.borderRadius = '1vw'
    productNav.style.color = 'beige'
    productNav.style.fontFamily = 'sans'
})

let list = document.querySelectorAll('li')
list.forEach(list=>{
    list.style.display = 'flex'
    list.style.width = '50vw';
    list.style.margin = 'auto'
    list.style.justifyContent = 'space-between'
})

veggie_cat.style.textDecoration = 'underline';
let newVeg = document.createElement("li");
vegList.style.color = '#5C4033'
vegList.style.fontFamily = 'sans'
vegList.style.textAlign = 'center'
vegList.listStyle = 'none';
vegList.appendChild(newVeg);
fruit_cat.style.cursor = 'pointer'
fruList.style.display = 'none';
fruList.style.color = '#5C4033'
fruList.style.fontFamily = 'sans'
fruList.style.textAlign = 'center'
fruList.style.listStyle = 'none'
let newFruit = document.createElement("li");
newFruit.textContent = ["Apple", "KSh 500", "2KG"];

const vegUl = document.querySelector('#vegList ul');

const newVegLi = document.createElement('li');

newVegLi.style.display = 'flex';
newVegLi.style.width = '50vw';
newVegLi.style.margin = 'auto';
newVegLi.style.justifyContent = 'space-between';

const vegName = document.createElement('p');
vegName.textContent = 'here';

const vegPrice = document.createElement('p');
vegPrice.textContent = 'Ksh 200';

const veggie_amount = document.createElement('p');
veggie_amount.textContent = '2KG';
newVegLi.appendChild(vegName);
newVegLi.appendChild(vegPrice);
newVegLi.appendChild(veggie_amount);
vegUl.appendChild(newVegLi);

const fruitUl = document.querySelector('#fruList ul');

const newFruitLi = document.createElement('li');

newFruitLi.style.display = 'flex';
newFruitLi.style.width = '50vw';
newFruitLi.style.margin = 'auto';
newFruitLi.style.justifyContent = 'space-between';

const fruitName = document.createElement('p');
fruitName.textContent = 'Pineapple';

const fruitPrice = document.createElement('p');
fruitPrice.textContent = 'Ksh 250';

const fruitAmount = document.createElement('p');
fruitAmount.textContent = '2KG';
newFruitLi.appendChild(fruitName);
newFruitLi.appendChild(fruitPrice);
newFruitLi.appendChild(fruitAmount);
fruitUl.appendChild(newFruitLi);