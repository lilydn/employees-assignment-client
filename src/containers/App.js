import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

import EmployeeList from './EmployeeList';
import EmployeeDetails from './EmployeeDetails';

import employeesData from '../mockData';
import './App.css';

function App() {
  const [employees, setEmployees] = useState(null);
	const [currentEmployee, setCurrentEmployee] = useState(null);

  useEffect(() => {
    // to fetch the data and store to state
    setEmployees(employeesData);
  },[]);

  const onClickViewEmployee = (employee) => {
    setCurrentEmployee(employee);
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
							<EmployeeDetails employee={currentEmployee}/>
						</Route>

            <Route>
							<div>
                <Link to='/'>go back</Link>
                {/* <Redirect to='/' /> */}
              </div>
						</Route>

					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
