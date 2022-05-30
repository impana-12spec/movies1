import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { AuthActions } from './../reduxtoolkit/AuthSlice';

const Navbar=()=> {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.Auth.isAuthenticated);
  
  const logoutHandler = () => {
   dispatch( AuthActions.logout())
  
    };
 return(
     <nav className='navbar'>
         <div className='nav-center'>
         <Link to='/' className='logo'>MOVIES</Link>
         {isAuth && (
            <li>
              <button onClick={logoutHandler}  style={{marginLeft:'900px'}}><Link to ="/login">Logout </Link></button>
            </li>
             )} 

             </div>
     </nav>
 )
}

export default Navbar
