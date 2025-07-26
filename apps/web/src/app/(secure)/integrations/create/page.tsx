import { Card, Col, Row } from "antd";
import CreateIntegrationForm from "./form";
import { BreadcrumbComponent } from "@/components/breadcrumb";

export default function IntegrationCreatePage() {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <BreadcrumbComponent
          items={[
            { href: "/integrations", title: "Integrations" },
            { href: "/integrations/create", title: "Create integration" },
          ]}
        />
      </Col>
      <Col span={24}>
        <Card variant="borderless">
          <h2>Create integration</h2>
          <CreateIntegrationForm />
        </Card>
      </Col>
    </Row>
  );
}
