"use client";
import { Report } from "@/db/prisma";
import { Table } from "antd";

export default function ReportsTableComponent({
  reports = [],
}: {
  reports: Report[];
}) {
  const dataSource = reports.map((report) => ({
    id: report.id,
    name: report.name,
    generatedAt: report.generatedAt.toISOString(),
  }));

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Generated", dataIndex: "generatedAt", key: "generatedAt" },
  ];

  return <Table dataSource={dataSource} columns={columns} rowKey="id" />;
}
