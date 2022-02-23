import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// function createData(label, value) {
// 	return { label, value };
// }

// const rows = [
// 	createData(
// 		"VICKEY Group:",
// 		"VICKEY, Inc., a Jordanian corporation with its principal offices Amman, and any of its Affiliates as defined below (each a “VICKEY Group Member” and collectively, “VICKEY Group”) VICKEY, Inc., ., a Jordanian corporation with its principal offices Amman, and any company or subsidiary in the same or associated ownership or control (each a “VICKEY Group Member” and collectively, “VICKEY Group”)"
// 	),
// 	createData(
// 		"Customer:",
// 		"NAME, TYPE OF COMPANY with its principal offices located at CLIENT ADDRESS."
// 	),
// 	createData("Effective Date", "SOW DATE"),
// 	createData("Initial Term:", "1 Year"),
// 	createData("Signatures", "VICKEY Group\nBy: VICKEY ACCOUNT MANAGER"),
// 	createData("Customer\nBy: CUSTOMER NAME", ""),
// ];

export default function AgreementTable() {
	return (
		<TableContainer
			component={Paper}
			sx={{ width: "100%", border: 1, borderRadius: 0, overflowX: "hidden" }}
			className='agreement-table'>
			<Table
				sx={{
					width: "100%",
					height: "max-content",
					tableLayout: "auto",
					overflowX: "hidden",
				}}
				aria-label='simple table'>
				<TableBody
					sx={{
						height: "max-content",
						width: "100%",
						overflowX: "hidden",
					}}>
					<TableRow
						sx={{
							height: "max-content",
							overflowX: "hidden",
							"&:last-child td, &:last-child th": { borderBottom: 0 },
						}}
						className='agreement-table-row'>
						<TableCell
							component='th'
							scope='row'
							sx={{
								width: "100px",
								borderRight: 1,
								borderBottom: 1,
								verticalAlign: "top",
							}}
							colSpan={1}>
							<b>VICKEY Group:</b>
						</TableCell>
						<TableCell
							align='left'
							sx={{
								height: "max-content",
								width: "100%",
								overflowWrap: "break-word",
								borderBottom: 1,
							}}
							colSpan={6}>
							<div className='table-value'>
								VICKEY, Inc., a Jordanian corporation with its principal offices
								Amman, and any of its Affiliates as defined below (each a
								“VICKEY Group Member” and collectively, “VICKEY Group”) VICKEY,
								Inc., ., a Jordanian corporation with its principal offices
								Amman, and any company or subsidiary in the same or associated
								ownership or control (each a “VICKEY Group Member” and
								collectively, “VICKEY Group”)
							</div>
						</TableCell>
					</TableRow>
					<TableRow
						sx={{
							height: "max-content",
							overflowX: "hidden",
							"&:last-child td, &:last-child th": { borderBottom: 0 },
						}}
						className='agreement-table-row'>
						<TableCell
							sx={{
								width: "10%",
								borderRight: 1,
								borderBottom: 1,
								verticalAlign: "top",
							}}
							colSpan={1}>
							<b>Customer:</b>
						</TableCell>
						<TableCell
							align='left'
							sx={{
								height: "max-content",
								width: "100%",
								overflowWrap: "break-word",
								borderBottom: 1,
							}}
							colSpan={6}>
							<div className='table-value'>
								NAME, TYPE OF COMPANY with its principal offices located at
								CLIENT ADDRESS.
							</div>
						</TableCell>
					</TableRow>
					<TableRow
						sx={{
							height: "max-content",
							overflowX: "hidden",
							"&:last-child td, &:last-child th": { borderBottom: 0 },
							width: "300px",
						}}
						className='agreement-table-row'>
						<TableCell
							component='th'
							scope='row'
							sx={{
								width: "10%",
								borderRight: 1,
								borderBottom: 1,
								verticalAlign: "top",
							}}
							colSpan={1}>
							<b>Effective Date</b>
						</TableCell>
						<TableCell
							align='left'
							sx={{
								height: "max-content",
								width: "30%",
								borderRight: 1,
								borderBottom: 1,
							}}
							colSpan={2}
							className='agreement-split'>
							<div className='table-value-split'>SOW DATE</div>
						</TableCell>
						<TableCell
							component='th'
							scope='row'
							sx={{
								width: "10%",
								borderRight: 1,
								borderBottom: 1,
								verticalAlign: "top",
							}}
							colSpan={1}>
							<b>Initial Term:</b>
						</TableCell>
						<TableCell
							align='left'
							sx={{
								height: "max-content",
								width: "100%",
								borderBottom: 1,
							}}
							colSpan={2}
							className='agreement-split'>
							<div className='table-value-split'>1 Year</div>
						</TableCell>
					</TableRow>
					<TableRow
						sx={{
							height: "max-content",
							overflowX: "hidden",
							"&:last-child td, &:last-child th": { borderBottom: 0 },
						}}>
						<TableCell
							component='th'
							scope='row'
							sx={{
								width: "10%",
								borderRight: 1,
								verticalAlign: "top",
							}}
							colSpan={1}>
							<b>Signatures</b>
						</TableCell>
						<TableCell
							align='left'
							sx={{
								height: "max-content",
								width: "30%",
								borderRight: 1,
							}}
							colSpan={2}
							className='agreement'>
							<b>VICKEY Group</b> <br /> By: VICKEY ACCOUNT MANAGER
						</TableCell>
						<TableCell
							align='left'
							sx={{
								width: "10%",
								verticalAlign: "top",
							}}
							colSpan={2}>
							<b>Customer </b> <br /> By: CUSTOMER NAME
						</TableCell>
					</TableRow>
					{/* ))} */}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
