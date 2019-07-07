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

const SignIn = () => {
  const classes = SignUpStyles();
  const { auth, loginUser } = useContext(Auth);

  const [open, setOpen] = React.useState(false);
  const [input, handleFormInput] = React.useState({
    email: '',
    password: '',
    color: '',
    name: '',
    response: ''
  });
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const showSignIn = () => {
    if (auth) {
      return (
        <Typography variant="h5" className={classes.link}>{`Login as ${
          input.name
        }`}</Typography>
      );
    } else {
      return (
        <Link className={classes.link} onClick={handleOpen}>
          Login
        </Link>
      );
    }
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
      password: input.password
    };

    backEnd
      .post('/users/login', user)
      .then((response) => {
        handleFormInput({
          name: response.data.name,
          email: '',
          password: '',
          color: 'primary',
          response: response.data.text
        });
        loginUser();
        setTimeout(() => {
          handleClose();
        }, 1000);
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

  return (
    <Fragment>
      {showSignIn()}
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
            Login
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
            onChange={handleOnChange}
            className={classes.textField}
            margin="normal"
            variant="outlined"
            name="password"
            type="password"
            value={input.password}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.buttons}
            type="submit"
          >
            Login
          </Button>
        </form>
      </Modal>
    </Fragment>
  );
};

export default SignIn;
