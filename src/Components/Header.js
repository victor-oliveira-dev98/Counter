import React, {useContext} from 'react';
import { CounterC } from '../CounterC';


function Header(props) {
    const [contagem, setContagem] = useContext (CounterC)
    return(

        <div className='header'>
            <h3>
                Counter
            </h3>
            <div>
                {contagem}
            </div>
        </div>
    )
}

export default Header;