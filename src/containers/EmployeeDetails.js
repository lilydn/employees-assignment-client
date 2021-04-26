import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EmployeeDetails.css';

// import DataTable from '../components/DataTable';

const EmployeeDetails = ({ employee }) => {
	const { employeeId } = useParams();

	useEffect(() => {
		console.log(employee);
		if (!employee) {
			// TODO: fetch employee by employeeId
		}
	}, []);

	const employeeTemp = {
		id: '7',
		picture: 'https://randomuser.me/api/portraits/men/11.jpg',
		firstName: 'Phill',
		lastName: 'Kernes',
		position: '32323232323232323',
		manager: '234234234234234234234234',
	};

	return (
		<div className='container'>
			<div className='flex-container'>
				<div
					className='picture'
					style={{
						backgroundImage: `url(${employeeTemp.picture})`,
					}}
				/>

				<div className='personalDetailsGrid'>
					<div>Name:</div>
					<div>{employeeTemp.firstName}</div>
					<div></div>
					<div>Position:</div>
					<div>{employeeTemp.position}</div>
					<div></div>
					<div class='divider'></div>
					<div>Manager:</div>
					<div>{employeeTemp.manager}</div>
					<button>Report</button>
				</div>
			</div>

			<div className='flex-container'>

          {/* <DataTable /> */}

      </div>
			<div className='flex-container'>

        
      </div>
		</div>
	);
}

export default EmployeeDetails;
