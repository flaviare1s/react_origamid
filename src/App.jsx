import React from 'react';
import { Input } from './Form/Input';

export const App = () => {
  return (
    <div>
      <Input id="nome" name="nome" label="Nome" />
      <Input id="email" name="email" label="Email" />
    </div>
  );
};
