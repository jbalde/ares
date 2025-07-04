import { Breadcrumb, Card, Col, Row } from "antd";
import CreateUserForm from "./form";
import { HugeiconsIcon } from "@hugeicons/react";
import { Home07Icon } from "@hugeicons/core-free-icons";

export default function UserCreatePage() {
	return (
		<Row gutter={[16, 16]}>
			<Col span={24}>
				<Breadcrumb
					items={[
						{
							href: "/",
							title: <HugeiconsIcon icon={Home07Icon} size={20} />,
						},
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
