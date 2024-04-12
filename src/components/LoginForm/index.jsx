import React from 'react';

const LoginForm = () => {
  return (
    <div className='d-lg-flex half'>
      <div className='bg order-1 order-md-2' style={{ backgroundImage: 'url("/login-bg.jpg")' }} />
      <div className='contents order-2 order-md-1'>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-md-7'>
              <h3>
                Login to <strong>Colorlib</strong>
              </h3>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.
              </p>
              <form action='#' method='post'>
                <div className='form-group first'>
                  <label htmlFor='username'>Username</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='your-email@gmail.com'
                    id='username'
                  />
                </div>
                <div className='form-group last mb-3'>
                  <label htmlFor='password'>Password</label>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Your Password'
                    id='password'
                  />
                </div>
                <div className='d-flex mb-5 align-items-center'>
                  <label className='control control--checkbox mb-0'>
                    <span className='caption'>Remember me</span>
                    <input type='checkbox' defaultChecked='checked' />
                    <div className='control__indicator' />
                  </label>
                  <span className='ml-auto'>
                    <a href='#' className='forgot-pass'>
                      Forgot Password
                    </a>
                  </span>
                </div>
                <input type='submit' defaultValue='Log In' className='btn btn-block btn-primary' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
