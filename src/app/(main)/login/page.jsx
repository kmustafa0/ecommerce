'use client';
import React from 'react';
import './loginPage.scss';
/* import { FacebookLogo } from '@/components/Facebook'; */
import { GoogleLogo } from '@/components/Google';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
const Login = () => {
  const { status } = useSession();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const router = useRouter();
  if (status === 'loading') {
    return <div>loading...</div>;
  }

  if (status === 'authenticated') {
    router.push('/');
  }

  const loginUser = async (e) => {
    e.preventDefault();
    signIn('credentials', {
      ...data,
      redirect: false,
    });
    router.push('/');
  };
  return (
    <div className='login-container'>
      <div className='login-image'></div>
      <div className='login-form'>
        <div className='intro'>
          <h2 className='heading'>Welcome Back 👋</h2>
          {/* <p>
            Today is a new day. Its your day. You shape it. Sign in to start managing your projects.
          </p> */}
          {/* TODO Make a modal showing test account information */}
          <p>
            Use these credentials to test my website <span>johndoe@gmail.com</span>&nbsp;
            <span>123456</span>
          </p>
        </div>
        <form onSubmit={loginUser}>
          <div className='form'>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='search'
                placeholder='Example@example.com'
                required
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                name='search'
                placeholder='********'
                required
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
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
            <div>
              <p className='signUp'>
                Don&apos;t you have an account? <Link href={'/register'}>Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
