import { Button, Card, Col, Row } from "antd";
import { PrismaClient } from "@/db/prisma";
import TenantsTableComponent from "./tenants-table";
import { unstable_cache } from "next/cache";
import Link from "next/link";

const getTenants = unstable_cache(
	async () => {
		const prisma = new PrismaClient();
		const tenants = await prisma.tenant.findMany({});
		return tenants;
	},
	["list-tenants"],
	{ revalidate: 10, tags: ["list-tenants"] }
);

export default async function TenantsPage() {
	const tenants = await getTenants();

	return (
		<Row gutter={[16, 16]}>
			<Col span={24}>
				<h1>Tenants</h1>
			</Col>
			<Col span={24}>
				<Link href="/tenants/create">
					<Button type="primary">Create tenant</Button>
				</Link>
			</Col>
			<Col span={24}>
				<Card variant="borderless">
					<h2>Tenants list</h2>
					<TenantsTableComponent tenants={tenants} />
				</Card>
			</Col>
		</Row>
	);
}
