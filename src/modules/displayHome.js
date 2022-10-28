/* eslint-disable */

import { getFromLocalStorage } from "./localStorage.js";
// import { commentDisplay } from "./commentDisplay.js";
import { loadData, close  } from "./commentFunctions.js";

const commentDisplay = (myId) => {
    const commentDiv = document.getElementById('comment')
    const dataArray = getFromLocalStorage()
    commentDiv.innerHTML = ''
    dataArray.forEach((each) => {
                 if (each.id == myId) {
                    const div = document.createElement('div')
                    div.classList.add('comment-div')
                    commentDiv.appendChild(div)

                    const deleteButton = document.createElement('button')
            deleteButton.classList.add('delButton')
            deleteButton.innerHTML = `<i class="fa fa-close">`
            
            deleteButton.onclick = () => {
                console.log(close())
            }

            div.appendChild(deleteButton)

            const immageDiv = document.createElement('div')
            immageDiv.classList.add('comment-img')
            immageDiv.innerHTML = `<img src="${each.image}" alt="${each.category}">`
            div.appendChild(immageDiv);

            const details = document.createElement('div')
            details.classList.add('comment-details')
            details.innerHTML = ` <h2 class="comment-title">${each.title}</h2> 
            <p>Description : ${each.description} </p> 
            <p>Price : $${each.price} </p> 
            
            
            `
            div.appendChild(details)


            // comment displat

            const commentHoder = document.createElement('div');
            commentHoder.classList.add('showComment')
            div.appendChild(commentHoder)

            loadData(myId)


            // comment form
            const popupForm = document.createElement('form');
  popupForm.setAttribute('class', 'popup_form');
  popupForm.setAttribute('id', 'form');
  const h36 = document.createElement('h3');
  h36.setAttribute('class', 'add-comment');
  h36.innerText = 'Add a Comment';
  
  const username = document.createElement('input');
  username.setAttribute('name', 'username');
//   username.setAttribute('class', 'detail_p');
  username.setAttribute('id', 'username');
  username.setAttribute('minlength', '5');
  username.setAttribute('placeholder', 'Your name');
  username.setAttribute('required', true);
  username.setAttribute('type', 'text');
  
  const insight = document.createElement('input');
  insight.setAttribute('name', 'insight');
//   insight.setAttribute('class', 'detail_p');
//   insight.setAttribute('value', ' ');
  insight.setAttribute('id', 'insight');
  insight.setAttribute('minlength', '1');
  insight.setAttribute('placeholder', 'Your insight');
  insight.setAttribute('required', true);
  insight.setAttribute('type', 'text');
  
  const formbutton = document.createElement('button');
  formbutton.setAttribute('type', 'submit');
//   formbutton.setAttribute('class', 'button1');
  formbutton.setAttribute('id', 'comment-button');
  formbutton.innerText = 'Comment';

  const breaker = document.createElement('br')
  const breaker2 = document.createElement('br')
  
  popupForm.appendChild(h36);
  popupForm.appendChild(username);
  popupForm.appendChild(breaker);
  popupForm.appendChild(insight);
  popupForm.appendChild(breaker2);
  popupForm.appendChild(formbutton);


  div.appendChild(popupForm);

 const addCmUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VkL66oEPzdyEWHkyAEbV/comments'

  const formsd = document.getElementById('form');
  formsd.addEventListener('submit', async (event) => {
    event.preventDefault();

    let name = formsd.username.value
    let comment = formsd.insight.value

    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VkL66oEPzdyEWHkyAEbV/comments', {
        method: 'POST',
        body: JSON.stringify({
            item_id: myId,
            username: name,
            comment,
          }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    formsd.username.value = ''
    formsd.insight.value = ''


    

       loadData(myId)

    
  });  
                    
 }
 })
}

export const displayList = () => {
    const dataArray = getFromLocalStorage();
  const display = document.getElementById('list');

  const navBar = document.getElementById('products')

  navBar.innerHTML = ''
  const span = document.createElement('span')
  span.textContent = `Products (${dataArray.length})`

  navBar.appendChild(span)


//   display.innerHTML = dataArray.map((each) => `
//         <div class="each-container">
//             <div class="img-container">
//                 <img src="${each.image}" alt="${each.category}">
//             </div>
//             <p>${each.title}</p>
//             <i class="fa-regular fa-heart" data-id = '${each.id}'></i>
//             <p class="like-count" id='${each.id}'>0</p><p>Likes</p>

//             <button id="btn">comment</button>
//         </div>
    
//     `).join('');
display.innerHTML = ''
dataArray.forEach((each) => {
    

const eachCont = document.createElement('div')
eachCont.classList.add('each-container')
display.appendChild(eachCont);

const imgCont = document.createElement('div')
imgCont.classList.add('img-container')
imgCont.innerHTML = `<img src="${each.image}" alt="${each.category}">`
eachCont.appendChild(imgCont)

const paraTitle = document.createElement('p')
paraTitle.innerHTML = ` <p>${each.title}</p>`
eachCont.appendChild(paraTitle)

const likeIcon = document.createElement('i')
likeIcon.setAttribute('class', 'fa-regular fa-heart')
likeIcon.setAttribute('data-id', `${each.id}`)
eachCont.appendChild(likeIcon)

const para1 = document.createElement('p')
para1.setAttribute('class', 'like-count')
para1.setAttribute('id', `${each.id}`)
para1.innerText = '0'
eachCont.appendChild(para1)

const para2 = document.createElement('p')
para2.innerText = 'Likes'
eachCont.appendChild(para2)

const deleteButton = document.createElement('button')
            deleteButton.classList.add('comment')
            deleteButton.innerText = 'comment'
            deleteButton.setAttribute('id', `btn${each.id}`)
            
            deleteButton.onclick = () => {
                // const commentDiv = document.getElementById('comment')
               
           
            commentDisplay(`${each.id}`)
            }

            eachCont.appendChild(deleteButton)

})
};