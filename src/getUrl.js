
export const getUrl = (searchValue, count) => {

  const APIKEY = '0OLzi5rvV7wVGAsRmX7ugDVPFTjsOKEQ'
  let url;
  
  if (count === 0){
    url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=20&q=${searchValue}`
    return url
  }

  url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&offset=${count*20}&limit=20&q=${searchValue}`
  return url;
}