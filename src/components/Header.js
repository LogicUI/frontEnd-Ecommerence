import { AppBar, Tabs, Tab, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import HeaderStyles from '../jss/HeaderStyles';

const Header = () => {
  const classes = HeaderStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static">
      <Paper classes={{ root: classes.root }}>
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{ indicator: classes.indicator, root: classes.tabsRoot }}
          textColor="primary"
        >
          <Tab
            label="Home"
            classes={{
              textColorPrimary: classes.textColor,
              selected: classes.selected
            }}
          />
          <Tab
            label="Videos"
            classes={{
              textColorPrimary: classes.textColor,
              selected: classes.selected
            }}
          />
          <Tab
            label="Games"
            classes={{
              textColorPrimary: classes.textColor,
              selected: classes.selected
            }}
          />
          <Tab
            label="Console"
            classes={{
              textColorPrimary: classes.textColor,
              selected: classes.selected
            }}
          />
        </Tabs>
      </Paper>
    </AppBar>
  );
};

export default Header;
