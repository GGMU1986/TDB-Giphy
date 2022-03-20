
export const fetchGifs = (url) => {

  const audioYeet = document.createElement('audio')
  audioYeet.src = './sounds/yeet.mp3';
  const audioCmon = document.createElement('audio')
  audioCmon.src = './sounds/cmon.mp3';
  const gifsContainer = document.getElementById('gifs-container');
  const noSearchValue = document.createElement('div');
  noSearchValue.classList.add('no-search')
  noSearchValue.textContent = 'PLEASE MODIFY YOUR SEARCH'

  fetch(url)
    .then(res => res.json())
    .then(content => {
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
}