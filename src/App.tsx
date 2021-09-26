import { useState } from 'react';
import './App.css';
import { Row, Col } from 'antd';

import QrReaderComponent from 'components/qrReader/QrReaderComponent';
import QrResultComponent, { QrResultData } from 'components/qrResult/QrResultComponent';


const App = () => {
  const [scanResult, setScanResult] = useState<QrResultData>();
  const [error, setError] = useState<string>();

  const isValidUrl = (data: string) => {
    try {
      new URL(data);
    } catch (error) {
      return false;
    }
    return true;
  }

  const onScanCompleted = (data: string | null) => {
    if(data != null && data !== scanResult?.data){
      setScanResult({
        data,
        isUrl: isValidUrl(data)
      });
    }
  };

  const onScanError = (error: any) => {
    setError(error);
  }

  return (
    <Row justify="center" className="App" align="middle">
      <Col xs={24} sm={24} md={12}>
        <QrReaderComponent
          onScanComplete = {onScanCompleted}
          onScanError = {onScanError}
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <QrResultComponent qrResultData={scanResult} error={error}/>
      </Col>
    </Row>
  );
}
export default App;
