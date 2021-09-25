import QrReader from 'react-qr-reader';

export interface QrReaderComponentProps{
  onScanComplete: (data:string | null) => void;
  onScanError: (error: any) => void;
};

const QrReaderComponent = ({onScanComplete, onScanError} : QrReaderComponentProps) => {
  return (
    <div>
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