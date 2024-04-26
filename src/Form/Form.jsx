import React from 'react';
import { Input } from './Input';
import { Button } from './Button';

export const Form = () => {
  return (
    <form>
      <Input id='mail' label='Email' required />
      <Input id='password' type='password' label='Password' />
      <Button />
    </form>
  );
};
