/* eslint-disable */
import './style.css';
import './modules/likes.js'
import { addToLocalStorage } from './modules/localStorage.js';
import { displayList } from './modules/displayHome.js';
import { getLikes } from './modules/likes.js';


const url = 'https://fakestoreapi.com/products';
const getData = async () => {
  const fetchData = await fetch(url);
  const dataArray = await fetchData.json();

  const shortArray = [];
  for (let i = 0; i < 10; i++) {
    shortArray.push(dataArray[i]);
  }
  addToLocalStorage(shortArray);
  displayList();
  getLikes
};

getData();