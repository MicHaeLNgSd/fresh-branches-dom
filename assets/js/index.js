'use strict';

const userCardList = document.querySelector('#userCardList');
const reloadBtn = document.querySelector('#reloadBtn');
const usersAPI = 'https://jsonplaceholder.typicode.com/users';
const warAPI = 'https://russianwarship.rip/';
const standartImg =
  'https://discourse.disneyheroesgame.com/uploads/default/original/3X/7/5/75b8e54268b741e4211fa45a1514e664d8b1595e.jpeg';

reloadBtn.addEventListener('click', getUsersByAsyncAwait); //getUsersByPromise getUsersByAsyncAwait
const loadingElem = createElem('div', { class: 'loader' });

let usersArr = [];

function getUsersByPromise() {
  userCardList.innerHTML = '';
  document.body.append(loadingElem);
  fetch(usersAPI)
    .then((res) => res.json())
    .then((data) => {
      usersArr = data.map((el) => {
        return createUserCard(el);
      });
      userCardList.append(...usersArr);
      loadingElem.remove();
    })
    .catch((err) => console.log(err));
}

async function getUsersByAsyncAwait() {
  try {
    userCardList.innerHTML = '';
    document.body.append(loadingElem);

    const res = await fetch(usersAPI);
    const data = await res.json();

    usersArr = data.map((el) => createUserCard(el));
    userCardList.append(...usersArr);
    loadingElem.remove();
  } catch (err) {
    console.log(err);
  }
}

const createUserLinkElem = (aClass, aAttr, faClass) =>
  createElem('li', {
    class: 'userLink',
    child: [
      'a',
      {
        class: aClass,
        attr: aAttr,
        child: ['i', { class: faClass }],
      },
    ],
  });

function createLinksSection(uPhone, uEmail, uWebsite) {
  const userLinks = createElem('ul', { class: 'userLinks' });

  if (uPhone) {
    const phone = createUserLinkElem(
      'phone',
      { href: `tel:${uPhone}`, title: uPhone },
      'fas fa-phone'
    );
    userLinks.append(phone);
  }
  if (uEmail) {
    const phone = createUserLinkElem(
      'email',
      { href: `mailto:${uEmail}`, title: uEmail },
      'fas fa-envelope'
    );
    userLinks.append(phone);
  }
  if (uWebsite) {
    const phone = createUserLinkElem(
      'website',
      { href: uWebsite, title: uWebsite },
      'fas fa-globe'
    );
    userLinks.append(phone);
  }

  return userLinks;
}

function createElem(
  tag,
  { id: elId, class: elClass, attr: elAttr, text: elText, child: elChild }
) {
  const elem = document.createElement(tag);

  if (elId) elem.id = elId;
  if (elClass) elem.className = elClass;
  if (elAttr) {
    for (const [key, val] of Object.entries(elAttr)) {
      elem.setAttribute(key, val);
    }
  }
  if (elText) elem.textContent = elText;
  if (elChild) elem.append(createElem(elChild[0], elChild[1]));
  return elem;
}

function createUserCard({
  name: uName,
  username: uUsername,
  address: uAddress,
  email: uEmail,
  phone: uPhone,
  website: uWebsite,
}) {
  const userCardItem = createElem('li', { class: 'userCardItem' });
  const userCard = createElem('article', { class: 'userCard' });
  const cardHeader = createElem('div', { class: 'cardHeader' });

  const userImage = createElem('img', {
    class: 'userImage',
    attr: { src: standartImg, alt: 'userImg' },
  });

  const contentContainer = createElem('div', { class: 'contentContainer' });
  const name = createElem('h2', { class: 'name', text: uName });
  const username = createElem('h3', { class: 'username', text: `@${uUsername}` });
  const address = createElem('p', {
    class: 'address',
    text: `${uAddress.city}, ${uAddress.street}`,
  });

  userCardItem.append(userCard);
  userCard.append(cardHeader, userImage, contentContainer);
  contentContainer.append(name, username, address);

  if (uPhone || uEmail || uWebsite) {
    const userLinksSec = createLinksSection(uPhone, uEmail, uWebsite);
    userCard.append(userLinksSec);
  }

  return userCardItem;
}
