import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginForm = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/jspn/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    }).then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => {
      console.log(json);
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input 
          label="Usuário"
          type="text"
          name="username"
        />
        <Input 
          label="Senha"
          type="password"
          name="password"
        />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </div>
  );
}

export default LoginForm;
