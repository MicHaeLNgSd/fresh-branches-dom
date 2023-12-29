'use strict';

const taskForm = document.querySelector('.taskForm');
const mainInput = document.querySelector('#mainInput');
const addBtn = document.querySelector('#addBtn');
const taskContainer = document.querySelector('#taskContainer');

let todos = [];

// taskContainer.append(createTask('Lorem1'));
// taskContainer.append(createTask('Lorem2'));

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskText = e.target.elements.taskInput.value;
  if (taskText.trim() === '') return;

  const newTaskObj = createTaskObj(taskText);
  todos.push(newTaskObj);
  console.log(todos); //TODO delete

  const newTask = createTask(newTaskObj);
  taskContainer.append(newTask);

  e.target.reset();
});

function createTaskObj(taskText, isFinish = false) {
  const newObj = {
    id: Date.now(),
    text: taskText,
    isFinish: isFinish,
  };
  return newObj;
}

function createTask(taskObj) {
  const task = document.createElement('li');
  task.classList.add('taskItem');
  task.dataset.id = taskObj.id;
  task.addEventListener('click', toggleIsFinish);

  const taskParagraph = document.createElement('p');
  taskParagraph.classList.add('taskText');
  taskParagraph.textContent = taskObj.text;

  const taskDeleteBtn = document.createElement('button');
  taskDeleteBtn.classList.add('deleteTaskBtn');
  taskDeleteBtn.addEventListener('click', deleteTask);

  const trashIcon = document.createElement('i');
  trashIcon.classList.add('far', 'fa-trash-alt');
  taskDeleteBtn.append(trashIcon);

  task.append(taskParagraph);
  task.append(taskDeleteBtn);

  return task;
}

function toggleIsFinish(e) {
  if (e.target.tagName === 'BUTTON') return;
  const currentTask = e.currentTarget;
  // currentTask.classList.toggle('finishedTask');
  for (const el of todos) {
    if (el.id !== +currentTask.dataset.id) continue;
    el.isFinish = !el.isFinish;
    el.isFinish
      ? currentTask.classList.add('finishedTask')
      : currentTask.classList.remove('finishedTask');
    break;
  }
  console.log(todos); //TODO delete
}

function deleteTask(e) {
  const taskToRemove = e.currentTarget.parentElement;
  taskToRemove.remove();

  todos = todos.filter((el) => el.id !== Number(taskToRemove.dataset.id));
  console.log(todos); //TODO delete
}
