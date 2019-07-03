import { makeStyles } from '@material-ui/core/styles';

const HeroStyles = makeStyles({
  root: {
    padding: '2rem',
    background: '#424242',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  },
  textColor: {
    color: 'white'
  },
  links: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  link: {
    color: 'white',
    cursor: 'pointer',
    fontSize: '1.5rem',
    padding: '0.5rem'
  }
});

export default HeroStyles;
