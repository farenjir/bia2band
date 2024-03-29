import { Card, Col, Row } from "antd";
import Typography from "antd/es/typography/Typography";

const { Title } = Typography;

const title = "آمار بازدیدها";
const description = "استاد یار/ تخصص های دیگر...استاد یار/ تخصص های دیگر...";

const Chart = () => {
    return (
        <Card bordered >
            <div className="justify-between">
                <Row gutter={[8, 8]} align={"middle"}>
                    <Col xs={24} md={16}>
                        <h3>{title}</h3>
                    </Col>
                </Row>
                <Row gutter={[8, 8]} align={"middle"}>
                    <Col xs={24} md={12}>
                        <p className="text-slate-400 text-xs md:text-sm">{description + description + description}</p>
                    </Col>
                </Row>
                <div className="grid justify-items-center mt-4">
                </div>
            </div>
        </Card>
    );
};

export default Chart;