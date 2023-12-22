// const myFirstBtn = document.getElementById('myFirstBtn');
const buttons = document.getElementsByTagName('button');
const testBtn = buttons[0];

const closure = () => {
  let i = 0;
  return () => ++i;
};
const counter1 = closure();

const counter2 = (() => {
  let i = 0;
  return () => ++i;
})();

const closure2 =
  (i = 0) =>
  () =>
    ++i;
const counter3 = closure2();

testBtn.addEventListener('click', () => {
  alert(counter2());
});
