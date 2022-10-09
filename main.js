window.addEventListener('load', () => {			//onitializing all selection as soon as page load
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");
	

	form.addEventListener('submit', (e) => { //submit event of the form
		e.preventDefault(); // Clicking on a "Submit" button (here '+' button), prevent it from submitting a form

		const task = input.value;
		// checking if input field is empty or not
		if(task == ''){
			alert('Please Enter The Work!');
		}
		else{
			const task_el = document.createElement('div'); //new div creation
		task_el.classList.add('task'); //add task class property which is pre-designed by css

		const task_content_el = document.createElement('div'); //creating div for place in the previous created div
		task_content_el.classList.add('content'); // addig class to the div so that is get the design

		task_el.appendChild(task_content_el); // immidiate div is adding in the first div

		const task_input_el = document.createElement('input'); //cteating input element
		task_input_el.classList.add('text'); //adding class to get design
		task_input_el.type = 'text';
		task_input_el.value = task; //assigning the task given from user 
		task_input_el.setAttribute('readonly', 'readonly'); // making displaying input fieled read only mode, by default it is used for input

		task_content_el.appendChild(task_input_el); //displaying the tasks

		const task_actions_el = document.createElement('div'); //selecting the the action div which will contain the done and delete icon
		task_actions_el.classList.add('actions'); // applying design of pre-designed class named 'actions'
		
		const task_done_el = document.createElement('button'); //creatig a button for done
		task_done_el.classList.add('done'); //applying design of pre-designed class named 'done'
		task_done_el.classList.add('fa-solid'); //applying design of pre-designed class named 'fa-solid' for icon
		task_done_el.classList.add('fa-check'); //applying design of pre-designed class named 'fa-check' for icon
		task_done_el.innerHTML = '<i></i>';  // addiing icon

		const task_delete_el = document.createElement('button'); //creatig a button for delete
		task_delete_el.classList.add('delete');
		task_delete_el.classList.add('fa-regular'); //(2)icon class adding
		task_delete_el.classList.add('fa-trash-can');
		task_delete_el.innerHTML = '<i></i>';

		task_actions_el.appendChild(task_done_el); //storing done tasks
		task_actions_el.appendChild(task_delete_el); //storing the tasks that need to delete

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = ''; //cleaning input field

		task_done_el.addEventListener('click', (e) => {  //making a click event of done button/icon
				task_done_el.innerHTML = '<i></i>';  // adding icon also after done marked
				task_done_el.style.opacity = '0.4';
				task_input_el.style.opacity = '0.6';
				task_input_el.style.textDecoration='line-through';
				task_el.style.width = '724px';	//done button pressed element width will be some decressed
				task_el.style.margin = '0 auto 16px auto';
				task_el.style.padding = '0.7rem';
		});

		task_delete_el.addEventListener('click', (e) => { // performing deletion
			list_el.removeChild(task_el);
		});
		}

	});
});
//developed by Hosain, Thanks.