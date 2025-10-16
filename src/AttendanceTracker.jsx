import React, { useState } from 'react';

const AttendanceTracker = () => {
  const students = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eva'
  ];

  // State to track which students are present
  const [presentStudents, setPresentStudents] = useState({});

  // Handle checkbox change
  const handleCheckboxChange = (student) => {
    setPresentStudents(prevState => ({
      ...prevState,
      [student]: !prevState[student]  // Toggle present status
    }));
  };

  // Count number of present students
  const presentCount = Object.values(presentStudents).filter(Boolean).length;

  return (
    <div>
      <h3>Attendance Tracker</h3>
      <ul>
        {students.map(student => (
          <li key={student}>
            <label>
              <input
                type="checkbox"
                checked={!!presentStudents[student]}
                onChange={() => handleCheckboxChange(student)}
              />
              {student}
            </label>
          </li>
        ))}
      </ul>
      <p>Total Present: {presentCount}</p>
    </div>
  );
};

export default AttendanceTracker;
