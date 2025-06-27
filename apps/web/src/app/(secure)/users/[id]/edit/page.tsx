import { Card, Col, Row } from "antd";
import { PrismaClient } from "@/db/prisma";
import EditUserForm from "./form";

export default async function EditUserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const prisma = new PrismaClient();
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });

  if (!user) {
    return <h1>User not found</h1>;
  }

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card variant="borderless" title="Edit user">
          <EditUserForm user={user} />
        </Card>
      </Col>
    </Row>
  );
}
