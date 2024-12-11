// data.js
export const planes = ['Cessna 172', 'Piper PA-28', 'Diamond DA40'];
export const pilotos = ['John Doe', 'Jane Smith'];
export const instructores = ['Carlos Martin', 'Elena Rios'];
export const tiposVuelo = ['Vuelo de Entrenamiento', 'Vuelo de Placencia'];

export const columns = [
  { field: 'fecha', headerName: 'Fecha', width: 150 },
  { field: 'aeronave', headerName: 'Aeronave', width: 150 },
  { field: 'horaSalida', headerName: 'Hora Salida', width: 150 },
  { field: 'origen', headerName: 'Origen', width: 150 },
  { field: 'destino', headerName: 'Destino', width: 150 },
  { field: 'horaLlegada', headerName: 'Hora Llegada', width: 150 },
  { field: 'piloto', headerName: 'Piloto', width: 150 },
  { field: 'horas', headerName: 'Horas', width: 150 },
  { field: 'pago', headerName: 'Pago', width: 150 },
  { field: 'tipoVuelo', headerName: 'Tipo de Vuelo', width: 150 },
  { field: 'instructores', headerName: 'Instructores', width: 150 },
  { field: 'pagoIV', headerName: 'Pago IV', width: 150 },
];

export const rows = [
    { id: 1, fecha: '2024-12-01', aeronave: 'Cessna 172', horaSalida: '08:00', origen: 'Aeropuerto A', destino: 'Aeropuerto B', horaLlegada: '09:00', piloto: 'John Doe', horas: 1, pago: 100, saldoHS: 50, tipoVuelo: 'Vuelo de Entrenamiento', instructores: 'Carlos Martin', pagoIV: false },
    { id: 2, fecha: '2024-12-02', aeronave: 'Piper Cub', horaSalida: '09:00', origen: 'Aeropuerto B', destino: 'Aeropuerto C', horaLlegada: '10:00', piloto: 'Jane Smith', horas: 1, pago: 120, saldoHS: 60, tipoVuelo: 'Vuelo de Entrenamiento', instructores: 'Carlos Martin', pagoIV: true },
    { id: 3, fecha: '2024-12-03', aeronave: 'Cessna 172', horaSalida: '10:30', origen: 'Aeropuerto C', destino: 'Aeropuerto D', horaLlegada: '11:30', piloto: 'Alice Johnson', horas: 1, pago: 100, saldoHS: 50, tipoVuelo: 'Vuelo Comercial', instructores: 'Carlos Martin', pagoIV: false },
    { id: 4, fecha: '2024-12-04', aeronave: 'Cessna 182', horaSalida: '11:00', origen: 'Aeropuerto D', destino: 'Aeropuerto E', horaLlegada: '12:00', piloto: 'Michael Brown', horas: 1, pago: 150, saldoHS: 75, tipoVuelo: 'Vuelo Comercial', instructores: 'Laura White', pagoIV: true },
    { id: 5, fecha: '2024-12-05', aeronave: 'Piper Navajo', horaSalida: '12:30', origen: 'Aeropuerto E', destino: 'Aeropuerto F', horaLlegada: '13:30', piloto: 'Robert Green', horas: 1, pago: 130, saldoHS: 65, tipoVuelo: 'Vuelo de Entrenamiento', instructores: 'Carlos Martin', pagoIV: false },
    { id: 6, fecha: '2024-12-06', aeronave: 'Beechcraft Bonanza', horaSalida: '13:00', origen: 'Aeropuerto F', destino: 'Aeropuerto G', horaLlegada: '14:00', piloto: 'Emily Davis', horas: 1, pago: 140, saldoHS: 70, tipoVuelo: 'Vuelo Comercial', instructores: 'Laura White', pagoIV: true },
    { id: 7, fecha: '2024-12-07', aeronave: 'Cessna 172', horaSalida: '14:00', origen: 'Aeropuerto G', destino: 'Aeropuerto H', horaLlegada: '15:00', piloto: 'Daniel Wilson', horas: 1, pago: 100, saldoHS: 50, tipoVuelo: 'Vuelo de Entrenamiento', instructores: 'Carlos Martin', pagoIV: false },
    { id: 8, fecha: '2024-12-08', aeronave: 'Piper Cub', horaSalida: '15:00', origen: 'Aeropuerto H', destino: 'Aeropuerto I', horaLlegada: '16:00', piloto: 'Sophia Taylor', horas: 1, pago: 120, saldoHS: 60, tipoVuelo: 'Vuelo de Entrenamiento', instructores: 'Carlos Martin', pagoIV: true },
    { id: 9, fecha: '2024-12-09', aeronave: 'Cessna 182', horaSalida: '16:30', origen: 'Aeropuerto I', destino: 'Aeropuerto J', horaLlegada: '17:30', piloto: 'Oliver Anderson', horas: 1, pago: 150, saldoHS: 75, tipoVuelo: 'Vuelo Comercial', instructores: 'Laura White', pagoIV: false },
    { id: 10, fecha: '2024-12-10', aeronave: 'Piper Navajo', horaSalida: '17:00', origen: 'Aeropuerto J', destino: 'Aeropuerto K', horaLlegada: '18:00', piloto: 'Isabella Martinez', horas: 1, pago: 130, saldoHS: 65, tipoVuelo: 'Vuelo de Entrenamiento', instructores: 'Carlos Martin', pagoIV: true },
    { id: 11, fecha: '2024-12-11', aeronave: 'Beechcraft Bonanza', horaSalida: '18:30', origen: 'Aeropuerto K', destino: 'Aeropuerto L', horaLlegada: '19:30', piloto: 'Mason Harris', horas: 1, pago: 140, saldoHS: 70, tipoVuelo: 'Vuelo Comercial', instructores: 'Laura White', pagoIV: false },
    { id: 12, fecha: '2024-12-12', aeronave: 'Cessna 172', horaSalida: '09:00', origen: 'Aeropuerto L', destino: 'Aeropuerto M', horaLlegada: '10:00', piloto: 'Liam Clark', horas: 1, pago: 100, saldoHS: 50, tipoVuelo: 'Vuelo de Entrenamiento', instructores: 'Carlos Martin', pagoIV: true },
    { id: 13, fecha: '2024-12-13', aeronave: 'Piper Cub', horaSalida: '10:30', origen: 'Aeropuerto M', destino: 'Aeropuerto N', horaLlegada: '11:30', piloto: 'Amelia Lewis', horas: 1, pago: 120, saldoHS: 60, tipoVuelo: 'Vuelo Comercial', instructores: 'Carlos Martin', pagoIV: false },
    { id: 14, fecha: '2024-12-14', aeronave: 'Cessna 182', horaSalida: '12:00', origen: 'Aeropuerto N', destino: 'Aeropuerto O', horaLlegada: '13:00', piloto: 'Mia Walker', horas: 1, pago: 150, saldoHS: 75, tipoVuelo: 'Vuelo de Entrenamiento', instructores: 'Laura White', pagoIV: true },
    { id: 15, fecha: '2024-12-15', aeronave: 'Piper Navajo', horaSalida: '13:30', origen: 'Aeropuerto O', destino: 'Aeropuerto P', horaLlegada: '14:30', piloto: 'Elijah King', horas: 1, pago: 130, saldoHS: 65, tipoVuelo: 'Vuelo Comercial', instructores: 'Carlos Martin', pagoIV: false },
    { id: 16, fecha: '2024-12-16', aeronave: 'Beechcraft Bonanza', horaSalida: '15:00', origen: 'Aeropuerto P', destino: 'Aeropuerto Q', horaLlegada: '16:00', piloto: 'Harper Scott', horas: 1, pago: 140, saldoHS: 70, tipoVuelo: 'Vuelo de Entrenamiento', instructores: 'Laura White', pagoIV: true },
    { id: 17, fecha: '2024-12-17', aeronave: 'Cessna 172', horaSalida: '16:30', origen: 'Aeropuerto Q', destino: 'Aeropuerto R', horaLlegada: '17:30', piloto: 'Ethan Young', horas: 1, pago: 100, saldoHS: 50, tipoVuelo: 'Vuelo Comercial', instructores: 'Carlos Martin', pagoIV: false },
    { id: 18, fecha: '2024-12-18', aeronave: 'Piper Cub', horaSalida: '18:00', origen: 'Aeropuerto R', destino: 'Aeropuerto S', horaLlegada: '19:00', piloto: 'Ella Wright', horas: 1, pago: 120, saldoHS: 60, tipoVuelo: 'Vuelo de Entrenamiento', instructores: 'Laura White', pagoIV: true },
    { id: 19, fecha: '2024-12-19', aeronave: 'Cessna 182', horaSalida: '19:30', origen: 'Aeropuerto S', destino: 'Aeropuerto T', horaLlegada: '20:30', piloto: 'Avery Perez', horas: 1, pago: 150, saldoHS: 75, tipoVuelo: 'Vuelo Comercial', instructores: 'Carlos Martin', pagoIV: false },
    { id: 20, fecha: '2024-12-20', aeronave: 'Piper Navajo', horaSalida: '20:00', origen: 'Aeropuerto T', destino: 'Aeropuerto U', horaLlegada: '21:00', piloto: 'Aidan Turner', horas: 1, pago: 130, saldoHS: 65, tipoVuelo: 'Vuelo de Entrenamiento', instructores: 'Laura White', pagoIV: true },
    { id: 21, fecha: '2024-12-21', aeronave: 'Beechcraft Bonanza', horaSalida: '21:30', origen: 'Aeropuerto U', destino: 'Aeropuerto V', horaLlegada: '22:30', piloto: 'Lily Lopez', horas: 1, pago: 140, saldoHS: 70, tipoVuelo: 'Vuelo Comercial', instructores: 'Carlos Martin', pagoIV: false },
    { id: 22, fecha: '2024-12-22', aeronave: 'Cessna 172', horaSalida: '07:00', origen: 'Aeropuerto V', destino: 'Aeropuerto W', horaLlegada: '08:00', piloto: 'Jack Nelson', horas: 1, pago: 100, saldoHS: 50, tipoVuelo: 'Vuelo de Entrenamiento', instructores: 'Carlos Martin', pagoIV: true },
    { id: 23, fecha: '2024-12-23', aeronave: 'Piper Cub', horaSalida: '08:00', origen: 'Aeropuerto W', destino: 'Aeropuerto X', horaLlegada: '09:00', piloto: 'Zoe Adams', horas: 1, pago: 120, saldoHS: 60, tipoVuelo: 'Vuelo Comercial', instructores: 'Laura White', pagoIV: false },
    { id: 24, fecha: '2024-12-24', aeronave: 'Cessna 182', horaSalida: '09:30', origen: 'Aeropuerto X', destino: 'Aeropuerto Y', horaLlegada: '10:30', piloto: 'Benjamin Carter', horas: 1, pago: 150, saldoHS: 75, tipoVuelo: 'Vuelo de Entrenamiento', instructores: 'Carlos Martin', pagoIV: true },
    { id: 25, fecha: '2024-12-25', aeronave: 'Piper Navajo', horaSalida: '10:00', origen: 'Aeropuerto Y', destino: 'Aeropuerto Z', horaLlegada: '11:00', piloto: 'Charlotte Hughes', horas: 1, pago: 130, saldoHS: 65, tipoVuelo: 'Vuelo Comercial', instructores: 'Laura White', pagoIV: false },
    { id: 26, fecha: '2024-12-26', aeronave: 'Beechcraft Bonanza', horaSalida: '11:30', origen: 'Aeropuerto Z', destino: 'Aeropuerto A', horaLlegada: '12:30', piloto: 'Jackson Allen', horas: 1, pago: 140, saldoHS: 70, tipoVuelo: 'Vuelo de Entrenamiento', instructores: 'Carlos Martin', pagoIV: true },
    { id: 27, fecha: '2024-12-27', aeronave: 'Cessna 172', horaSalida: '12:00', origen: 'Aeropuerto A', destino: 'Aeropuerto B', horaLlegada: '13:00', piloto: 'Maverick King', horas: 1, pago: 100, saldoHS: 50, tipoVuelo: 'Vuelo Comercial', instructores: 'Carlos Martin', pagoIV: false },
    { id: 28, fecha: '2024-12-28', aeronave: 'Piper Cub', horaSalida: '13:30', origen: 'Aeropuerto B', destino: 'Aeropuerto C', horaLlegada: '14:30', piloto: 'Harper Young', horas: 1, pago: 120, saldoHS: 60, tipoVuelo: 'Vuelo de Entrenamiento', instructores: 'Laura White', pagoIV: true },
    { id: 29, fecha: '2024-12-29', aeronave: 'Cessna 182', horaSalida: '14:00', origen: 'Aeropuerto C', destino: 'Aeropuerto D', horaLlegada: '15:00', piloto: 'Madeline Scott', horas: 1, pago: 150, saldoHS: 75, tipoVuelo: 'Vuelo Comercial', instructores: 'Carlos Martin', pagoIV: false },
    { id: 30, fecha: '2024-12-30', aeronave: 'Piper Navajo', horaSalida: '15:30', origen: 'Aeropuerto D', destino: 'Aeropuerto E', horaLlegada: '16:30', piloto: 'Theo Carter', horas: 1, pago: 130, saldoHS: 65, tipoVuelo: 'Vuelo de Entrenamiento', instructores: 'Laura White', pagoIV: true },
    { id: 31, fecha: '2024-12-31', aeronave: 'Beechcraft Bonanza', horaSalida: '17:00', origen: 'Aeropuerto E', destino: 'Aeropuerto F', horaLlegada: '18:00', piloto: 'Daniel Moore', horas: 1, pago: 140, saldoHS: 70, tipoVuelo: 'Vuelo Comercial', instructores: 'Carlos Martin', pagoIV: false }
];

    