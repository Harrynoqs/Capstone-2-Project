/* eslint-disable */
import { homeItmes } from './homeItemsCounter.js';
import { getFromLocalStorage } from './localStorage.js';
import { commentDisplay } from './commentDisplay.js';
import { commentCounter } from './commentFunctions.js';

export const displayList = () => {
  const dataArray = getFromLocalStorage();
  const display = document.getElementById('list');

  const navBar = document.getElementById('products');

  navBar.innerHTML = '';
  const span = document.createElement('span');
  span.setAttribute('id', 'itemNum');

  navBar.appendChild(span);

  display.innerHTML = '';
  dataArray.forEach((each) => {
    const eachCont = document.createElement('div');
    eachCont.classList.add('each-container');
    display.appendChild(eachCont);

    const imgCont = document.createElement('div');
    imgCont.classList.add('img-container');
    imgCont.innerHTML = `<img src="${each.image}" alt="${each.category}">`;
    eachCont.appendChild(imgCont);

    const paraTitle = document.createElement('p');
    paraTitle.classList.add('mens-cloth');
    paraTitle.innerText = `${each.title}`;
    eachCont.appendChild(paraTitle);

    const likeIcon = document.createElement('i');
    likeIcon.setAttribute('class', 'fa-regular fa-heart');
    likeIcon.setAttribute('data-id', `${each.id}`);
    eachCont.appendChild(likeIcon);

    const para1 = document.createElement('p');
    para1.setAttribute('class', 'like-count');
    para1.setAttribute('id', `${each.id}`);
    para1.innerText = '0';
    eachCont.appendChild(para1);

    const para2 = document.createElement('p');
    para2.setAttribute('class', 'like-text');
    para2.innerText = 'Likes';
    eachCont.appendChild(para2);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('commentBtn');
    deleteButton.innerText = 'comment';
    deleteButton.setAttribute('id', `btn${each.id}`);

    deleteButton.onclick = () => {
      commentDisplay(`${each.id}`);
      commentCounter();
    };
    eachCont.appendChild(deleteButton);
  });

  const itemNum = homeItmes();
  span.textContent = `Products (${itemNum})`;
emNum = homeItmes()
  span.textContent = `Products (${itemNum})`
};