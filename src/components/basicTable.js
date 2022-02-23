import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(label, value) {
	return { label, value };
}

const rows = [
	createData(
		"Commencement Date",
		""
	),
	createData("Description of Work", ""),
	createData("Customer Contact Information", ""),
	createData("Jurisdiction of Employment", ""),
	createData("Location to Deliver VICKEY Services", ""),
	createData("Consultant Details", ""),
	createData("Consultant Employment Type", ""),
	createData("Consultant Work Hours", ""),
	createData("Comnsultant Holidays", ""),
	createData("Scope of Work Term", ""),
	createData("Consultant Job Title", ""),
	createData("Seniority", ""),
	createData("Employment Trial Period", ""),
	createData("Consultant Salary", ""),
	createData("Additional Benefits", ""),
];

export default function BasicTable() {
	return (
		<TableContainer
			component={Paper}
			sx={{ width: "100%", border: 1, marginLeft: 2, borderRadius: 0 }}>
			<Table
				sx={{
					width: "100%",
					height: "max-content",
				}}
				aria-label='simple table'>
				<TableBody
					sx={{
						height: "max-content",
						width: "100%",
						overflowX: "hidden",
					}}>
					{rows.map((row) => (
						<TableRow
							key={row.label}
							sx={{
								height: "max-content", overflowX: "hidden",
								"&:last-child td, &:last-child th": { borderBottom: 0 }}}>
							<TableCell
								component='th'
								scope='row'
								sx={{
									width: "30%",
									borderRight: 1,
									borderBottom: 1,
								}}>
								{row.label}
							</TableCell>
							<TableCell
								align='left'
								sx={{
									height: "max-content",
									width: "100%",
									borderBottom: 1,
								}}>
								<div className='table-value'>{row.value}</div>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
