import { Card, Col, Row } from "antd";
import CreateTicketForm from "./form";

export default function TicketCreatePage() {
	return (
		<>
			<Row gutter={[16, 16]}>
				<Col span={24}>
					<Card variant="borderless">
						<h2>Create ticket</h2>
						<CreateTicketForm />
					</Card>
				</Col>
			</Row>
		</>
	);
}
