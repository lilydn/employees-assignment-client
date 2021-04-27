import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import DataTable from '../components/DataTable';
import './EmployeeList.css';

const EmployeeList = props => {
	const { data } = props;

	// data with the properties to be shown in the table
	const createData = () => {
		let rows = [];
		data.forEach(employee => {
			const { id, firstName, lastName, position } = employee;
			rows.push({ id, firstName, lastName, position });
		});
		return rows;
	};

	const renderDataTable = () => {
		const rows = createData();
		return (
			<div className='employee-list-container'>
				<DataTable rows={rows} buttonText='View' objType='employee' {...props} />
			</div>
		);
	};

	const renderLoader = () => (
		<div>
			<CircularProgress color='inherit' />
		</div>
	);

	return (
		<>
			<h2>Employee List</h2>
			{!data ? renderLoader() : renderDataTable()}
		</>
	);
};

export default EmployeeList;
