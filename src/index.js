/* eslint-disable */
import './style.css';

const addToLocalStorage = (array) => {
  const stringifyArray = JSON.stringify(array);
  localStorage.setItem('dataArray', stringifyArray);
};

const getFromLocalStorage = () => {
  const stringifyArray = localStorage.getItem('dataArray');
  const dataArray = JSON.parse(stringifyArray);
  return dataArray;
};
const url = 'https://fakestoreapi.com/products';
const getData = async () => {
  const fetchData = await fetch(url);
  const dataArray = await fetchData.json();

  console.log(dataArray);

  const shortArray = [];
  for (let i = 0; i < 10; i++) {
    shortArray.push(dataArray[i]);
  }
  addToLocalStorage(shortArray);
};

getData();

const displayList = () => {
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
            <div class="likes_container">
            <p>Likes</p>
            </div>
            <button id="btn">comment</button>
        </div>
    
    `).join('');
};


displayList();
