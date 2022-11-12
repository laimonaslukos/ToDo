const tasks = [
{task: 'go to work'},
{task: 'go to the gym'},
{task: 'shoping'},
{task: 'do me'},

];


function addNewTask(){
document.getElementById('task-input');

}



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
