'use client';
import React from 'react';
import './loginPage.scss';
/* import { FacebookLogo } from '@/components/Facebook'; */
import { GoogleLogo } from '@/components/Google';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const { data, status } = useSession();
  const router = useRouter();
  if (status === 'loading') {
    return <div>loading...</div>;
  }

  if (status === 'authenticated') {
    router.push('/');
  }
  return (
    <div className='login-container'>
      <div className='login-image'></div>
      <div className='login-form'>
        <div className='intro'>
          <h2 className='heading'>Welcome Back 👋</h2>
          <p>
            Today is a new day. Its your day. You shape it. Sign in to start managing your projects.
          </p>
        </div>
        <form>
          <div className='form'>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='search'
                placeholder='Login with email and password is not currently added.'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                name='search'
                placeholder='Please select Login with Google to sign in'
                required
              />
            </div>
            <span className='forgotPassword' aria-label='forgot password'>
              Forgot Password?
            </span>
            <div className='signInBtnWrapper'>
              <button type='submit' aria-label='Login button'>
                Login
              </button>
            </div>
          </div>
        </form>
        <div className='oauth-login'>
          <div className='or'>Or</div>
          <div className='oauthOptions'>
            <button aria-label='login with google' onClick={() => signIn('google')}>
              <GoogleLogo /> <span>Login with&nbsp;</span> Google
            </button>
            {/* <button aria-label='login with facebook' onClick={() => signIn('facebook')}>
              <FacebookLogo /> Login with Facebook
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
