import React, { useState, useEffect } from 'react';
import { Grid, Autocomplete, TextField } from '@mui/material';
import useAirports from '../hooks/useAirports'; // Custom hook for fetching airports

const AirportsDropdown = ({ formData, handleFormChange, label, name }) => {
  const { data: airports, loading, error } = useAirports(); // Fetch airports using the custom hook

  // Local state to manage the dropdown selection
  const [localAirport, setLocalAirport] = useState(formData[name]);

  // Sync the local state with formData when it changes
  useEffect(() => {
    setLocalAirport(formData[name]);
  }, [formData[name]]);

  // Handle the change of airport in the dropdown
  const handleAirportChange = (event, value) => {
    const airportCode = value ? value.attributes.code : '';
    setLocalAirport(airportCode); // Update local state when the user selects an airport
    handleFormChange({
      target: {
        name: name,
        value: airportCode, // Update formData state without triggering API calls yet
      },
    });
  };

  // Discard changes and reset the local state to the original value from formData
  const handleDiscardChanges = () => {
    setLocalAirport(formData[name]); // Reset to original value
  };

  // Confirm changes and call the placeholder function
  const handleConfirmChanges = () => {
    handleConfirm(formData); // Placeholder function to confirm changes
  };

  // Only show loading/error if airports data is not available
  if (loading) return <div>Loading airports...</div>;
  if (error) return <div>Error loading airports: {error.message}</div>;

  return (
    <Grid item xs={6}>
      <Autocomplete
        options={airports}
        getOptionLabel={(option) => option.attributes.code} // Display code of the airport
        renderInput={(params) => (
          <TextField 
            {...params} 
            label={label} 
            variant="outlined" 
            margin="normal" 
            fullWidth 
          />
        )}
        value={airports.find((airport) => airport.attributes.code === localAirport) || null} // Ensure the dropdown value is controlled
        onChange={handleAirportChange} 
        isOptionEqualToValue={(option, value) => option.attributes.code === value.attributes.code} // Compare airport codes
      />
    </Grid>
  );
};

export default AirportsDropdown;
