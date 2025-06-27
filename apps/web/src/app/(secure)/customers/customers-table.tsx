"use client";
import { Customer } from "@/lib/db/prisma";
import { Table } from "antd";
import Link from "next/link";

export default function CustomersTableComponent({
	customers = [],
}: {
	customers: Customer[];
}) {
	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			render: (text: string, record: Customer) => (
				<Link href={`/customers/${record.id}`}>{text}</Link>
			),
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
		},
		{
			title: "Phone",
			dataIndex: "phone",
			key: "phone",
		},
	];

	return <Table dataSource={customers} columns={columns} />;
}
