/* eslint-disable */

export const addToLocalStorage = (array) => {
    const stringifyArray = JSON.stringify(array);
    localStorage.setItem('dataArray', stringifyArray);
  };
  
export const getFromLocalStorage = () => {
    const stringifyArray = localStorage.getItem('dataArray');
    const dataArray = JSON.parse(stringifyArray);
    return dataArray;
  };
