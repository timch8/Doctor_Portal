import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import FetchPatientRecords from './FetchPatientRecords';
import AddPatientRecord from './AddPatientRecord';
import contractAbi from './contractAbi.json';

const App = () => {
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initEthers = () => {
      const provider = new ethers.JsonRpcProvider("https://rpc2.sepolia.org");
      // Replace YOUR_PRIVATE_KEY with your actual private key and YOUR_CONTRACT_ADDRESS with your contract's address
      const signer = new ethers.Wallet('YOUR_PRIVATE_KEY', provider);
      const contract = new ethers.Contract('YOUR_CONTRACT_ADDRESS', contractAbi, signer);

      setSigner(signer);
      setContract(contract);
    };

    initEthers();
  }, []);

  return (
    <div className="App">
    <header className="App-header">
      <h1>MedChain: Doctor Portal</h1>
    </header>
    {contract ? (
      <>
        <FetchPatientRecords contract={contract} />
        <AddPatientRecord contract={contract} signer={signer} />
      </>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);
};


export default App;