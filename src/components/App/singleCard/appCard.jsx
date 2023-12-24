import { Avatar, Card, Col, Row } from "antd";
import { Buttons } from "@/components";
import { BookOutlined } from "@ant-design/icons";

const { Meta } = Card;

const AppCard = ({ id, imgUrl = "", title = "", description = "" }) => (
	<Card
		hoverable
		cover={<img alt={`cover-${id}`} src={imgUrl} className="h-40" />}
		// actions={[<BookOutlined key="BookOutlined" className="text-3xl" />]}
	>
		<Meta
			avatar={<Avatar src={imgUrl} className="-mt-14 h-24 w-24 shadow-xl" />}
			title={title}
			description={description}
		/>
		<Row gutter={[8, 8]} justify={"space-between"} align={"middle"} className="w-full pt-5">
			<Col span={22}>
				<Buttons content="مشاهده اطلاعات" type="dashed" htmlType="button" block={true} size="middle" />
			</Col>
			<Col span={2}>
				<BookOutlined className="text-xl pb-6" />
			</Col>
		</Row>
	</Card>
);

export default AppCard;
