import React,{useState,useEffect} from 'react'
import Header from './Header'
import axios from 'axios'



const RapidQ = () => {
    const [users,setUsers] = useState([])

    
     
    useEffect( () => {
        axios.get('https://api.github.com/users').then(
        res => setUsers(res.data)

    )},[]) 
    

    
    return (
    <React.Fragment>
        <div className="container-sm">
            <div className="row">
                <div className="col">
                    <div className="card">
                        
                        <div className="card-body">
                            {users.map( user => {
                                if(user.id %2 ===0){
                                    return(
                                        <div key={user.id}>
                                            <Header user={user.login} avatar={user.avatar_url}></Header>
                                        </div>
                                    )
                                }})}

                            
                            
                            
                            
                            
                            <div style={{textAlign:"center",color:"green"}}>
                                
                                    <button type="button" className="btn btn-success btn-sm">Add</button>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col" >
                    <div className="card">
                            
                            <div className="card-body">
                            {users.map( user => {
                                if(user.id %2 ===1){
                                    return(
                                        <div key={user.id}>
                                            <Header user={user.login} avatar={user.avatar_url}></Header>
                                        </div>
                                    )
                                }})}
                                <div style={{textAlign:"center"}}>
                                
                                    <button type="button" className="btn btn-success btn-sm">Add</button>
                                </div>
                            </div>
                    </div>
                </div>
                
            </div>
        </div>
    </React.Fragment>
    )
}


export default RapidQ
