import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography, Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AgreementTable from "../components/agreementTable";

function createData(label, vickey, customer) {
	return { label, vickey, customer };
}

const rows = [
	createData("", "VICKEY INC.", "CUSTOMER COMPANY NAME"),
	createData("By", "ACCOUNT MANAGER NAME", "CUSTOMER REP NAME"),
	createData("Name", "AUTHORITY NAME", "AUTHORITY NAME"),
	createData("Title", "CEO and co-founder", "CUSTOMER TITLE"),
	createData("Date", "DATE OF SIGNATURE", "DATE OF SIGNATURE"),
];

export default function Agreement() {

	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				fontFamily: "sans-serif",
				"& > :not(style)": {
					mx: "auto",
					my: 4,
					width: 750,
					height: 900,
					overflowY: "scroll",
				},
			}}>
			<Paper
				elevation={24}
				sx={{
					py: 12,
					px: 6,
				}}>
				<Box xs={12}>
					<Typography
						sx={{
							fontSize: "18px",
							fontWeight: 700,
							textAlign: "center",
							marginBottom: 1,
						}}>
						EMPLOYER OF RECORD
					</Typography>
					<Typography
						sx={{
							fontSize: "18px",
							fontWeight: 700,
							textAlign: "center",
						}}>
						MASTER SERVICES AGREEMENT
					</Typography>
				</Box>
				<Box sx={{ fontSize: "13px", my: 6 }}>
					<AgreementTable />
				</Box>

				<Box>
					<Typography sx={{ fontSize: "15px", my: 3 }}>
						<b>This Employer of Record Master Services Agreement</b>, together
						with its exhibits (the <b>“Agreement”</b>), is entered into as of
						the Effective Date by and between VICKEY Group and Customer. For
						purposes of this Agreement, VICKEY Group and Customer will be
						referred to individually as a <b>“Party”</b> and together as the{" "}
						<b>“Parties.”</b>
						<br />
						<br /> <b>WHEREAS,</b> for the purpose of this Agreement, an{" "}
						<b>“Affiliate”</b> is any entity which is (i) a subsidiary of any
						VICKEY Group Member; (ii) a subsidiary of the same entity or
						controlled by the same entity or individual; or (iii) any other
						entity or company operating in partnership with VICKEY under a
						separate written agreement. VICKEY and Affiliates together are
						referred as VICKEY Group <br />
						<br /> <b>WHEREAS,</b> VICKEY Group is engaged in the business of
						providing Customers with specialized service providers (i)
						identified and presented by the applicable Customer, and (ii)
						engaged by VICKEY Group for the provision thereto of certain human
						resource and other related services hereunder (<b>“Consultants”</b>{" "}
						and <b>“VICKEY Services”</b>, respectively); and <br />
						<br />
						<b>WHEREAS,</b> VICKEY Group provides as part of the VICKEY Services
						a software-as-a-service solution that allows Customers to seamlessly
						manage relationships with local and international independent
						contractors, including, the receipt of services from Consultants
						(the <b>“VICKEY Platform”</b>); and <br />
						<br />
						<b>WHEREAS,</b> Customer desires to obtain from VICKEY Group, and
						VICKEY Group desires to provide to Customer, the VICKEY Services and
						a license to access and use the VICKEY Platform, subject to the
						terms and conditions of this Agreement.
						<br />
						<br /> <b>WHEREAS,</b> VICKEY Group provides as part of the VICKEY
						Services a software-as-a-service solution that allows Customers to
						seamlessly manage relationships with local and international
						independent contractors, including, the receipt of services from
						Consultants (the <b>“VICKEY Platform”</b>); and <br />
						<br />
						<b>NOW, THEREFORE,</b>, in consideration of the mutual covenants and
						promises set forth below, and other good and valuable consideration,
						the receipt of which is hereby acknowledged, the Parties hereby
						agree as follows:
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
						<Typography sx={{ fontWeight: 700, mx: 3 }}>1.</Typography>
						<Typography sx={{ fontSize: "15px" }}>
							<b>Services.</b>&nbsp;
						</Typography>
					</Box>
					<Grid container spacing={1}>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>1.1</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								Customer and each VICKEY Group Member may, during the Term (as
								defined below), from time to time enter into one or more scope
								of work for the provision hereunder of the VICKEY Services,
								substantially in the form attached hereto as <b>Exhibit A</b>{" "}
								(each a<b>“Scope of Work”</b>).
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>1.2</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								Customer hereby retains VICKEY Group to provide the VICKEY
								Services in accordance with any applicable Scope of Work.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>1.3</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								The Parties acknowledge and agree that during the term of the
								Agreement the VICKEY Services may be modified and/or expanded
								from time to time upon a Scope of Work executed by authorized
								representatives of the Parties expressly referencing this
								Agreement. In the event of any inconsistency between the terms
								of any Scope of Work and the terms hereof, the terms of the
								applicable Scope of Work shall prevail to the extent of such
								inconsistency.
							</Typography>
						</Grid>
					</Grid>
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
						<b>VICKEY Platform. </b>&nbsp;Subject to the terms hereof,
						including, without limitation, payment of all applicable fees,
						during the Term, VICKEY Group hereby grants to Customer a
						non-exclusive, non-sublicensable, non-transferable license to access
						and use the VICKEY Platform solely for Customer’s internal business
						purposes in connection with its receipt of the VICKEY Services
						hereunder, in accordance with the provisions of the VICKEY Platform
						Terms of Service, as may be in effect from time to time (the “Terms
						of Service”). In the event of any conflict between the terms hereof
						and the Terms of Service, the terms of this Agreement shall prevail.
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
						<Typography sx={{ fontWeight: 700, mx: 3 }}>3.</Typography>
						<Typography sx={{ fontSize: "15px" }}>
							<b>Fee Payment.</b>
						</Typography>
					</Box>
					<Grid container spacing={1}>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>3.1</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Platform Fee.</u> In consideration for the provision of the
								VICKEY Services and the license granted to access and use the
								VICKEY Platform, Customer will pay on a monthly basis the
								Platform Fee specified in the applicable Scope of Work.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>3.2</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Setup Fee.</u> Within five (5) days from the SOW Effective
								Date (as defined in the Scope of Work), Customer shall pay to
								VICKEY Group a one-time, non-refundable Setup Fee as specified
								in the applicable Scope of Work.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>3.3</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Consulting Fee.</u> Customer shall pay to VICKEY Group a fee
								in the amount equal to the full amount VICKEY Group paid
								Consultant for Consultant’s employment and services, including
								but not limited to, any additional remuneration for statutory
								leave, legal costs, severance or any other such payments
								incurred due the provision of the VICKEY Services, as may be
								further set forth in the Scope of Work (the{" "}
								<b>“Consulting Fee”</b>).
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>3.4.</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Fee Deposit.</u> Within five (5) days from the SOW Effective
								Date, Customer shall pay VICKEY Group a deposit in the amount
								set forth in the applicable Scope of Work (the “Fee Deposit”).
								VICKEY Group shall return this Fee Deposit to Customer within
								sixty (60) days of having received full and final payment of all
								invoices relating to the applicable Scope of Work after its
								termination. VICKEY Group shall not be obliged to supply the
								VICKEY Services until it has received the Fee Deposit from
								Customer.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>3.5</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Additional Fees.</u> In the event of a change to local laws
								or regulations that may generate additional expenses, external
								costs and charges incurred by VICKEY Group in the performance of
								its obligations under this Agreement, such expenses, costs and
								charges shall be reimbursed by Customer (the “Additional Fees”),
								unless the Parties expressly agreed otherwise beforehand in
								writing and provided that any such increase must be limited to
								the amount of the additional cost imposed upon VICKEY Group and
								that the Platform Fee will not be increased without mutual
								written agreement of the Parties. Relevant supporting
								documentation will be made available to Customer by VICKEY Group
								upon written request.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>3.6</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Reporting.</u> VICKEY Group shall provide Customer with
								reports showing details of the cost of the VICKEY Services,
								including all applicable fees during the relevant period, in the
								manner set forth in the applicable Scope of Work.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>3.7</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Payment Terms.</u> Customer shall pay the full amount
								invoiced to it by VICKEY Group in US currency in the manner set
								forth in the applicable Scope of Work or in the VICKEY Payments
								Page located at https://www.VICKEY.com/payments. All payments
								shall be made through the VICKEY Platform unless otherwise
								provided by VICKEY Group. In case of dispute of any invoice
								amount, Customer will pay all undisputed amounts in compliance
								with the payment terms agreed herein, and the Parties shall make
								their best efforts to resolve the dispute.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>3.8</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Late Payments.</u> If Customer fails to make any payment due
								to VICKEY Group under this Agreement by the due date for
								payment, then, without limiting VICKEY Group’s other remedies
								under this Agreement, Customer shall pay interest on the overdue
								amount at the rate of 0.15% per day. Such interest shall accrue
								on a daily basis from the due date until actual payment of the
								overdue amount, whether before or after judgment. Customer shall
								pay the interest together with the overdue amount.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>3.9</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Fee Changes.</u> In the event of a change to local laws or
								regulations that increases the cost to VICKEY Groups of its
								provision of the VICKEY Services, the Parties shall adapt the
								fees accordingly, provided that any such increase must be
								limited to the amount of the additional cost imposed upon VICKEY
								Group and that VICKEY Group’s Platform Fee will not be increased
								without mutual written agreement of the Parties.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>3.10</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Taxes.</u> All fees are exclusive of all state, local and
								other taxes, or other taxes or charges (other than income taxes
								payable by VICKEY Group) as may be directly applicable to the
								receipt or use of the VICKEY Services. Customer will pay all
								such charges or taxes within thirty (30) days of the applicable
								invoice date.
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box>
					<Box
						sx={{
							fontSize: "15px",
							my: 3,
							display: "flex",
							alignItems: "flex-start",
						}}>
						<Typography sx={{ fontWeight: 700, mx: 3 }}>4.</Typography>
						<Typography sx={{ fontSize: "15px" }}>
							<b>Confidentiality. </b>&nbsp;
						</Typography>
					</Box>
					<Grid container spacing={1}>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>4.1</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Confidential Information.</u> The Parties acknowledge that by
								reason of their relationship hereunder, each Party may disclose
								or provide access to the other certain Confidential Information.
								“Confidential Information” shall mean (a) information concerning
								a Party’s products, business and operations including, but not
								limited to, information relating to business plans, financial
								records, customers, suppliers, vendors, products, product
								samples, costs, sources, strategies, inventions, procedures,
								sales aids or literature, technical advice or knowledge,
								contractual agreements, pricing, product specifications, trade
								secrets, procedures, distribution methods, inventories,
								marketing strategies and interests, algorithms, data, designs,
								drawings, work sheets, blueprints, concepts, samples,
								inventions, manufacturing processes, computer programs and
								systems and know-how or other intellectual property, of a Party
								and its affiliates that may be at any time furnished,
								communicated or delivered to a Party, whether in oral, tangible,
								electronic or other form; (b) the terms of any agreement,
								including this Agreement, and the discussions, negotiations and
								proposals related to any agreement; (c) information acquired
								during any tours of or while present at a Party’s facilities;
								and (d) all other non-public information provided by a Party
								hereunder. All Confidential Information shall remain the
								exclusive property of the disclosing Party.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>4.2</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Use of Confidential Information; Standard of Care.</u> The
								receiving Party shall maintain the disclosing Party’s
								Confidential Information in strict confidence and disclose the
								Confidential Information only to its employees, subcontractors
								and representatives who (a) have a need to know such
								Confidential Information in order to fulfill the business
								affairs and transactions between the Parties contemplated by
								this Agreement; (b) have been informed of the confidential
								nature of the Confidential information furnished by the
								disclosing Party and the receiving Party’s obligations with
								respect thereto; and (c) are under confidentiality obligations
								no less restrictive as this Agreement. Receiving Party shall use
								the same degree of care as it uses with respect to its own
								similar information, but no less than a reasonable degree of
								care, to protect the Confidential Information from any
								unauthorized use, disclosure, dissemination, or publication.
								Each Party shall only use the Confidential Information in
								furtherance of its performance of its obligations under this
								Agreement, and agrees not to use the other Party’s Confidential
								Information for any other purpose or for the benefit of any
								third party.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>4.3</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Exceptions; Required Disclosures.</u> Confidential
								Information does not include information that: (a) was lawfully
								in the receiving Party’s possession before receipt from the
								disclosing Party, as established by competent evidence; (b) at
								or after the time of disclosure, becomes generally available to
								the public other than through any act or omission of the
								receiving Party; (c) is received by the receiving Party from a
								third party free to make such disclosure without, to the best of
								the receiving Party’s knowledge, breach of any legal or
								contractual obligation; (d) is independently developed by the
								receiving Party without use of the Confidential Information, as
								demonstrated by competent evidence; or (e) is disclosed by
								receiving Party with the disclosing Party’s prior written
								approval. If the receiving Party is confronted with legal action
								to disclose Confidential Information received under this
								Agreement, it shall, unless prohibited by applicable law,
								provide prompt written notice to the disclosing Party to allow
								the disclosing Party an opportunity to seek a protective order
								or other relief it deems appropriate, and the receiving Party
								shall reasonably assist the disclosing Party in such efforts. If
								disclosure is nonetheless required, the receiving Party shall
								limit its disclosure to only that portion of the Confidential
								Information which it is advised by its legal counsel must be
								disclosed.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>4.4.</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>
									Unauthorized Use or Disclosure of Confidential Information;
									Equitable Relief.
								</u>{" "}
								In the event the receiving Party discovers that any Confidential
								Information has been used, disseminated or accessed in violation
								of this Agreement, it will immediately notify the disclosing
								Party; take all commercially reasonable actions available to
								minimize the impact of the use, dissemination or publication;
								and take any and all necessary steps to prevent any further
								breach of this Agreement. The receiving Party agrees and
								acknowledges that any breach or threatened breach regarding the
								treatment of the Confidential Information may result in
								irreparable harm to the disclosing Party for which there may be
								no adequate remedy at law. In such event the disclosing Party
								shall be entitled to seek an injunction, without the necessity
								of posting a bond, to prevent any further breach of this
								Agreement, in addition to all other remedies available in law or
								at equity.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>4.5</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Return of Confidential Information; Survival.</u> The
								receiving Party shall promptly return or, at the disclosing
								Party’s option, certify destruction of all copies of
								Confidential Information at any time upon request or within
								thirty (30) days following the expiration or earlier termination
								of this Agreement. Notwithstanding any expiration or termination
								of this Agreement, the receiving Party’s obligations to protect
								the Confidential Information pursuant to this Section will
								survive for two (2) years after the expiration or earlier
								termination of this Agreement.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>4.6</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Reporting.</u> VICKEY Group shall provide Customer with
								reports showing details of the cost of the VICKEY Services,
								including all applicable fees during the relevant period, in the
								manner set forth in the applicable Scope of Work.
							</Typography>
						</Grid>
					</Grid>
				</Box>
				<Box
					sx={{
						fontSize: "18px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>5.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<b>
							<u>Intellectual Property </u>
						</b>
						&nbsp;The Parties hereto acknowledge and agree that, to the extent
						permitted by applicable law, VICKEY Group shall assign all
						Intellectual Property Rights (as defined below) such that Customer
						shall be the sole and exclusive owner of all right, title and
						interest in and to any and all materials and other deliverables
						provided or created by the Consultant in the provision of the VICKEY
						Services to Customer hereunder (“Customer Developments”). VICKEY
						Group shall ensure that Consultant, as part of its engagement by
						VICKEY Group and its provision of the VICKEY Services for Customer,
						shall execute, in accordance with the local laws and regulations
						where it performs the VICKEY Services, an invention assignment
						agreement in favor of VICKEY Group in connection with the Customer
						Developments. Subject to the terms and conditions hereof, VICKEY
						Group shall assign all right, title and interest in any Customer
						Developments, including all Intellectual Property Rights therein, to
						Customer. Except as otherwise specifically stated herein with
						respect to the assignment of Customer Developments, VICKEY Group
						does not assign and expressly retains all Intellectual Property
						Rights in all other VICKEY Group materials, including the VICKEY
						Platform.
						<br />
						<br />
						<b>“Intellectual Property Rights”</b> means all copyright rights,
						patent rights, trademark rights, trade secret rights, mask work
						rights, moral rights, rights of publicity, authors’ rights, contract
						and licensing rights, goodwill and all other intellectual property
						rights as may exist now and/or hereafter come into existence and all
						applications therefor and registrations, renewals, continuations,
						continuations in part and extensions thereof, regardless of whether
						such rights arise under the law of the United States or any other
						state, country or jurisdiction.
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
						<Typography sx={{ fontWeight: 700, mx: 3 }}>6.</Typography>
						<Typography sx={{ fontSize: "15px" }}>
							<b>Responsibilities and Obligations of VICKEY Group.</b>
						</Typography>
					</Box>
					<Grid container spacing={1}>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>6.1</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								VICKEY Group will engage the Consultant as employee(s) in
								accordance with the Scope of Work and assign the Consultant to
								perform the services requested by the Customer in the Scope of
								Work.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>6.2</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								VICKEY Group will: (i) handle Consultant’s background check;
								(ii) pay Consultant's wages and provide other benefits as VICKEY
								Group deems appropriate; (ii) pay, withhold and transmit payroll
								taxes to the Consultant in an amount no less than required by
								applicable law.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>6.3</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								VICKEY Group will be responsible for handling the employment of
								the Consultant, including, without limitation, (i) the payment
								of all salaries and wages thereto, in full accordance with all
								applicable laws, rules and regulations; (ii) handling
								unemployment claims involving Consultant; (iii) ensure
								Consultants are legally authorized to work within the
								jurisdiction in which the VICKEY Services will be provided; (iv)
								if applicable, providing health coverage to Consultant under the
								Affordable Care Act's (ACA) employer mandate and its
								implementing regulations, and will provide the necessary
								coverage to Customer. VICKEY Group represents and warrants that
								it will comply with all applicable laws, including the ACA, in
								doing so.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>6.4.</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								VICKEY Group will maintain at its own expense all insurance
								coverage required by law as well as employer liability
								insurance, in connection with the provision of the VICKEY
								Services hereunder. Upon Customer’s request, VICKEY Group shall
								deliver certificates of insurance to Customer.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>6.5</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								VICKEY Group will require Consultant to comply with Customer’s
								policies and guidelines as documented (provided such policies
								and guidelines are compliant with applicable law and the
								internal policies of VICKEY Group).
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>6.6</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								The Consultant assigned to Customer under this Agreement shall
								remain an employee of VICKEY Group for the duration of time
								Consultant provides services to Customer pursuant to any Scope
								of Work. For the avoidance of doubt, the Consultant shall not be
								entitled to participate in any of Customer’s employee benefit
								plans.
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box>
					<Box
						sx={{
							fontSize: "15px",
							my: 3,
							display: "flex",
							alignItems: "flex-start",
						}}>
						<Typography sx={{ fontWeight: 700, mx: 3 }}>7.</Typography>
						<Typography sx={{ fontSize: "15px" }}>
							<b>Responsibilities and Obligations of Customer.</b>
						</Typography>
					</Box>
					<Grid container spacing={1}>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>7.1</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								Customer acknowledges that irrespective of Customer’s
								recruitment and introduction of Consultant, VICKEY Group shall
								serve as Consultant’s employer and all employment-related
								matters will be managed and handled by VICKEY Group.
								Notwithstanding the foregoing, Customer shall be solely
								responsible for (i) the day-to-day supervision of the
								Consultant, (ii) maintaining a safe work environment at all
								times, (iii) maintaining all requisite business licenses
								(including professional licenses), and (iv) compliance with all
								applicable laws, rules and regulations in connection with its
								receipt of the VICKEY Services hereunder from the applicable
								Consultant
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>7.2</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								Customer shall comply with (i) the VICKEY Group human resources
								and other such related policies as may be provided to Customer
								from time to time and (ii) any reasonable or necessary human
								resource directive of VICKEY Group, when necessary for
								compliance with applicable laws, as determined in VICKEY Group’s
								sole discretion.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>7.3</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								Customer shall inform VICKEY Group sufficiently in advance and
								in writing of any changes regarding any Scope of Work or more
								generally, any changes impacting Consultant’s service (including
								without limitation any employment-related legal claim, injury,
								or incident relating to the Consultant or the workplace), such
								that VICKEY Group may reasonably inform and notify Consultant,
								any applicable authority or any other relevant third party in
								advance, respecting any notice periods required by law,
								agreement or best practice or any matters which may confer to
								the Customer a right to terminate this Agreement, or as
								otherwise required to comply with applicable law.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>7.4.</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								Customer acknowledges that when providing services under and
								pursuant to a Scope of Work, the Consultant’s engagement will be
								governed by the laws and regulations of the Jurisdiction of
								Employment stated in the Scope of Work, without prejudice to
								Consultant’s rights and VICKEY Group’s obligations under the
								laws and regulations of the jurisdiction where the services of
								Consultant are actually rendered.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>7.5</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								Customer agrees to pay promptly all fees and costs invoiced by
								VICKEY Group. Customer shall not make any payments relating to
								the Agreement directly to the Consultant.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>7.6</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								Customer shall be liable for any additional costs and losses
								arising from Customer’s failure to comply with the obligations
								described above in this clause.
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box>
					<Box
						sx={{
							fontSize: "15px",
							my: 3,
							display: "flex",
							alignItems: "flex-start",
						}}>
						<Typography sx={{ fontWeight: 700, mx: 3 }}>8.</Typography>
						<Typography sx={{ fontSize: "15px" }}>
							<b>Indemnification.</b>
						</Typography>
					</Box>
					<Grid container spacing={1}>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>8.1</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Customer Indemnification.</u>&nbsp;Customer will indemnify,
								defend and hold harmless VICKEY Group, its affiliates, officers,
								directors, employees, agents and other representatives
								(collectively, “VICKEY Indemnitee”) from and against any
								judgments, losses, damages, liabilities, costs or expenses
								(including, but not limited to, attorneys’ fees and legal
								expenses) VICKEY Indemnitee may suffer or incur in connection
								with any actual or threatened claim, demand, action or other
								proceeding by any third party arising from or relating to (a)
								any breach of this Agreement by Customer or any of its’s
								obligations or representations and warranties hereunder; (b) any
								act or omission by Customer, its employees, affiliates, agents
								and/or independent contractors in connection with Customer’s
								receipt of the VICKEY Services, including, without limitation,
								the engagement of the Consultant by VICKEY Group in connection
								therewith; or (c) Customer’s use, attempted use or misuse of the
								VICKEY Services and/or VICKEY Platform.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>8.2</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Indemnification for Prior Engagement.</u>&nbsp;Customer shall
								indemnify and hold harmless VICKEY Indemnitee against any
								legally enforceable claim made by the Consultant relating to or
								arising from any engagement undertaken directly or indirectly by
								Consultant with or for Customer prior to the beginning of
								Consultant’s engagement with VICKEY Group. Should any such prior
								engagement exist, Customer shall reimburse VICKEY Group in
								accordance with the payment terms of this Agreement any and all
								applicable fees hereunder. Such costs and fees may include,
								without limitation, additional remuneration, accrued statutory
								leave, seniority benefits, termination indemnity, rights and
								obligations gained as a result of deemed employment, and loss of
								earnings or status, whether perceived or actual, of Consultant
								as well as any employer’s costs, contributions, taxes or similar
								relating to arising from the foregoing. For the avoidance of
								doubt, engagement shall mean engagement in any form including
								but not limited to as an employee, or an independent
								sub-contractor whether directly or via one or more third
								parties.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>8.3</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Permanent Local Establishment.</u>&nbsp; Customer
								acknowledges and agrees that any permanent local establishment
								risk or liability affecting Customer in the country or state
								where the VICKEY Services are being provided by the Consultant
								under this Agreement shall be exclusively the Customer’s
								responsibility. Customer shall indemnify and hold VICKEY
								Indemnitee harmless against any such risk or liability.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>8.4.</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>VICKEY Group Indemnification.</u>&nbsp; VICKEY Group will
								indemnify, defend and hold harmless Customer from and against
								any judgments, losses, damages, liabilities, costs or expenses
								(including, but not limited to, attorneys’ fees and legal
								expenses) Customer may suffer or incur in connection with any
								actual or threatened claim, demand, action or other proceeding
								by any third party arising from or relating to (a) any breach of
								this Agreement by VICKEY Group or any of its obligations or
								representations and warranties hereunder; (b) any
								misrepresentation, negligence or willful misconduct by VICKEY
								Group in connection with the performance of the VICKEY Services
								hereunder; and (c) any claim that the VICKEY Platform infringes
								any intellectual property or other rights of a third party,
								provided however, that VICKEY Group shall have no responsibility
								or liability for any claim to the extent resulting from or
								arising out of (i) the use of the VICKEY Platform not in
								compliance with this Agreement, the Terms of Service or
								applicable law; (ii) the combination of the VICKEY Platform with
								any services not provided by and/or pre-approved in writing by
								VICKEY Group; (iii) the modification of the VICKEY Platform by
								any party other than VICKEY Group; or (iii) the use of any
								version of the VICKEY Platform that is not the most up-to date
								version.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>8.5</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Procedure.</u>&nbsp; Either party claiming indemnification
								under this Section 8 ("Indemnitee") shall: (i) provide the other
								party ("Indemnifying Party") with written notice of a claim
								promptly upon becoming aware thereof, (ii) allow Indemnifying
								Party to control the defence and settlement of the claim,
								provided that no settlement may be entered into without the
								consent of Indemnitee if such settlement would impose any
								liability or responsibility on the Indemnitee; and (iii)
								reasonably cooperate with Indemnifying Party, at Indemnifying
								Party's expense, in the defence and settlement of the claim.
								Notwithstanding the foregoing, the Indemnitee may be represented
								in any such suit by counsel of its own choosing, at its own
								expense.
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box
					sx={{
						fontSize: "18px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>9.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<b>Non-Competition.</b>&nbsp;VICKEY Group agrees not to enter into
						another contract with another customer, whose products or services
						compete with or are substantially to those offered by Customer, to
						provide it with the services of the same Consultant providing
						Customer with any VICKEY Services hereunder (
						<b>“Customer-Assigned Consultant”</b>) for a period of six (6) month
						after the expiration or termination of the applicable Scope of Work
						in respect of such Customer Assigned Consultant unless authorized by
						the Customer or upon request by another customer in good faith and
						without solicitation by VICKEY Group.
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
						<Typography sx={{ fontWeight: 700, mx: 3 }}>10.</Typography>
						<Typography sx={{ fontSize: "15px" }}>
							<b>Representations and Warranties. </b>&nbsp;Each party represents
							and warrants that:
						</Typography>
					</Box>
					<Grid container spacing={1}>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>10.1</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Power and Authority; Execution and Delivery.</u>&nbsp; It has
								the power and authority, and the legal right, to execute and
								deliver this Agreement and to perform its obligations hereunder.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>10.2</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>No Approvals.</u> No consent or authorization of, filing
								with, notice to or other act by, or in respect of, any
								governmental authority or any other person is required in order
								for it to execute, deliver, or perform any of its obligations
								under this Agreement.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>10.3</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>No Violations.</u> The execution and delivery of this
								Agreement and the consummation of the transactions contemplated
								hereby do not and will not violate any applicable law or
								constitute a default under any agreement or contract by which
								such party may be bound.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>10.4.</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Enforceability.</u> This Agreement represents a valid, legal
								and binding obligation of the party, enforceable against it in
								accordance with the terms of this Agreement, except as
								enforceability may be limited by applicable bankruptcy,
								insolvency, reorganization, moratorium or similar laws affecting
								the enforcement of creditors’ rights generally and by general
								equitable principles.
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box>
					<Box
						sx={{
							fontSize: "15px",
							my: 3,
							display: "flex",
							alignItems: "flex-start",
						}}>
						<Typography sx={{ fontWeight: 700, mx: 3 }}>11.</Typography>
						<Typography sx={{ fontSize: "15px" }}>
							<b>Limitation of Liability; Limitation of Warranty </b>&nbsp;
						</Typography>
					</Box>
					<Grid container spacing={1}>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>11.1</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								Except for customer’s indemnification obligations set forth in
								section 8 and either party’s confidentiality obligations set
								forth in section 4, and a party’s gross negligence and willful
								misconduct, neither party will be liable to the other for any
								consequential, special, punitive, or indirect damages of any
								sort, including, without limitation, (a) any damages for lost
								profits, or (b) any damages resulting from loss of use or loss
								of data. Neither party’s total liability to the other party
								under this agreement shall exceed the total of fees paid
								according to this agreement.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>11.2</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								Vickey group does not warrant or guarantee, and is not
								responsible for any work performed or services provided by
								consultant. Vickey group does not warrant the vickey platform
								and does not guarantee that it will be uninterrupted or that its
								operation will be error-free. It is understood and agreed that
								while vickey group shall take reasonable care and use
								commercially reasonable efforts in arranging and provisioning of
								the vickey platform and vickey services, vickey group shall not
								be liable for the timely provisioning of orders for customer or
								for any act of commission or omission in connection with this
								agreement over which vickey group has no control.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>11.3</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								Except as set out in this agreement, vickey group does not make
								any other warranties or representations relating to the vickey
								platform or vickey services, including, without limitation, the
								nature, quality and background of the consultant, or any legal
								impediment relating to the engagement of the consultant by
								vickey group in connection with the vickey services. All other
								warranties, express or implied are expressly disclaimed and
								excluded, including warranties of merchantability and of fitness
								for a particular purpose
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box>
					<Box
						sx={{
							fontSize: "15px",
							my: 3,
							display: "flex",
							alignItems: "flex-start",
						}}>
						<Typography sx={{ fontWeight: 700, mx: 3 }}>12.</Typography>
						<Typography sx={{ fontSize: "15px" }}>
							<b>Dispute Resolution. </b>&nbsp;
						</Typography>
					</Box>
					<Grid container spacing={1}>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>12.1</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								If a dispute arises out of or relates to this contract, or the
								breach thereof, and if the dispute cannot be settled through
								negotiation, the parties agree first to try in good faith to
								settle the dispute by mediation administered by the American
								Arbitration Association under its Commercial Mediation
								Procedures before resorting to arbitration, litigation, or some
								other dispute resolution procedure.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>12.2</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								If the Parties have not been successful in resolving through
								mediation as set forth in 12.1, then the Parties shall attempt
								to resolve the dispute through binding arbitration by a sole
								arbitrator selected by the Parties in accordance with the then
								current Commercial Arbitration Rules of the American Arbitration
								Association ("AAA") in effect at the time, in San Francisco,
								California. Any award shall be final and binding and judgment
								thereon may be entered in any court of competent jurisdiction.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>12.3</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								Each Party shall bear its own expenses and an equal share of the
								expenses of the mediator or arbitrator and the fees of the AAA.
								The Parties, their representatives, other participants and the
								mediator or arbitrator shall hold the existence, content and
								result of the dispute resolution process in confidence. Subject
								to other provisions of this Agreement, if a dispute is not
								resolved by arbitration, the Parties shall have the right to
								resort to any remedies permitted by law. All defenses based on
								passage of time shall be tolled pending the termination of
								arbitration. Nothing in this paragraph will be construed to
								preclude either Party from seeking injunctive relief in order to
								protect its rights pending an outcome in arbitration. A request
								by a party to a court for such injunctive relief shall not be
								deemed a waiver of the obligation to mediate.
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box>
					<Box
						sx={{
							fontSize: "15px",
							my: 3,
							display: "flex",
							alignItems: "flex-start",
						}}>
						<Typography sx={{ fontWeight: 700, mx: 3 }}>13.</Typography>
						<Typography sx={{ fontSize: "15px" }}>
							<b>Term; Termination.</b>&nbsp;
						</Typography>
					</Box>
					<Grid container spacing={1}>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>13.1</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Term.</u>&nbsp;This Agreement shall take effect on the
								Effective Date and shall remain in effect for the Initial Term
								set forth above unless terminated as permitted herein.
								Thereafter, this Agreement shall automatically renew for
								successive one (1) year terms (each a <b>“Renewal Term”</b>)
								unless and until terminated as permitted herein. The Initial
								Term and any Renewal Term(s) shall collectively be the “Term.”
								The term of each Scope of Work shall commence as of the SOW
								Effective Date and remain in effect for the period specified
								therein, unless and until terminated as permitted herein. Upon
								termination or expiration of this Agreement, Customer will cease
								all use of the VICKEY Platform.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>13.2</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Termination.</u>&nbsp;
								<Grid container spacing={1}>
									<Grid item xs={12} sx={{ display: "flex", ml: 2 }}>
										<Typography sx={{ fontWeight: 700, mr: 2 }}>
											13.2.1
										</Typography>
										<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
											Either Party may terminate this Agreement by giving not
											less than thirty (30) days prior written notice to the
											other Party or as provided for below. In the event of
											termination, this Agreement will continue to govern the
											Parties’ rights and obligations with respect to services
											performed prior to termination and any rights and
											obligations which survive the termination of the
											Agreement.
										</Typography>
									</Grid>
									<Grid item xs={12} sx={{ display: "flex", ml: 2 }}>
										<Typography sx={{ fontWeight: 700, mr: 2 }}>
											13.2.2
										</Typography>
										<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
											In the event of termination of this Agreement pursuant to
											13.2.1 above, the services being provided by Consultant
											under and pursuant to any Scope of Work will continue to
											be performed and payment in respect of them to be due in
											accordance with the termination provisions contained in
											such Scope of Work or until the expiration of the term of
											such Scope of Work.
										</Typography>
									</Grid>
									<Grid item xs={12} sx={{ display: "flex", ml: 2 }}>
										<Typography sx={{ fontWeight: 700, mr: 2 }}>
											13.2.3
										</Typography>
										<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
											Notwithstanding Section 13.2.2, Customer may request of
											VICKEY Group to terminate the services being provided by
											Consultant under and pursuant to any Scope of Work
											provided that Customer has and will comply with the
											obligations imposed on it under Section 7. VICKEY Group
											will take all reasonable steps necessary to allow the
											termination to be effective at the earliest possible date
											without being in breach of any relevant laws, regulations
											or agreements and in respect with the relevant applicable
											law to limit exposure to potential lawsuit and related
											risk. On such effective termination date, Customer shall
											have no liability to make any further payment to VICKEY
											Group other than in respect of amounts accrued, due or
											relating to any period prior to such effective termination
											date and any statutory requirements or regulations
											including, but not limited to, pay-in-lieu of notice or
											vacation, termination indemnity and their related direct
											or indirect costs and fees.
										</Typography>
									</Grid>
									<Grid item xs={12} sx={{ display: "flex", ml: 2 }}>
										<Typography sx={{ fontWeight: 700, mr: 2 }}>
											13.2.4
										</Typography>
										<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
											13.2.4. VICKEY Group is entitled to terminate this
											Agreement or any Scope of Work with immediate effect upon
											the happening of any of the following occurrences:
											<Grid container spacing={1}>
												<Grid item xs={12} sx={{ display: "flex", ml: 2 }}>
													<Typography sx={{ fontWeight: 700, mr: 2 }}>
														13.2.4.1
													</Typography>
													<Typography
														sx={{ fontSize: "15px", fontWeight: "400" }}>
														if, having failed to pay one or more invoices by the
														due date and having been served notice by VICKEY
														Group to do so within eight (8) days, Customer has
														failed to pay all the amounts due, together with
														interest, within eight (8) days of receiving such
														notice; or
													</Typography>
												</Grid>
												<Grid item xs={12} sx={{ display: "flex", ml: 2 }}>
													<Typography sx={{ fontWeight: 700, mr: 2 }}>
														13.2.4.2
													</Typography>
													<Typography
														sx={{ fontSize: "15px", fontWeight: "400" }}>
														if Customer is in breach of a material term of this
														Agreement, including in particular any of the
														obligations contained in Section 7, and having been
														served notice by VICKEY Group to remedy any such
														breach, the Customer fails to do so within eight (8)
														days of receiving such notice.
													</Typography>
												</Grid>
											</Grid>
										</Typography>
									</Grid>
									<Grid item xs={12} sx={{ display: "flex", ml: 2 }}>
										<Typography sx={{ fontWeight: 700, mr: 2 }}>
											13.2.5
										</Typography>
										<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
											In the event of such termination of this Agreement
											pursuant to Section 13.2.4 above and without waiver of its
											rights to claim damages or an indemnity for any losses
											suffered by it, VICKEY Group may immediately terminate the
											services being provided by Consultant under and pursuant
											to any Scope of Work or elect to have the VICKEY Services
											provided under and pursuant to it to continue to be
											performed until the date provided for in such Scope of
											Work.
										</Typography>
									</Grid>
									<Grid item xs={12} sx={{ display: "flex", ml: 2 }}>
										<Typography sx={{ fontWeight: 700, mr: 2 }}>
											13.2.6
										</Typography>
										<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
											Customer may terminate this Agreement if VICKEY Group is
											in breach of a material term of this Agreement, including
											in particular any of the obligations contained in Section
											6 and having been served notice by Customer to remedy any
											such breach, VICKEY Group fails to do so within thirty
											(30) days of receiving such notice. In such case, Customer
											may terminate the services being provided by Consultant
											under and pursuant to any Scope of Work, provided that it
											has complied and will comply with the obligations
											contained in Section 7 above or elect to have the services
											provided under and pursuant to it to continue to be
											performed until the date provided for in such Scope of
											Work.
										</Typography>
									</Grid>
									<Grid item xs={12} sx={{ display: "flex", ml: 2 }}>
										<Typography sx={{ fontWeight: 700, mr: 2 }}>
											13.2.7
										</Typography>
										<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
											A Party has the right to immediately terminate this
											Agreement in the event that the other Party (a) defaults
											in the performance of any of its material duties or
											obligations under this Agreement and the default is not
											cured within fourteen (14) days after written notice is
											given to the defaulting Party specifying the default; or
											(b) becomes insolvent, makes a general assignment for the
											benefit of creditors, is subject to or permits the
											appointment of a receiver for its business or assets or
											avails itself of or becomes subject to any proceeding
											under the Federal Bankruptcy Code or any other federal,
											state or foreign statute relating to insolvency or
											protection of creditors, and the proceeding is not
											discharged within ninety (90) days after filing.
										</Typography>
									</Grid>
									<Grid item xs={12} sx={{ display: "flex", ml: 2 }}>
										<Typography sx={{ fontWeight: 700, mr: 2 }}>
											13.2.8
										</Typography>
										<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
											Customer acknowledges that VICKEY Group reserves the right
											to terminate this Agreement or any Scope of Work in
											circumstances whereby the VICKEY Services and/or VICKEY
											Platform may be used other than as intended as reasonably
											determined by VICKEY Group, or whereby Customer’s usage
											adversely affect or interfere with the operation of the
											product or service, or the use of the product or service
											by others.
										</Typography>
									</Grid>
									<Grid item xs={12} sx={{ display: "flex", ml: 2 }}>
										<Typography sx={{ fontWeight: 700, mr: 2 }}>
											13.2.9
										</Typography>
										<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
											Notwithstanding the foregoing, either party may terminate
											any Scope of Work in accordance with the applicable terms
											and conditions set forth therein.
										</Typography>
									</Grid>
								</Grid>
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>13.3</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Survival.</u>&nbsp;The termination or expiration of this
								Agreement will not discharge or relieve either Party of any
								obligations that are intended to survive the termination of this
								Agreement, including but not limited to Sections 4, 5, 8 and 9
								through 14.
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box>
					<Box
						sx={{
							fontSize: "15px",
							my: 3,
							display: "flex",
							alignItems: "flex-start",
						}}>
						<Typography sx={{ fontWeight: 700, mx: 3 }}>14.</Typography>
						<Typography sx={{ fontSize: "15px" }}>
							<b>General. </b>&nbsp;
						</Typography>
					</Box>
					<Grid container spacing={1}>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>14.1</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Relationship.</u>&nbsp;The Parties are and will remain
								independent contractors. Nothing herein will be deemed to
								establish a partnership, joint venture or agency relationship
								between the Parties. Neither Party will have the right to
								obligate or bind the other Party in any manner to any third
								party. Without limiting the foregoing, neither party shall make
								any representations or warranties to third parties on behalf of
								the other Party hereto. The Parties agree to deal with each
								other fairly and in good faith and to perform all acts
								reasonably required to carry out the intent of this Agreement.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>14.2</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Assignment.</u>&nbsp;Customer will not assign its rights and
								duties under this Agreement to another (including an affiliate)
								without the prior written consent of VICKEY Group. Any purported
								assignment in violation of this Section 14.2 will be void and of
								no effect. No assignment will relieve Customer of its previously
								accrued obligations under this Agreement. This Agreement will be
								binding upon and inure to Customer’s permitted successors and
								assigns.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>14.3</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Compliance with Laws.</u>&nbsp;Each Party will comply with
								the applicable state, federal and local laws, executive orders
								and regulations in the performance of its obligations under this
								Agreement, including but not limited to export control laws and
								regulations. Each Party certifies that it has full capacity to
								enter into and perform its obligations under this Agreement.
								Each Party certifies that there are no actions, suits or
								proceedings or regulatory investigations pending or affecting
								that might affect its ability to meet and carry out its
								obligations under this Agreement. Both Parties acknowledge that
								they comply with all health and safety, security (including
								information security policies), privacy, and other policies,
								procedures and requirements for all settings where VICKEY Group
								shall provide VICKEY Services under this Agreement.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>14.4</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Construction.</u>&nbsp;The headings and captions appearing in
								this Agreement have been inserted for the purposes of
								convenience and ready reference only and do not purport to and
								will not be deemed to define, limit or extend the scope or
								intent of the provisions to which they appertain. Where the
								context so admits, words and expressions appearing in the
								singular in this Agreement may be interpreted in the plural, and
								vice versa. Words having well known technical or trade meanings
								shall be so construed.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>14.5</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Entire Agreement; Modification.</u>&nbsp;This Agreement,
								including its attached Exhibits, constitutes the entire
								agreement between the Parties and supersedes all prior
								agreements and understandings between them, whether written or
								oral, between them relating to the subject matter of this
								Agreement. No modification to, amendment of or other change in
								this Agreement will be binding on either Party unless it is in
								writing and signed by authorized representatives of both
								Parties.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>14.6</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Waiver.</u>&nbsp;No waiver of any provision of this Agreement
								will be effective unless made in writing and signed by the
								waiving Party, nor will any such waiver, if made, constitute a
								waiver of any subsequent breach of the same or of any other
								provision of this Agreement. The failure of either Party at any
								time to enforce any right or remedy available to it under this
								Agreement or otherwise with respect to any breach or failure by
								the other Party shall not be construed to be a waiver of such
								right or remedy with respect to any other breach or failure by
								the other Party.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>14.7</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Force Majeure.</u>&nbsp;Neither party shall have no
								liability, including as set forth in this Section, for
								non-performance or interruption of the VICKEY Services
								(including delays on the part of VICKEY Group in making
								deliveries hereunder), due to a Force Majeure even that occurs
								beyond VICKEY Group’s control. 'Force Majeure Event' means any
								act beyond a party's reasonable control, including without
								limitation any of the following: (i) flood, fire, earthquake, or
								explosion; (ii) epidemic, pandemic, or other health emergency,
								(iii) war, invasion, hostilities (whether war is declared or
								not), terrorist threats or acts, riot, or other civil unrest;
								(iv) government order or law; (v) actions, embargoes, or
								blockades in effect on or after the date of this Agreement; and
								(vi) action by any governmental authority. Unless the
								performance by VICKEY Group of its obligations under this
								Agreement is delayed by the occurrence of an Event of Force
								Majeure for a period of more than one (1) year (and such delay
								is excused under the foregoing provisions), no Event of Force
								Majeure shall excuse permanent non-performance, but shall excuse
								only delays in performance and only to the extent that such
								delays are directly attributable to such cause. Should any Event
								of Force Majeure delay performance for a period of more than one
								(1) year, either Party may terminate and rescind this Agreement
								upon notice to the other Party.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>14.8</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Non-Exclusivity.</u>&nbsp;This Agreement is nonexclusive and
								nothing contained herein shall prevent either Party from
								undertaking similar activities or entering into similar
								agreements for similar purposes with third parties.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>14.9</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Governing Law.</u>&nbsp;This Agreement will be construed in
								accordance with and governed by the substantive laws of the
								State of Jordan. The Parties hereby agree that the United
								Nations Convention on Contracts for the International Sale of
								Goods will not apply to this Agreement.
							</Typography>
						</Grid>
						v
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>14.10</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Relationship Between Parties.</u>&nbsp;Relationship between
								Customer and VICKEY Group shall be that of an independent
								contractor, and nothing in this Agreement is intended to nor
								shall be constructed as creating a partnership, joint venture,
								agency, or employment relationship.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>14.11</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Publicity.</u>&nbsp;Except as set forth herein, without the
								other Party’s prior written consent in each instance, neither
								Party will (a) make any other public statements or issue any
								press releases regarding this Agreement or the relationship
								between the Parties; (b) disclose or publish the terms and
								conditions of this Agreement; or (c) use the other Party’s name,
								logo or trademarks.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>14.12</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Severability.</u>If any provision of this Agreement is held
								invalid or unenforceable under any applicable law, such
								invalidity or unenforceability will not affect any other
								provision of this Agreement that can be given effect without the
								invalid or unenforceable provision, and this Agreement will be
								construed as if said invalid or unenforceable provision had not
								been contained herein.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>14.13</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Remedies Cumulative.</u>&nbsp; The rights and remedies of the
								Parties under this Agreement will be cumulative and in addition
								to all other rights and remedies available at law and in equity.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>14.14</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								<u>Counterparts; Electronic Signatures.</u>&nbsp;This Agreement
								may be executed in multiple counterparts, each of which will be
								deemed to be an original, and all such counterparts will
								constitute but one instrument. An electronic signature or a scan
								of an original signature or digitally signed version transmitted
								to the other Party is effective as if the original was sent to
								the other Party.
							</Typography>
						</Grid>
					</Grid>
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
									<TableCell></TableCell>
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
