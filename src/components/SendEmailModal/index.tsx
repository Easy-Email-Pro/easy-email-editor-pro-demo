import { Button, Form, Input, Message, Modal } from "@arco-design/web-react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useEditorContext } from "easy-email-pro-theme";

export const SendEmailModal = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { mergetagsData, values } = useEditorContext();
  useEffect(() => {
    setEmail("");
  }, [visible]);

  const onSendEmail = async () => {
    if (!email) {
      Message.warning(`Email required`);
      return;
    }
    setLoading(true);

    try {
      await axios.post(`https://admin.easyemail.pro/api/send-email`, {
        template: values,
        data: mergetagsData,
        to: email,
      });
      Message.success(`Email sent!`);
      setVisible(false);
    } catch (error) {
      Message.error(String(error));
    }
    setLoading(false);
  };

  return (
    <>
      <Modal
        cancelText="Cancel"
        okText="Send"
        title="Send Email"
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={onSendEmail}
        okButtonProps={{ loading: loading }}
      >
        <Form.Item label="To Email">
          <Input
            type="email"
            value={email}
            onChange={setEmail}
            autoComplete="off"
          />
        </Form.Item>
      </Modal>
      <Button onClick={() => setVisible(true)}>
        <strong>Send Email</strong>
      </Button>
    </>
  );
};
