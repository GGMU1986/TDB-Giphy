import { fetchGifs } from './fetchGifs';
import { getUrl } from './getUrl';

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById('form');
  const input = document.getElementById('input');
  const gifsContainer = document.getElementById('gifs-container');
  let searchValue;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    gifsContainer.textContent = null;
    searchValue = form.children[0].value.trim();
    fetchGifs(getUrl(searchValue));
    input.value = '';
  });


  window.addEventListener('scroll', () => {
    const { 
      scrollTop, scrollHeight, clientHeight 
    } = document.documentElement;

    if (clientHeight + scrollTop >= scrollHeight - 5){
      fetchGifs(getUrl(searchValue))
    }
  })

});