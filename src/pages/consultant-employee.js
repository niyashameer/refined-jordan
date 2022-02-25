import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography, Grid } from "@mui/material";
import ConsultantTable from "../components/consultant-agreement-table";
import ConsultantSignatureTable from "../components/consultant-employee-signature-table";

export default function ConsultantEmployee() {
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
						CONSULTANT EMPLOYMENT AGREEMENT
					</Typography>
				</Box>

				<Box>
					<Typography sx={{ fontSize: "15px", my: 3 }}>
						This Agreement made effective this{" "}
						<span className='sow-date'>______</span> by and between VICKEY
						GROUP, a Jordanian corporation (hereinafter referred to as
						“Employer”) and <span className='sow-date'>______</span>
						(hereinafter referred to as “Employee”).
						<br />
						<br /> WHEREAS, Employer is in the business of locating consultant
						job assignments and providing consulting services in accordance with
						the needs of its customer clients (hereinafter referred to as
						“Clients”) throughout the world; and <br />
						<br /> WHEREAS, Employee desires to be employed by Employer, in the
						capacity of consultant on Employer’s professional staff, reporting
						to Employer’s executive and management personnel, and performing
						work on Client projects as assigned by Employer, and Employer
						desires to employ Employee in that capacity; and <br />
						<br />
						NOW, THEREFORE, in consideration of the mutual promises, covenants
						and conditions set forth herein, the parties hereto agree as
						follows:
					</Typography>
				</Box>

				<Box
					sx={{
						fontSize: "18px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>1.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<u>SCOPE OF DUTIES. </u>&nbsp;Employer employs Employee and Employee
						accepts employment upon the terms and conditions set forth in this
						Agreement. Employee shall perform technical assignments such
						computer programming, software development, systems analysis,
						professional engineering, consulting, technical writing or other
						specialized technical services, and/or non-technical assignments as
						he/she is directed to perform by Employer’s management for
						Employer’s Clients. Employee represents that, in the performance of
						his/her services for Employer’s Clients, he/she will regularly and
						typically exercise sound discretion and independent judgment with
						respect to the significant matters entrusted to him/her.
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
						<u>TERM. </u>&nbsp;Employee’s employment will commence on and shall
						continue in effect unless and until such employment is terminated by
						Employer or Employee in accordance with the provisions of paragraph
						12 or 17. Employee agrees that, in the event that Employer’s Client
						for which Employee is scheduled to perform services informs
						Employer, prior to the above stated date on which Employee's
						services are scheduled to commence, that the commencement date is
						being postponed, then Employer will inform Employee immediately and
						Employee agrees that he/she will commence performing services on the
						revised commencement date as determined by the Client. Further, if
						Client cancels the proposed assignment before it commences, no
						employment relationship with Employer will occur. No payment will be
						made to Employee for any period before Employee actually begins
						performing services under an employment relationship with Employer
						on assignment to Client, and Employee agrees that Employer shall
						have no liability to Employee in the case of such postponement or
						cancellation by Client.
					</Typography>
				</Box>
				<Box
					sx={{
						fontSize: "18px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>3.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<u>COMPENSATION, TIME RECORDS, DEDUCTIONS. </u>&nbsp;Employer agrees
						to pay Employee in accordance with the compensation plan attached to
						this Agreement as Exhibit A and made a part hereof, provided,
						however, the compensation plan may be changed prospectively by
						Employer as stated in the last four sentences of this paragraph 3.
						For each assignment Employee will record on Employer’s prescribed
						time record or on an alternative time record system approved in
						writing by Employer in regard to a particular client (e.g., an
						electronic time entry system), and in accordance with any procedures
						established by Employer, all of Employee’s hours worked on each day.
						Prior to submitting any such time record to Employer, Employee shall
						obtain on each time record Client’s signature confirming and
						approving the hours worked by the Employee, unless Employer has
						approved in writing in advance the submission of alternative time
						records not signed by a particular Client. Employee agrees that such
						Client approved time record or alternative time record shall be
						conclusive as to maximum time worked each day and week by Employee
						and Employee will not claim to have worked more hours than recorded.
						Employee further agrees that he/she is responsible for ensuring that
						such time record for each pay period (including Client signature
						where required) is received by Employer in accordance with the time
						deadline and instructions issued by Employer in regard to that
						Client, and that without such record Employer may conclude at such
						time that Employee did not perform any work during a week for which
						no time record is submitted. Employee recognizes that Employer may
						elect to modify or supplement these procedures, orally or in
						writing, and Employee agrees to be bound by any such future
						modifications or additions of which he/she is advised. Employer
						shall deduct amounts from Employee’s compensation only as authorized
						by applicable law, including, but not limited to, amounts
						attributable to all applicable income tax withholding. Employee’s
						compensation may be changed prospectively in accordance with law
						from time to time after notice from the Company to Employee (such
						compensation may increase or decrease, and may be based upon changes
						in Employer’s bill rate to the Client or other considerations). In
						the event that such compensation is changed prospectively by such
						notice, whether it is increased or decreased, the change shall take
						effect and this Agreement shall remain in effect unless Employee or
						the Company terminates employment as set forth in paragraph 12 or 17
						below. For so long as Employee continues to work after notice from
						Employer of changed compensation, whether or not Employee has given
						notice of resignation, then such continuation of employment shall
						constitute an agreement to accept the changed compensation. Employee
						recognizes that, over time, there may be multiple prospective
						changes in compensation pursuant to these procedures.
					</Typography>
				</Box>
				<Box
					sx={{
						fontSize: "18px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>4.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<u>BENEFITS. </u>&nbsp;Employer shall pay such employment taxes as
						may be required by law to provide Employee with any benefits to
						which Employee may be entitled under federal and state unemployment
						law and under state workers’ compensation insurance law.
						<b>
							&nbsp;EXCEPT TO THE EXTENT SET FORTH IN EXHIBIT A AS IT RELATES TO
							BENEFITS FROM EMPLOYER, EMPLOYEE AGREES THAT HE/SHE SHALL BE
							ENTITLED TO NO OTHER BENEFITS OF ANY KIND EITHER FROM EMPLOYER OR
							FROM CLIENT FOR WHICH EMPLOYEE PERFORMS SERVICES, THAT HE/SHE HAS
							NEGOTIATED HIS/HER COMPENSATION WITH FULL KNOWLEDGE THEREOF, AND
							THAT HE/SHE WILL NOT MAKE A CLAIM TO AND HEREBY WAIVES ANY OTHER
							BENEFITS THAT EMPLOYER MAY PROVIDE OR THAT CLIENT MAY PROVIDE.
						</b>
					</Typography>
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
						<u>HOURS. </u>&nbsp; Subject to the provisions in <u>Exhibit A</u>,
						which is attached to this Agreement, while performing work at
						Client’s site Employee shall work the hours established by Employer.
					</Typography>
				</Box>
				<Box
					sx={{
						fontSize: "18px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>6.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<u>EXCLUSIVITY. </u>&nbsp; Employee hereby agrees that during the
						term of this Agreement he/she shall provide full-time service and
						shall refrain from performing services for others to the extent
						required by Employer.
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
						<Typography sx={{ fontWeight: 700, mx: 3 }}>7.</Typography>
						<Typography sx={{ fontSize: "15px" }}>
							<u>NON-PERFORMANCE OF SERVICES AND NON-RECRUITMENT.</u>
						</Typography>
					</Box>
					<Grid container spacing={1}>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>A</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								To protect the confidential information and materials being
								provided to Employee in order to better enable Employee to
								perform his/her current or future services for Employer’s
								Client, as further set forth in paragraph 13 below, and to
								assure that Employee honors his/her duty of loyalty to Employer,
								then during the term of this Agreement and for one year after
								the termination of Employee’s employment relationship with
								Employer, regardless of any reason or no reason given for such
								termination, and whether such termination was by Employer or
								Employee, and whether such termination with or without cause,
								Employee agrees that Employee will not do any of the following,
								directly or indirectly, as a principal, employer, stockholder,
								partner, other equity owner, officer, director, agent,
								consultant, independent contractor, or employee:
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>B.</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								Employee will notify Employer immediately, in writing, in the
								event any person communicates with Employee about performing
								services for any Client in a situation that would be covered by
								any provision contained under subparagraph A.1 above in this
								paragraph 7. The term “communicates with” includes, but is not
								limited to, any contact with or approach by an employee or agent
								of such Client or of another person (including any staffing
								firm) during which any inquiry is made concerning Employee’s
								interest in performing such services for the Client, or during
								which any request is made that Employee submit a resume or
								employment application regarding the performance of such
								services for the Client, or during which there is a discussion
								of proposed terms and conditions for the performance of such
								services for the Client, or during which any offer is made to
								retain Employee to perform such services for the Client.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>C.</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								For purposes of this paragraph 7, the term “Client” includes any
								affiliates, customers and clients of Employer’s Clients (for
								example, if ABC is Employer’s Client, but the technical services
								being performed by Employee for ABC are actually being performed
								for X Corporation at times on the premises of X Corporation,
								which is ABC’s customer, then X Corporation is also a Client for
								purposes of this paragraph 7).
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>D.</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								Each provision of this paragraph 7 shall be construed as
								agreement independent of any other provision of this Agreement,
								and the existence of any claim or cause of action by Employee
								against Employer, whether based on this Agreement or otherwise,
								shall not constitute a defence to the enforcement by Employer of
								any provision in this paragraph 7.
							</Typography>
						</Grid>
						<Grid item xs={10} sx={{ display: "flex", ml: 10 }}>
							<Typography sx={{ fontWeight: 700, mr: 2 }}>E.</Typography>
							<Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
								Employer and Employee have attempted in good faith to restrict
								Employee’s activities only to the extent necessary to protect
								Employer as set forth above. They recognize, however, that
								reasonable people may differ in making such a determination.
								Consequently, Employer and Employee agree that if the scope or
								enforceability of any of the above restrictions is in any way
								disputed at any time, it would be unfair to claim and no claim
								will be made that the restrictions are void in their entirety,
								and instead a court, arbitrator, or other trier of fact may
								modify (through deletion and/or revision or reformation) and
								enforce the restrictions, including but not limited to duration,
								geographical scope, and duties, to the maximum extent that it
								believes to be reasonable under the circumstances existing at
								that time. If a court or arbitrator itself will not revise the
								restrictions deemed unreasonable, Employer and Employee agree
								that immediately upon identification by the court or arbitrator
								of those unreasonable provisions, they will reform the Agreement
								by deleting or revising those provisions and will agree to the
								enforcement of this Agreement as reformed by them.
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
					<Typography sx={{ fontWeight: 700, mx: 3 }}>7.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<u>REIMBURSEMENT OF EXPENSES. </u>&nbsp; Employer shall reimburse
						Employee only for those necessary and ordinary expenses approved by
						Employer, in writing, in advance, but such reimbursement shall not
						occur until after Employee submits to the satisfaction of Employer
						an itemized accounting of expenses and any supporting documentation
						as may be requested. In the event that Employer reimburses or
						otherwise pays Employee for any job relocation expenses incurred by
						Employee in accepting employment with Employer or relocating from
						one assignment to another, then Employee will immediately refund to
						Employer upon Employer’s request the pro rata amount of any such
						expenses if Employee leaves his/her employment with Employer within
						18 months of the reimbursement or payment of such expenses by
						Employer. In addition, if Employer reimburses or otherwise pays
						Employee for any visa-related expenses or green card-related
						expenses (such as, but not limited to, expenses for the benefit of
						Employee like certain processing fees, or transportation, housing
						and food expenses), then Employee will immediately refund to
						Employer upon Employer’s request the pro rata amount of such
						expenses that Employer is permitted to recover by law as liquidated
						damages or otherwise if Employee leaves his/her employment within 18
						months of the reimbursement or payment of such expenses by Employer.
						The above pro rations of expenses shall be made by dividing the
						total amount reimbursed and otherwise paid by Employer into 36 equal
						bi-monthly periods, and the amount to be refunded by Employee shall
						be the prorated amount attributed to each full bi-monthly period
						after Employee’s employment has ceased.
					</Typography>
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
						<u>DIRECTION , EMPLOYMENT STATUS AND TESTING. </u>&nbsp; Employee
						agrees to adhere to all applicable policies, procedures and rules of
						Employer and, to the extent directed by Employer, to adhere to those
						of others. Although Employee may work as required by Employer on a
						Client project and at such locations as Employer directs, he/she
						agrees that Employer exercises primary direction and control over
						Employee and has the right to direct Employee as to when, where and
						how Employee is to perform the work, and that Employee works in the
						name of Employer. Employer has the right to instruct Employee as to
						which tools and technology Employee will use on the job and the
						right to require that Employee perform the work in the order or
						sequence directed by Employer. Employer has the right to require
						Employee’s attendance at meetings at Employer’s or any other
						premises. Employee’s performance is subject to the review and
						approval of Employer.{" "}
						<b>
							<u>
								EMPLOYEE AGREES THAT HE/SHE IS SOLELY AN EMPLOYEE OF EMPLOYER
								AND EMPLOYEE IS NOT, FOR ANY PURPOSES WHATSOEVER (INCLUDING BUT
								NOT LIMITED TO ANY BENEFITS, GUARANTEES OR RIGHTS), AN EMPLOYEE
								OF CLIENT FOR WHICH HE/SHE IS PERFORMING SERVICES, NOR WILL
								EMPLOYEE MAKE ANY CLAIM TO THE CONTRARY TO BE AN EMPLOYEE OF
								CLIENT OR TO BE ENTITLED TO ANY BENEFITS, GUARANTEES OR RIGHTS
								THAT CLIENT PROVIDES OR IS REQUIRED TO PROVIDE TO ITS EMPLOYEES.
								TO THE EXTENT ANY DETERMINATION IS MADE THAT EMPLOYEE IS AN
								EMPLOYEE OF CLIENT OR IS OTHERWISE ENTITLED TO SUCH BENEFITS,
								GUARANTEES OR RIGHTS, EMPLOYEE HEREBY KNOWINGLY AND VOLUNTARILY
								WAIVES THE SAME TO THE FULL EXTENT PERMITTED BY LAW.
							</u>
						</b>
						Further, Employee agrees to submit to any screening test, skills
						testing, background check and drug test required by Employer and as
						permitted by law, the results of which may affect commencement or
						continuation of employment.
					</Typography>
				</Box>

				<Box
					sx={{
						fontSize: "18px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>10.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<u>REPORTS. </u>&nbsp; Upon request of Employer, Employee shall
						provide Employer with reports of progress or major developments on
						Client projects, on the time record Employee submits pursuant to
						paragraph 3 above or as otherwise requested by Employer.
					</Typography>
				</Box>

				<Box
					sx={{
						fontSize: "18px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>11.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<u>EMPLOYEE REFERRALS. </u>&nbsp; In the course of performing work
						for Client, if Employee becomes aware of the potential opportunity
						for Employer to provide additional personnel to Client, Employee
						will notify Employer.
					</Typography>
				</Box>

				<Box
					sx={{
						fontSize: "18px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>12.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<u>DISCHARGE.</u>&nbsp; Employer may terminate Employee’s employment
						at any time, with or without cause, and with or without prior
						notice, and nothing in this Agreement shall be deemed to restrict
						Employer from taking such action.
					</Typography>
				</Box>

				<Box
					sx={{
						fontSize: "18px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>13.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<u>CONFIDENTIALITY AND GOODWILL.</u>&nbsp; In connection with and in
						consideration of Employee’s employment by Employer, Employer has
						disclosed and/or will disclose to Employee, and Employee
						acknowledges that he/she has received and/or will receive from
						Employer, confidential information and materials regarding Employer
						and its Clients and that his/her receipt thereof is solely for the
						purpose of assisting him/her in better performing his/her duties as
						an employee of Employer under this Agreement. Such confidential
						information and materials are and remain the property of Employer
						and its Clients respectively. Employee further acknowledges that the
						goodwill associated with the performance of his/her services for a
						Client is the property of Employer that may be used solely for the
						benefit of Employer and such goodwill has resulted in part from
						Employer’s protection and careful use of its confidential
						information and materials. As used in this Agreement, the phrase
						“confidential information and materials” means all proprietary
						information belonging to Employer or Employer’s Clients, not
						generally known by the public, and relating to their respective
						services and products, customers, business methods, strategies and
						practices, internal operations, pricing and billing, financial data,
						costs, personnel information (including but not limited to names of
						co-workers and their educational background, prior experience, terms
						of employment or engagement, roles in regard to providing services
						to Employer and/or its Clients, and availability), Client and
						supplier contacts and needs (including Employer’s compilation and
						analysis of past, current and future Client needs, buying habits and
						preferences, technical infrastructure, work environments and
						concerns, and important personnel as relate to the technical
						services provided and/or to be provided to the Client by Employer
						and by its competitors, as well as Client feedback to Employer
						regarding Employee’s services), sales lists, technology, software,
						computer programs and systems, inventions, developments, trade
						secrets of every kind and character, and other information otherwise
						designated by Employer or any of its Clients as confidential and
						protected as such under either the law of the state of New York or
						of the state where Employee has performed services under this
						Agreement. Employee acknowledges that he/she may use such
						confidential information and materials, and use the goodwill
						associated with his/her services that relate to such confidential
						information and materials, only during his/her term of employment by
						Employer and solely for the purpose of such employment, and that
						this right expires upon Employee’s discharge or resignation.
						Employee therefore agrees, both at any time during the term of this
						Agreement and at any time after its termination, and except as
						specifically authorized in writing in advance by Employer, that
						he/she will not misappropriate for him/herself or any other person,
						the above goodwill of Employer associated with the above
						confidential information and materials, nor use for his/her own
						benefit or for the benefit of any other person, or divulge to any
						person, any such confidential information and materials related to
						the business of Employer, its Clients, or the Clients’ customers,
						clients and affiliates. Employee agrees to take any and all
						reasonable actions, including those requested by Employer or Client,
						to prevent such misappropriation or disclosure and preserve the
						security of confidential information and materials. Employee further
						agrees that he/she will not directly or indirectly disclose to any
						person, including to the Client or to any co-workers either during
						or after his/her period of employment, Employee’s wage rates and
						terms unless otherwise expressly permitted by law for
						legally-authorized purposes or permitted by prior written consent of
						Employer (disclosure to a spouse or financial institution shall be
						permitted so long as further disclosure by such spouse or
						institution is prohibited).
					</Typography>
				</Box>

				<Box
					sx={{
						fontSize: "18px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>14.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<u>RETURN OF PROPERTY. </u>&nbsp;Employer directs and Employee
						agrees that in regard to all keys, pass cards, identification cards,
						listings, policy and procedure manuals, inventions, records, data,
						plans, programs, magnetic tapes, card decks, letters, memos or other
						documents or materials of any nature, including any copies thereof
						made by or for Employee (collectively, “Property”), that are in
						Employee’s possession or control and that relate to his/her
						assignment or activities for the Client or employment with Employer,
						he/she will immediately deliver to Client such Property of Client
						upon termination of an assignment with Client and to Employer such
						Property of Employer upon termination of Employment.
					</Typography>
				</Box>

				<Box
					sx={{
						fontSize: "18px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>15.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<u> PROPRIETARY RIGHTS. </u>&nbsp; Employee shall disclose fully and
						promptly to Employer and to any Client for which Employee has
						performed work all of the following: any and all inventions,
						processes, innovations, discoveries, developments, designs,
						techniques, formulae, improvements, computer programs and other
						technical materials relating to the business of Employer or
						Employer’s Client which Employee shall discover, conceive, make,
						generate or reduce to practice, alone or jointly with others, during
						his/her term of employment with Employer, and resulting from such
						employment, whether or not they are patentable or copyrightable.
						Employee hereby agrees to assign to such Client his/her rights and
						interests in any inventions, processes, innovations, discoveries,
						and other similar materials, including copyrights to all
						copyrightable material and all patent rights to all patentable
						material unless specifically directed otherwise in writing by
						Employer. No rights shall be reserved to Employee. Employee agrees
						to execute and transfer at any time, upon Employer’s request, any
						certification, affidavit or other document confirming the Client’s
						ownership rights under this paragraph. Upon request at any time
						during or after the term of this Agreement, and at the expense of
						Employer or its Client for whom the work in question was performed,
						Employee agrees to assist Employer and Client, including their
						attorneys, in applications for patents or copyrights relating to
						such inventions, processes and other materials named in this
						paragraph. Assistance in preparing and prosecuting such applications
						shall include assistance regarding litigation, and, upon Employer’s
						or said Client’s request, the execution of all papers and
						performance of all tasks that may reasonably be necessary to protect
						the rights of Employer or Client and to vest in it or its assigns
						ownership of the inventions, applications, copyrights and patents
						herein contemplated. Where Employee is performing the work for
						Employer and there is no identifiable Client, the term “Client” in
						this paragraph 15 shall mean “Employer”.
					</Typography>
				</Box>

				<Box
					sx={{
						fontSize: "18px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>16.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<u> REPRESENTATIONS AND COOPERATION. </u>&nbsp; Employee warrants
						that all information provided by Employee (including, but not
						limited to resume, interview, and references) in consideration for
						employment by Employer or for assignment to a Client is true to the
						best of Employee’s knowledge. Employee further warrants that he/she
						is not restricted by, and has no conflict of interest derived from,
						any employment or other agreement or any other interest or
						obligation that would interfere with or prohibit his/her performing
						work as directed under this Agreement for Employer or for any Client
						or potential Client of Employer, and that he/she shall inform
						Employer immediately should such a restriction or conflict arise.
						Both during and after employment, Employee agrees to cooperate fully
						with any request by Employer for Employee to provide any
						information, orally and in writing, related to the performance of
						Employee’s services, including but not limited to any information
						required by Employer to respond to any questions, claims, defenses
						and the like raised by any person or governmental agency or required
						by Employer to prepare or file any claims, defenses or the like to
						be made by Employer, whether during or after employment.
					</Typography>
				</Box>

				<Box
					sx={{
						fontSize: "18px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>17.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<u>RESIGNATION.</u>&nbsp; Employee may resign with or without reason
						as of a specified date, but in order to assure Client an adequate
						transition to alternative services, Employee agrees that the
						specified date of resignation will be at least two weeks after
						Employer has received written notice from Employee of his/her
						intention to resign on the specified date, unless Employer agrees in
						writing to an earlier resignation after consultation with Client. If
						Employee’s specified date of resignation is less than two weeks
						after Employer’s receipt of such written notice and without
						Employer’s written agreement to an earlier resignation, Employee
						will be liable to Employer for damages in an amount equal to the
						“daily pay rate” (defined in the next sentence) multiplied by the
						“notice shortfall period” (defined in the next sentence), but the
						“notice shortfall period” shall nor exceed ten days. The “daily pay
						rate” is Employee’s regular hourly pay rate multiplied by eight (for
						a salaried employee, this regular hourly pay rate will be calculated
						based on 40 hours per week), and the “notice shortfall period” is
						the number of non-holiday weekdays between the date that Employee
						actually ceased working and the date that is two weeks after
						Employer’s receipt of Employee’s written notice of resignation
					</Typography>
				</Box>

				<Box
					sx={{
						fontSize: "18px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>18.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<u>REMEDIES FOR BREACHES.</u>&nbsp; Employee agrees that money
						damages would be an inadequate remedy for any breach of paragraphs
						6, 7, 13, 14, or 15, regarding respectively, exclusivity,
						non-performance of services/non-recruitment, confidentiality and
						goodwill, disclosure, return of property and proprietary rights,
						because damages for such breaches are not susceptible to exact
						measurement in dollars and that Employer would be irreparably harmed
						by any such breach. Therefore, Employer shall be entitled to
						temporary restraining orders, temporary/preliminary injunctions and
						permanent injunctions to prohibit such breaches. This paragraph in
						no way limits the remedies Employer has at law or equity for
						breaches by Employee of any of the paragraphs mentioned in this
						paragraph or of any other provision of this Agreement.
					</Typography>
				</Box>

				<Box
					sx={{
						fontSize: "18px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>19.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<u>EFFECT OF AGREEMENT. </u>&nbsp; This Agreement shall inure to the
						benefit of and shall be binding on the parties hereto; the
						successors, assigns, heirs and personal representatives of Employer;
						and the heirs and personal representatives of Employee. Employee’s
						rights, obligations and duties under this Agreement shall not be
						assigned by nor are they assignable by Employee. Termination of
						employment as provided in paragraphs 12 and 17 shall terminate this
						Agreement except that paragraphs 7, 8, 13, 14, 15 and 16 shall
						remain in effect for the periods specified in those paragraphs and
						Employee’s affirmations and waivers in paragraphs 4 and 9 shall
						remain in effect.
					</Typography>
				</Box>

				<Box
					sx={{
						fontSize: "18px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>20.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<u>NOTICES. </u>&nbsp; Any notice required or permitted to be given
						under this Agreement shall be sufficient if it is in writing and if
						it is sent by registered mail, return receipt requested, to the
						Employee at his residence located at the address below his/her
						signature or to Employer at its address specified in the opening
						paragraph of this Agreement. Notwithstanding the foregoing, delivery
						by hand to Employee or to an executive officer of Employer shall be
						deemed sufficient for any notices between Employer and Employee, and
						Employer may provide notice by email to Employee of any changes in
						the compensation plan pursuant to paragraph 3.
					</Typography>
				</Box>

				<Box
					sx={{
						fontSize: "18px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>21.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<u>EMPLOYMENT-AT-WILL.</u>&nbsp; Consistent with the provisions set
						forth herein, the parties acknowledge and agree that the employment
						relationship created by this Agreement is at-will. Any cause for
						discharge mentioned in this Agreement or in any document maintained
						by Employer (including but not limited to employment manuals or
						recruitment materials) or in any oral conversation with Employer
						before or after the effective date of this Agreement shall not in
						any way limit Employer’s right to discharge Employee, or in any way
						alter Employee’s at-will status.
					</Typography>
				</Box>

				<Box
					sx={{
						fontSize: "18px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>22.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<u> ENTIRE AGREEMENT.</u>&nbsp; This instrument contains the entire
						Agreement of the parties regarding the services to be performed for
						Employer on and after the effective date hereof. Except for the
						subject matters contained in paragraphs 7, 8, 13, 14, 15 and 16 of
						this Agreement as they may be contained in any prior agreement and
						enforceable by the terms thereof and as supplemented by this
						Agreement, this Agreement supersedes and terminates all prior
						agreements between the parties regarding such services to be
						performed for Employer on or after the effective date hereof and the
						parties agree and understand that any such prior agreements
						regarding such services are hereby terminated. Any modification of
						this Agreement shall not be effective unless contained in a writing
						expressly identifying it as a modification and signed by Employee
						and by an executive officer of Employer.
					</Typography>
				</Box>

				<Box
					sx={{
						fontSize: "18px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>23.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<u>SEVERABILITY.</u>&nbsp; Each provision of this Agreement shall be
						considered severable such that if any one provision or clause
						conflicts with existing or future applicable law, or may not be
						given full effect because of such law, this shall not affect any
						other provision of the Agreement which, consistent with such law,
						shall remain in full force and effect. All surviving clauses shall
						be construed so as to effectuate the purpose and intent of the
						parties.
					</Typography>
				</Box>

				<Box
					sx={{
						fontSize: "18px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>24.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<u> GOVERNING LAW.</u>&nbsp; This Agreement shall be governed by the
						laws of the State of New York, irrespective of its choice of law
						rules. Any litigation in connection with Employee’s employment shall
						be brought only in the state or federal courts for Manhattan, New
						York and both parties hereby consent to such courts’ exercise of
						personal jurisdiction over them and waive any objection to venue,
						provided, however, that in the event any such court dismisses any
						claims or withholds relief for lack of personal jurisdiction, the
						parties agree that the claims may be filed in the state or federal
						courts of a state in which is located Employer’s office out of which
						Employee was hired or, in the event of a dismissal or withholding of
						relief for lack of personal jurisdiction in such state where such
						office is located, then any claims may be filed in the state or
						federal courts of the state in which Employee performed services .
					</Typography>
				</Box>

				<Box
					sx={{
						fontSize: "18px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>25.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<u>WAIVER. </u>&nbsp; No waiver of any provision of this Agreement
						shall be valid unless it is in writing and signed by the person
						against whom it is sought to be enforced (in the case of Employer by
						an executive officer of Employer). The failure of any party at any
						time to insist on strict performance of any condition, promise
						agreement or understanding contained in this Agreement shall not be
						construed as a waiver or relinquishment of the right to insist on
						strict performance of the same condition, promise, agreement or
						understanding at any future time.
					</Typography>
				</Box>

				<Box
					sx={{
						fontSize: "18px",
						my: 3,
						display: "flex",
						alignItems: "flex-start",
					}}>
					<Typography sx={{ fontWeight: 700, mx: 3 }}>26.</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						<u>MISCELLANEOUS.</u>&nbsp; Employee represents that he/she has read
						and understands the terms of this Agreement, has had an opportunity
						to ask questions and to review this Agreement with a counsel/advisor
						of his/her choice, is not relying on any advice from Employer in
						this regard, and is voluntarily signing this Agreement.
					</Typography>
				</Box>
				<Box>
					<ConsultantSignatureTable />
				</Box>
				<br />
				<Box>
					<Typography
						sx={{ fontWeight: 700, mx: 3, my: 6, textAlign: "center" }}>
						<u>Exhibit A</u>
					</Typography>
					<ConsultantTable />
				</Box>
				<Box sx={{ my: 8, mx: 3 }}>
					<Typography sx={{ fontSize: "15px", mb: 3 }}>
						This offer is valid for <span className='sow-date'>______</span>{" "}
						days from the date above.
					</Typography>
					<Typography sx={{ fontSize: "15px" }}>
						Signature: &nbsp;
						<u>
							<span className='sow-date'>temporary</span>
						</u>
					</Typography>
				</Box>
			</Paper>
		</Box>
	);
}
