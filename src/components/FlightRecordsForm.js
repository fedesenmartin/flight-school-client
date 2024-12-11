import React from 'react';
import { DialogContent, Grid, TextField, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
import PilotDropdown from './pilotdropdown';
import AirportsDropdown from './airportsdropdown';

const FlightRecordForm = ({
  formData,
  handleFormChange,
  handleSubmit,
  editing,
}) => {
  return (
    <DialogContent>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Dia"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleFormChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Plane</InputLabel>
            <Select
              name="Avion"
              value={formData.plane}
              onChange={handleFormChange}
            >
              <MenuItem value="LV-CZG">LV-CZG</MenuItem>
              <MenuItem value="LV-CZG">LV-CZG</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <PilotDropdown 
            formData={formData} 
            handleFormChange={handleFormChange} 
            label="Pilot" 
            name="pilot" 
        />
        <Grid item xs={6}>
          <TextField
            label="Horas"
            type="number"
            name="hours"
            value={formData.hours}
            onChange={handleFormChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Instructor</InputLabel>
            <Select
              name="instructor"
              value={formData.instructor}
              onChange={handleFormChange}
            >
              <MenuItem value="Carlos Martin">Carlos Martin</MenuItem>
              <MenuItem value="John Doe">John Doe</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <AirportsDropdown 
            formData={formData} 
            handleFormChange={handleFormChange} 
            label="Departure Airport" 
            name="departure_airport" 
        />
        <Grid item xs={6}>
          <TextField
            label="Departure Time"
            type="time"
            name="departure_time"
            value={formData.departure_time}
            onChange={handleFormChange}
            fullWidth
            margin="normal"
            placeholder="hh:mm" // Add placeholder with the correct time format
          />
        </Grid>
        <AirportsDropdown 
            formData={formData} 
            handleFormChange={handleFormChange} 
            label="Arrival Airport" 
            name="arrival_airport" 
         />
        <Grid item xs={6}>
          <TextField
            label="Arrival Time"
            type="time"
            name="arrival_time"
            value={formData.arrival_time}
            onChange={handleFormChange}
            fullWidth
            margin="normal"
            placeholder="hh:mm" // Add placeholder with the correct time format
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth margin="normal">
            <FormControlLabel
              control={
                <Checkbox
                  name="paid"
                  checked={formData.paid}
                  onChange={handleFormChange}
                />
              }
              label="Paid"
            />
          </FormControl>
        </Grid>
      </Grid>
    </DialogContent>
  );
};

export default FlightRecordForm;
