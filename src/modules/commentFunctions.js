/* eslint-disable */
export const close = () => {
    const comDiv = document.querySelector('#comment')
    comDiv.innerHTML = ''
}

export const commentCounter = (array) =>  array.length;
    

export const loadData = async (id) => {
    const fetcs = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VkL66oEPzdyEWHkyAEbV/comments?item_id=${id}`,
    );
    const dataz = fetcs.json();
     const commentArray =  await dataz.then((data) => {return data});
     const countComment = commentCounter(commentArray)
     

     const showComment = document.querySelector('.showComment')

     showComment.innerHTML = ''

     const commentHead = document.createElement('h2')
     commentHead.innerHTML = `<span>Comments (${countComment})</span>`
     commentHead.classList.add('commentHead')
     showComment.appendChild(commentHead)

     commentArray.forEach((each) => {

        const paragraph = document.createElement('p')
        paragraph.classList.add('each-comment')
        paragraph.innerText = `${each.creation_date} ${each.username}: ${each.comment}`

        showComment.appendChild(paragraph)
     })
};