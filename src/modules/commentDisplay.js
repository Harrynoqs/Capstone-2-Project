/* eslint-disable */
import { getFromLocalStorage } from "./localStorage.js"
import { loadData, close  } from "./commentFunctions.js";

export const commentDisplay = (myId) => {
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
            deleteButton.innerHTML = `<i class="fa fa-close" id="close-popup">`
            
            deleteButton.onclick = () => {
                close()
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

  username.setAttribute('id', 'username');
  username.setAttribute('minlength', '5');
  username.setAttribute('placeholder', 'Your name');
  username.setAttribute('required', true);
  username.setAttribute('type', 'text');
  
  const insight = document.createElement('input');
  insight.setAttribute('name', 'insight');
  insight.setAttribute('id', 'insight');
  insight.setAttribute('minlength', '1');
  insight.setAttribute('placeholder', 'Your insight');
  insight.setAttribute('required', true);
  insight.setAttribute('type', 'text');
  
  const formbutton = document.createElement('button');
  formbutton.setAttribute('type', 'submit');
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