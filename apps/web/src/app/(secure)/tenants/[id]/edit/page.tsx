import { Card, Col, Row } from "antd";
import { PrismaClient } from "@/db/prisma";
import EditTenantForm from "./form";
import { BreadcrumbComponent } from "@/components/breadcrumb";

export default async function EditTenantPage({
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
				<Card variant="borderless" title="Edit tenant">
					<EditTenantForm tenant={tenant} />
				</Card>
			</Col>
		</Row>
	);
}
