import React, { useState, useEffect } from 'react';
import backEnd from '../api/backEnd';
import GamesStyles from '../jss/GamesStyles';
import Game from './single/Game';
import shortid from 'shortid';
import { CircularProgress, Typography } from '@material-ui/core';

const Games = () => {
  const classes = GamesStyles();
  const [games, setGames] = useState({
    xBox: [],
    ps4: [],
    switch: []
  });

  const mapGames = (games) => {
    const gameSet = {
      xBox: [],
      ps4: [],
      switch: []
    };
    for (let game of games) {
      switch (game.platform) {
        case 'PS4':
          gameSet.ps4.push(game);
          break;
        case 'XBOX':
          gameSet.xBox.push(game);
          break;
        case 'SWITCH':
          gameSet.switch.push(game);
          break;
        default:
          continue;
      }
    }
    return gameSet;
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await backEnd.get('/games');
      const gamesData = mapGames(result.data);
      setGames(gamesData);
    };
    fetchData();
  }, []);

  const renderProduct = (type) => {
    if (games[type].length > 0) {
      return games[type].map((element) => {
        return <Game key={shortid()} game={element} />;
      });
    } else {
      return <CircularProgress />;
    }
  };

  return (
    <section className={classes.root}>
      <Typography variant="h3" align="center" className={classes.typo}>
        PS4
      </Typography>
      <section className={classes.headings}>{renderProduct('ps4')}</section>
      <Typography variant="h3" align="center" className={classes.typo}>
        XBOX
      </Typography>
      <section className={classes.headings}>{renderProduct('xBox')}</section>
      <Typography variant="h3" align="center" className={classes.typo}>
        SWITCH
      </Typography>
      <section className={classes.headings}>
        {renderProduct("switch")}
      </section>
    </section>
  );
};

export default Games;
