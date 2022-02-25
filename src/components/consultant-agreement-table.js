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
		"Employer",
		"VICKEY Group"
	),
	createData("Client", ""),
	createData("Employee Name & Title", ""),
	createData("Employee job description and responsibilities", ""),
	createData("Regular working time", "None standard hours or days could be applicable in special situations Travel inside and outside of the country may be applicable to this position."),
	createData("Monthly Basic Gross Salary:", "Monthly total gross wage of ______ per month, including payment for overtime work hours."),
	createData("Social Benefits: ", ""),
	createData("Social Rights:", "According to __________ laws"),
	createData("Transportation:", ""),
	createData("Incentive", "- Annual (company & employee) performance Bonus plan (based on Score Cards) No contribution to social benefits will be done by the company on annual performance bonus."),
];

export default function ConsultantTable() {
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
