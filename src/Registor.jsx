import React ,{useState} from "react";

export const Registor =() =>{

       

    return(
        <div className=" auth-from-container">
        <form  className="login-form">
        <button  onClick = { async () => {
            alert("connect to Metamask!!");
            if(window.ethereum){
                console.log(await window.ethereum.enable());
            }
        }}> login</button>

           
              
         <button > signup</button>

         <div id ="bottom">
              <a><a href='/PageRequestLoan'  name='bottom' id='bottom'>next page</a> </a>
            </div>    
        </form>
   </div>
    )
}
