import React, {useState, createContext} from 'react';
import ComponentB from './componentB';

export const UserContext = createContext();


function ComponentA(){
    const [user, setUser] = useState('Taqi')
    return(
        <div className='box'>
            <h2 >Component A</h2>
            <p>{`Hello ${user}`}</p>
            <UserContext.Provider value ={user}>
               <ComponentB user={user}/>
            </UserContext.Provider>
            
        </div>
    )
}
export default ComponentA;