import React, { useState, useEffect } from 'react';
import { Grid, Autocomplete, TextField } from '@mui/material';
import usePlanes from '../hooks/usePlanes'; // Custom hook for fetching pilots

const PlanesDropDown = ({ formData, handleFormChange }) => {
  const { data: planes, loading, error } = usePlanes(); // Fetch pilots using the custom hook

  // Local state to manage the dropdown selection
  const [localPlane, setLocalPlane] = useState(formData.plane);

  // Sync the local state with formData when it changes
  useEffect(() => {
    setLocalPlane(formData.plane);
  }, [formData.plane]);

  // Handle the change of pilot in the dropdown
  const handlePlaneChange = (event, value) => {
    const planeName = value ? value.attributes.name : ''; // If the value is selected, update the pilot ID
    setLocalPlane(planeName); // Update local state when the user selects a pilot
    handleFormChange({
      target: {
        name: 'plane',
        value: planeName, // Update formData state but not trigger API calls yet
      },
    });
  };

  // Handle Discard Changes: Reset local state to original value
  const handleDiscardChanges = () => {
    setLocalPlane(formData.plane); // Reset to original value from formData
  };

  if (loading) return <div>Loading pilots...</div>;
  if (error) return <div>Error loading planes: {error.message}</div>;

  return (
    <Grid item xs={6}>
      <Autocomplete
        options={planes}
        getOptionLabel={(option) => option.attributes.code || ''}
        renderInput={(params) => (
          <TextField {...params} label="Plane" variant="outlined" margin="normal" fullWidth />
        )}
        value={planes.find((plane) => plane.attributes.code === localPlane) || null} // Ensure the dropdown value is controlled
        onChange={handlePlaneChange}
        isOptionEqualToValue={(option, value) => option.attributes.name === value.attributes.name} // Compare airport codes
      />
    </Grid>
  );
};

export default PlanesDropDown;
