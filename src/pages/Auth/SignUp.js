import React,{useContext, useState} from 'react'
import { Link, useNavigate  } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg';
import {AuthContext} from '../../context/UserContext';

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] =useState(null);
  const {createUser} = useContext(AuthContext);

  const handleSignUp = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, name);

    if(password.length < 6){
      setError(`Your Password must be 6 character`);
      return;
    }

    createUser(email, password)
    .then((result)=>{
        const user = result.user;
        console.log(user);
        form.reset();
        navigate('/');
    })
    .catch((error)=>{
        console.error("Error: ", error);
    })
  }
  return (
    <div className="hero w-full my-20">
  <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <img className='w-3/4' src={loginImg} alt="Login" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
      <form onSubmit={handleSignUp} className="card-body">
        <p className="text-center text-red-600">{error}</p>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="Password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <input type='submit' className="btn btn-primary" value="Register" />
        </div>
      </form>
      <p className='text-center mb-5'>Have an account <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
    </div>
  </div>
</div>
  )
}

export default SignUp