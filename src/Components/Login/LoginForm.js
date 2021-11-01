import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/jspn/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password }),
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
        <input 
          type="text"
          value={username}
          onChange={({target}) => setUsername(target.value)}
        />
        <input 
          type="text"
          value={password}
          onChange={({target}) => setPassword(target.value)}
        />
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </div>
  );
}

export default LoginForm;
