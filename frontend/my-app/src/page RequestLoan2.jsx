import React ,{useState} from "react";
import {Select} from "react-dropdown-select" 
export const PageRequestLoan2 =() =>{

      const option =[ {label : "Ddescription ", value :1},
      {label : "Loan amount ", value :2},
      {label : "repayment", value :3}
      ]
    return(
        <div className=" auth-from-container">
        <form  className="login-form">
        <div className  p-3 border rounded =' w-50'> 
         <h4> drop down selector</h4>
         <Select name=" select" 
         options ={options}
         labelField ="name"
         multi
         onchange ={value => setValue(value)}
         color ="red"
        dropdownPosition = "top "         
         
         
         
         >  
         </Select> 
         {value.map(d=>(<p> ID : {d.id} | name : {d.name}</p>))}
    
        </div>
          
        <div className=' d-grid'>
            <button className='btn btn-primary'>submit</button>
            <button className='btn btn-primary'>cancle</button>
           
         </div>

        </form>
   </div>
    )
}