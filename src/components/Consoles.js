import React, { useState, useEffect, useContext } from 'react';
import backEnd from '../api/backEnd';
import shortid from 'shortid';
import { Checkout } from '../global/Checkout';

import { CircularProgress } from '@material-ui/core';
import Console from './singles/Console';

const Consoles = () => {
  const hook = useContext(Checkout);

  const [consoleCard, setConsoleCard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await backEnd.get('/consoles');
      setConsoleCard(result.data);
      hook.resetCheckOut();
    };
    fetchData();
  }, [hook.checkOutCart]); // eslint-disable-line

  const renderProduct = () => {
    if (consoleCard.length > 0) {
      return consoleCard.map((element) => {
        return <Console key={shortid()} consoleCard={element} />;
      });
    } else {
      return <CircularProgress />;
    }
  };

  return <section>{renderProduct()}</section>;
};

export default Consoles;
