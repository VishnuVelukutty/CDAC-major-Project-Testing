import React ,{useState} from "react";
import {Link} from 'react-router-dom';
export const Regulatorpage2 =() =>{

       

    return(
        <div className=" auth-from-container">
        <form  className="login-form">
       
         <h4> Regulator page</h4>
         <div className= 'mb-2'>
            <label htmlfor =" Id "> ID</label>
            <input type ="id" placeholder=' enter id' className=' form-control'/>  
         </div>
        
         <div className= 'mb-2'>
            <label htmlfor =" Request name "> request name</label>
            <input type =" Request name " placeholder=' Request name ' className=' form-control'/>  
         </div>

         <div className= 'mb-2'>
            <label htmlfor =" Amount "> Amount</label>
            <input type =" Amount" placeholder=' Amount ' className=' form-control'/>  
         </div>

         <div className= 'mb-2'>
            <label htmlfor =" Description"> Description</label>
            <input type =" Description" placeholder=' Description' className=' form-control'/>  
         </div>

         <div className=' d-grid'>
            <button className='btn btn-primary'>Approve</button>
            <button className='btn btn-primary'>Reject</button>
            <a href='/Regulatorpaage1' className='btn btn-primary '>Back</a>
    
         </div>   
        </form>
   </div>
    )
}