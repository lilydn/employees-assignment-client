import React, { useState, useEffect } from 'react';
import Employee from '../components/Employee';
import './EmployeeList.css';

const EmployeeList = props => {
  const { data } = props;
	// useEffect(() => {
	// 	console.log('EmployeeList');
	// }, []);

  if (!data) {
    return (
      <div>
        <p>fetching data...</p>
      </div>
    );
  }

	return (
		<>
			<h2>Employee List</h2>
      <div className="employee-list-container">
			{data.map(employee => (
				<Employee key={employee.id} employee={employee} {...props}/>
			))}
      </div>
		</>
	);
};

export default EmployeeList;
