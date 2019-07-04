import React ,{useContext} from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
  Button
} from '@material-ui/core';
import GameStyle from '../../jss/GameStyle';
import {CartStore} from "../../global/Cart";

const Game = ({ game }) => {
  const hooks = useContext(CartStore);
  const classes = GameStyle();
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={game.title}
          height="150"
          image={game.image}
          title={game.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" align="center">
            {game.title}
          </Typography>
          <Typography gutterBottom variant="h6" align="center">
            Price: ${game.price}
          </Typography>
          <Typography gutterBottom variant="h6" align="center">
            Stocks: {game.quantity}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.root}>
        <Button size="small" color="primary" onClick={hooks.incrementCart} >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Game;
