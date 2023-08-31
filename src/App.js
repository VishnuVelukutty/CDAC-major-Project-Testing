
import './App.css';
import { Login } from './Login';
import { Registor } from './Registor';
import { PageRequestLoan } from './pageRequestLoan';
// import { Regulatorpage } from './regulatorpaage1';
import { Regulatorpage2 } from './Regulatorpage2';
import { PageRequestLoan2 } from './pageRequestLoan2';
import{ BrowserRouter ,Routes, Route} from 'react-router-dom'
import Regulatorpaage1 from './Regulatorpaage1';


function App() {
  return (
    <div className="App">
      <div className=" auth-from-container">
        <form className="registor-form">
        <BrowserRouter>
        <Routes>
        
       <Route path ="/" element ={<Login/>}></Route>
       <Route path ="/signup" element ={<signup/>}></Route>
       <Route path ="/Registor" element ={<Registor/>}></Route>
       <Route path ="/PageRequestLoan" element ={<PageRequestLoan/>}></Route>
       {/* <Route path ="/Regulatorpage" element ={<Regulatorpage/>}></Route> */}
       <Route path ="/pageRequestLoan2" element ={<PageRequestLoan2/>}></Route>
       <Route path ="/Regulatorpage2" element ={<Regulatorpage2/>}></Route>
       <Route path ="/Regulatorpaage1" element ={< Regulatorpaage1/>}></Route>
       
         </Routes>
         </BrowserRouter>
       </form>
       </div>
    </div>
  );
}

export default App;
