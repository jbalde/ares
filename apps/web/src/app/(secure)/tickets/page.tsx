import { Button, Card, Col, Row } from "antd";
import TicketsTableComponent from "./tickets-table";
import Link from "next/link";

export default function TicketsPage() {
	return (
		<>
			<Row gutter={[16, 16]}>
				<Col span={24}>
					<h1>Tickets</h1>
				</Col>
				<Col span={24}>
					<Link href="/tickets/create">
						<Button type="primary">Create ticket</Button>
					</Link>
				</Col>
				<Col span={24}>
					<Card variant="borderless">
						<h2>Open tickets</h2>
						<TicketsTableComponent />
					</Card>
				</Col>
			</Row>
		</>
	);
}
