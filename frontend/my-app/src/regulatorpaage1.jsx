import React ,{useState} from "react";
import { Link } from 'react-router-dom'

export const Regulatorpage =() =>{

       

    return(
        <div className=" auth-from-container">
        <form  className="login-form">
         <button  > Request Loan</button>
         <input type =" text" placeholder=" loan request " required/>
         <button variant =" Approve"> Approve </button>
        
         <button variant =" Reject"> Reject </button>
        
         <button variant =" New"> New </button>
         < div  className ='text-end mt-2'>
                New <Link to= "/Regulatorpage2" className=' ms-2' > new </Link>
            </div>

         
        </form>
   </div>
    )
}