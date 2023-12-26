'use strict';

// img.src = ...
// img.alt = ...

const imgArr = [
  {
    src: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'alt1',
  },
  {
    src: 'https://images.pexels.com/photos/2339009/pexels-photo-2339009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'alt2',
  },
];

const changeableImg = document.querySelector('#changeableImg');
const changeImgBtn = document.querySelector('#changeImgBtn');
changeableImg.style.height = '500px';

// changeImgBtn.addEventListener('click', (e) => {
//   changeableImg.src =
//     changeableImg.src === imgArr[0].src ? imgArr[1].src : imgArr[0].src;
//   changeableImg.alt =
//     changeableImg.src === imgArr[0].src ? imgArr[1].alt : imgArr[0].alt;
// });

// const imgArr2 = [
//   [
//     'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     'alt1',
//   ],
//   [
//     'https://images.pexels.com/photos/2339009/pexels-photo-2339009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     'alt2',
//   ],
// ];

// let srcNode = document.createAttribute('src');
// let altNode = document.createAttribute('alt');
// srcNode.value = imgArr2[0][0];
// altNode.value = imgArr2[1][0];

// changeableImg.setAttributeNode(srcNode);
// changeableImg.setAttributeNode(altNode);

// changeImgBtn.addEventListener('click', (e) => {
//   if (srcNode.value === imgArr2[0][0]) {
//     srcNode.value = imgArr2[1][0];
//     altNode.value = imgArr2[1][1];
//   } else {
//     srcNode.value = imgArr2[0][0];
//     altNode.value = imgArr2[0][1];
//   }
// });

const allButtonsSameEventColors = document.querySelector('#allButtonsSameEvent2');
allButtonsSameEventColors.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    return;
  }
  allButtonsSameEventColors.style.backgroundColor = e.target.dataset.color;
});

const form2 = document.querySelector('#form2');
form2.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = e.target.elements.fromInputToP.value;
  if (text.trim() === '') return;
  document.body.append((document.createElement('p').textContent = text));
});
