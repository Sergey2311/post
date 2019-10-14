console.log('POST');

const rootEl = document.getElementById('root');
console.log(rootEl); 
console.dir(rootEl);

const post = {
    id: 123,
    content: 'Первый пост в моей социальной сети!',
    imageUrl: 'http://www.i-sonnik.ru/wp-content/uploads/2017/09/chernyj-lev.jpg',
    likes: 6,
    dislikes: 6,
    videoUrl: 'https://www.youtube.com/watch?v=egwj2y7gpmY',
    audioUrl: 'http://dl2.mp3party.net/online/169822.mp3',
};

const postEl = document.createElement('div');
postEl.className = 'card'; 

const imgEl = document.createElement('img');
imgEl.src = post.imageUrl;
imgEl.className = 'card-img-top';
postEl.appendChild(imgEl);

const videoEl = document.createElement('video');
videoEl.src = post.videoUrl;
videoEl.className = 'card-video-top';
postEl.appendChild(videoEl);

const audioEl = document.createElement('audio');
audioEl.src = post.audioUrl;
audioEl.className = 'card-audio-top';
postEl.appendChild(audioEl);

const postBodyEl = document.createElement('div');
postBodyEl.className = 'card-body';
postEl.appendChild(postBodyEl);

const postContentEl = document.createElement('p');
postContentEl.textContent = post.content;
postBodyEl.appendChild(postContentEl);

const likesEl = document.createElement('button');
likesEl.className = 'btn btn-primary';
likesEl.textContent = '👍 ' + post.likes;
likesEl.onclick = function () {
    post.likes = post.likes + 1;
    likesEl.textContent = '👍 ' + post.likes;
};
postBodyEl.appendChild(likesEl);


const dislikesEl = document.createElement('button');
dislikesEl.className = 'btn btn-primary';
dislikesEl.textContent = '👎 ' + post.likes;
dislikesEl.onclick = function () {
    post.dislikes = post.dislikes + 1;
    dislikesEl.textContent = '👎 ' + post.dislikes;
};
postBodyEl.appendChild(dislikesEl);

rootEl.appendChild(postEl);