import React ,{useState} from "react";
 
export const PageRequestLoan2 =() =>{
const[selects ,Setselects]=useState();
    
    return(
        <div className=" auth-from-container">
        <form  className="login-form"> 
        <div className='text-center text-danger' > 
         <h2> loan request Page</h2>
        <td></td>
        <h1> selects</h1>
        <td></td>
        <select value ={selects} onchange ={e=>Setselects(e.target.value)}>
          <option></option>
          <option>Description</option>
          <option>Loan Amount</option>
          <option>Repayment</option>
        </select>
    
        </div>
          
        <div className=' d-grid'>
            <button className='btn btn-primary'>submit</button>
            <button className='btn btn-primary'>cancle</button>
           
         </div>
         <div id ="top">
            <a><a href='/Regulatorpaage1 '>next page</a> </a>
            </div>  
        </form>
   </div>
    )
}