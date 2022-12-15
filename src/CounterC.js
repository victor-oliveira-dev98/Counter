import React, {useState, createContext} from 'react';



export const CounterC = createContext();

export function CounterProvider(props){
    const [contagem, setContagem] = useState(0)
    return (
        <CounterC.Provider value={[contagem, setContagem]}>
            {props.children}
        </CounterC.Provider>
    )
}