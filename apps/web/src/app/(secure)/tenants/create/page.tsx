import { Card, Col, Row } from "antd";
import CreateTenantForm from "./form";

export default function TenantCreatePage() {
	return (
		<Row gutter={[16, 16]}>
			<Col span={24}>
				<Card variant="borderless">
					<h2>Create tenant</h2>
					<CreateTenantForm />
				</Card>
			</Col>
		</Row>
	);
}
