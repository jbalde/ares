import { Button, Card, Col, Row, Space } from "antd";
import UsersTableComponent from "./users-table";
import Link from "next/link";

export default function UsersPage() {
	return (
		<>
			<Row gutter={[16, 16]}>
				<Col span={24}>
					<h1>Users</h1>
				</Col>
				<Col span={24}>
					<Link href="/users/create">
						<Button type="primary">Create user</Button>
					</Link>
				</Col>
				<Col span={24}>
					<Card variant="borderless">
						<h2>Users list</h2>
						<UsersTableComponent />
					</Card>
				</Col>
			</Row>
		</>
	);
}
