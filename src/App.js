import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '@mui/material';
import './App.css';
import LoadingSpin from 'react-loading-spin';
import Buttons from './Buttons';

export default function App() {
  const [marsImages, setMarsImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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

  const renderImages = () => {
    return marsImages.map((image) => (
      <Card
        className='child-container'
        style={{ backgroundColor: 'lightblue' }}
      >
        <h5>{image.camera.full_name}</h5>
        <h5>{image.earth_date}</h5>
        <Buttons />
        <img src={image.img_src} alt='' />
      </Card>
    ));
  };

  return loading ? (
    <div className='App'>
      <header className='App-header'>
        <div className='outer-container'>
          <div>{renderImages()}</div>
        </div>
      </header>
    </div>
  ) : (
    <div className='loading-screen'>
      <h1 className='loading-message'>
        <LoadingSpin />
        <br />
        Retrieving Data
      </h1>
    </div>
  );
}
