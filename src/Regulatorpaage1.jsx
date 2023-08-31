import React from 'react'

function Regulatorpaage1() {
  return (
    <>
       <div className='container'>
        <div className=' col-md-12'> 
            <table className='table table-bordered '>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>Details</th>
                        <th>Approve</th>
                        <th>Reject</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row"></td>
                        <td></td>
                        <td><button type='submit' className='btn btn-success'>Approve</button></td>
                        <td><button type='submit' className='btn btn-danger'>Reject</button></td>
                        <td><a href='Regulatorpage2' className='btn btn-primary '>View</a></td>
                    </tr>
                    <tr>
                        <td scope="row"></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td scope="row"></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td scope="row"></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        
        
        
        </div>
        
       </div>

       <div id ="top">
            <a><a href='/Regulatorpage2'>next page</a> </a>
            </div>  
        
        
        
    </>
  )
}

export default Regulatorpaage1;