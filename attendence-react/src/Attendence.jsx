import React, { useState } from 'react';

export default function Attendance() {
  const students = ["Subbu", "Hari", "Riyan", "Mary"];
  const [presented, setPresented] = useState([]);

  const handleChecker = (student) => {
    setPresented((prev) =>
      prev.includes(student)
        ? prev.filter((name) => name !== student)
        : [...prev, student]
    );
  };

  return (
    <div>
      <h2>Attendance Tracker</h2>
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
      <p>Total Present: {presented.length}</p>
    </div>
  );
};
