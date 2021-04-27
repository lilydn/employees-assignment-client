import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
	tableContainer: {
		marginLeft: '5%',
	},
	biggerFont: {
		fontSize: 22,
		paddingLeft: '5%',
	},
	head: {
		backgroundColor: '#f4f4f4',
	},
});

const DataTable = ({ rows, buttonText, objType, clickHandler }) => {
	let { tableContainer, biggerFont, head } = useStyles();
	let hasTableHead = false;

	if (objType !== 'employee') {
		tableContainer = '';
		biggerFont = '';
		hasTableHead = true;
	}

	const renderHead = row => (
		<TableHead className={head}>
			{hasTableHead && (
				<TableRow>
					{Object.keys(row).map(key =>
            key !== 'id' && (
						<TableCell key={key}>
							{key}
						</TableCell>
					  )
          )}
					<TableCell align='left'></TableCell>
				</TableRow>
			)}
		</TableHead>
	);

	const renderRow = row => (
		<>
			{Object.entries(row).map(
				([key, value]) =>
					key !== 'id' && (
						<TableCell key={key} className={biggerFont}>
							{value}
						</TableCell>
					)
			)}
		</>
	);

	const renderButton = id => (
		<TableCell align='left' className={biggerFont}>
			{buttonText && clickHandler && (
				<Link to={`${objType}/${id}`}>
					<Button size='large' variant='contained' color='primary' onClick={() => clickHandler(id)}>
						{buttonText}
					</Button>
				</Link>
			)}
		</TableCell>
	);

	return (
		<TableContainer component={Paper} elevation={4} className={tableContainer}>
			<Table>
				{renderHead(rows[0])}
				<TableBody>
					{rows.map(row => (
						<TableRow key={row.id}>
							{renderRow(row)}
							{renderButton(row.id)}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default DataTable;
