'use strict';

const userCardList = document.querySelector('#userCardList');
const reloadBtn = document.querySelector('#reloadBtn');
const usersAPI = 'https://jsonplaceholder.typicode.com/users';
const warAPI = 'https://russianwarship.rip/';
const standartImg =
  'https://discourse.disneyheroesgame.com/uploads/default/original/3X/7/5/75b8e54268b741e4211fa45a1514e664d8b1595e.jpeg';

reloadBtn.addEventListener('click', getUsersByAsyncAwait); //getUsersByPromise getUsersByAsyncAwait
const loadingElem = createElem('div', { attr: { class: 'loader' } });

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
    })
    .catch((err) => console.log(err))
    .finally(() => loadingElem.remove());
}

async function getUsersByAsyncAwait() {
  try {
    userCardList.innerHTML = '';
    document.body.append(loadingElem);

    const res = await fetch(usersAPI);
    const data = await res.json();

    usersArr = data.map((el) => createUserCard(el));
    userCardList.append(...usersArr);
  } catch (err) {
    console.log(err);
  } finally {
    loadingElem.remove();
  }
}

const createUserLinkElem = (aAttr, faClass) =>
  createElem('li', {
    attr: { class: 'userLink' },
    childs: [
      createElem('a', {
        attr: aAttr,
        childs: [createElem('i', { attr: { class: faClass } })],
      }),
    ],
  });

function createLinksSection(uPhone, uEmail, uWebsite) {
  const userLinks = createElem('ul', { attr: { class: 'userLinks' } });

  if (uPhone) {
    const phone = createUserLinkElem(
      { class: 'phone', href: `tel:${uPhone}`, title: uPhone },
      'fas fa-phone'
    );
    userLinks.append(phone);
  }
  if (uEmail) {
    const phone = createUserLinkElem(
      { class: 'email', href: `mailto:${uEmail}`, title: uEmail },
      'fas fa-envelope'
    );
    userLinks.append(phone);
  }
  if (uWebsite) {
    const phone = createUserLinkElem(
      { class: 'website', href: uWebsite, title: uWebsite },
      'fas fa-globe'
    );
    userLinks.append(phone);
  }

  return userLinks;
}

function createElem(
  tag,
  { attr: elAttr, text: elText, childs: elChilds, event: elEvent } = {}
) {
  const elem = document.createElement(tag);

  if (elAttr) {
    for (const [key, val] of Object.entries(elAttr)) {
      elem.setAttribute(key, val);
    }
  }
  if (elText) elem.textContent = elText;
  if (elChilds) {
    elChilds.forEach((child) => elem.append(child));
  }
  if (elEvent) {
    for (const [eName, eCallback] of Object.entries(elEvent)) {
      elem.addEventListener(eName, eCallback);
    }
  }
  return elem;
}

function createUserCard({
  name: uName,
  username: uUsername,
  address: uAddress,
  email: uEmail,
  phone: uPhone,
  website: uWebsite,
  photo: uPhoto,
}) {
  const userCardItem = createElem('li', { attr: { class: 'userCardItem' } });
  const userCard = createElem('article', { attr: { class: 'userCard' } });
  const cardHeader = createElem('div', { attr: { class: 'cardHeader' } });

  const userImage = createElem('img', {
    attr: { class: 'userImage', src: uPhoto ?? standartImg, alt: 'userImg' },
  });

  const contentContainer = createElem('div', { attr: { class: 'contentContainer' } });
  const name = createElem('h2', { attr: { class: 'name' }, text: uName });
  const username = createElem('h3', {
    attr: { class: 'username' },
    text: `@${uUsername}`,
  });
  const address = createElem('p', {
    attr: { class: 'address' },
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
