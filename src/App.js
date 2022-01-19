import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
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
      <Box>
        <Card
          className='child-container'
          style={{ backgroundColor: 'lightblue' }}
        >
          <CardContent>
            <Typography fontSize={40}>{image.camera.full_name}</Typography>
            <Typography fontSize={35}>{image.earth_date}</Typography>
            <Box>
              <Buttons />
            </Box>
          </CardContent>
          <CardMedia component='img' image={image.img_src} alt='' />
        </Card>
      </Box>
    ));
  };

  return loading ? (
    <Container className='outer-container'>{renderImages()}</Container>
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
