const tasks = [
{task: 'go to work'},
{task: 'go to the gym'},
{task: 'shoping'},
{task: 'do me'},

];


function addNewTask(){
const taskInput = document.getElementById('task-input');
console.log('taskInput', taskInput.value);

const ul = document.querySelector('.todo-list-ul');
const li = document.createElement('li');
  li.classList.add('list-group-item');
li.onclick = () => {
  li.classList.add('active')
}

  const button = document.createElement('button');
  button.classList.add('btn', 'btn-success');
  button.innerText = 'DELETE';
  button.onclick = () =>{
li.remove();

  }


  li.append(button, taskInput.value);
  ul.append(li)

}

const btn = document.querySelector('.btn-input');
btn.addEventListener('click', addNewTask)

function getTodoList(alltasks) {
  const ul = document.querySelector('.todo-list-ul');
const liElements = alltasks.map((elem)=> {

  const li = document.createElement('li');
  li.classList.add('list-group-item');
li.onclick = () => {
  li.classList.add('active')
}

  const button = document.createElement('button');
  button.classList.add('btn', 'btn-success');
  button.innerText = 'DELETE';
  button.onclick = () =>{
li.remove();

  }


  li.append(button, elem.task);
  console.log('li', li);
  return li




})  

  return ul.append(...liElements);
}

getTodoList(tasks);
