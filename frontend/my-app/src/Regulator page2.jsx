import React ,{useState} from "react";
import {Link} from 'react-router-dom';
export const Regulatorpage2 =() =>{

       

    return(
        <div className=" auth-from-container">
        <form  className="login-form">
         <button  > Request Loan</button>
         <input type =" text" placeholder=" loan request " required/>
         <h3> Regulator page</h3>
         <div className= 'mb-2'>
            <label htmlfor =" Id "> ID</label>
            <input type =" id" placeholder=' enter id' className=' form-control'/>  
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
            <label htmlfor =" Description"> ID</label>
            <input type =" Description" placeholder=' Description' className=' form-control'/>  
         </div>

         <div className=' d-grid'>
            <button className='btn btn-primary'>Approve</button>
            <button className='btn btn-primary'>Reject</button>
            <button className='btn btn-primary'>New</button>
    
         </div>
         < div  className ='text-end mt-2'>
                New <Link to= "/Regulatorpage" className=' ms-2' > new </Link>
            </div>


        </form>
   </div>
    )
}