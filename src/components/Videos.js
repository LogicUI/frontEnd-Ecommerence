import React, { useState, useEffect } from 'react';
import backEnd from '../api/backEnd';
import { CircularProgress} from '@material-ui/core';
import Video from './singles/Video';
import shortid from 'shortid';

const Videos = () => {
  const [videoCard, setVideoCard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await backEnd.get('/videos');
      setVideoCard(result.data);
    };
    fetchData();
  }, []);

  const renderProduct = () => {
    if (videoCard.length > 0) {
      return videoCard.map((element) => {
        return <Video key={shortid()} video={element} />;
      });
    } else {
      return <CircularProgress />;
    }
  };

  return <section>
  {renderProduct()}
  
  </section>;
};

export default Videos;
