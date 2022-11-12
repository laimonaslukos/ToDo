const tasks = [
{task: 'go to work'},
{task: 'go to the gym'},
{task: 'shoping'},
{task: 'do me'},

];
console.log('scripts working');



function getTodoList(alltasks) {
  const ul = document.querySelector('.todo-list-ul');
const liElements = alltasks.map((elem)=> {

  const li = document.createElement('li');
  li.classList.add('list-group-item');
  li.append(elem.task);
  console.log('li', li);
  return li




})  

  return ul.append(...liElements);
}

getTodoList(tasks);
