import { TableCell, TableHead, TableRow } from '@mui/material';

export const Header = ({ titles }) => {
  return (
    <TableHead>
      <TableRow>
        {titles?.map((title, index) => (
          <TableCell key={index}>{title}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
