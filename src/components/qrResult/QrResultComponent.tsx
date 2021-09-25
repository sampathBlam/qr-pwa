export interface QrResultComponentProps{
  data: string;
  error: string;
}

const QrResultComponent = ({data, error}: QrResultComponentProps) => {
  return (
    <div>
      {data && <p> Data: {data}</p>}
      {error && <p> Error : {error}</p>}
    </div>
  );
};

export default QrResultComponent;