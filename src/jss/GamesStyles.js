import { makeStyles } from '@material-ui/core/styles';

const gamesStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh'
  },
  headings: {
    marginTop: '2rem',
    fontSize: '1.5rem'
  }
});

export default gamesStyles;
