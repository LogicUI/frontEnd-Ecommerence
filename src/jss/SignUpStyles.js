import { makeStyles } from '@material-ui/core/styles';

const SignUpStyles = makeStyles((theme) => ({
  modal: {
    overflow: 'scroll'
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  link: {
    color: 'white',
    cursor: 'pointer',
    fontSize: '1.5rem',
    padding: '0.5rem'
  }
}));

export default SignUpStyles;
