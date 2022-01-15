import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card } from '@mui/material';
import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  const [marsImages, setMarsImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [like, setLike] = useState(false)
  const [disLike, setDislike] = useState(false)

  useEffect(() => {
    const setLike = () => {
    if(!like) {
      setLike(true)
      console.log(like)
    } else {
    setLike(false) 
      console.log(like)
    }
      
    const setDisLike = () => {
    if(!dislike) {
      setDislike(true)
      console.log(dislike)
    } else {
    setDislike(false) 
      console.log(dislike)
    }
      
    const getMarsImages = async () => {
      await axios
        .get(
          'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=otFLnuDeQ2WuP5jw2w0PMoNVgVU2sxn6VhKqbtUe'
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
              style={{ backgroundColor: 'lightblue' }}
            >
              <h5>{image.camera.full_name}</h5>
              <h5>{image.earth_date}</h5>
              <h4>
                <Button type='submit' color='primary' onClick={getLike}>
                  Like
                </Button>
                <Button type='submit' color='error' onClick={getDislike}>
                  Dislike
                </Button>
                <br />
                <Button type='link'>Get Shareable Link</Button>
              </h4>
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
