"use client";
import { Setting } from "@/db/prisma";
import { Table } from "antd";

export default function SettingsTableComponent({
	settings = [],
}: {
	settings: Setting[];
}) {
	const columns = [
		{ title: "Key", dataIndex: "keyName", key: "key" },
		{ title: "Value", dataIndex: "value", key: "value" },
	];

	return <Table dataSource={settings} columns={columns} rowKey="id" />;
}
