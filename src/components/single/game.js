import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia
} from '@material-ui/core/Card';

const Game = (props) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={props.title}
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      />
    </Card>
  );
};

export default Game;
