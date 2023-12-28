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
  console.log(todos);

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
  task.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') return;
    const currentTask = e.currentTarget;
    // currentTask.classList.toggle('finishedTask');
    todos.forEach((el) => {
      if (el.id !== +currentTask.dataset.id) return;
      el.isFinish = !el.isFinish;
      el.isFinish
        ? currentTask.classList.add('finishedTask')
        : currentTask.classList.remove('finishedTask');
    });
  });

  const taskParagraph = document.createElement('p');
  taskParagraph.classList.add('taskText');
  taskParagraph.textContent = taskObj.text;

  const taskDeleteBtn = document.createElement('button');
  taskDeleteBtn.classList.add('deleteTaskBtn');
  taskDeleteBtn.addEventListener('click', (e) => {
    const taskToRemove = e.currentTarget.parentElement;
    const taskToRemoveId = taskToRemove.dataset.id;
    // console.log(taskToRemoveId);

    taskToRemove.remove();
    todos = todos.filter((el) => {
      // console.log(el.id, taskToRemoveId);
      return el.id !== +taskToRemoveId;
    });
    console.log(todos);
  });

  const trashIcon = document.createElement('i');
  trashIcon.classList.add('far', 'fa-trash-alt');

  taskDeleteBtn.append(trashIcon);

  task.append(taskParagraph);
  task.append(taskDeleteBtn);

  return task;
}

// taskContainer.addEventListener('click', (e) => {
//   if (e.target.tagName === 'BUTTON') {
//     e.stopPropagation();
//   }
//   if (!e.target.classList.contains('deleteTaskBtn')) return;
//   // if (e.target.tagName !== 'BUTTON' || !e.target.classList.contains('deleteTaskBtn'))
//   //   return;
//   console.log('hello');
//   e.target.parentElement.remove();
// });

//==============================

// Просунутий рівень
// Створити глобальну змінну todos яка буде пустим масивом.
// При створенні задачі також необхідно створювати об'єкт, який буде містити
// поточні дані про цю конкретну задачу (її текст, чи виконана вона і т.д)
// і покласти цю задачу у массив todos.
// При видаленні задачі зі сторінки необхідно також видалити її з масиву.

// Max рівень
// Додати кожній задачі можливість відстеження того, чи виконана вона чи
// ні у її об'єкті і на сторінці. По кліку на текст задачи або на  інпут-чекбокс
// (якщо такий буде) завдання має змінювати дані про виконаність. Якщо
