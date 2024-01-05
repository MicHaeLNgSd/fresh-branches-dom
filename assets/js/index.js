'use strict';

//Destructurisation

// const pc = {
//   cpu: {
//     name: 'Intel Core XXL 59509',
//     frequency: 5.1,
//     coreQuantity: 16,
//   },
//   gpu: {
//     name: 'Nvidea RTX 9090',
//     vram: 32,
//     fans: 4,
//     minPsuWatt: 1200,
//   },
//   ram: {
//     value: 64,
//     unitOfMeasure: 'Gb',
//   },
//   memoryDrives: [
//     {
//       type: 'HDD',
//       memory: {
//         value: 6,
//         memory: 'Tb',
//       },
//     },
//     {
//       type: 'SSD',
//       memory: {
//         value: 1024,
//         memory: 'Gb',
//       },
//     },
//   ],
//   price: 123467890,
//   colorOfTower: 'black',
//   monitor: {
//     manufacturer: 'LG',
//     model: 'ah238-klmsdg345-dfdf',
//     size: {
//       height: {
//         value: 28,
//         unitsOfMeasure: 'cm',
//       },
//       width: {
//         value: 58,
//         unitsOfMeasure: 'cm',
//       },
//     },
//   },
// };

// console.log(pc.price);
// console.log(pc.memoryDrives[1].memory.value);

// const {
//   colorOfTower,
//   price: pcPrice,
//   monitor: {
//     manufacturer,
//     size: {
//       width: { value: monitorWidth },
//     },
//   },
// } = pc;

// console.log(monitorWidth);
// // console.log(pc.price);

// const user = {
//   id: 1234,
//   email: 'fsefse',
//   password: 'drgdrg',
// };

// const { password, ...userWithoutPassword } = user;

// for (const [key, value] of Object.entries(pc)) {
//   console.group(key);
//   console.log(key);
//   console.log(value);
//   console.groupEnd();
// }

// console.log();

/**
 *
 * @param {*} [i=1]
 * @returns
 */
function HW1(i = 1) {
  if (i > 10) return;
  setTimeout(() => {
    console.log(i);
    HW1(++i);
  }, 1000);
}

function HW2() {
  let i = 0;
  const intervalId = setInterval(() => {
    i++;
    console.log(i);
    if (i === 10) clearInterval(intervalId);
  }, 1000);
}

const users = [
  { id: 0, balance: 900 },
  { id: 1, balance: 500 },
  { id: 2, balance: 100 },
  { id: 2, balance: 800 },
];

// const shallowCopy = users;
// shallowCopy[0] = { hello: 'hello' };
// console.log(shallowCopy, users, users[0] === shallowCopy[0]);

// const shallowCopySpread = [...users];
// shallowCopySpread[0] = { hello: 'hello' };
// console.log(
//   shallowCopySpread,
//   users,
//   users[0] === shallowCopySpread[0],
//   users[1] === shallowCopySpread[1]
// );

// const shallowCopySpread = JSON.parse(JSON.stringify(users));
const shallowCopySpread = structuredClone(users);
shallowCopySpread[0] = { hello: 'hello' };
console.log(
  shallowCopySpread,
  users,
  users[0] === shallowCopySpread[0],
  users[1] === shallowCopySpread[1]
);

//================

// const promise = new Promise((res, rej) => {
//   res({ hello: 'hello' });
//   rej();
// }).then((result) => {
//   console.log(result);
// });

// const showStatus = (status) => console.log(status);

// new Promise((res, rej) => {
//   Math.random() >= 0.5 ? res('good') : rej('bad');
// }).then(showStatus, showStatus);
