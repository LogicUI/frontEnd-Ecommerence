import React, { useState, useEffect } from 'react';
import backEnd from '../api/backEnd';

const Videos = () => {
  const [videoCard, setVideoCard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await backEnd.get('/videos');
      setVideoCard(result.data);
    };
    fetchData();
  }, []);

  return <section>this is a test</section>;
};

export default Videos;
