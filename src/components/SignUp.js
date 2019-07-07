import React, { useContext, Fragment } from 'react';
import {
  Link,
  TextField,
  Modal,
  Typography,
  Button,
  Box
} from '@material-ui/core';
import SignUpStyles from '../jss/SignUpStyles';
import getModalStyle from '../helpers/helpers';
import backEnd from '../api/backEnd';
import { Auth } from '../global/Authen';

const SignUp = () => {
  const classes = SignUpStyles();
  const { auth, logOutUser } = useContext(Auth);

  const [open, setOpen] = React.useState(false);
  const [input, handleFormInput] = React.useState({
    name: '',
    email: '',
    password: '',
    color: '',
    response: ''
  });
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnChange = (event) => {
    handleFormInput({
      ...input,
      response: '',
      color: '',
      [event.target.name]: event.target.value
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: input.email,
      name: input.name,
      password: input.password
    };

    backEnd
      .post('/users/register', user)
      .then((response) => {
        handleFormInput({
          name: '',
          email: '',
          password: '',
          color: 'primary',
          response: response.data
        });
      })
      .catch((error) => {
        if (error.response) {
          handleFormInput({
            ...input,
            color: 'secondary',
            response: error.response.data
          });
        }
      });
  };

  const handleLogOut = () => {
    logOutUser();
  };

  const showSignUp = () => {
    if (auth) {
      return (
        <Link className={classes.link} onClick={handleLogOut}>
          Log Out
        </Link>
      );
    } else {
      return (
        <Link className={classes.link} onClick={handleOpen}>
          Sign Up
        </Link>
      );
    }
  };

  return (
    <Fragment>
      {showSignUp()}
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
          onSubmit={handleFormSubmit}
        >
          <Typography variant="h4" gutterBottom>
            Sign Up
          </Typography>
          {input.response && (
            <Box
              bgcolor={`${input.color}.main`}
              color={`${input.color}.contrastText`}
              style={{ padding: '0.5rem' }}
            >
              {input.response}
            </Box>
          )}
          <TextField
            label="Name"
            required
            className={classes.textField}
            onChange={handleOnChange}
            margin="normal"
            variant="outlined"
            name="name"
            value={input.name}
          />
          <TextField
            label="Email"
            required
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={handleOnChange}
            name="email"
            type="email"
            value={input.email}
          />
          <TextField
            label="Password"
            required
            type="password"
            onChange={handleOnChange}
            className={classes.textField}
            margin="normal"
            variant="outlined"
            name="password"
            value={input.password}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.buttons}
            type="submit"
          >
            SignUp
          </Button>
        </form>
      </Modal>
    </Fragment>
  );
};

export default SignUp;
