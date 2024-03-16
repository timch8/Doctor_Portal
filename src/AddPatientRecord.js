import React, { useState } from 'react';
import { ethers } from 'ethers';

const AddPatientRecord = ({ contract, signer }) => {
  const [patientId, setPatientId] = useState('');
  const [recordHash, setRecordHash] = useState('');

  const addRecord = async () => {
    try {
      const withSigner = contract.connect(signer);
      await withSigner.addMedicalRecord(ethers.utils.formatBytes32String(patientId), recordHash);
      alert('Record added successfully');
    } catch (error) {
      console.error('Error adding record:', error);
    }
  };

  return (
    <div>
      <h2>Add Patient Record</h2>
      <input
        type="text"
        placeholder="Patient ID"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Record Hash"
        value={recordHash}
        onChange={(e) => setRecordHash(e.target.value)}
      />
      <button onClick={addRecord}>Add Record</button>
    </div>
  );
};

export default AddPatientRecord;