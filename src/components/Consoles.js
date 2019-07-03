import React, { useState, useEffect } from 'react';
import backEnd from '../api/backEnd';

const Consoles = () => {
  const [consoleCard, setConsoleCard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await backEnd.get('/consoles');
      setConsoleCard(result.data);
    };
    fetchData();
  },[]);
  return <section>this is a test</section>;
};

export default Consoles;
