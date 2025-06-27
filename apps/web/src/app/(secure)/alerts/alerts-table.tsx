"use client";
import { Alert } from "@/db/prisma";
import { Table, Tag } from "antd";

export default function AlertsTableComponent({
  alerts = [],
}: {
  alerts: Alert[];
}) {
  const dataSource = alerts.map((alert) => ({
    id: alert.id,
    message: alert.message,
    type: alert.type,
    read: alert.read,
  }));

  const columns = [
    { title: "Message", dataIndex: "message", key: "message" },
    { title: "Type", dataIndex: "type", key: "type" },
    {
      title: "Read",
      dataIndex: "read",
      key: "read",
      render: (text: boolean) => (
        <Tag color={text ? "green" : "orange"}>{text ? "Yes" : "No"}</Tag>
      ),
    },
  ];

  return <Table dataSource={dataSource} columns={columns} rowKey="id" />;
}
