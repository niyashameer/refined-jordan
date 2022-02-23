import * as React from "react";
import { styled } from "@mui/system";
import TablePaginationUnstyled from "@mui/base/TablePaginationUnstyled";

function createData(name, details) {
	return { name, details };
}

const rows = [
	createData(
		"Vickey Group",
		"VICKEY, Inc., a Jordanian corporation with its principal offices Amman, and any of its Affiliates as defined below (each a “VICKEY Group Member” and collectively, “VICKEY Group”) VICKEY, Inc., ., a Jordanian corporation with its principal offices Amman, and any company or subsidiary in the same or associated ownership or control (each a “VICKEY Group Member” and collectively, “VICKEY Group”)"
	),
	createData(
		"Customer",
		"NAME, TYPE OF COMPANY with its principal offices located at CLIENT ADDRESS."
	),
	createData("Effective Date", "SOW DATE"),
	createData("Initial Term", "1 Year"),
	// createData("Signatures", "VICKEY Group By: VICKEY ACCOUNT MANAGER"),
	// createData("Honeycomb", 408, 3.2),
	// createData("Ice cream sandwich", 237, 9.0),
	// createData("Jelly Bean", 375, 0.0),
	// createData("KitKat", 518, 26.0),
	// createData("Lollipop", 392, 0.2),
	// createData("Marshmallow", 318, 0),
	// createData("Nougat", 360, 19.0),
	// createData("Oreo", 437, 18.0),
];

const blue = {
	200: "#A5D8FF",
	400: "#3399FF",
};

const grey = {
	50: "#F3F6F9",
	100: "#E7EBF0",
	200: "#E0E3E7",
	300: "#CDD2D7",
	400: "#B2BAC2",
	500: "#A0AAB4",
	600: "#6F7E8C",
	700: "#3E5060",
	800: "#2D3843",
	900: "#1A2027",
};

const Root = styled("div")(
	({ theme }) => `
  table {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
	text-align: left;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    text-align: left;
    padding: 6px;
    width: 100%;
  }

  th {
    background-color: ${theme.palette.mode === "dark" ? grey[900] : grey[100]};
    height: 100px;
	text-align: left;
  }

  .signature thead{
    width: 100%;
	text-align: left;
  }
  .signature thead th {
      width: 23%;
	  text-align: left;
  }
  `
);

const CustomTable = styled(TablePaginationUnstyled)(
	({ theme }) => `
  & .MuiTablePaginationUnstyled-spacer {
    display: none;
  }
  & .MuiTablePaginationUnstyled-toolbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    // gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }
  & .MuiTablePaginationUnstyled-selectLabel {
    margin: 0;
  }
  & .MuiTablePaginationUnstyled-select {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    border-radius: 50px;
    background-color: transparent;
    &:hover {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    }
    &:focus {
      outline: 1px solid ${
				theme.palette.mode === "dark" ? blue[400] : blue[200]
			};
    }
  }
  & .MuiTablePaginationUnstyled-displayedRows {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }
  & .MuiTablePaginationUnstyled-actions {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    border-radius: 50px;
    text-align: left;
  }
  & .MuiTablePaginationUnstyled-actions > button {
    margin: 0 8px;
    border: transparent;
    border-radius: 2px;
    background-color: transparent;
    &:hover {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    }
    &:focus {
      outline: 1px solid ${
				theme.palette.mode === "dark" ? blue[400] : blue[200]
			};
    }
  }
  `
);

export default function CustomAgreementTable() {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<Root sx={{ width: '100%', maxWidth: "100%" }}>
			<table aria-label='custom pagination table' className='table-contain'>
				{/* <thead>
					<tr>
						<th>Dessert</th>
						<th>Calories</th>
						<th>Fat</th>
					</tr>
				</thead> */}
				<tbody>
					<tr key='Vickey Group' className='table-cell-width'>
						<thead>
							<th>Vickey Group</th>
						</thead>
						<td>
							VICKEY, Inc., a Jordanian corporation with its principal offices
							Amman, and any of its Affiliates as defined below (each a “VICKEY
							Group Member” and collectively, “VICKEY Group”) VICKEY, Inc., ., a
							Jordanian corporation with its principal offices Amman, and any
							company or subsidiary in the same or associated ownership or
							control (each a “VICKEY Group Member” and collectively, “VICKEY
							Group”)
						</td>
						<td></td>
						<td />
					</tr>
					<tr key='Customer'>
						<thead>
							<th>Customer</th>
						</thead>
						<td>
							NAME, TYPE OF COMPANY with its principal offices located at CLIENT
							ADDRESS.
						</td>
						<td></td>
						<td />
					</tr>
					<tr key='Effective Date'>
						<thead>
							<th>Effective Date</th>
						</thead>
						<td>SOW DATE</td>
						<thead>
							<th>Initial Term</th>
						</thead>
						<td>1 Year</td>
					</tr>
					<tr className='signature'>
						<thead>
							<th>Signatures</th>
							<th>Vickey Group</th>
							<th>Customer</th>
						</thead>
					</tr>
				</tbody>
			</table>
		</Root>
	);
}
