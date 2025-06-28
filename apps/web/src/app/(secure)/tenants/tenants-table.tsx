"use client";
import { Tenant } from "@/db/prisma";
import { Table } from "antd";
import Link from "next/link";

export default function TenantsTableComponent({
	tenants = [],
}: {
	tenants: Tenant[];
}) {
	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			render: (text: string, record: Tenant) => (
				<Link href={`/tenants/${record.id}`}>{text}</Link>
			),
		},
	];

	return <Table dataSource={tenants} columns={columns} rowKey="id" />;
}
