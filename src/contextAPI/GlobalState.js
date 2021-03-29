import React , {createContext , useReducer , useEffect} from 'react';
import AppReducer from './AppReducer';
// initial state 

const initialState = {
    // transactions:[
    //     { id: 1, text: 'Flower', amount: -20 },
    //     { id: 2, text: 'Salary', amount: 300 },
    //     { id: 3, text: 'Book', amount: -10 },
    //     { id: 4, text: 'Camera', amount: 150 }
    // ]

    transactions:JSON.parse(localStorage.getItem("transactions")) || []
}

// create context  

export const GlobalContext = createContext(initialState);

// Provider component 

export const GlobalProvider = ({children}) => {
    const [state , dispatch] = useReducer(AppReducer , initialState);

    useEffect(() => {
        localStorage.setItem("transactions" , JSON.stringify(state.transactions))
    })

    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            dispatch,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}