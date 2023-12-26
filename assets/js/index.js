'use strict';
const taskBtn = document.getElementsByTagName('button')[0];
const oneClick = document.getElementsByTagName('button')[1];
const showText = document.getElementsByTagName('button')[2];
const inputNumBtn = document.getElementsByTagName('button')[3];
const inputNumAns = document.getElementById('askNumAns');
const divSameEvent = document.getElementById('allButtonsSameEvent');
const divSameEvent2 = document.getElementById('allButtonsSameEvent2');
const form1 = document.querySelector('#form1');

const h1 = document.querySelector('section>h1');
const img = document.querySelector('img[alt = "Find ME"]');
const p = document.querySelector('.section>p');

// // const counter =
// //   (i = 0) =>
// //   () =>
// //     alert(++i);

// // taskBtn.addEventListener('click', counter());

taskBtn.addEventListener(
  'click',
  (
    (i = 0) =>
    () => {
      alert(`Clicks: ${++i}`);
    }
  )()
);

oneClick.addEventListener(
  'click',
  () => {
    alert('click happend');
  },
  { once: true }
);

showText.addEventListener('click', (e) => {
  alert(e.target.textContent);
  // alert(e.target.innerText);
  // alert(e.target.innerHTML);
});

inputNumBtn.addEventListener('click', (e) => {
  const inputedNum = +prompt('Input number');
  if (Number.isNaN(inputedNum)) {
    // throw new TypeError('inputedNum must be a Number');
    e.target.nextElementSibling.textContent = 'inputed value must be a Number';
    e.target.nextElementSibling.style.color = 'red';
  } else {
    // inputNumAns.textContent = `Your answer is: ${inputedNum ** 2}`;
    e.target.nextElementSibling.textContent = `Your answer is: ${
      inputedNum ** 2
    }`;
  }
});

divSameEvent.style.background = 'blue';
divSameEvent.addEventListener(
  'click',
  (e) => {
    if (e.target.tagName === 'BUTTON') {
      console.log(e.target.textContent);
    }
  },
  {}
);

// divSameEvent2.addEventListener('click', (e) => {
//   if (e.target.tagName === 'BUTTON') {
//     divSameEvent2.style.backgroundColor = e.target.textContent;
//   }
// });

divSameEvent2.onclick = (e) => {
  if (e.target.tagName === 'BUTTON') {
    divSameEvent2.style.backgroundColor = e.target.textContent;
  }
};

form1.style.backgroundColor = 'yellow';
const paragraph = document.querySelector('#answer');
form1.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputedNum = +e.target.elements.thisIsName.value;

  if (Number.isNaN(inputedNum)) {
    paragraph.textContent = 'Inputed value must be a Number';
    paragraph.style.color = 'red';
  } else {
    paragraph.textContent = `Your answer is: ${inputedNum ** 2}`;
    paragraph.style.color = 'inherit';
  }
  e.target.reset();
});
