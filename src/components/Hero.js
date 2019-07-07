import { Paper, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import HeroStyles from '../jss/HeroStyles';
import LinkCart from './LinkCart';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { Auth } from '../global/Authen';

const Hero = () => {
  const classes = HeroStyles();

  const { auth } = useContext(Auth);
  return (
    <Paper classes={{ root: classes.root }}>
      <Typography variant="h4" classes={{ root: classes.textColor }}>
        GameForest
      </Typography>
      <section className={classes.links}>
        <SignIn />
        <SignUp />
        {auth && <LinkCart />}
      </section>
    </Paper>
  );
};

export default Hero;
