import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { DataGrid } from '@mui/x-data-grid';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { GET_PILOTS } from '../graphql/queries';
import { CREATE_PILOT } from '../graphql/mutations';
import client from '../lib/apolloClient';
import LoadingComponent from './common/LoadingComponent';
import { esES } from '@mui/x-data-grid/locales';

const LICENSE_TYPES = ['APPA', 'PPA', 'PCA', 'IV', 'TLA', 'PC1'];

const Pilots = ({ setSelectedContent }) => {

  const { loading, error, data } = useQuery(GET_PILOTS, { client });
  const [createPilot] = useMutation(CREATE_PILOT, { client });
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [name, setName] = useState('');
  const [licenseType, setLicenseType] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [document, setDocument] = useState('');
  const [medicalAptitude, setMedicalAptitude] = useState('');
  const [flightSchools, setFlightSchools] = useState([]); // Example multi-select dropdown for schools
  const [vuelos, setVuelos] = useState([]); // Example multi-select dropdown for flights
  const formatDate = (date) => {
    if (!date) return null;
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  if (loading) 
    return <LoadingComponent />;
  
  if (error) return <div>Error: {error.message}</div>;

  const rows = data.listPilotsBalance.map((entry, index) => ({
    id: index,
    name: entry.pilot.attributes.name,
    licenceType: entry.pilot.attributes.licence_type,
    phoneNumber: entry.pilot.attributes.phone_number,
    email: entry.pilot.attributes.email,
    medicalAptitude: entry.pilot.attributes.medical_aptitude || '',
    totalBalance: entry.balance.total_balance,
  }));

  const columns = [
    { field: 'name', headerName: 'Name', width: 180 },
    { field: 'licenceType', headerName: 'License Type', width: 150 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 180 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'medicalAptitude', headerName: 'Medical Aptitude', width: 150 },
    { field: 'totalBalance', headerName: 'Total Balance', width: 150 },
  ];


  const handleOpenDialog = (row = null) => {
    if (row) {
      setEditing(true);
      setSelectedRow(row);
      setName(row.name);
      setLicenseType(row.licenceType);
      setPhoneNumber(row.phoneNumber);
      setEmail(row.email);
      setMedicalAptitude(row.medicalAptitude);
    } else {
      setEditing(false);
      setName('');
      setLicenseType('');
      setPhoneNumber('');
      setEmail('');
      setDocument('');
      setMedicalAptitude('');
      setFlightSchools([]);
      setVuelos([]);
    }
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedRow(null);
  };


  const handleAddOrUpdatePilot = async () => {
    try {
      const medicalAptitudeDate = formatDate(new Date(medicalAptitude).toISOString());
      if (editing) {
        console.log('Update logic here for:', selectedRow);
      } else {
        await createPilot({
          variables: {
            input: {
              name,
              licence_type: licenseType,
              phone_number: phoneNumber,
              email,
              document: parseInt(document, 10),
              medical_aptitude: medicalAptitudeDate,
              flight_schools: flightSchools,
              vuelos: vuelos,
            },
          },
          refetchQueries: [{ query: GET_PILOTS }],
        });
      }
      handleCloseDialog();
    } catch (error) {
      console.error('Error saving pilot:', error);
    }
  };
  const updatedColumns = columns.map((column, index) => {
    // const navigate = useNavigate(); // Correct usage of useNavigate

    if (index === 0) {
      return {
        ...column,
        renderCell: (params) => (
          <span
            onClick={(e) =>{
              setSelectedContent('pilot-details')
              console.log('fzenma')
              e.stopPropagation();
              // useNavigate()
              // handleNameClick(params.rows)
            }
            }// Navigate to the desired route with row ID
            style={{ cursor: 'pointer' }}
          >
            {params.value}
          </span>
        ),
      };
    }
    return column;
  });
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpenDialog()}
        style={{ marginBottom: 20 }}
      >
        Nuevo Piloto
      </Button>

       <div style={{ height: '80vh', width: '100%' }}>
      <div style={{ height: '100%', width: '100%'}}>
      <DataGrid localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          rows={rows}
          columns={updatedColumns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onRowClick={(params) => handleOpenDialog(params.row)}
        />
      </div>
    </div>


      {/* Dialog for adding/editing a pilot */}
      <Dialog open={open} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>{editing ? 'Editar Piloto' : 'Crear Piloto'}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last Name"
                fullWidth
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                margin="normal"
              />
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddOrUpdatePilot} color="primary">
            {editing ? 'Update Pilot' : 'Add Pilot'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Pilots;
