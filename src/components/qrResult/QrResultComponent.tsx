import Typography  from '@mui/material/Typography';

export interface QrResultComponentProps{
  data: string;
  error: string;
}

const QrResultComponent = ({data, error}: QrResultComponentProps) => {
  return (
    <div>
      {data && <Typography align="center" variant="body1"> Data: `${data}`</Typography>}
      {error && <Typography align="center" variant="body1"> Error : `${error}`</Typography>}
    </div>
  );
};

export default QrResultComponent;