import React, { useContext } from 'react';
import { Link, Badge, Modal, Typography, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { CartStore } from '../global/Cart';
import CartStyles from '../jss/CartStyles';
import getModalStyle from '../helpers/helpers';
import CartModalItem from './singles/CartModalItem';
import shortid from 'shortid';
import mapCartToSubmit from '../helpers/mapCartToSubmit';
import backEnd from '../api/backEnd';
import { Checkout } from '../global/Checkout';

const LinkCart = () => {
  const classes = CartStyles();
  const hook = useContext(CartStore);
  const { checkOutCart, handleCheckOut } = useContext(Checkout);
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCartSubmit = async (event) => {
    event.preventDefault();
    const newMappedArray = mapCartToSubmit(hook.cartItems);
    newMappedArray.forEach(async (element) => {
      await backEnd.put(`${element.type}/update`, element);
    });
    handleCheckOut();
  };

  const renderItems = () => {
    return Object.entries(hook.cartItems).map(([title, items]) => {
      return <CartModalItem key={shortid()} title={title} items={items} />;
    });
  };

  return (
    <React.Fragment>
      <Link className={classes.cart} onClick={handleOpen}>
        Cart
        <Badge badgeContent={hook.cartValue} showZero>
          <ShoppingCart fontSize="large" />
        </Badge>
      </Link>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        className={classes.modal}
      >
        <form
          style={modalStyle}
          className={classes.paper}
          onSubmit={handleCartSubmit}
        >
          {renderItems()}
          <Typography
            variant="h5"
            align="center"
            className={classes.totalPrice}
          >
            {hook.totalPrice === 0 && `Your Cart is empty`}
            {hook.totalPrice > 0 &&
              `Total price for checkout is $${hook.totalPrice}`}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            className={classes.totalPrice}
          >
            {checkOutCart && 'You have checkout sucessfully'}
          </Typography>

          <Typography
            variant="h5"
            align="center"
            className={classes.totalPrice}
          />

          <section>
            {hook.totalPrice > 0 && (
              <Button
                variant="contained"
                color="primary"
                className={classes.buttons}
                type="submit"
              >
                Checkout
              </Button>
            )}
            {hook.totalPrice > 0 && (
              <Button
                className={classes.buttons}
                variant="contained"
                color="secondary"
                onClick={hook.emptyCart}
              >
                Empty Cart
              </Button>
            )}
          </section>
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default LinkCart;
