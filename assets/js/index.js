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

function HW1(i = 1) {
  if (i > 10) return;
  setTimeout(() => {
    console.log(i);
    HW1(++i);
  }, 1000);
}

function HW2() {
  let counter = (
    (i = 0) =>
    () =>
      ++i
  )();
  const intervalId = setInterval(() => {
    const i = counter();
    console.log(i);
    if (i === 10) clearInterval(intervalId);
  }, 1000);
  // setTimeout(() => {
  //   clearInterval(intervalId);
  // }, 10000);
}
