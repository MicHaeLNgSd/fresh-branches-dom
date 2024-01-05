'use strict';

function loadImg(imgUrl) {
  const image = document.createElement('img');
  image.src = imgUrl;

  const p1 = new Promise((res, rej) => {
    image.addEventListener('load', () => {
      res(image);
    });
    image.addEventListener('error', () => {
      rej(new Error('couldnt download img'));
    });
  });

  return p1;
}

const goodImg =
  'https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/d59e2a4582333bc7644d6dfddb4b1d20.png';

const goodImg2 =
  'https://cdn.vox-cdn.com/thumbor/nCAmdPMkfcRhjpqfCR7BphNGjME=/101x0:1178x718/1400x1400/filters:focal(101x0:1178x718):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/48918239/S1e8_mabel_sad.0.0.png';

const badImg = 'gdrgdrgdrg';

// loadImg(badImg).then(
//   (img) => {
//     document.body.append(img);
//   },
//   (err) => {
//     alert(err.message);
//   }
// );

// loadImg(badImg).then((img) => document.body.append(img));
// loadImg(badImg).catch((err) => alert(err.message));

// loadImg(badImg)
//   .then((img) => document.body.append(img))
//   .catch((err) => alert(err.message));

const todoURL = 'https://jsonplaceholder.typicode.com/todos';

let response = fetch(todoURL);

// response.then((res) => {
//   res.json().then((data) => {
//     // console.log(data);
//     const todosStrsArr = data.map((todo) => JSON.stringify(todo));
//     const todoElems = todosStrsArr.map((todoStr) => {
//       const todoElem = document.createElement('p');
//       todoElem.textContent = todoStr;
//       return todoElem;
//     });
//     document.body.append(...todoElems);
//   });
// });

function createTodos(todoArr) {
  const todosStrsArr = todoArr.map((todo) => JSON.stringify(todo));
  const todoElems = todosStrsArr.map((todoStr) => {
    const todoElem = document.createElement('p');
    todoElem.textContent = todoStr;
    return todoElem;
  });
  document.body.append(...todoElems);
}

const loadingDiv = document.querySelector('#loading');

fetch(todoURL)
  .then((res) => res.json())
  .then((data) => createTodos(data))
  .catch((err) => console.log(`OH NOOO ${err}`))
  .finally(() => {
    console.log('code executed');
    loadingDiv.remove();
  });
