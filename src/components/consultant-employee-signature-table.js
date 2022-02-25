import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(label, value) {
	return { label, value };
}

const rows = [
	createData("VICKEY GROUP, Inc", ""),
	createData("Employer", "Employee Name"),
	createData("", ""),
	createData("Signature", "Employee signature"),
	createData("", ""),
	createData("Print Name", "Address"),
];

export default function ConsultantSignatureTable() {
	return (
		<>
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
									height: "max-content",
									overflowX: "hidden",
									"&:last-child td, &:last-child th": { borderBottom: 0 },
									py: 0,
								}}>
								<TableCell
									component='th'
									scope='row'
									sx={{
										width: "50%",
										borderRight: 1,
										borderBottom: 1,
										py: 0,
										height: "20px",
									}}>
									{row.label}
								</TableCell>
								<TableCell
									align='left'
									sx={{
										height: "max-content",
										width: "100%",
										borderBottom: 1,
										py: 0,
									}}>
									<div className='table-value'>{row.value}</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Table sx={{mx: 1, my: 4}}>
				<TableRow
					sx={{
						height: "max-content",
						overflowX: "hidden",
						"&:last-child td, &:last-child th": { borderBottom: 0 },
						py: 0,
					}}>
					<TableCell
						component='td'
						scope='row'
						sx={{
							width: "50%",
							py: 0,
							pr:2,
							height: "20px",
						}}
						className='siganture-date-line'>
						<hr />
						Date
					</TableCell>
					<TableCell
						component='td'
						scope='row'
						sx={{
							width: "50%",
							py: 0,
							pl:2,
							height: "20px",
						}}
						className='siganture-date-line'>
						<hr />
						Date
					</TableCell>
				</TableRow>
			</Table>
		</>
	);
}
