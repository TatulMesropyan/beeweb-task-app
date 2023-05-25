import { TableCell, TableHead, TableRow } from '@mui/material';

export const Header = ({ titles }) => {
  return (
    <TableHead>
      <TableRow>
        {titles?.map((title) => (
          <TableCell>{title}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
