import { setTimeout } from 'core-js';
import { fetchGifs } from './fetchGifs';
import { getUrl } from './getUrl';
import { loadingAnimation } from './loadingAnimation';
import { backToTop } from './backToTop';

document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById('container')
  const gifsContainer = document.getElementById('gifs-container');

  const topBtn = document.createElement('div');
  const topBtnText = document.createElement('p');
  topBtnText.textContent = 'back to top';
  topBtn.classList.add('top-btn');
  topBtn.appendChild(topBtnText)
  container.appendChild(topBtn);

  topBtn.addEventListener('click', backToTop)

  
  const gifLogo = document.createElement('img')
  gifLogo.classList.add('logo')
  gifLogo.src = './images/logo.gif'
  gifsContainer.appendChild(gifLogo);


  const form = document.getElementById('form');
  const input = document.getElementById('input');
  let searchValue;
  let count = 0;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    gifsContainer.textContent = null;
    searchValue = form.children[0].value.trim();
    fetchGifs(getUrl(searchValue, count));
    input.value = '';
  });


  window.addEventListener('scroll', () => {
    const { 
      scrollTop, scrollHeight, clientHeight 
    } = document.documentElement;

    if (scrollTop > 20){
      topBtn.style.display = 'block';
    } else {
      topBtn.style.display = 'none';
    }

    if (clientHeight + scrollTop >= scrollHeight - 5){
      loadingAnimation();
      setTimeout(() => {
        fetchGifs(getUrl(searchValue, count))
        count += 1;
      }, 1000);
    }
  })

});