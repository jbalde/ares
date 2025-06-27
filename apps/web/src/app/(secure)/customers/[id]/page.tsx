import { Button, Card, Col, Row } from "antd";
import { PrismaClient } from "@/db/prisma";
import Link from "next/link";

export default async function CustomerPage({
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
				<Card
					title={customer.name || "Customer"}
					extra={
						<Link href={`/customers/${customer.id}/edit`}>
							<Button type="primary">Edit customer</Button>
						</Link>
					}
				>
					<p>
						<strong>Email:</strong> {customer.email || "-"}
					</p>
					<p>
						<strong>Phone:</strong> {customer.phone || "-"}
					</p>
				</Card>
			</Col>
		</Row>
	);
}
