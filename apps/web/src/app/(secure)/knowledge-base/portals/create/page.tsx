import { Card, Col, Row } from "antd";
import CreatePortalForm from "./form";

export default function PortalCreatePage() {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card variant="borderless">
          <h2>Create portal</h2>
          <CreatePortalForm />
        </Card>
      </Col>
    </Row>
  );
}
