// components/common/Table.js
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const TableComponent = ({ headers, data, renderActions }) => (
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          {headers.map((header, index) => (
            <TableCell key={index}>{header}</TableCell>
          ))}
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            {Object.values(row).map((value, i) => (
              <TableCell key={i}>{value}</TableCell>
            ))}
            <TableCell>{renderActions(row)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default TableComponent;
