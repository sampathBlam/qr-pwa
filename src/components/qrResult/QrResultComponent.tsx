import { Input, Button, Row, Col, Divider, message } from 'antd';
import { CopyFilled, CaretRightFilled } from '@ant-design/icons';
import './QrResultComponent.css';
const { TextArea } = Input;

export interface QrResultData{
  data: string;
  isUrl: boolean;
}

export interface QrResultComponentProps{
  qrResultData: QrResultData | undefined;
  error: string | undefined;
}

const QrResultComponent = ({qrResultData, error}: QrResultComponentProps) => {
  return (
    <>
      { qrResultData &&
        <>
          <Row justify="center" align="middle">
            <Col xs={16}>
              <TextArea autoSize value={qrResultData.data}/>
            </Col>  
          </Row>
          <Divider/>
          <Row justify="center" align="middle" gutter={20}>
            <Col xs={8}>
              <Button size="large" icon={<CopyFilled />} className="resultButton" type="primary" onClick={
                () => {
                  navigator.clipboard.writeText(qrResultData.data);
                  message.success("Copied to clipboard");
                }
              }>Copy</Button>
            </Col>
            { qrResultData.isUrl && 
              <Col xs={8}>
                <Button size="large" icon={<CaretRightFilled />} className="resultButton" type="primary">Go To</Button>
              </Col> }
          </Row>
        
        </>
      } 
      { error && (
        <Input value={error}/>
      )}
    </>
  );
};

export default QrResultComponent;