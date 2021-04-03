

// TRAVERSING THE DOM // 

var itemList = document.querySelector('#items');
// parenntNode 
console.log(itemsList.parantNode);
itemList.parantNode.style.backgroundcolor = '#f4f4f4';
console.log(itemsList.parantNode.parantNode);

// parentElement
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemlist.parentElement.parentElement.para);

// childnodes
console.log(itemlist.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

// Fristchild
console.log(itemList.firstchild());
// FirstElementchild
console.log(itemList, lastElementChild);
itemList.lastElementChild.textcontent = 'hello 1';

// nextsibling 
console.log(itemlist.nextSibling);
// NextElementSibling
 console.log(itemList.nextElementSibling);

// PreviousSibling
console.log(itemList.previosSibling);
// previousElementSibling
console.log(itemList.previosElementSibling);
itemList.previosElementSibling.style.color = 'green';

// CreateElement

// create a div
var newDiv = document.createElement('div');
// Add class
newDiv.className = 'hello';

// Add id
newDiv.id = 'hello1';
// Add attr
newDiv.setAttribute('title', 'hello div');

// create text node 
var newDivText = document.createTextNode('hello world');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);
