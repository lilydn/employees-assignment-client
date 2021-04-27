import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

import EmployeeList from './EmployeeList';
import EmployeeDetails from './EmployeeDetails';

import { employeesData, tasksData } from '../mockData';
import './App.css';

function App() {
  const [employees, setEmployees] = useState(null);
	const [currentEmployee, setCurrentEmployee] = useState(null);

  useEffect(() => {
    // to fetch the data and store to state
    setEmployees(employeesData);
  },[]);

  const onClickViewEmployee = (id) => {
    let foundRecord = employees.find(employee => employee.id === id );
    if(foundRecord) {
      setCurrentEmployee(foundRecord);
    } else {
      setCurrentEmployee(null);
      renderNotFound();
    }
  }

  const renderNotFound = () => (
		<>
			<p>Page not found</p>
			<Link to='/'>go back</Link>
		</>
	);
  
  if(!employees) {
    return (
      <p>loading...</p>
    );
  }

	return (
		<Router>
			<div className='App'>
				<div className='App-container'>
					<Switch>

						<Route exact path='/'>
							<EmployeeList data={employees} clickHandler={onClickViewEmployee}/>
						</Route>

						<Route path='/employee/:employeeId'>
							<EmployeeDetails employee={currentEmployee} employeeTasks={tasksData}/>
						</Route>

            <Route>
              {renderNotFound()}
						</Route>

					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
