import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is mandatory'),
  email: Yup.string()
    .email('Enter a valid e-mail')
    .required('E-mail is mandatory'),
  password: Yup.string()
    .min(6, 'Password must have at least 6 characters')
    .required('Password is mandatory'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Your secret password"
        />

        <button type="submit">Create account</button>
        <Link to="/">Already registered?</Link>
      </Form>
    </>
  );
}
