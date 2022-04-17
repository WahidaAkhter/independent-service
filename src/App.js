import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home';
import Notfound from './Components/NotFound/Notfound';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';

function App() {
  return (
    <div >

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/home" element={<Home></Home>}></Route>

        <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>

        <Route path="/blogs" element={<Blogs></Blogs>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="/register" element={<Register></Register>}></Route>


        <Route path="/about" element={<About></About>}></Route>

        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
