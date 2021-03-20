// Write your solution here!


const cats = ['Milo','Otis','Garfield'];


function destructivelyAppendCat() {
    cats.push('Ralph');
}
destructivelyAppendCat;

function destructivelyPrependCat() {
    cats.unshift('Bob');
}
destructivelyPrependCat;

function destructivelyRemoveLastCat() {
    cats.pop();
}
destructivelyRemoveLastCat;

function destructivelyRemoveFirstCat() {
    cats.shift();
}
destructivelyRemoveFirstCat;

function appendCat(name) {
const newCats = cats.slice();
newCats.push(name)
return newCats;
}
    
function prependCat(name) {
    const newCats = cats.slice();
newCats.unshift(name);
return newCats;
}

function removeLastCat() {
const LastElement = cats.length - 1;
const newCats = cats.slice(0,LastElement)
return newCats;
}

function removeFirstCat() {
const firstElement = cats.length - 0;
const newCats = cats.slice(1)
return newCats;
}