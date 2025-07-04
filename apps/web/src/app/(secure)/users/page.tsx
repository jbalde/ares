import { Breadcrumb, Button, Card, Col, Row, Space } from "antd";
import UsersTableComponent from "./users-table";
import Link from "next/link";
import { unstable_cache } from "next/cache";
import { PrismaClient } from "@/db/prisma";
import { HugeiconsIcon } from "@hugeicons/react";
import { Home07Icon, User03Icon } from "@hugeicons/core-free-icons";

const getUsers = unstable_cache(
	async () => {
		const prisma = new PrismaClient();
		const users = await prisma.user.findMany({});

		return users;
	},
	["list-users"],
	{ revalidate: 10, tags: ["list-users"] }
);

export default async function UsersPage() {
	const users = await getUsers();

	return (
		<>
			<Row gutter={[16, 16]}>
				<Col span={24}>
					<Breadcrumb
						items={[
							{
								href: "/",
								title: <HugeiconsIcon icon={Home07Icon} size={20} />,
							},
							{
								href: "/users",
								title: "Users",
							},
						]}
					/>
				</Col>
				<Col span={24}>
					<h1>Users</h1>
				</Col>
				<Col span={24}>
					<Link href="/users/create">
						<Button type="primary">Create user</Button>
					</Link>
				</Col>
				<Col span={24}>
					<Card variant="borderless">
						<h2>Users list</h2>
						<UsersTableComponent users={users} />
					</Card>
				</Col>
			</Row>
		</>
	);
}
