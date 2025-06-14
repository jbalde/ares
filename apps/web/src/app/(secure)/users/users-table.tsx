"use client";
import { User } from "@/lib/db/prisma";
import { Table } from "antd";
import Link from "next/link";

export default async function UsersTableComponent({
	users = [],
}: {
	users: User[];
}) {
	const dataSource = users.map((user) => ({
		id: user.id,
		name: user.name,
		email: user.email,
	}));

	const columns = [
		{
			title: "User Name",
			dataIndex: "name",
			key: "name",
			render: (text: string, record: any) => (
				<Link href={`/users/${record.id}`}>{text}</Link>
			),
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
		},
		{
			title: "Tenant",
			dataIndex: "tenant",
			key: "tenant",
		},
	];

	return <Table dataSource={dataSource} columns={columns} />;
}
