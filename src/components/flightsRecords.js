import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Card, CardContent, Typography, Hidden, Accordion, AccordionSummary, AccordionDetails, IconButton } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { GET_FLIGHT_RECORDS } from '../graphql/queries';
import { CREATE_FLIGHT_RECORD, UPDATE_FLIGHT_RECORD } from '../graphql/mutations';
import client from '../lib/apolloClient';
import { DataGrid } from '@mui/x-data-grid';
import FlightRecordForm from './FlightRecordsForm'; // New form component
import LoadingComponent from './common/LoadingComponent';
import { esES } from '@mui/x-data-grid/locales';

const FlightRecords = ({ setSelectedContent }) => {
  const { loading, error, data } = useQuery(GET_FLIGHT_RECORDS, { client });
  const [createFlightRecord] = useMutation(CREATE_FLIGHT_RECORD, { client });
  const [updateFlightRecord] = useMutation(UPDATE_FLIGHT_RECORD, { client });

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const [formData, setFormData] = useState({
    type: '',
    instructor: '',
    date: '',
    hours: '',
    paid: '',
    paid_iv: false,
    arrival_time: '',
    departure_time: '',
    arrival_airport: '',
    departure_airport: '',
    plane: '',
    pilot: '',
  });

  const handleOpenDialog = (record = null) => {
    setSelectedRecord(record);
    setFormData({
      type: record?.type || '',
      instructor: record?.instructor || '',
      date: record?.date || '',
      hours: record?.hours || '',
      paid: record?.paid || '',
      paid_iv: record?.paid_iv || false,
      arrival_time: record?.arrival_time || '',
      departure_time: record?.departure_time || '',
      arrival_airport: record?.arrival_airport || '',
      departure_airport: record?.departure_airport || '',
      plane: record?.plane || '',
      pilot: record?.pilot || '',
    });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async () => {
    try {
      if (selectedRecord) {
        // Update existing record
        await updateFlightRecord({
          variables: {
            id: selectedRecord.id,
            data: formData,
          },
        });
      } else {
        // Create new record
        await createFlightRecord({
          variables: {
            data: formData,
          },
        });
      }
      setOpenDialog(false);
    } catch (error) {
      console.error('Error saving flight record:', error);
    }
  };

  if (loading) return <LoadingComponent />;
  if (error) return <div>Error: {error.message}</div>;

  const rows = data.flightRecords.data.map((record) => ({
    id: record.id,
    type: record.attributes.type,
    instructor: record.attributes.instructor?.data?.attributes?.name,
    date: record.attributes.date,
    hours: record.attributes.hours,
    paid: record.attributes.paid,
    paid_iv: record.attributes.paid_iv,
    arrival_time: record.attributes.arrival_time,
    departure_time: record.attributes.departure_time,
    arrival_airport: record.attributes.arrival_airport?.data?.attributes?.code,
    departure_airport: record.attributes.departure_airport?.data?.attributes?.code,
    plane: record.attributes.plane?.data?.attributes?.code,
    pilot: record.attributes.pilot?.data?.attributes?.name,
  }));

  const columns = [
    { field: 'date', headerName: 'FECHA', width: 100 },
    { field: 'plane', headerName: 'AVION', width: 100 },
    { field: 'pilot', headerName: 'PILOTO', width: 200 },
    { field: 'hours', headerName: 'HORAS', width: 70 },
    { field: 'type', headerName: 'TIPO DE VUELO', width: 100 },
    { field: 'paid', headerName: 'PAGO', width: 70 },
    { field: 'arrival_time', headerName: 'HR SALIDA', width: 110 },
    { field: 'departure_time', headerName: 'HR LLEGADA', width: 110 },
    { field: 'arrival_airport', headerName: 'DESTINO', width: 110 },
    { field: 'departure_airport', headerName: 'ORIGEN', width: 110 },
    { field: 'instructor', headerName: 'INSTRUCTOR', width: 200 },
    { field: 'paid_iv', headerName: 'PAGO IV', width: 70 },
  ];

  const updatedColumns = columns.map((column, index) => {
    if (index === 2) {
      return {
        ...column,
        renderCell: (params) => (
          <span
            onClick={(e) => {
              setSelectedContent('pilot-details');
              e.stopPropagation();
            }}
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
        style={{ marginBottom: 20 }}
        onClick={() => handleOpenDialog()}
      >
        Nuevo Vuelo
      </Button>

      {/* Cards for mobile screens */}
      <Hidden smUp>
        {rows.map((row) => (
          <Card key={row.id} style={{ marginBottom: 16, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
            <CardContent>
              <Typography variant="h6" style={{ fontWeight: 'bold' }}>{`Plane: ${row.plane}`}</Typography>
              <Typography variant="subtitle1" color="textSecondary">{`Pilot: ${row.pilot}`}</Typography>
              <Typography variant="body2" color="textSecondary">{`Date: ${row.date}`}</Typography>

              {/* Collapsible Section */}
              <Accordion elevation={0} style={{ boxShadow: 'none', border: '0px solid #ccc', borderRadius: 0 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${row.id}-content`}
                  id={`panel${row.id}-header`}
                >
                  <Typography variant="body2" style={{ fontWeight: 'bold' }}>See More Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{`Flight Type: ${row.type}`}</Typography>
                  <Typography>{`Hours: ${row.hours}`}</Typography>
                  <Typography>{`Instructor: ${row.instructor}`}</Typography>
                  <Typography>{`Arrival Time: ${row.arrival_time}`}</Typography>
                  <Typography>{`Departure Time: ${row.departure_time}`}</Typography>
                  <Typography>{`Arrival Airport: ${row.arrival_airport}`}</Typography>
                  <Typography>{`Departure Airport: ${row.departure_airport}`}</Typography>
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
            columns={updatedColumns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            onRowClick={(params) => handleOpenDialog(params.row)}
          />
        </div>
      </Hidden>

      {/* Dialog for creating/editing flight record */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{selectedRecord ? 'Editar Vuelo' : 'Nuevo Vuelo'}</DialogTitle>
        <DialogContent>
          <FlightRecordForm
            formData={formData}
            handleFormChange={handleFormChange}
            handleSubmit={handleSubmit}
            editing={!!selectedRecord}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FlightRecords;
