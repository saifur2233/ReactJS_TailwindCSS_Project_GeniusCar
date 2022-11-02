import React,{useContext, useState} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg';
import {AuthContext} from '../../context/UserContext';

const Login = () => {
  const {logIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [error, setError] =useState(null);

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    logIn(email, password)
    .then((result)=>{
      const user = result.user;
      console.log(user);
      form.reset();
      navigate(from, {replace:true});
    })
    .catch(()=>{
      setError("Eamil and Password not match!...");
    })
  }
  return (
    <div className="hero w-full my-20">
  <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <img className='w-3/4' src={loginImg} alt="Login" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
    <h1 className="text-5xl text-center font-bold">Login</h1>
      <form onSubmit={handleLogin} className="card-body">
      <p className="text-center text-red-600">{error}</p>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="/forget-pasword" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type='submit' className="btn btn-primary" value="Login" />
        </div>
      </form>
      <p className='text-center mb-5'>New to Genius Car <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>
    </div>
  </div>
</div>
  )
}

export default Login