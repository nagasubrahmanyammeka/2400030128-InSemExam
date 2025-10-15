import React, { useState } from 'react';

export default function Attendance() {
  const students = ["Subbu", "Hari", "Riyan", "Mary"];
  const [presented, setPresented] = useState([]);

  const handleChecker = (student) => {
    setPresented((prev) =>
      prev.includes(student) ? prev.filter((name) => name !== student) : [...prev, student]
    );
  };

  return (
    <div>
      <h1>Attendance Registerr</h1>
      <ul>
        {students.map((student) => (
          <li key={student}>
            <label>
              <input
                type="checkbox"
                checked={presented.includes(student)}
                onChange={() => handleChecker(student)}
              />
              {student}
            </label>
          </li>
        ))}
      </ul>
      <p>Total Presented: {presented.length}</p>
    </div>
  );
};