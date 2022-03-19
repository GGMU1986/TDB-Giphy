

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById('form');
  const input = document.getElementById('input');
  const audio = document.createElement('audio')
  audio.src = './sounds/yeet.mp3';
  const APIKEY = '0OLzi5rvV7wVGAsRmX7ugDVPFTjsOKEQ'
  const gifsContainer = document.getElementById('gifs-container');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    gifsContainer.innerHTML = null;
    let searchValue = form.children[0].value;
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=20&q=${searchValue}`
    audio.play();
    fetch(url)
      .then(res => res.json())
      .then(content => {
        console.log(content.data)
        content.data.forEach((gif, i) => {
          let gifCont = document.createElement('div')
          gifCont.classList.add('gif-cont')
          let img = document.createElement('img')
          // let title = document.createElement('figcaption')
          // img.style.height = (i % 2 === 1) ? '400px' : '200px';
          img.src = gif.images.downsized.url;
          // title.textContent = gif.title;
          // title.style.textAlign = 'center';
          gifCont.appendChild(img);
          // gifCont.appendChild(title);
          gifsContainer.appendChild(gifCont);
        });
      })
      .catch(err => console.error(err))
    input.value = '';
  });


});