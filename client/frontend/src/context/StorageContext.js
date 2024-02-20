import React, { useContext , useState} from 'react';
import { useAddress } from "@thirdweb-dev/react";


const StorageContext = React.createContext();

export function useStore(){
    return useContext(StorageContext)
}


export function StorageProvider({children}) {
    const address = useAddress();
    const [curr,setCurr] = useState({});

    const value = {
        setCurr,
        curr,
        address
    }

    return (
        <StorageContext.Provider value={value}>
          {children}
        </StorageContext.Provider>
        );
}