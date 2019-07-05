import React from 'react';
import { Typography, Avatar } from '@material-ui/core';
import CartModalItems from '../../jss/CartModalStyles';

const CartModalItem = (props) => {
  const classes = CartModalItems();
  return (
    <section className={classes.root}>
      <section className={classes.section}>
        <Typography gutterBottom variant="h6" align="center">
          {props.title} x{props.items.item.count}
        </Typography>
        <Typography gutterBottom variant="h6" align="center">
          Type: {props.items.item.platform} {props.items.item.type}
        </Typography>
        <Typography gutterBottom variant="h6" align="center">
          ${props.items.item.price}
        </Typography>
      </section>
      <section className={classes.section}>
        <Avatar
          alt="cart item"
          src={props.items.item.image}
          className={classes.bigAvatar}
        />
      </section>
    </section>
  );
};

export default CartModalItem;
