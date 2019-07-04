import { AppBar, Tabs, Tab, Paper } from '@material-ui/core';
import React, { useContext } from 'react';
import HeaderStyles from '../jss/HeaderStyles';
import { Link as RouterLink } from 'react-router-dom';
import { Store } from '../global/Tabs';
import {CartStore} from "../global/Cart";

const Header = () => {
  const classes = HeaderStyles();
  const hook = useContext(Store);

  return (
    <AppBar position="static">
      <Paper classes={{ root: classes.root }}>
        <Tabs
          value={hook.tabValue}
          classes={{ indicator: classes.indicator, root: classes.tabsRoot }}
          textColor="primary"
        >
          <Tab
            label="Home"
            classes={{
              textColorPrimary: classes.textColor,
              selected: classes.selected
            }}
            component={RouterLink}
            to="/"
          />
          <Tab
            label="Games"
            classes={{
              textColorPrimary: classes.textColor,
              selected: classes.selected
            }}
            component={RouterLink}
            to="/games"
          />
          <Tab
            label="Videos"
            classes={{
              textColorPrimary: classes.textColor,
              selected: classes.selected
            }}
            component={RouterLink}
            to="/videos"
          />
          <Tab
            label="Console"
            classes={{
              textColorPrimary: classes.textColor,
              selected: classes.selected
            }}
            component={RouterLink}
            to="/consoles"
          />
        </Tabs>
      </Paper>
    </AppBar>
  );
};

export default Header;
