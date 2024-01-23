"use client";

import {createContext, useState} from 'react';

export const AppContext = createContext(null);
export const AppProvider = ({children}: {
    children: React.ReactNode
}) => {
    const [isLoading, setIsLoad] = useState<boolean>(false)

    const setIsLoading = (value: any) => {
        debugger;
        setIsLoad(value)
    }

    return (
        // @ts-ignore
        <AppContext.Provider value={{isLoading, setIsLoading}}>
            {children}
        </AppContext.Provider>
    );
}