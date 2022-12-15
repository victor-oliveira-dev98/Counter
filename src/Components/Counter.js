import React, {useState, useContext} from 'react'
import { CounterC } from '../CounterC';

function Counter(props) {
    const [contagem, setContagem] = useContext(CounterC)
    return (
        <div>
            <div>
                {contagem}
            </div>
            <button onClick={() => {setContagem(anterior => anterior - 1)}}>
                -               
            </button>
            <button onClick={() => {setContagem(anterior => anterior + 1)}}>
                +
            </button>
        </div>
    )
}

export default Counter;