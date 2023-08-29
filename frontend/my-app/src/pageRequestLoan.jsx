import React ,{useState} from "react";
import { Link } from 'react-router-dom';
export const PageRequestLoan =() =>{

       

    return(
        <div className=" auth-from-container">
        <form  className="login-form">
         <button  > Request Loan</button>
         <input type =" text" placeholder=" loan request " required/>
         < div  className ='text-end mt-2'>
            New <Link to= "/PageRequestLoan2" className=' ms-2' > new </Link>
            </div>
        </form>
   </div>
    )
}