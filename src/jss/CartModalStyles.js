import { makeStyles } from '@material-ui/core/styles';

const CartModalStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    width: '100%',
    height: '100%',
    margin: '2rem 0'
  },
  section: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  bigAvatar: {
    margin: 10,
    width: 120,
    height: 120
  }
});

export default CartModalStyles;
