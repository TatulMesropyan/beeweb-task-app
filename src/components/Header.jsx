import { Stack, TableHead, TableRow } from '@mui/material';
import { TableCell } from './';
export const Header = ({ titles, onQueryChange }) => {
  return (
    <TableHead>
      <TableRow>
        {titles?.map((title, index) => (
          <Stack direction="row" key={index}>
            <input
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder={`Search for ${title}...`}
            />
            <TableCell>{title.toUpperCase()}</TableCell>
          </Stack>
        ))}
      </TableRow>
    </TableHead>
  );
};
