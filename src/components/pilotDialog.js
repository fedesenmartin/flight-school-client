//no se esta usando
import React from 'react';
import { Grid, TextField, Autocomplete } from '@mui/material';

const MyGrid = ({
  name,
  setName,
  licenseType,
  setLicenseType,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  document,
  setDocument,
  medicalAptitude,
  setMedicalAptitude,
  LICENSE_TYPES,
}) => {


  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {/* Clickable Name Field */}
        <div onClick={handleNameClick} style={{ cursor: 'pointer', color: 'blue', fontWeight: 'bold' }}>
          <TextField
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
          />
        </div>
      </Grid>
      <Grid item xs={12}>
        <Autocomplete
          options={LICENSE_TYPES}
          value={licenseType}
          onChange={(event, newValue) => setLicenseType(newValue || '')}
          renderInput={(params) => (
            <TextField {...params} label="License Type" fullWidth margin="normal" />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Phone Number"
          fullWidth
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          margin="normal"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Document"
          fullWidth
          value={document}
          onChange={(e) => setDocument(e.target.value)}
          margin="normal"
          type="number"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Medical Aptitude"
          type="date"
          fullWidth
          value={medicalAptitude}
          onChange={(e) => setMedicalAptitude(e.target.value)}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="dd-mm-aaaa"
        />
      </Grid>
    </Grid>
  );
};

export default MyGrid;
