"use client";
import { Integration } from "@/db/prisma";
import { Table, Tag } from "antd";

export default function IntegrationsTableComponent({
  integrations = [],
}: {
  integrations: Integration[];
}) {
  const dataSource = integrations.map((integration) => ({
    id: integration.id,
    type: integration.type,
    enabled: integration.enabled,
  }));

  const columns = [
    { title: "Type", dataIndex: "type", key: "type" },
    {
      title: "Enabled",
      dataIndex: "enabled",
      key: "enabled",
      render: (text: boolean) => (
        <Tag color={text ? "green" : "red"}>
          {text ? "Enabled" : "Disabled"}
        </Tag>
      ),
    },
  ];

  return <Table dataSource={dataSource} columns={columns} rowKey="id" />;
}
