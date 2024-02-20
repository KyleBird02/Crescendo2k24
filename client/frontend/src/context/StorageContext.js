import React, { useContext , useState} from 'react';


const StorageContext = React.createContext();

export function useStore(){
    return useContext(StorageContext)
}


export function StorageProvider({children}) {

    const [curr,setCurr] = useState({});

    const value = {
        setCurr,
        curr,
    }

    return (
        <StorageContext.Provider value={value}>
          {children}
        </StorageContext.Provider>
        );
}