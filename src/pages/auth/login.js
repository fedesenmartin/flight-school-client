// components/auth/Login.js
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { TextField, Button } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    await signIn('credentials', { email, password });
  };

  return (
    <form onSubmit={handleLogin}>
      <TextField
        label="Email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Log In
      </Button>
    </form>
  );
};

export default Login;
