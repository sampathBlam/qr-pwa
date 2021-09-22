import QrReader from 'react-qr-reader';

export interface QrReaderComponentProps{
  onScanComplete: (data:string | null) => void;
  onScanError: (error: any) => void;
};

const QrReaderComponent = ({onScanComplete, onScanError} : QrReaderComponentProps) => {

  return (
    <QrReader
      delay={300}
      onError={(error)=>{
        onScanError(error);
      }}
      onScan={(data)=>{
        onScanComplete(data);
      }}
      >
    </QrReader>
  )
};

export default QrReaderComponent;