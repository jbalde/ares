import { Card, Col, Row, Statistic } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import TicketGraphComponent from "./ticket-graph";
import TicketsTableComponent from "./tickets-table";

export default function Home() {
	return (
		<>
			<Row gutter={[16, 16]}>
				<Col span={24}>
					<h1>Dashboard</h1>
				</Col>
				<Col span={6}>
					<Card variant="borderless">
						<Statistic
							title="Total tickets"
							value={120}
							precision={0}
							valueStyle={{ color: "#3f8600" }}
							prefix={<ArrowUpOutlined />}
							suffix="%"
						/>
					</Card>
				</Col>
				<Col span={6}>
					<Card variant="borderless">
						<Statistic
							title="Open tickets"
							value={40}
							precision={0}
							valueStyle={{ color: "#3f8600" }}
							prefix={<ArrowUpOutlined />}
							suffix="%"
						/>
					</Card>
				</Col>
				<Col span={6}>
					<Card variant="borderless">
						<Statistic
							title="Average response time"
							value={3.5}
							precision={1}
							valueStyle={{ color: "#3f8600" }}
							prefix={<ArrowUpOutlined />}
							suffix="h"
						/>
					</Card>
				</Col>
				<Col span={6}>
					<Card variant="borderless">
						<Statistic
							title="SLA compliance"
							value={90.56}
							precision={2}
							valueStyle={{ color: "#3f8600" }}
							prefix={<ArrowUpOutlined />}
							suffix="%"
						/>
					</Card>
				</Col>
				<Col span={24}>
					<Card variant="borderless">
						<h2>Ticket Graph</h2>
						<TicketGraphComponent />
					</Card>
				</Col>
				<Col span={24}>
					<Card variant="borderless">
						<h2>Recent tickets</h2>
						<TicketsTableComponent />
					</Card>
				</Col>
			</Row>
		</>
	);
}
