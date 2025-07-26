import { Button, Card, Col, Row } from "antd";
import { PrismaClient } from "@/db/prisma";
import Link from "next/link";
import { BreadcrumbComponent } from "@/components/breadcrumb";

export default async function TenantPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const prisma = new PrismaClient();
	const tenant = await prisma.tenant.findUnique({
		where: { id: Number(id) },
	});

	if (!tenant) {
		return <h1>Tenant not found</h1>;
	}

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
							href: `/tenants/${tenant.id}`,
							title: `Tenant ${tenant.name}`,
						},
					]}
				/>
			</Col>
			<Col span={24}>
				<Card
					title={tenant.name || "Tenant"}
					extra={
						<Link href={`/tenants/${tenant.id}/edit`}>
							<Button type="primary">Edit tenant</Button>
						</Link>
					}
				>
					<p>
						<strong>ID:</strong> {tenant.id}
					</p>
				</Card>
			</Col>
		</Row>
	);
}
