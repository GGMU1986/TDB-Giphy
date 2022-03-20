
document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById('form');
  const input = document.getElementById('input');
  const audioYeet = document.createElement('audio')
  audioYeet.src = './sounds/yeet.mp3';
  const audioCmon = document.createElement('audio')
  audioCmon.src = './sounds/cmon.mp3';
  const APIKEY = '0OLzi5rvV7wVGAsRmX7ugDVPFTjsOKEQ'
  const gifsContainer = document.getElementById('gifs-container');
  const noSearchValue = document.createElement('div');
  noSearchValue.classList.add('no-search')
  noSearchValue.textContent = 'PLEASE MODIFY YOUR SEARCH'

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    gifsContainer.textContent = null;
    let searchValue = form.children[0].value.trim();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=20&q=${searchValue}`
    fetch(url)
    .then(res => res.json())
    .then(content => {
      console.log(content.data)
      if (content.data.length){
        audioYeet.play();
        content.data.forEach(gif => {
          let gifCont = document.createElement('div')
          gifCont.classList.add('gif-cont')
          let img = document.createElement('img')
          img.src = gif.images.downsized.url;
          gifCont.appendChild(img);
          gifsContainer.appendChild(img);
        });
      } else {
        gifsContainer.append(noSearchValue)
        audioCmon.play();
      }
    })
    .catch(err => console.error(err))
    input.value = '';
  });
});