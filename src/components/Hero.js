import { Paper, Typography, Link, Badge } from '@material-ui/core';
import React from 'react';
import HeroStyles from '../jss/HeroStyles';
import { ShoppingCart } from '@material-ui/icons';

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
        <Link className={classes.link}>
          Cart
          <Badge badgeContent={0} showZero>
            <ShoppingCart fontSize="large" />
          </Badge>
        </Link>
      </section>
    </Paper>
  );
};

export default Hero;
