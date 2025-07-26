import { Card, Col, Row } from "antd";
import CreateTenantForm from "./form";
import { BreadcrumbComponent } from "@/components/breadcrumb";

export default function TenantCreatePage() {
	return (
		<Row gutter={[16, 16]}>
			<Col span={24}>
				<BreadcrumbComponent
					items={[
						{
							href: "/tenants",
							title: "Tenants",
						},
						{
							href: "/tenants/create",
							title: "Create tenant",
						},
					]}
				/>
			</Col>
			<Col span={24}>
				<Card variant="borderless">
					<h2>Create tenant</h2>
					<CreateTenantForm />
				</Card>
			</Col>
		</Row>
	);
}
