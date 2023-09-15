import { Navigate, Outlet } from 'react-router-dom';

const Router= ()=> {

    const auth= localStorage.getItem('auth');
  return  !auth? <Navigate to='/' />:<Outlet />;
  
};

export default Router;