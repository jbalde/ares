"use client";
import { Team } from "@/db/prisma";
import { Table } from "antd";

export default function TeamsTableComponent({ teams = [] }: { teams: Team[] }) {
	const columns = [{ title: "Name", dataIndex: "name", key: "name" }];

	return <Table dataSource={teams} columns={columns} rowKey="id" />;
}
