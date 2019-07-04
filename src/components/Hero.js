import { Paper, Typography, Link,} from '@material-ui/core';
import React  from 'react';
import HeroStyles from '../jss/HeroStyles';
import LinkCart from "./LinkCart";

const Hero = () => {

  const classes = HeroStyles();

  return (
    <Paper classes={{ root: classes.root }}>
      <Typography variant="h4" classes={{ root: classes.textColor }}>
        GameForest
      </Typography>
      <section className={classes.links}>
        <Link className={classes.link}> Login </Link>
        <Link className={classes.link}>Sign Up</Link>
        <LinkCart />
      </section>
    </Paper>
  );
};

export default Hero;