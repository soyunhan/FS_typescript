const ajax = new XMLHttpRequest();
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';

ajax.open('GET', NEWS_URL, false);
ajax.send();

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');

//하드코딩 수정 (반복패턴 찾아서 고쳐줌)
for(let i = 0; i < 10; i++) {
  const li = document.createElement('li');
  li.innerHTML = newsFeed[i].title;
  ul.appendChild(li); 
}

document.getElementById('root').appendChild(ul);