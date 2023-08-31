import React ,{useState} from "react";
import { Link } from 'react-router-dom';
export const PageRequestLoan =() =>{

       

    return(
        <div className=" auth-from-container ">
        <form  className="login-form">
            <div>
         <button  calss =" d-flex align-items-center" > Request Loan</button>
          
            < div  className ='text-end mt-2 text-danger'>
           <h1>Request Loan</h1> <></> <Link to= "/pageRequestLoan2" className=' ms-2' > Reuest Loan</Link>
            </div>

            <div className ='text-end mt-2 text-danger'>  
           <h1> check loan request </h1><></> <input type =" text" placeholder=" check loan request " required/>
            </div>

            </div>

            <div id ="top">
            <a><a href='/PageRequestLoan2'>next page</a> </a>
            </div>  
        </form>
   </div>
    )
}