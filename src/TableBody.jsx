import {MenuItem, TableBody, TableCell, TableRow, TextareaAutosize, TextField} from "@mui/material";
import {useState} from "react";

export const Body = ({tableData, onFieldChange}) => {
	const [selectedRow, setSelectedRow] = useState(null);
	return (
	<TableBody>
		{tableData?.map((row, index) => (
			<TableRow key={index} sx={{ cursor: 'pointer' }} onClick={() => setSelectedRow(row.id)}>
				<TableCell>
					{selectedRow === row.id ? (
						<TextField
							type="number"
							value={row.id}
							onChange={(e) => onFieldChange(e, 'id', row)}
						/>
					) : (
						row.id
					)}
				</TableCell>
				<TableCell>
					{selectedRow === row.id ? (
						<TextField
							type="text"
							value={row.name}
							onChange={(e) => onFieldChange(e, 'name', row)}
						/>
					) : (
						row.name
					)}
				</TableCell>
				<TableCell>
					{selectedRow === row.id ? (
						<TextareaAutosize
							value={row.description}
							onChange={(e) => onFieldChange(e, 'description', row)}
						/>
					) : (
						row.description
					)}
				</TableCell>
				<TableCell>
					{selectedRow === row.id ? (
						<TextField
							type="date"
							value={row.date}
							onChange={(e) => onFieldChange(e, 'date', row)}
						/>
					) : (
						row.date
					)}
				</TableCell>
				<TableCell>
					{selectedRow === row.id ? (
						<TextField
							select
							value={row.status}
							onChange={(e) => onFieldChange(e, 'status', row)}
						>
							<MenuItem value="active">Active</MenuItem>
							<MenuItem value="pending">Pending</MenuItem>
							<MenuItem value="canceled">Canceled</MenuItem>
						</TextField>
					) : (
						row.status
					)}
				</TableCell>
			</TableRow>
		))}
	</TableBody>
	)
}