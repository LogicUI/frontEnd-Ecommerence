import React, { useState, useEffect } from 'react';
import backEnd from '../api/backEnd';
import GamesStyles from '../jss/GamesStyles';

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

  return (
    <section className={classes.root}>
      <section className={classes.headings}>
        <h1>PS4</h1>

      </section>
      <section className={classes.headings}>
        <h1>XBOX</h1>

      </section>
      <section className={classes.headings}>
        <h1>SWITCH</h1>
        
      </section>
    </section>
  );
};

export default Games;
