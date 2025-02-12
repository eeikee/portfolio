import React from 'react';
import { Form, Input, Button, message, Divider } from 'antd';

const EmailForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (response.ok) {
        message.success(data.message);
        form.resetFields();
      } else {
        console.error('Erro ao enviar e-mail:', data.error);
        message.error(data.error);
      }
    } catch (error) {
      message.error('Erro ao enviar e-mail. Tente novamente.');
      console.error('Erro ao enviar e-mail:', error.message);
      return new Response(JSON.stringify({ error: `Erro ao enviar e-mail: ${error.message}` }));
    }
  };
  return (
    <>
      <h1>Email</h1>
      <Divider />
      <Form form={form} name="email_form" onFinish={onFinish} layout="vertical">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Telefone"
          rules={[{ required: false }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="subject"
          label="Assunto"
          rules={[{ required: true, message: 'Por favor, insira o assunto!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="message"
          label="Mensagem"
          rules={[{ required: true, message: 'Por favor, insira sua mensagem!' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EmailForm;
