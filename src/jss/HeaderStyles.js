import { makeStyles } from '@material-ui/core/styles';

const headerStyles = makeStyles({
  root: {
    backgroundColor: '#424242'
  },
  tabsRoot: {
    transition: 'all 0.5s'
  },
  indicator: {
    backgroundColor: 'inherit'
  },
  textColor: {
    color: 'white'
  },
  selected: {
    background: 'darkorange',
    color: 'white !important'
  }
});

export default headerStyles;
