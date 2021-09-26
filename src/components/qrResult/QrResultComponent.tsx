import { Button, Row, Col, Typography, message } from 'antd';
import { CopyFilled, CaretRightFilled } from '@ant-design/icons';
import './QrResultComponent.css';

const { Title } = Typography;

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
          <Row justify="center" align="middle" >
            <Col xs={16} className="resultText">
                <Title  level={5}>{qrResultData.data}</Title>
            </Col>  
          </Row>
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
                <Button size="large" icon={<CaretRightFilled />} className="resultButton" type="primary" onClick={
                  () => {
                    window.location.href = qrResultData.data.trim();
                  }
                }>Go To</Button>
              </Col> }
          </Row>
        </>
      } 
      { error && (
        <div className="resultText">
          <Title  level={5}>{error}</Title>
        </div>
      )}
    </>
  );
};

export default QrResultComponent;