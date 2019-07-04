import React, { useState, useEffect } from 'react';
import backEnd from '../api/backEnd';
import HomeStyles from '../jss/HomeStyles';

const Home = () => {
  const [image, setImage] = useState('');
  const classes = HomeStyles();

  useEffect(() => {
    const fetchData = async () => {
      const result = await backEnd.get('/home');
      setImage(result.data);
    };
    fetchData();
  }, []);

  return (
    <section className={classes.root}>
      <section
        style={{
          background: `url(${image.image})`,
          backgroundSize: 'cover',
          height: '100vh'
        }}
      />
    </section>
  );
};

export default Home;
