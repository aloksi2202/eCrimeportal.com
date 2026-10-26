import React, { Children, createContext, useContext, useState } from 'react'

export const TokenDataContext=createContext();

const TokenContext = ({children}) => {

    const [token, setToken] = useState('')

  return (
    <TokenDataContext.Provider value={[token,setToken]}>
        {children}
    </TokenDataContext.Provider>
  )
}

export default TokenContext