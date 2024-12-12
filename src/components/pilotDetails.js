import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const PilotDetail = ({ pilotData, planesData, flightsData, onNewRAV, onNewPayment, onNewFlight }) => {
  // Calculate total debt
  const totalDebt = planesData.reduce((sum, plane) => sum + plane.amountPaid, 0);

  return (
    <div style={{ padding: '0px' }}>
      {/* Pilot Details Card */}
      <Card>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
          {pilotData.name} {pilotData.lastname}
          </Typography>

          <Grid container spacing={2}>
            {/* Pilot Info */}
            <Grid item xs={6}>
              <Typography variant="body1">Name: {pilotData.name}</Typography>
              <Typography variant="body1">Last Name: {pilotData.lastname}</Typography>
              <Typography variant="body1">Document: {pilotData.document}</Typography>
              <Typography variant="body1">Medical Aptitude: {pilotData.medicalAptitude}</Typography>
            </Grid>

            {/* Plane Info */}
            <Grid item xs={6}>
              <Typography variant="h6">Total Debt: ${totalDebt}</Typography>
              {planesData.map((plane) => (
                <Typography key={plane.code} variant="body2">
                  {plane.code}: {plane.hoursFlown} hours flown, ${plane.amountPaid} paid
                </Typography>
              ))}
            </Grid>
          </Grid>

          {/* Action Buttons */}
          <Grid container spacing={2} style={{ marginTop: '20px' }}>
            <Grid item>
              <Button variant="contained" color="primary" onClick={onNewRAV}>
                New RAV
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" onClick={onNewPayment}>
                New Payment
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="success" onClick={onNewFlight}>
                New Flight
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Last Flights Table */}
      <Typography variant="h5" style={{ marginTop: '30px', marginBottom: '10px' }}>
        Last Flights
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Plane</TableCell>
              <TableCell>Hours</TableCell>
              <TableCell>Origin</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>Payment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {flightsData.map((flight) => (
              <TableRow key={flight.id}>
                <TableCell>{flight.date}</TableCell>
                <TableCell>{flight.plane}</TableCell>
                <TableCell>{flight.hours}</TableCell>
                <TableCell>{flight.origin}</TableCell>
                <TableCell>{flight.destination}</TableCell>
                <TableCell>${flight.payment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PilotDetail;

// Usage Example
// const pilotData = { name: 'John', lastname: 'Doe', document: '123456', medicalAptitude: '2024-12-11' };
// const planesData = [
//   { code: 'LV-CZG', hoursFlown: 20, amountPaid: 500 },
//   { code: 'LV-ZXY', hoursFlown: 15, amountPaid: 300 },
// ];
// const flightsData = [
//   { id: 1, date: '2024-12-01', plane: 'LV-CZG', hours: 2, origin: 'A', destination: 'B', payment: 100 },
// ];
// ReactDOM.render(
//   <PilotDetail
//     pilotData={pilotData}
//     planesData={planesData}
//     flightsData={flightsData}
//     onNewRAV={() => console.log('New RAV')}
//     onNewPayment={() => console.log('New Payment')}
//     onNewFlight={() => console.log('New Flight')}
//   />,
//   document.getElementById('root')
// );
