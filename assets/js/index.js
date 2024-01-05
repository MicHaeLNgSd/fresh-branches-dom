'use strict';

function test1() {
  return 1;
}
const res1 = test1();

function test2() {
  return Promise.resolve(2);
}
const res2 = test2();

async function test3() {
  return 3;
}
const res3 = test3();

// fetch(todoURL)
//   .then((res) => res.json())
//   .then((todoArr) => createTodos(todoArr))
//   .catch((err) => console.log(err))
//   .finally(() => console.log('code executed'));

// async function testAwain() {
//   const fetchResponse = fetch('https://jsonplaceholder.typicode.com/todos');
//   const promiseWithData = fetchResponse.then((res) => res.json());
//   const promiseWithTodoElems = promiseWithData
//     .then((todoArr) => createTodos(todoArr))
//     .catch((err) => console.log(err))
//     .finally(() => console.log('code executed'));
// }

function createTodos(todoArr) {
  const todosStringsArr = todoArr.map((todo) => JSON.stringify(todo));

  const todoElems = todosStringsArr.map((todoStr) => {
    const todoElem = document.createElement('p');
    todoElem.textContent = todoStr;
    return todoElem;
  });

  document.body.append(...todoElems);
}

const loadingDiv = document.querySelector('#loading');

async function testAwain() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todoArr = await res.json();
    createTodos(todoArr);
  } catch (err) {
    console.log(err);
  } finally {
    console.log('code executed');
    loadingDiv.remove();
  }
}

//==============

// async function testAwait() {
//   const prom1 = new Promise((res, rej) => {
//     res(10);
//   });

//   const prom2 = prom1.then((number) => {
//     const number2 = number ** 2;
//     return number2;
//   });

//   const prom3 = prom2.then((number) => {
//     const number3 = number / 2;
//   });

//   return number3;
// }

//===============

// async function testAwait() {
//   const prom1 = new Promise((res, rej) => {
//     res(10);
//   });

//   const number = await promise1

//   const prom2 = prom1.then((number) => {
//     const number2 = number ** 2;
//     return number2;
//   });

//   const prom3 = prom2.then((number) => {
//     const number3 = number / 2;
//   });

//   return number3;
// }
