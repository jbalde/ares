"use client";
import { SLA } from "@/db/prisma";
import { Table } from "antd";

export default function SlasTableComponent({ slas = [] }: { slas: SLA[] }) {
  const dataSource = slas.map((sla) => ({
    id: sla.id,
    name: sla.name,
    response: sla.responseTimeHours,
    management: sla.managementTimeHours,
    resolution: sla.resolutionTimeHours,
    active: sla.active,
  }));

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Response (h)", dataIndex: "response", key: "response" },
    { title: "Management (h)", dataIndex: "management", key: "management" },
    { title: "Resolution (h)", dataIndex: "resolution", key: "resolution" },
    { title: "Active", dataIndex: "active", key: "active" },
  ];

  return <Table dataSource={dataSource} columns={columns} rowKey="id" />;
}
