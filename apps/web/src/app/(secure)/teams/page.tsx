import { Card, Col, Row } from "antd";
import TeamsTableComponent from "./teams-table";
import { PrismaClient } from "@/db/prisma";
import { unstable_cache } from "next/cache";

const getTeams = unstable_cache(
  async () => {
    const prisma = new PrismaClient();
    return prisma.team.findMany({});
  },
  ["list-teams"],
  { revalidate: 10, tags: ["list-teams"] },
);

export default async function TeamsPage() {
  const teams = await getTeams();

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <h1>Teams</h1>
      </Col>
      <Col span={24}>
        <Card variant="borderless">
          <h2>Teams list</h2>
          <TeamsTableComponent teams={teams} />
        </Card>
      </Col>
    </Row>
  );
}
