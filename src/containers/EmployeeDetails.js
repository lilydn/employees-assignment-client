import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DataTable from '../components/DataTable';
import Button from '@material-ui/core/Button';

import { subordinatesData } from '../mockData';
import './EmployeeDetails.css';

const EmployeeDetails = ({ employee, employeeTasks }) => {
	const { employeeId } = useParams();
  const subordinates = subordinatesData(employee.id);

	useEffect(() => {
		if (!employee) {
			// TODO: fetch employee by employeeId
			// if not found, fetch not found component
		}
	}, []);

	return (
		<div className='container'>
			<div className='flex-container'>
				<div
					className='picture'
					style={{
						backgroundImage: `url(${employee.picture})`,
					}}
				/>
				<div className='personalDetailsGrid'>
					<div>Name:</div>
					<div>{employee.firstName}</div>
					<div></div>
					<div>Position:</div>
					<div>{employee.position}</div>
					<div></div>
					<div className='divider'></div>
					<div>Manager:</div>
					<div>{employee.manager}</div>
					<Button variant='contained' color='primary' onClick={() => {}}>
						Report
					</Button>
				</div>
			</div>
			<div className='divider'></div>

			<div className='flex-container-col'>
				<h6>My Tasks</h6>

				<DataTable rows={employeeTasks} objType='task' />
			</div>

			<div className='flex-container-col'>
				<h6>My Subordinates</h6>

				<DataTable rows={subordinates} buttonText='Assign Task' objType='subordinate' clickHandler={() => {}}/>
			</div>
		</div>
	);
};

export default EmployeeDetails;
