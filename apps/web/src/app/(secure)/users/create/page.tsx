import { Card, Col, Row } from "antd";
import CreateUserForm from "./form";
import { BreadcrumbComponent } from "@/components/breadcrumb";

export default function UserCreatePage() {
	return (
		<Row gutter={[16, 16]}>
			<Col span={24}>
				<BreadcrumbComponent
					items={[
						{
							href: "/users",
							title: "Users",
						},
						{
							href: "/users/create",
							title: "Create user",
						},
					]}
				/>
			</Col>
			<Col span={24}>
				<Card variant="borderless">
					<h2>Create user</h2>
					<CreateUserForm />
				</Card>
			</Col>
		</Row>
	);
}
