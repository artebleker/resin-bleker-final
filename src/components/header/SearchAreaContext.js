import React, {createContext, useState} from 'react'
export const SearchAreaContext = createContext()
const SearchAreaContextProvider = ({children}) => {
    const [qToSearch, setQToSearch]= useState("")
    return (
        <SearchAreaContext.Provider value={{
            qToSearch,
            setQToSearch
        }}>
{children}
        </SearchAreaContext.Provider>
    )
}

export default SearchAreaContextProvider
