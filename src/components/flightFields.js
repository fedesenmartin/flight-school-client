// FlightFields.js
import React from 'react';
import { TextField } from '@mui/material';

export default function FlightField({ label, name, value, onChange, type }) {
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      fullWidth
      margin="normal"
      type={type || "text"}
    />
  );
}
