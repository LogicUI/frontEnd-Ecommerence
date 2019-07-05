import React, { useContext } from 'react';
import { Link, Badge, Modal, Typography, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { CartStore } from '../global/Cart';
import CartStyles from '../jss/CartStyles';
import getModalStyle from '../helpers/helpers';

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
      >
        <section style={modalStyle} className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            Text in a modal
          </Typography>
          <Typography variant="subtitle1" id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
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
