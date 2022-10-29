/* eslint-disable */
export const close = () => {
    const comDiv = document.querySelector('#comment')
    comDiv.innerHTML = ''
}

export const commentCounter = (node) => {
  const nodes = [...node.children];
   return nodes.length;
}
    

export const loadData = async (id) => {
    const fetcs = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S8XMmRCmcLZyPwNwbfEu/comments?item_id=${id}`,
    );
    const dataz = fetcs.json();
     const commentArray =  await dataz.then((data) => {return data});
    
     const showComment = document.querySelector('.showComment')

     showComment.innerHTML = ''

     const commentHead = document.createElement('h2')
      
     commentHead.classList.add('commentHead')
     showComment.appendChild(commentHead)

     const allcomments = document.createElement('div')
     allcomments.classList.add('allcomments')
     showComment.appendChild(allcomments)

      if (commentArray.length > 0) {
        console.log('a')
        commentArray.forEach((each) => {

          const paragraph = document.createElement('p')
          paragraph.classList.add('each-comment')
          paragraph.innerText = `${each.creation_date} ${each.username}: ${each.comment}`
  
          allcomments.appendChild(paragraph)
       }) 
       commentHead.innerHTML = `<span>Comments (${commentCounter(allcomments)})</span>`
      } else {
        commentHead.innerHTML = `<span>Comments (0)</span>`
      }
};