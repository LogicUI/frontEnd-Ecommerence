import React, { useState, createContext } from 'react';

export const Auth = createContext();

const AuthenProvider = (props) => {
  const [auth, authUser] = useState(false);

  const loginUser = () => {
    authUser(true);
  };

  const logOutUser = () => {
    authUser(false);
  };

  return (
    <Auth.Provider
      value={{
        auth,
        loginUser,
        logOutUser
      }}
    >
      {props.children}
    </Auth.Provider>
  );
};

export default AuthenProvider;
