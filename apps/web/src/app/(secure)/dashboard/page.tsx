import { Breadcrumb, Card, Col, Row, Statistic } from "antd";
import { HugeiconsIcon } from "@hugeicons/react";
import { Home07Icon } from "@hugeicons/core-free-icons";
import {
	ArrowDownOutlined,
	ArrowUpOutlined,
	VerticalAlignMiddleOutlined,
} from "@ant-design/icons";
import TicketGraphComponent from "./ticket-graph";
import TicketsTableComponent from "./tickets-table";
import { PrismaClient } from "@/db/prisma";
import { unstable_cache } from "next/cache";

const getTicketsFromMonth = async (prevMonths: number) => {
	const prisma = new PrismaClient();

	const start = new Date(
		new Date().setDate(new Date().getDate() - 30 * prevMonths)
	);
	const end = new Date(
		new Date().setDate(new Date().getDate() - 30 * (prevMonths + 1))
	);

	const tickets = await prisma.ticket.findMany({
		where: {
			createdAt: {
				gte: start,
				lte: end,
			},
		},
	});

	return tickets;
};

const getTicketsLastsMonths = unstable_cache(
	async () => {
		const prevTickets = await getTicketsFromMonth(1);
		const prev2Tickets = await getTicketsFromMonth(2);

		const tickets = {
			recents: prevTickets.filter(
				(ticket) => ticket.status !== "DONE" && ticket.status !== "CANCELLED"
			),
			total: {
				value: prevTickets.length,
				percentage:
					(prevTickets.length - prev2Tickets.length) / prev2Tickets.length,
			},
			open: {
				value: prevTickets.filter(
					(ticket) => ticket.status !== "DONE" && ticket.status !== "CANCELLED"
				).length,
				percentage:
					(prevTickets.filter(
						(ticket) =>
							ticket.status !== "DONE" && ticket.status !== "CANCELLED"
					).length -
						prev2Tickets.filter(
							(ticket) =>
								ticket.status !== "DONE" && ticket.status !== "CANCELLED"
						).length) /
					prev2Tickets.filter(
						(ticket) =>
							ticket.status !== "DONE" && ticket.status !== "CANCELLED"
					).length,
			},
		};

		return tickets;
	},
	["last-month-tickets"],
	{ revalidate: 300, tags: ["last-month-tickets"] }
);

export default async function DashboardPage() {
	const { recents, total, open } = await getTicketsLastsMonths();

	const isUpOrDown = (value: number) => {
		let icon;
		let color;

		if (value > 0) {
			icon = <ArrowUpOutlined />;
			color = "#3f8600";
		} else if (value < 0) {
			icon = <ArrowDownOutlined />;
			color = "#cf1322";
		} else {
			icon = <VerticalAlignMiddleOutlined />;
		}

		return {
			icon,
			color,
		};
	};

        return (
                <>
                        <Row gutter={[16, 16]}>
                                <Col span={24}>
                                        <Breadcrumb
                                                items={[
                                                        {
                                                                href: "/",
                                                                title: (
                                                                        <HugeiconsIcon icon={Home07Icon} size={20} />
                                                                ),
                                                        },
                                                        { href: "/dashboard", title: "Dashboard" },
                                                ]}
                                        />
                                </Col>
                                <Col span={24}>
                                        <h1>Dashboard</h1>
                                </Col>
				<Col span={6}>
					<Card variant="borderless">
						<Statistic
							title={
								<>
									<strong>{total.value}</strong> tickets last month
								</>
							}
							value={Number(total.percentage)}
							precision={0}
							valueStyle={{ color: isUpOrDown(total.percentage).color }}
							prefix={isUpOrDown(total.percentage).icon}
							suffix="%"
						/>
					</Card>
				</Col>
				<Col span={6}>
					<Card variant="borderless">
						<Statistic
							title={
								<>
									<strong>{open.value}</strong> open tickets last month
								</>
							}
							value={Number(open.percentage)}
							precision={0}
							valueStyle={{ color: isUpOrDown(open.percentage).color }}
							prefix={isUpOrDown(open.percentage).icon}
							suffix="%"
						/>
					</Card>
				</Col>
				<Col span={6}>
					<Card variant="borderless">
						<Statistic
							title="Average response time last month"
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
							title="SLA compliance last month"
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
						<TicketsTableComponent tickets={recents} />
					</Card>
				</Col>
			</Row>
		</>
	);
}
