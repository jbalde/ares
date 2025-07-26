import { Card, Col, Row } from "antd";
import AlertsTableComponent from "../alerts/alerts-table";
import { PrismaClient } from "@/db/prisma";
import { unstable_cache } from "next/cache";
import { BreadcrumbComponent } from "@/components/breadcrumb";

const getAlerts = unstable_cache(
	async () => {
		const prisma = new PrismaClient();
		return prisma.alert.findMany({});
	},
	["monitor-alerts"],
	{ revalidate: 10, tags: ["monitor-alerts"] }
);

export default async function MonitoringPage() {
	const alerts = await getAlerts();

	return (
		<Row gutter={[16, 16]}>
			<Col span={24}>
				<BreadcrumbComponent
					items={[{ href: "/monitoring", title: "Monitoring" }]}
				/>
			</Col>
			<Col span={24}>
				<h1>Monitoring</h1>
			</Col>
			<Col span={24}>
				<Card variant="borderless">
					<h2>Recent alerts</h2>
					<AlertsTableComponent alerts={alerts} />
				</Card>
			</Col>
		</Row>
	);
}
