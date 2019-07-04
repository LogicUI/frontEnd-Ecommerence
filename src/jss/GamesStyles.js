import { makeStyles } from '@material-ui/core/styles';

const gamesStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh'
  },
  typo: {
    margin: '2rem 0'
  },
  headings: {
    marginTop: '2rem',
    fontSize: '1.5rem',
    display: 'grid',
    gridGap: '20px',
    gridTemplateColumns: 'repeat(auto-fit,minMax(250px,1fr))'
  }
});

export default gamesStyles;
