"use client";
import { Setting } from "@/db/prisma";
import { Table } from "antd";

export default function SettingsTableComponent({
  settings = [],
}: {
  settings: Setting[];
}) {
  const dataSource = settings.map((setting) => ({
    id: setting.id,
    keyName: setting.key,
    value: setting.value,
  }));

  const columns = [
    { title: "Key", dataIndex: "keyName", key: "key" },
    { title: "Value", dataIndex: "value", key: "value" },
  ];

  return <Table dataSource={dataSource} columns={columns} rowKey="id" />;
}
