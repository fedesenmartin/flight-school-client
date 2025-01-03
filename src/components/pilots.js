import React, { useState } from 'react';
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
  Typography,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Hidden,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import Autocomplete from '@mui/material/Autocomplete';
import { GET_PILOTS } from '../graphql/queries';
import { CREATE_PILOT } from '../graphql/mutations';
import client from '../lib/apolloClient';
import LoadingComponent from './common/LoadingComponent';
import { esES } from '@mui/x-data-grid/locales';

const LICENSE_TYPES = ['APPA', 'PPA', 'PCA', 'IV', 'TLA', 'PC1'];

const Pilots = ({ setSelectedContent }) => {
  const [searchText, setSearchText] = useState(''); // Add this line for search state
  const [flightSchools, setFlightSchools] = useState([]); // Example multi-select dropdown for schools
  const [vuelos, setVuelos] = useState([]); // Example multi-select dropdown for flights
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
  const [medicalAptitude, setMedicalAptitude] = useState('');
  const [document, setDocument] = useState('');
  const formatDate = (date) => {
    if (!date) return null;
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
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

  if (loading) return <LoadingComponent />;
  if (error) return <div>Error: {error.message}</div>;

  const rows = data.listPilotsBalance
  .map((entry, index) => ({
    id: index,
    name: entry.pilot.attributes.name,
    licenceType: entry.pilot.attributes.licence_type,
    phoneNumber: entry.pilot.attributes.phone_number,
    email: entry.pilot.attributes.email,
    medicalAptitude: entry.pilot.attributes.medical_aptitude || '',
    totalBalance: entry.balance.total_balance,
  }))
  .filter((row) => row.name.toLowerCase().includes(searchText.toLowerCase())); // Add this filter logic


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
      setMedicalAptitude('');
    }
    setOpen(true);
  };

  const handleCloseDialog = () => setOpen(false);

  return (
    <div>
       <TextField
        label="Search Pilots"
        fullWidth
        margin="normal"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpenDialog()}
        style={{ marginBottom: 20 }}
      >
        Nuevo Piloto
      </Button>

      {/* Cards for mobile screens */}
      <Hidden smUp>
        {rows.map((row) => (
          <Card key={row.id} style={{ marginBottom: 16, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
            <CardContent>
              <Typography variant="h6" style={{ fontWeight: 'bold' }}>{`Name: ${row.name}`}</Typography>
              <Typography variant="subtitle1" color="textSecondary">{`License Type: ${row.licenceType}`}</Typography>
              <Typography variant="body2" color="textSecondary">{`Phone: ${row.phoneNumber}`}</Typography>

              {/* Collapsible Section */}
              <Accordion elevation={0} style={{ boxShadow: 'none', border: '0px solid #ccc', borderRadius: 0 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="body2" style={{ fontWeight: 'bold' }}>See More Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{`Email: ${row.email}`}</Typography>
                  <Typography>{`Medical Aptitude: ${row.medicalAptitude}`}</Typography>
                  <Typography>{`Total Balance: ${row.totalBalance}`}</Typography>
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </Hidden>

      {/* DataGrid for larger screens */}
      <Hidden xsDown>
        <div style={{ height: '80vh', width: '100%' }}>
          <DataGrid
            localeText={esES.components.MuiDataGrid.defaultProps.localeText}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            onRowClick={(params) => handleOpenDialog(params.row)}
          />
        </div>
      </Hidden>

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
            <Grid item xs={12}>
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
