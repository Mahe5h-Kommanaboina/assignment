import React from 'react'
import Header from './Header'



const RapidQ = () => {
    return (
    <React.Fragment>
        <div className="container-sm">
            <div className="row">
                <div className="col">
                    <div className="card">
                        
                        <div className="card-body">
                            <Header></Header>
                            <Header></Header>
                            <div style={{textAlign:"center",color:"green"}}>
                                
                                    <button type="button" className="btn btn-success btn-sm">Add</button>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col" >
                    <div className="card">
                            
                            <div className="card-body">
                                <Header></Header>
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