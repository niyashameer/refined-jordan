import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography, Grid, Button, TextareaAutosize } from "@mui/material";
import TextField from "@mui/material/TextField";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import BasicTable from "../components/basicTable";

function createData(label, vickey, customer) {
	return { label, vickey, customer };
}

const rows = [
	createData("By", "vickey goup", "lorem ipsum"),
	createData("Name", "Jane Doe", "Doe Jane"),
	createData("Title", "CEO", "Founder"),
	createData("Date", "11/12/21", "1/1/1"),
];

export default function Scope() {
	const [value, setValue] = useState(null);

	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				fontFamily: "sans-serif",
				"& > :not(style)": {
					mx: "auto",
					my: 4,
					width: 600,
					height: 900,
					overflowY: "scroll",
				},
			}}>
			<Paper
				elevation={24}
				sx={{
					p: 12,
				}}>
				<Box xs={12}>
					<Typography
						sx={{
							fontSize: "18px",
							fontWeight: 700,
							textAlign: "center",
							marginBottom: 3,
						}}>
						EXHIBIT A
					</Typography>
					<Typography
						sx={{
							fontSize: "18px",
							fontWeight: 700,
							textAlign: "center",
						}}>
						SCOPE OF WORK
					</Typography>
				</Box>
				<Box>
					<Typography sx={{ fontSize: "15px", my: 3 }}>
						This Scope of Work, is entered into as of{" "}
						<span className='sow-date'>______</span> (the{" "}
						<b>“SOW Effective Date”)</b>, between the VICKEY Group Member set
						forth below and Customer, and is subject to the Employer of Record
						Master Services Agreement by and between the VICKEY Group and
						Customer, dated <span className='sow-date'>______</span> (the
						<b>“Agreement”</b>). Terms not otherwise defined in this Scope of
						Work shall have the meaning ascribed to such terms in the Agreement.
					</Typography>
				</Box>
				<Box
					sx={{
						fontSize: "15px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>1.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<b>Context.</b>&nbsp;Customer has engaged VICKEY Group to provide
						its VICKEY Services, in order to support Customer’s Human Resources
						activities, including consultancy services provided by a Consultant
						that may be an independent contractor, employee, or affiliate of
						VICKEY Group. This Scope of Work outlays the nature of the work owed
						to Customer according to this Agreement, as well as the fees
						Customer owes to VICKEY Group according to this Agreement, including
						the direct and indirect cost of engaging any Consultant.
					</Typography>
				</Box>
				<Box
					sx={{
						fontSize: "18px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>2.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<b>Description of Consultant Engagement</b>&nbsp;Subject to the
						terms and conditions hereof, during the Term, the VICKEY Group
						Member shall provide Customer with the VICKEY Services in accordance
						with the following terms:
					</Typography>
				</Box>

				<Box fullWidth sx={{ width: "100%", my: 8 }}>
					<BasicTable />
				</Box>

				<Box>
					<Box
						sx={{
							fontSize: "15px",
							my: 3,
							display: "flex",
							alignItems: "flex-start",
						}}>
						<Typography sx={{ fontWeight: 700, mx: 3 }}>3.</Typography>
						<Typography sx={{ fontSize: "15px" }}>
							<b>Charges & Fees.</b> Company shall pay the following fees to
							VICKEY Group according to the payment terms in the Agreement and
							as further set forth herein:
						</Typography>
					</Box>
					<Grid container spacing={1}>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>3.1</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								Set-up Fee: A USD 500 set-up fees only in the case where the
								duration of this Scope of Work is less than 6 months.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>3.2</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								Consulting Fee: VICKEY Group's employer costs, including
								benefits, as set forth in the Agreement.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>3.3</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								Platform Fee: USD 500 per month.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>3.4.</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								Fee Deposit: one (1) month worth of the Consulting Fee and
								Platform Fee.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>3.5</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								Additional Fees: Additional costs, expenses, or disbursements
								related to the engagement of the Consultant incurred by VICKEY
								Group as a direct result of a law change, as set forth in the
								Agreement.
							</Typography>
						</Grid>
					</Grid>
				</Box>
				<Box
					sx={{
						fontSize: "15px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>4.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<b>Payment Terms. </b>&nbsp;All charges are calculated in{" "}
						<span className='sow-date'>______</span>. All payments must be made
						through the VICKEY Platform, in accordance with the terms hereof and
						any applicable VICKEY Platform usage term and conditions. VICKEY
						Group will invoice Customer in respect of all fees payable
						hereunder, including any variable elements of the Consulting Fee
						(bonus, commissions, overtime, etc.) through the VICKEY Platform by
						the 30th calendar day of any month. Value Added Tax (VAT) may apply
						on all or part of the fees and expenses according to the relevant
						laws and tax regulations. All invoices hereunder shall be paid
						within five (5) days from the date of invoice.
					</Typography>
				</Box>
				<Box>
					<Box
						sx={{
							fontSize: "15px",
							my: 3,
							display: "flex",
							alignItems: "flex-start",
						}}>
						<Typography sx={{ fontWeight: 700, mx: 3 }}>5.</Typography>
						<Typography sx={{ fontSize: "15px" }}>
							<b>Consultant Expenses.</b> When the Consultant must incur
							expenses while executing the VICKEY Services, Customer shall
							comply with the following terms and conditions:
						</Typography>
					</Box>
					<Grid container spacing={1}>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>5.1</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								Consultant will obtain pre-approval of the expenses from
								Customer based on a detailed description and evaluation of the
								expected expenses;
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>5.2</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								Consultant will create an expenses report on the VICKEY
								Platform, with a copy of all receipts for verification by
								Customer;
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>5.3</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								Customer shall validate the reports on the VICKEY Platform
								before the 15th of the month and process the related payment
								through the VICKEY Platform within 5 calendar days of receipt.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>5.4.</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								If the Consultant cannot provide original receipts for the
								expenses, the expenses will not be reimbursed.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>5.5</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<b>Advance on Salary.</b> Subject to the payment of a fee in the
								amount of USD 25 for each applicable advance, Customer may
								instruct VICKEY Group to provide Consultant with an advance on
								any salary or expenses hereunder.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>5.6</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<b>Termination.</b> Either party may terminate this Scope of
								Work upon thirty (30) days prior written notice, or such other
								period otherwise required for VICKEY Group to terminate
								Consultant’s engagement with VICKEY Group in accordance with
								applicable law.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>5.7</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<b>Labor Provisions.</b> Current and future provisions of local
								labor law, collective labor agreements, and tax legislation in
								the country where work is being provided shall be applied and
								included in all invoices. The Consultant will be informed of and
								asked to respect Customer’s internal policies and guidelines.
								However, as employee and/or contractor of VICKEY Group, in case
								of conflict between the internal policies or guidelines of
								VICKEY Group and those of Customer, Customer acknowledges and
								accepts that the Consultant must in priority observe VICKEY
								Group’s internal policies, procedures and guidelines.
							</Typography>
						</Grid>
					</Grid>
				</Box>
				<Box sx={{ fontSize: "18px", my: 3 }}>
					<Typography sx={{ fontSize: "15px" }}>
						If the employment agreement is not signed by the start date, the
						start date will be delayed to the date of employee agreement
						signature or later.
					</Typography>
				</Box>
				<br />
				<Box sx={{ fontSize: "18px", my: 3 }}>
					<Typography sx={{ fontSize: "15px" }}>
						IN WITNESS WHEREOF, the Parties have duly executed this Scope of
						Work as of the SOW Effective Date.
					</Typography>
				</Box>
				<Box sx={{ my: 3 }}>
					<TableContainer component={Paper}>
						<Table sx={{ width: "100%" }} aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableCell>Label</TableCell>
									<TableCell align='left'>VICKEY GROUP MEMBER</TableCell>
									<TableCell align='left'>CUSTOMER</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<TableRow
										key={row.label}
										sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
										<TableCell
											align='left'
											sx={{
												width: "30px",
												height: "max-content",
												overflowWrap: "break-word",
											}}>
											{row.label}
										</TableCell>
										<TableCell
											align='left'
											sx={{
												width: "150px",
												height: "max-content",
												overflowWrap: "break-word",
											}}>
											{row.vickey}
										</TableCell>
										<TableCell
											align='left'
											sx={{
												width: "150px",
												height: "max-content",
												overflowWrap: "break-word",
											}}>
											{row.customer}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			</Paper>
		</Box>
	);
}
