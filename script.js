	//EXAMPLE THE DOCUNMENT OBJECT
// console.log(docunment);
// console.log(docunment.domain);
// console.log(docunment.URL);
// console.log(docunment.title);
// docunment.title=123;
// console.log(docunment.doctype);
// console.log(docunment.head);
// console.log(docunment.body);
// console.log(docunment.all);
// console.log(docunment.all[10]);
// docunment.all[10].textContent='Hello';
// console.log(docunment.forms[0]);
// console.log(docunment.links);
// console.log(docunment.images);

	//GETELEMENTBYID
// console.log(docunment.GETELEMENTBYID('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
// headerTitle.textContent='Hello';
// headerTitle.innerText='Goodbye';
// console.log(headerTitle.innerText);
//headerTitle.innerHTML='<h3>Hello</h3>';
//headerTitle.style.borderBottom = 'solid 3px #000';

	//GETELEMENTBYCLASSNAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello Items 2';
// items[1].style.fontweight = 'bold'; 
// items[1].style.backgroundcolor = 'yellow';

//GivesError
//items.style.backgroundcolor = '#fff';

// for(var i=0; i<items.length; i++){
// 	items[1].style.backgroundcolor='#f4f4f4';
// }

// var items = document.getElementsByTagName('list-group-item');
// console.log(li);
// console.log(li[1]);
// items[1].textContent = 'Hello Items 2';
// items[1].style.fontweight = 'bold';
// items[1].style.backgroundcolor = 'yellow';

//GivesError
//items.style.backgroundcolor = '#fff';

// for (var i = 0; i < li.length; i++) {
// 	items[1].style.backgroundcolor = '#f4f4f4';
// }

//QuerySelection
// var header=document.querySelector('#main-header');
// header.getElementsByClassName.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"
// var item = document.querySelector('.list-group-item');
// item.style.color= 'red';

// var lastItem = document.querySelector
// ('.list-group-item:last-child');
// lastItem.style.color='blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// //QuerySelectorAll
// var titles=document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i=0; i<odd.length;i++){
// 	odd[i].style.backgroundColor='#f4f4f4';
// 	even[i].style.backgroundColor = '#ccc';
// }

//Traversing The Dom
var itemList = document.querySelector('#items');

//ParentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//ParentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//ChileNode
//console.log(itemList.childNodes);
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor='yellow';

//FirstChild
// console.log(itemList.firstChild);
// FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1';

//lastChild
//console.log(itemList.lastChild);
//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 1';

// nextSibling
//console.log(itemList.nextSibling);
// nextElementSibling
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);
//previousElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color='green';

//createElement

//create element

//create a div
//var newDiv=document.createElement('div');

//Add Class
//newDiv.className='hello';

//Add ID
//newDiv.id='hellow1';

//Add attr
//newDiv.setAttribute('title', 'Hello Div');

//create text note
//var newDivText=document.createTextNode('Hello World');

//Add text a div
//newDiv.appendChild(newDivText);
//var container = document.querySelector('header .container');
//var h1 = document.querySelector('header h1');

//console.log(newDiv);

//newDiv.style.fontSize='30px';

//container.insertBefore(newDiv, h1);

//var button=document.getElementById('button').addEventListener('click', buttonClick);

//function buttonClick(e){
	//console.log('Button Clicked');
	//document.getElementById('header-title').textContent='Changed';
	//document.querySelector('#main').style.background='#f4f4f4';
	//console.log(e);

	// console.log(e.target);
	// console.log(e.target.id);
	// console.log(e.target.className);
	// console.log(e.target.classList);
	// var output = document.getElementById('output');
	// output.innerHTML='<h3>'+e.target.id+'</h3>';

	// console.log(e.type);

	// console.log(e.clientX);
	// console.log(e.clientY);

	// console.log(e.offsetX);
	// console.log(e.offsetY);

	// console.log(e.altKey);
	// console.log(e.ctrlKey);
	// console.log(e.shiftKey);
//}

//var button = document.getElementById('button');
//var box = document.getElementById('box');

//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

//var itemInput=document.querySelector('input[type="text"]');
//var form=document.querySelector('form');
//var select=document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
//select.addEventListener('submit',runEvent);

//function runEvent(e){
//	e.preventDefault();
//	console.log('EVENT TYPE: '+e.type);
//}

//function runEvent(e){
//	console.log('EVENT TYPE: '+e.type);
	//console.log(e.target.value);
	//document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>';

	//output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';
	//document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
//}

						///FinalProject///
var form=document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form Submit event
form.addEventListener('submit', addItem);
//Delete Event
itemList.addEventListener('click',removeItem);
//Filter event
filter.addEventListener('keyup',filterItems);

//Add Item
function addItem(e){
	e.preventDefault();
	
	//Get Input Value
	var newItem=document.getElementById('item').value;

	//Create new li element
	var li=document.createElement('li');

	//Add Class
	li.className='list-group-item';

	// Add text node with input value
	li.appendChild(document.createTextNode(newItem));

	//Create del button element
	var deleteBtn=document.createElement('button');

	//Add classes to del button
	deleteBtn.className='btn btn-danger btn-sm float-right delete';

	//Append text node
	deleteBtn.appendChild(document.createTextNode('X'));

	//Append button to li
	li.appendChild(deleteBtn);

	//Append li to list
	itemList.appendChild(li);
}

//Remove Item
function removeItem(e){
	if (e.target.classList.contains('delete')) {
		if(confirm("Are you Sure?")){
			var li=e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}
//Filter Items
function filterItems(e){
	//convert text to lowercase
	var text=e.target.value.toLowerCase();
	//Get list
	var items = itemList.getElementsByTagName('li');
	// Convert to an array
	Array.from(items).forEach(function(item){
		var itemName = item.firstChild.textContent;
		if(itemName.toLowerCase().indexOf(text) != -1){
			item.style.display='block';
		}else{
			item.style.display='none';
		}
	});
}