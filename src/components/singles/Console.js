import React, { useContext, useState, useEffect } from 'react';
import ConsoleStyles from '../../jss/ConsoleStyles';
import { Typography, Button } from '@material-ui/core';
import { CartStore } from '../../global/Cart';

const Console = ({ consoleCard }) => {
  const hooks = useContext(CartStore);
  const [itemDetails, setQuantity] = useState({
    title: '',
    image: '',
    price: 0,
    count: 0
  });

  const handleOnClick = () => {
    setQuantity((prev) => {
      return {
        ...prev,
        title: consoleCard.title,
        price: prev.price + parseFloat(consoleCard.price),
        image: consoleCard.image,
        platform: consoleCard.platform,
        type: consoleCard.type,
        count: prev.count + 1
      };
    });

    hooks.incrementCart();
    hooks.incrementTotalPrice(consoleCard.price);
  };

  useEffect(() => {
    if (hooks.cartValue === 0) {
      setQuantity({
        title: '',
        image: '',
        price: 0,
        count: 0
      });
    }
  }, [hooks.cartValue]);

  useEffect(() => {
    if (itemDetails.count > 0) {
      hooks.addToCart(itemDetails.title, itemDetails);
    }
  }, [itemDetails]); // eslint-disable-line

  const classes = ConsoleStyles();

  return (
    <section className={classes.root}>
      <section className={classes.description}>
        <Typography gutterBottom variant="h4" align="center">
          {consoleCard.title}
        </Typography>
        <Typography gutterBottom variant="h6" align="center">
          {consoleCard.quantity} stocks left
        </Typography>
        <Typography gutterBottom variant="h6" align="center">
          ${consoleCard.price}
        </Typography>
        <Button variant="contained" onClick={handleOnClick} color="secondary">
          Add To Cart
        </Button>
      </section>
      <section className={classes.description}>
        <img
          className={classes.image}
          src={consoleCard.image}
          alt="this is a  of a platform"
        />
      </section>
    </section>
  );
};

export default Console;
