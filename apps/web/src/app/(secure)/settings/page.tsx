import { Card, Col, Row } from "antd";
import SettingsTableComponent from "./settings-table";
import { PrismaClient } from "@/db/prisma";
import { unstable_cache } from "next/cache";

const getSettings = unstable_cache(
  async () => {
    const prisma = new PrismaClient();
    return prisma.setting.findMany({});
  },
  ["list-settings"],
  { revalidate: 10, tags: ["list-settings"] },
);

export default async function SettingsPage() {
  const settings = await getSettings();

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <h1>Settings</h1>
      </Col>
      <Col span={24}>
        <Card variant="borderless">
          <h2>Settings</h2>
          <SettingsTableComponent settings={settings} />
        </Card>
      </Col>
    </Row>
  );
}
