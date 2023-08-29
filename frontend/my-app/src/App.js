import logo from './logo.svg';
import './App.css';
import { Login } from './Login';
import { Registor } from './Registor';
import { PageRequestLoan } from './page RequestLoan';
import { Regulatorpage } from './regulator paage1';
import { Regulatorpage2 } from './Regulator page2';
import{ BrowserRouter ,Routes, Route} from 'react-router-dom'
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className=" auth-from-container">
        <form className="registor-form">
        <BrowserRouter>
        <Routes>
        
       <Route path ="/" element ={<Login/>}></Route>
       <Route path ="/signup" element ={<signup/>}></Route>
       <Route path ="Registor" element ={<Registor/>}></Route>
       <Route path ="/PageRequestLoan" element ={<PageRequestLoan/>}></Route>
       <Route path ="/Regulatorpage" element ={<Regulatorpage/>}></Route>
       <Route path ="page RequestLoan2" element ={< pageRequestLoan2/>}></Route>
       <Route path ="Regulator page2" element ={<Regulatorpage2/>}></Route>
       
         </Routes>
         </BrowserRouter>
       </form>
       </div>
    </div>
  );
}

export default App;
