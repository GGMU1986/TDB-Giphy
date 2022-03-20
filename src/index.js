import { fetchGifs } from './fetchGifs.js';

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById('form');
  const input = document.getElementById('input');
  const APIKEY = '0OLzi5rvV7wVGAsRmX7ugDVPFTjsOKEQ'
  const gifsContainer = document.getElementById('gifs-container');
 
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    gifsContainer.textContent = null;
    let searchValue = form.children[0].value.trim();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=20&q=${searchValue}`
    fetchGifs(url);
    input.value = '';
  });


  // window.addEventListener('scrolling', () => {

  // })

});