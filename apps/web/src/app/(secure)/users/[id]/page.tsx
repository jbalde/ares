import { Button, Card, Col, Row } from "antd";
import { PrismaClient } from "@/db/prisma";
import Link from "next/link";
import { BreadcrumbComponent } from "@/components/breadcrumb";

export default async function UserPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const prisma = new PrismaClient();
	const user = await prisma.user.findUnique({
		where: { id: Number(id) },
	});

	if (!user) {
		return <h1>User not found</h1>;
	}

	return (
		<Row gutter={[16, 16]}>
			<Col span={24}>
				<BreadcrumbComponent
					items={[
						{
							href: "/users",
							title: "Users",
						},
						{
							href: `/users/${user.id}`,
							title: `User ${user.name}`,
						},
					]}
				/>
			</Col>
			<Col span={24}>
				<Card
					title={user.name || "User"}
					extra={
						<Link href={`/users/${user.id}/edit`}>
							<Button type="primary">Edit user</Button>
						</Link>
					}
				>
					<p>
						<strong>Email:</strong> {user.email}
					</p>
				</Card>
			</Col>
		</Row>
	);
}
