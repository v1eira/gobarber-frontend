import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input placeholder="Full name" />
        <input type="email" placeholder="Your e-mail" />
        <input type="password" placeholder="Your secret password" />

        <button type="submit">Create account</button>
        <Link to="/">Already registered?</Link>
      </form>
    </>
  );
}
