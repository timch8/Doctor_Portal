import React, { useState } from 'react';
import { ethers } from 'ethers';

const FetchPatientRecords = ({ contract }) => {
  const [patientId, setPatientId] = useState('');
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    try {
      const result = await contract.getAllPatientHashes(ethers.utils.formatBytes32String(patientId));
      setRecords(result);
    } catch (error) {
      console.error('Error fetching records:', error);
    }
  };

  return (
    <div>
      <h2>Fetch Patient Records</h2>
      <input
        type="text"
        placeholder="Enter Patient ID"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
      />
      <button onClick={fetchRecords}>Fetch Records</button>

      <ul>
        {records.map((record, index) => (
          <li key={index}>{record}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchPatientRecords;