import React, { useContext, Fragment } from 'react';
import {
  Link,
  Badge,
  Modal,
  Typography,
  Button,
  Divider
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { CartStore } from '../global/Cart';
import CartStyles from '../jss/CartStyles';
import getModalStyle from '../helpers/helpers';
import CartModalItem from './single/CartModalItem';
import shortid from 'shortid';

const LinkCart = () => {
  const classes = CartStyles();
  const hook = useContext(CartStore);
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderItems = () => {
    const mapItems = Object.entries(hook.cartItems);
    return mapItems.map(([title, items]) => {
      return (
        <Fragment>
          <CartModalItem key={shortid()} title={title} items={items} />
          <Divider variant="fullWidth" />
        </Fragment>
      );
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
        <section style={modalStyle} className={classes.paper}>
          {renderItems()}
          <Typography
            variant="h5"
            align="center"
            className={classes.totalPrice}
          >
            {hook.totalPrice > 0 &&
              `Total price for checkout is $${hook.totalPrice}`}
          </Typography>
          <section>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttons}
            >
              Checkout
            </Button>
            <Button
              className={classes.buttons}
              variant="contained"
              color="secondary"
              onClick={hook.emptyCart}
            >
              Empty Cart
            </Button>
          </section>
        </section>
      </Modal>
    </React.Fragment>
  );
};

export default LinkCart;
