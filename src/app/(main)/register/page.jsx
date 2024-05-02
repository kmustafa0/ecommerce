'use client';
import React from 'react';
import './registerPage.scss';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const Register = () => {
  const router = useRouter();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });
    const userInfo = await response.json();
    router.push('/login');
  };

  const { status } = useSession();
  if (status === 'loading') {
    return <div>loading...</div>;
  }

  if (status === 'authenticated') {
    router.push('/');
  }
  return (
    <div className='register-container'>
      <div className='register-image'></div>
      <div className='register-form'>
        <div className='intro'>
          <h2 className='heading'>Register for an account</h2>
          <p>Please fill out this form with the required information</p>
        </div>
        <form onSubmit={registerUser}>
          <div className='form'>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='name'
                id='name'
                name='search'
                placeholder='John Doe'
                required
                value={data.name}
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='search'
                placeholder='johndoe@mail.com'
                required
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
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
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
              />
            </div>
            <div className='signInBtnWrapper'>
              <button type='submit' aria-label='register button'>
                Register
              </button>
            </div>
            <div>
              <p className='login'>
                Don&apos;t you have an account? <Link href={'/login'}>Login</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
