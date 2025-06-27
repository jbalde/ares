"use client";
import { Team } from "@/db/prisma";
import { Table } from "antd";

export default function TeamsTableComponent({ teams = [] }: { teams: Team[] }) {
  const dataSource = teams.map((team) => ({ id: team.id, name: team.name }));

  const columns = [{ title: "Name", dataIndex: "name", key: "name" }];

  return <Table dataSource={dataSource} columns={columns} rowKey="id" />;
}
