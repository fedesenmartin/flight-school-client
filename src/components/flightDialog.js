// FlightDialog.js
import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import FlightForm from './FlightForm';

export default function FlightDialog({ open, handleClose, formData, handleInputChange, handleSave, handleRemove }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{formData.id ? 'Edit Flight Record' : 'Create Flight Record'}</DialogTitle>
      <DialogContent>
        <FlightForm formData={formData} handleInputChange={handleInputChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
        {formData.id && <Button onClick={handleRemove} color="error">Delete</Button>}
      </DialogActions>
    </Dialog>
  );
}
