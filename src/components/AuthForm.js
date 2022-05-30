import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch } from 'react-redux'
import axios from 'axios'
import {AuthActions} from './../reduxtoolkit/AuthSlice';

const AuthForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
 
  const submitButton = (event) => {
    event.preventDefault();
    const enteredusername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    console.log("username: "+enteredusername+"Password: "+enteredPassword);
    
    setIsLoading(false);

   if (isLogin) {
     
      axios.post('https://demo.credy.in/api/v1/usermodule/login/', {
        username: 'testuser',
        password: 'ruDWLeHr9K7ErsUS',
      })
        .then((response) => {
          setIsLoading(true);
          console.log(response)
          let token = response.data.token;
        //   token = token.split("Bearer ")[1];
          localStorage.setItem("jwtToken", token);
          dispatch(AuthActions.login())
        })
        .catch((err) => {
          alert(err.message);
        });
       
    }
  }
  return (
    <section >
      <div className='form-wrapper' style={{ backgroundImage: "url(" + "images/cinema.jpg" + ")",backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
      <div className='container '>
      <div className='row'>
      <div className='col-xs-12 col-md-4 offset-md-4'>
      <form onSubmit={submitButton} className='login-form'>
        <h5 className='text-center'> {isLogin ? 'Welcome to MovieBox' : 'Free Register'}</h5>
      <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">username </label>
     <input type="username" className="form-control" id="exampleFormControlInput1"  placeholder="username"  required ref={usernameInputRef}/>
    </div>   
     <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
     <input type="password" className="form-control" id="exampleFormexampleFormControlInput2" placeholder="enter password" required  ref={passwordInputRef}/>
     </div>
     <button type="button" className="btn btn-success text-center" onClick={submitButton}>Login</button>  
      </form>
      </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default AuthForm;
