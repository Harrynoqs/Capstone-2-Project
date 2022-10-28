import '../index.js';

const endpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S8XMmRCmcLZyPwNwbfEu/likes';

const showLikes = (response) => {
  response.forEach((data) => {
    const likeCount = document.querySelectorAll('.like-count');
    likeCount.forEach((display) => {
      if (display.id === data.item_id) {
        display.textContent = data.likes;
      }
    });
  });
};

const getLikes = async () => {
  await fetch(endpoint)
    .then((response) => response.json())
    .then((response) => showLikes(response));
};

getLikes();

const postLikes = async (id) => {
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  }).then((response) => response);
};

window.addEventListener('click', (e) => {
  const like = e.target;
  if (like.tagName === 'I') {
    const targetId = like.getAttribute('data-id');
    postLikes(targetId);
    const likeDisplay = e.target.nextElementSibling;
    let likeNumber = Number(e.target.nextElementSibling.textContent);
    likeNumber += 1;
    likeDisplay.textContent = String(likeNumber);
  }
});