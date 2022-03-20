
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
  noSearchValue.textContent = 'PLEASE ENTER SOMETHING IN SEARCH'

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    gifsContainer.textContent = null;
    let searchValue = form.children[0].value;
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=20&q=${searchValue}`
    if (searchValue){
      audioYeet.play();
      fetch(url)
        .then(res => res.json())
        .then(content => {
          content.data.forEach((gif, i) => {
            let gifCont = document.createElement('div')
            gifCont.classList.add('gif-cont')
            let img = document.createElement('img')
            img.src = gif.images.downsized.url;
            gifCont.appendChild(img);
            gifsContainer.appendChild(img);
          });
        })
        .catch(err => console.error(err))
      input.value = '';
    } else {
      gifsContainer.append(noSearchValue)
      audioCmon.play();
    }
  });


});