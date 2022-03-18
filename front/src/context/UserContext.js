import axios from 'axios'
import { useEffect, useState, createContext } from 'react'

export const UserContext= createContext()

const UserContextProvider=(props)=>{
    
    const [user,setUser]=useState([])
    useEffect(()=>{
        axios
            .get('http://localhost:4242/user/1')
            .then((res)=> setUser(res.data))
    },[])

    return (
        <UserContext.Provider value={{user}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider