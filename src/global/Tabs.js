import React, { useState, createContext } from 'react';

export const Store = createContext();

const Tabs = (props) => {
  const [tabValue, setValue] = useState(0);

  const handleLoad = (value) => {
    setValue(value);
  };

  return (
    <Store.Provider
      value={{
        tabValue,
        handleLoad
      }}
    >
      {props.children}
    </Store.Provider>
  );
};

export default Tabs;
