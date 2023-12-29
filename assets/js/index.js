'use strict';

const taskForm = document.querySelector('.taskForm');
const mainInput = document.querySelector('#mainInput');
const addBtn = document.querySelector('#addBtn');
const taskContainer = document.querySelector('#taskContainer');

const taskIdCounter = (
  (i = 0) =>
  () =>
    ++i
)();

let todos = [
  {
    id: taskIdCounter(),
    text: 'test1',
    isFinish: false,
  },
  {
    id: taskIdCounter(),
    text: 'test2',
    isFinish: true,
  },
];

const todoTasks = todos.map((elObj) => createTask(elObj));
taskContainer.append(...todoTasks);
console.log(todos); //TODO delete

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

function createTaskObj(taskText) {
  const newObj = {
    id: taskIdCounter(),
    text: taskText,
    isFinish: false,
  };
  return newObj;
}

function createTask(taskObj) {
  const task = createElement('li', 'taskItem');
  task.dataset.id = taskObj.id;
  if (taskObj.isFinish) task.classList.add('finishedTask');
  task.addEventListener('click', toggleIsFinish);

  const taskParagraph = createElement('p', 'taskText');
  taskParagraph.textContent = taskObj.text;

  const taskDeleteBtn = createElement('button', 'deleteTaskBtn');
  taskDeleteBtn.addEventListener('click', deleteTask);

  const trashIcon = createElement('i', 'far', 'fa-trash-alt');
  taskDeleteBtn.append(trashIcon);

  task.append(taskParagraph);
  task.append(taskDeleteBtn);

  return task;
}

function createElement(elName, ...className) {
  const element = document.createElement(elName);
  element.classList.add(...className);
  return element;
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
