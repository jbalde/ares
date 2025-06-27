"use client";
import { Ticket } from "@/lib/db/prisma";
import { Table, Tag } from "antd";
import Link from "next/link";

export default function TicketsTableComponent({
	tickets,
}: {
	tickets: Ticket[];
}) {
	const columns = [
		{
			title: "Ticket",
			dataIndex: "name",
			key: "name",
			render: (text: string, record: Ticket) => (
				<Link href={`/tickets/${record.id}`}>{text}</Link>
			),
		},
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
			render: (text: string) => {
				return <Tag color="red">{text}</Tag>;
			},
		},
		{
			title: "Priority",
			dataIndex: "priority",
			key: "priority",
			render: (text: string) => {
				return <Tag color="red">{text}</Tag>;
			},
		},
		{
			title: "Assigned to",
			dataIndex: "assignedTo",
			key: "assignedTo",
		},
		{
			title: "Created at",
			dataIndex: "createdAt",
			key: "createdAt",
		},
		{
			title: "Tenant",
			dataIndex: "tenant",
			key: "tenant",
		},
	];

	return <Table dataSource={tickets} columns={columns} />;
}
