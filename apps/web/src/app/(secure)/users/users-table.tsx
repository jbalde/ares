"use client";
import { User } from "@/lib/db/prisma";
import { Table } from "antd";
import Link from "next/link";

export default function UsersTableComponent({ users = [] }: { users: User[] }) {
	const columns = [
		{
			title: "User Name",
			dataIndex: "name",
			key: "name",
			render: (text: string, record: User) => (
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

	return <Table dataSource={users} columns={columns} />;
}
