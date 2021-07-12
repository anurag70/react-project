import React, { useState,useEffect } from 'react';
import "./statedata.css";
import "../../../node_modules//bootstrap/dist/css/bootstrap.min.css"



const Statedata = () => {

    const [data, setData] = useState([]);

    const getCovidData = async() => {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualdata = await res.json();
        // console.log(data.statewise);
        setData(actualdata.statewise);
    }
    useEffect(() => {
        getCovidData();

    }, [])
    return ( 

        <>
        <div className = "container-fluid mt-5" >
        
            <div className = "main-heading" >
        
               <h1 className = "mb-5 text-center" > <span className = "font-weight-bold" > INDIA </span>COVID-19 STATEWISE DATA</h1>
        
            </div>
        

        
            <div className = "table-responsive" >
            
                    <table className = "table table-hover" >
                    
                    <thead className = "thead-dark" >
                    
                            <tr >
                            
                                    <th > State </th> 
                                    <th > Confirmed </th> 
                                    <th > Recovered </th> 
                                    <th > Death </th> 
                                    <th > Active </th> 
                                    <th > Updated </th> 
                            </tr> 
                    </thead> 
                                
                                
                        <tbody>
                            {
                            data.map((currData,ind) => {
                                return (
                                    <tr key={ind} >
                                    
                                        <th > {currData.state} </th> 
                                        <td > {currData.confirmed} </td> 
                                        <td > {currData.recovered}</td> 
                                        <td > {currData.deaths}</td> 
                                        <td > {currData.active} </td> 
                                        <td > {currData.lastupdatedtime} </td> 
                                    </tr> 
                                    )
                                    })
                            }
                                        
                                
                        </tbody>
                    </table>
            </div> 
        </div> 
        </>

    )
}

export default Statedata;