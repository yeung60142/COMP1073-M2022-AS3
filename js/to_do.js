//Initialize and declare variables
var checkDel1 = document.getElementsByClassName("checkDel1");

// 5 -- when a todo is checked, the item is styled with a CSS text-decoration: line-through property, and it is moved to the bottom of the list of to-dos.
var list = document.querySelector("ul");
list.addEventListener('click', function(event) {
  if (event.target.tagName === "LI") {
    	event.target.classList.toggle('checked');
  }
});

// captures the value of the  <input> element (add items to the list)
function newToDoItem() {
  var listValue = document.createElement("li");
  var inputValue = document.getElementById("addToDo").value;
  var inputValueT = document.createTextNode(inputValue);
  listValue.appendChild(inputValueT);

	//add checkbox
	var checkDone = document.createElement('input');
	checkDone.setAttribute('type', 'checkbox');
	checkDone.setAttribute('id', 'checkDone');

	//TAKE IT FURTHER -- check value is null
	if (inputValue === '') {
		alert("you must have something to do!");
	} else {
		var toDoList = document.getElementById("ToDoItemUL");
		toDoList.appendChild(listValue);
		listValue.appendChild(checkDone);
		//clean-up the text field
		document.getElementById("addToDo").value = "";
	}
 
	//add delete button
		var checkDel = document.createElement("BUTTON");
		checkDel.setAttribute('type', 'button');
		checkDel.setAttribute('id', 'checkDel');
		checkDel.innerText  = 'Delete';
		listValue.appendChild(checkDel);
	  checkDel.className = "checkDel1";

// 6 -- removes the respective to-do item
		for (i = 0; i < checkDel1.length; i++) {
			checkDel1[i].onclick = function() {
				var div = this.parentElement;
			div.remove();
			}
		}
}
