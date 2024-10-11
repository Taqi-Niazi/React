import React, { useContext} from 'react';
import { UserContext } from './componentA';
function ComponentD(){
    const user = useContext(UserContext);
    return(
        < div className='box'>
           <h2>Component D</h2>
           <p>{`Bye ${user}`} </p>
        </div>
    )
}
export default ComponentD;