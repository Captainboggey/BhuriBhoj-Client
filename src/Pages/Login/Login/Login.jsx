import React from 'react';
import loginImg from '../../../assets/Login/login.png'
import './Login.css'
const Login = () => {
    return (
        <div className="hero bg-orange-300  min-h-screen ">
  <div className="hero-content  flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <img src={loginImg} alt="" />
    </div>
    <div className="card bg-orange-400 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white w-full bg-red-500">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;