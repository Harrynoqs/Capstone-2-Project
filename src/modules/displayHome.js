/* eslint-disable */

import { getFromLocalStorage } from "./localStorage.js";
export const displayList = () => {
    const dataArray = getFromLocalStorage();
  const display = document.getElementById('list');

  const navBar = document.getElementById('products')

  navBar.innerHTML = ''
  const span = document.createElement('span')
  span.textContent = `Products (${dataArray.length})`

  navBar.appendChild(span)


  display.innerHTML = dataArray.map((each) => `
        <div class="each-container">
            <div class="img-container">
                <img src="${each.image}" alt="${each.category}">
            </div>
            <p>${each.title}</p>
            <i class="fa-regular fa-heart" data-id = '${each.id}'></i>
            <p class="like-count" id='${each.id}'>0</p><p>Likes</p>

            <button id="btn">comment</button>
        </div>
    
    `).join('');
};