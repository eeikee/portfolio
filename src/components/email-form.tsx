import { Button, Col, Form, Input, message, Row } from 'antd';

const EmailForm = () => {
  const [form] = Form.useForm();

  interface FormValues {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  }

  interface ApiResponse {
    message: string;
    error?: string;
  }

  const onFinish = async (values: FormValues) => {
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data: ApiResponse = await response.json();
      if (response.ok) {
        message.success(data.message);
        form.resetFields();
      } else {
        console.error('Erro ao enviar e-mail:', data.error);
        message.error(data.error);
      }
    } catch (error: any) {
      message.error('Erro ao enviar e-mail. Tente novamente.');
      console.error('Erro ao enviar e-mail:', error.message);
      return new Response(JSON.stringify({ error: `Erro ao enviar e-mail: ${error.message}` }));
    }
  };
  return (
    <>

      <Form form={form} name="email_form" onFinish={onFinish} layout="vertical">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}
        >
          <Input />
        </Form.Item>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="phone"
              label="Phone"
              rules={[{ required: false }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="subject"
          label="Subject"
          rules={[{ required: true, message: 'Por favor, insira o assunto!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="message"
          label="Message"
          rules={[{ required: true, message: 'Por favor, insira sua mensagem!' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Send
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EmailForm;
