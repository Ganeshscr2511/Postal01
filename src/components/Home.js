import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginFinal from './Login';
import Signup from './Signup';
// import ForgotPassword from './components/ForgotPassword';
import Service from './Services';
import Users from './Users';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Post from './Post'



function Home() {
  return (
    <div>
        
    <div className="Home">
    <ToastContainer />
      <Router>
      
      <NavBar />
        <Routes>
            <Route path="/Users" element={<Users/>} />  
            <Route path="/Services" element={<Service/>} />
            <Route path="/Post Products" element={<Post/>} />
          <Route path="/Login" element={<LoginFinal/>} />
          <Route path="/Signup" element={<Signup/>} />
          
          {/* <Route path="/Forgot Password" element={<ForgotPassword/>} /> */}
        </Routes>
      
    </Router>
    </div>
    </div>
    
  );
}

export default Home;