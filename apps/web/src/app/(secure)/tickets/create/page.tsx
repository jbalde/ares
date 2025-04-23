import { Button, Card, Col, Row, Space } from "antd";
import Link from "next/link";
import CreateTicketForm from "./form";

export default function Home() {
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
