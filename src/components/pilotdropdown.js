import React, { useState, useEffect } from 'react';
import { Grid, Autocomplete, TextField } from '@mui/material';
import usePilots from '../hooks/usePilots'; // Custom hook for fetching pilots

const PilotDropdown = ({ formData, handleFormChange }) => {
  const { data: pilots, loading, error } = usePilots(); // Fetch pilots using the custom hook

  // Local state to manage the dropdown selection
  const [localPilot, setLocalPilot] = useState(formData.pilot);

  // Sync the local state with formData when it changes
  useEffect(() => {
    setLocalPilot(formData.pilot);
  }, [formData.pilot]);

  // Handle the change of pilot in the dropdown
  const handlePilotChange = (event, value) => {
    const pilotId = value ? value.attributes.name : ''; // If the value is selected, update the pilot ID
    setLocalPilot(pilotId); // Update local state when the user selects a pilot
    handleFormChange({
      target: {
        name: 'pilot',
        value: pilotId, // Update formData state but not trigger API calls yet
      },
    });
  };

  // Handle Discard Changes: Reset local state to original value
  const handleDiscardChanges = () => {
    setLocalPilot(formData.pilot); // Reset to original value from formData
  };

  if (loading) return <div>Loading pilots...</div>;
  if (error) return <div>Error loading pilots: {error.message}</div>;

  return (
    <Grid item xs={6}>
      <Autocomplete
        options={pilots}
        getOptionLabel={(option) => option.attributes.name || ''}
        renderInput={(params) => (
          <TextField {...params} label="Pilot" variant="outlined" margin="normal" fullWidth />
        )}
        value={pilots.find((pilot) => pilot.attributes.name === localPilot) || null} // Ensure the dropdown value is controlled
        onChange={handlePilotChange}
        isOptionEqualToValue={(option, value) => option.attributes.name === value.attributes.name} // Compare airport codes
      />
    </Grid>
  );
};

export default PilotDropdown;
