import QrReaderComponent from 'components/qrReader/QrReaderComponent';
import QrResultComponent from 'components/qrResult/QrResultComponent';
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [scanData, setScanData] = useState<string | null>(null);
  const [error, setError] = useState(null);

  return (
    <div>
      <QrReaderComponent
        onScanComplete = {(data: string | null) => {
          setScanData(data);
        }}
        onScanError = {(error: any) => {
          setError(error);
        }}/>
      <QrResultComponent data={scanData? scanData: ""} error={error? error+"": ""}/>
    </div>
  );
}
export default App;
