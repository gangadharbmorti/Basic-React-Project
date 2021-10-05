import React from 'react';

const Signup = () => {
  return (
    <form>
      <h2>Sign Up</h2>
      <div className='login_form'>
        
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            name='firstName'
            id='firstName'
            placeholder='First Name'
          />
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            name='lastName'
            id='lastName'
            placeholder='Last Name'
          />
        
        </div>
        <div className='login_form'>
        <label htmlFor='email'>Email</label>
        <input
         type='text'
         name='email' 
         id='email'
          placeholder='Email Id' />
     </div>

      <div className='login_form'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='New password'
        />
      </div>
      <div>
        <button type='submit' className='btn'>
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Signup;
