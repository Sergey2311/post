console.log('POST');

const rootEl = document.getElementById('root');
console.dir(rootEl);

const post = {
    id: 123,
    content: 'Лев (лат. Panthera leo) — вид хищных млекопитающих, один из четырёх представителей рода пантер (Panthera), относящегося к подсемейству больших кошек (Pantherinae) в составе семейства кошачьих (Felidae)',
    imageUrl: 'http://www.i-sonnik.ru/wp-content/uploads/2017/09/chernyj-lev.jpg',
    likes: 10,
    dislikes: 5,
};

const postTwo = {
    id: 124,
    content: 'Природа Грузии, водопады и каньоны, горы Сванетии в 4К формате (Ultra HD)',
    likes: 10,
    dislikes: 5,
    videoUrl: 'https://www.youtube.com/embed/egwj2y7gpmY',
};

const postThree = {
    id: 125,
    content: 'Scorpions - Send Me An Angel',
    likes: 10,
    dislikes: 5,
    audioUrl: 'http://dl2.mp3party.net/online/169822.mp3',
};

const postEl = document.createElement('div');
postEl.className = 'card'; 

const imgEl = document.createElement('img');
imgEl.src = post.imageUrl;
imgEl.className = 'card-img-top';
postEl.appendChild(imgEl);

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

const postTwoBodyEl = document.createElement('div');
postTwoBodyEl.className = 'card'; 

const postTwoEl = document.createElement('div');
postTwoEl.className = 'embed-responsive embed-responsive-16by9';
postTwoEl.controls = true;
postTwoBodyEl.appendChild(postTwoEl);

const videoEl = document.createElement('iframe');
videoEl.className = 'embed-responsive-item';
videoEl.src = postTwo.videoUrl;
postTwoEl.appendChild(videoEl);

const postTwoContentEl = document.createElement('p');
postTwoContentEl.textContent = postTwo.content;
postTwoBodyEl.appendChild(postTwoContentEl);

const likesTwoEl = document.createElement('button');
likesTwoEl.className = 'btn btn-primary';
likesTwoEl.textContent = '👍 ' + postTwo.likes;
likesTwoEl.onclick = function () {
    postTwo.likes = postTwo.likes + 1;
    likesTwoEl.textContent = '👍 ' + postTwo.likes;
};
postTwoBodyEl.appendChild(likesTwoEl);

const dislikesTwoEl = document.createElement('button');
dislikesTwoEl.className = 'btn btn-primary';
dislikesTwoEl.textContent = '👎 ' + postTwo.likes;
dislikesTwoEl.onclick = function () {
    postTwo.dislikes = postTwo.dislikes + 1;
    dislikesTwoEl.textContent = '👎 ' + postTwo.dislikes;
};
postTwoBodyEl.appendChild(dislikesTwoEl);

const postThreeBodyEl = document.createElement('div');
postThreeBodyEl.className = 'card'; 

const audioEl = document.createElement('audio');
audioEl.src = postThree.audioUrl;
audioEl.className = 'audio';
audioEl.controls = true;
postThreeBodyEl.appendChild(audioEl);

const postThreeContentEl = document.createElement('p');
postThreeContentEl.textContent = postThree.content;
postThreeBodyEl.appendChild(postThreeContentEl);

const likesThreeEl = document.createElement('button');
likesThreeEl.className = 'btn btn-primary';
likesThreeEl.textContent = '👍 ' + postThree.likes;
likesThreeEl.onclick = function () {
    postThree.likes = postThree.likes + 1;
    likesThreeEl.textContent = '👍 ' + postThree.likes;
};
postThreeBodyEl.appendChild(likesThreeEl);

const dislikesThreeEl = document.createElement('button');
dislikesThreeEl.className = 'btn btn-primary';
dislikesThreeEl.textContent = '👎 ' + postThree.likes;
dislikesThreeEl.onclick = function () {
    postThree.dislikes = postThree.dislikes + 1;
    dislikesThreeEl.textContent = '👎 ' + postThree.dislikes;
};
postThreeBodyEl.appendChild(dislikesThreeEl);

rootEl.appendChild(postEl);
rootEl.appendChild(postTwoBodyEl);
rootEl.appendChild(postThreeBodyEl);