import React, { useContext, useState, useEffect } from 'react';
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
import { CartStore } from '../../global/Cart';

const GameCard = ({ game }) => {
  const hooks = useContext(CartStore);
  const classes = GameStyle();

  const [itemDetails, setQuantity] = useState({
    title: '',
    image: '',
    price: 0,
    count: 0
  });

  useEffect(() => {
    if (itemDetails.count > 0) {
      hooks.addToCart(itemDetails.title, itemDetails);
      hooks.incrementCart();
      hooks.incrementTotalPrice(game.price);
    }
  }, [itemDetails.count]); // eslint-disable-line

  useEffect(() => {
    if (hooks.cartValue === 0) {
      setQuantity({
        title: '',
        image: '',
        price: 0,
        count: 0
      });
    }
  }, [hooks.cartValue]); // eslint-disable-line

  const handleOnClick = () => {
    setQuantity((prev) => {
      return {
        ...prev,
        title: game.title,
        price: prev.price + parseFloat(game.price),
        image: game.image,
        platform: game.platform,
        type: game.type,
        count: prev.count + 1
      };
    });
  };

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
        <Button size="small" color="primary" onClick={handleOnClick}>
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default GameCard;
