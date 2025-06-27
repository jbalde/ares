"use client";
import { Report } from "@/db/prisma";
import { Table } from "antd";

export default function ReportsTableComponent({
	reports = [],
}: {
	reports: Report[];
}) {
	const columns = [
		{ title: "Name", dataIndex: "name", key: "name" },
		{ title: "Generated", dataIndex: "generatedAt", key: "generatedAt" },
	];

	return <Table dataSource={reports} columns={columns} rowKey="id" />;
}
