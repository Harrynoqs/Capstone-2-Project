/* eslint-disable */
export const homeItmes = () => {
    const items = document.querySelectorAll('.each-container')
    const itemsArr = Array.from(items)
    const showNum = document.getElementById('itemNum')
    showNum.textContent = `Products (${itemsArr.length})`
 }