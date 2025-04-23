"use client";
import { Table, Tag } from "antd";
import { create } from "domain";
import Link from "next/link";

export default function TicketsTableComponent() {
	const dataSource = [
		{
			id: "1",
			name: "Tickent 1",
			status: "open",
			priority: "low",
			assignedTo: "John Doe",
			createdAt: "2023-10-01 12:00:00",
			tenant: "Tenant 1",
		},
		{
			id: "2",
			name: "Ticket 2",
			status: "in progress",
			priority: "medium",
			assignedTo: "John Doe",
			createdAt: "2023-10-01 12:00:00",
			tenant: "Tenant X",
		},
	];

	const columns = [
		{
			title: "Ticket",
			dataIndex: "name",
			key: "name",
			render: (text: string, record: any) => (
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

	return <Table dataSource={dataSource} columns={columns} />;
}
