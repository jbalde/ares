"use client";
import { Table, Tag } from "antd";
import Link from "next/link";

export default function UsersTableComponent() {
	const dataSource = [
		{
			id: "1",
			name: "User 1",
			email: "user1@example.com",
		},
		{
			id: "2",
			name: "User 2",
			email: "user2@example.com",
		},
	];

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
