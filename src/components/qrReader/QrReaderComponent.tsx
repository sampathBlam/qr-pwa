import { Button } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import QrReader from 'react-qr-reader';
import './QrReaderComponent.css'
import { useState } from 'react';

export interface QrReaderComponentProps{
  onScanComplete: (data:string | null) => void;
  onScanError: (error: any) => void;
};

const QrReaderComponent = ({onScanComplete, onScanError} : QrReaderComponentProps) => {
  const [facingMode, setFacingMode] = useState<"user"|"environment">("environment");

  const toggleFacingMode = () => {
    if(facingMode === 'user'){
      setFacingMode('environment');
    } else if(facingMode === 'environment'){
      setFacingMode('user');
    }
  };
  return (
    <div className="qrReaderDiv">
      <div className="flipButtonDiv">
        <Button className="flipButton" type="primary" size="large" icon={<ReloadOutlined/>} onClick={toggleFacingMode}> Flip Camera</Button>
      </div>
      <QrReader
        delay={300}
        facingMode= {facingMode}
        onError={(error)=>{
          console.log(error);
          onScanError(error);
        }}
        onScan={(data)=>{
          console.log(data);
          onScanComplete(data);
        }}
        >
      </QrReader>
    </div>
  )
};

export default QrReaderComponent;