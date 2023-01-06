import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
 // State variables to store the list of students, input values, and the current time
 const [students, setStudents] = useState([]);
 const [rollNumber, setRollNumber] = useState('');
 const [name, setName] = useState('');
 const [currentTime, setCurrentTime] = useState('');

 // Function to add a new student to the list
 const addStudent = () => {
   const newStudent = { rollNumber, name, checkInTime: currentTime };
   setStudents([...students, newStudent]);
 }

 // Function to remove a student from the list
 const removeStudent = (rollNumber) => {
   const updatedStudents = students.filter(student => student.rollNumber !== rollNumber);
   setStudents(updatedStudents);
 }

 // useEffect hook to update the current time every second
 useEffect(() => {
   const interval = setInterval(() => {
     const currentDate = new Date();
     setCurrentTime(currentDate.toLocaleTimeString());
   }, 1000);
   return () => clearInterval(interval);
 }, []);

  return (
    <>
    <div className='maincontainer'>
      <div className='form-container'>
      <h1>Student Attendance</h1>
    <div className='input'>
      Roll Number <br/>
      <input type='rollnumber' value={rollNumber} onChange={e => setRollNumber(e.target.value)} />
    </div>
    <div className='input' >
      Student Name <br/>
       <input type='name' value={name} onChange={e => setName(e.target.value)} />
    </div>
    <button type='button' onClick={addStudent}>Check In</button>
      </div>
    <div className='container'>
    <h2>students present in the school today ({students.length})</h2>
    <table>
    <tr>
    <th>Roll Number</th>
    <th>Student Name</th>
    <th>Check In Time</th>
    <th>Check Out</th>
  </tr>
  <tbody>
    {students.map(student => (
      <tr key={student.rollNumber}>
        <td>{student.rollNumber}</td>
        <td>{student.name}</td>
        <td>{student.checkInTime}</td>
        <td>
          <button onClick={() => removeStudent(student.rollNumber)}>Check Out</button>
        </td>
      </tr>
    ))}
  </tbody>
    </table>
    </div>
  </div>
  </>
  );
}

export default App;
