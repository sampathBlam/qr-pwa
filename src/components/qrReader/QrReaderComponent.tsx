import QrReader from 'react-qr-reader';
import 'components/qrReader/QrReaderComponent.css'

export interface QrReaderComponentProps{
  onScanComplete: (data:string | null) => void;
  onScanError: (error: any) => void;
};

const QrReaderComponent = ({onScanComplete, onScanError} : QrReaderComponentProps) => {
  return (
    <div className="qrReaderDiv">
      <QrReader
        delay={300}
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