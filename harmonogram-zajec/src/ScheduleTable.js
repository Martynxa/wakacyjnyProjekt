import React, { useState } from 'react';

const statuses = ['planowany', 'zrealizowany', 'niezrealizowany'];

const initialSchedule = [
  { id: 1, date: '2025-07-10', topic: 'Wprowadzenie do Reacta', status: 'planowany' },
  { id: 2, date: '2025-07-12', topic: 'Hooki w React', status: 'zrealizowany' },
  { id: 3, date: '2025-07-15', topic: 'Router i nawigacja', status: 'niezrealizowany' },
];

export default function ScheduleTable() {
  const [schedule, setSchedule] = useState(initialSchedule);

  const updateStatus = (id, newStatus) => {
    setSchedule((prev) =>
      prev.map((entry) =>
        entry.id === id ? { ...entry, status: newStatus } : entry
      )
    );
  };

  return (
    <div>
      <h2>📅 Harmonogram zajęć</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={thStyle}>Data</th>
            <th style={thStyle}>Temat</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((entry) => (
            <tr key={entry.id}>
              <td style={tdStyle}>{entry.date}</td>
              <td style={tdStyle}>{entry.topic}</td>
              <td style={tdStyle}>
                <select
                  value={entry.status}
                  onChange={(e) => updateStatus(entry.id, e.target.value)}
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {/* {status} */}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  background: '#f0f0f0',
  textAlign: 'left'
};

const tdStyle = {
  border: '1px solid #ddd',
  padding: '8px'
};