import { Card, Col, Row } from "antd";
import CreateUserForm from "./form";

export default function UserCreatePage() {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card variant="borderless">
          <h2>Create user</h2>
          <CreateUserForm />
        </Card>
      </Col>
    </Row>
  );
}
