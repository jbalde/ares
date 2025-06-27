import { Card, Col, Row } from "antd";
import { PrismaClient } from "@/db/prisma";
import EditCustomerForm from "./form";

export default async function EditCustomerPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const prisma = new PrismaClient();
	const customer = await prisma.customer.findUnique({
		where: { id: Number(id) },
	});

	if (!customer) {
		return <h1>Customer not found</h1>;
	}

	return (
		<Row gutter={[16, 16]}>
			<Col span={24}>
				<Card variant="borderless" title="Edit customer">
					<EditCustomerForm customer={customer} />
				</Card>
			</Col>
		</Row>
	);
}
