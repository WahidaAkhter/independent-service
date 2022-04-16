import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notfound from './Components/NotFound/Notfound';

function App() {
  return (
    <div >
      
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
