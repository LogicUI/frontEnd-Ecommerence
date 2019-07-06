import { Typography } from '@material-ui/core';

import React from 'react';
import VideoStyles from '../../jss/VideoStyles';

const Video = ({ video }) => {
  const classes = VideoStyles();

  const embedLink = video.videoLink
    .replace('watch?v=', 'embed/')
    .replace(/&t=1s/, '');

  return (
    <section className={classes.root}>
      <section className={classes.description}>
        <Typography variant="h5">{video.description}</Typography>
      </section>
      <section>
        <iframe title={"frame"} src={embedLink} height="350px" width="100%" />
      </section>
    </section>
  );
};

export default Video;
