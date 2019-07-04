import React, { useState, useEffect } from 'react';
import backEnd from '../api/backEnd';
import shortid from 'shortid';
import { CircularProgress, Typography } from '@material-ui/core';
import Console from "./single/Console";

const Consoles = () => {
  const [consoleCard, setConsoleCard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await backEnd.get('/consoles');
      setConsoleCard(result.data);
    };
    fetchData();
  },[]);

  
  const renderProduct = () => {
    if(consoleCard.length > 0){
        return consoleCard.map(element=> {
          return <Console key={shortid()} consoleCard={element}/>
        });
    } else{
        return <CircularProgress />
    }
  }

    

  return <section>{renderProduct()}</section>;
};

export default Consoles;
