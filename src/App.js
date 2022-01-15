import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card } from '@mui/material';
import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import IconButton from '@mui/material/IconButton';

function App() {
  const [marsImages, setMarsImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  function likeHandler(event) {
    // To Like
    if (like === true) {
      setLike(false);
    } else {
      setLike(true);
      setDislike(false);
    }
  }

  function dislikeHandler(event, data) {
    // To Dislike
    console.log(event.target, data);
    if (dislike === true) {
      setDislike(false);
    } else {
      setDislike(true);
      setLike(false);
    }
  }

  useEffect(() => {
    const getMarsImages = async () => {
      await axios
        .get(
          'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&api_key=otFLnuDeQ2WuP5jw2w0PMoNVgVU2sxn6VhKqbtUe'
        )
        .then((res) => {
          setMarsImages(res.data.photos);
          setLoading(true);
        });
    };
    getMarsImages();
  }, []);

  return loading ? (
    <div className='App'>
      <header className='App-header'>
        <div className='outer-container'>
          {marsImages.map((image) => (
            <Card
              className='child-container'
              key={image.id}
              style={{ backgroundColor: 'lightblue' }}
            >
              <h5>{image.camera.full_name}</h5>
              <h5>{image.earth_date}</h5>
              {like === true ? (
                <IconButton onClick={(event) => likeHandler(event)}>
                  <ThumbUpAltIcon />
                </IconButton>
              ) : (
                <IconButton onClick={(event) => likeHandler(event)}>
                  <ThumbUpOffAltIcon />
                </IconButton>
              )}
              {dislike === true ? (
                <IconButton onClick={(event) => dislikeHandler(event)}>
                  <ThumbDownAltIcon />
                </IconButton>
              ) : (
                <IconButton onClick={(event) => dislikeHandler(event)}>
                  <ThumbDownOffAltIcon />
                </IconButton>
              )}
              <br />
              <Button type='link'>Get Shareable Link</Button>
              <img src={image.img_src} alt='' />
            </Card>
          ))}
        </div>
      </header>
    </div>
  ) : (
    <div className='loading-screen'>
      <h1 className='loading-message'>Retrieving Data</h1>
    </div>
  );
}
export default App;
