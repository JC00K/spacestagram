import axios from 'axios';

export const apiKey = 'otFLnuDeQ2WuP5jw2w0PMoNVgVU2sxn6VhKqbtUe';

export const marsImageRetrieval = async () => {
  await axios
    .get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1&api_key=otFLnuDeQ2WuP5jw2w0PMoNVgVU2sxn6VhKqbtUe`
    )
    .then((res) => {
      const images = res.data.photos;
      for (const image of images) {
        return image;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

console.log(marsImageRetrieval());
