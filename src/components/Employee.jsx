// // Employee component
// import React, { useEffect, useState } from 'react';
// import api from '../api/axiosConfig.js';
// import axios from "axios";
// import {map} from "react-bootstrap/ElementChildren";
//
// const Employee = () => {
//     const [employees, setEmployees] = useState([]);
//     const [selectedEmployee, setSelectedEmployee] = useState(null);
//
//     useEffect(() => {
//         fetchEmployees().then(r => {});
//     }, []);
//
//     const fetchEmployees = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/api/employees');
//             setEmployees(response.data);
//         } catch (error) {
//             console.error('Error fetching employees:', error);
//         }
//     };
//
//     const handleEmployeeClick = (employee) => {
//         setSelectedEmployee(employee);
//     };
//
//     return (
//         <div>
//             <h2>Employee List</h2>
//             <ul>
//                 {map((employee) => (
//                     <li key={employee.id} onClick={() => handleEmployeeClick(employee)}>
//                         {employee.name}
//                     </li>
//                 ))}
//             </ul>
//             <div className='text-white'>
//                 {employees.length === 0 && "Employee selected"}
//             </div>
//
//             {selectedEmployee && (
//                 <div>
//                     <h3>Selected Employee:</h3>
//                     <p>Name: {selectedEmployee.name}</p>
//                     <p>ID: {selectedEmployee.id}</p>
//                     {/* Add more employee details based on your Employee class */}
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default Employee;
//
//
//
