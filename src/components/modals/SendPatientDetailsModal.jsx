import React, { useState, useEffect } from 'react';
import { Modal, Form, Select, Checkbox, message } from 'antd';

import { Icons } from '../Icons';
import './SendPatientDetailsModal.css';

const { Option } = Select;

const SendPatientDetailsModal = ({ open, onClose, member, activePersonKey }) => {
  const [form] = Form.useForm();
  const [isDependentOnly, setIsDependentOnly] = useState(false);

  useEffect(() => {
    if (member && activePersonKey && activePersonKey !== 'primary') {
      setIsDependentOnly(true);
    } else {
      setIsDependentOnly(false);
    }
  }, [member, activePersonKey]);

  const memberOptions = member ? [
    { label: member.name, value: 'primary' },
    ...(member.dependents || []).map((dep, idx) => ({
      label: `${dep.name} [Dependent]`,
      value: `dep-${idx}`
    }))
  ] : [];

  const handleFinish = (values) => {
    // For now just simulate a send success
    message.success('Patient details sent');
    onClose?.();
  };

  const triggerSubmit = () => form.submit();

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={(
        <div className="send-footer">
          <button type="button" onClick={triggerSubmit} className="btn-send">Send</button>
        </div>
      )}
      destroyOnClose
      className="send-patient-details-modal"
      title={<div className="send-modal-title">Send Patient Details</div>}
    >
      <Form form={form} layout="vertical" requiredMark={false} onFinish={handleFinish}>
        <Form.Item label="Select patient" name="patient">
          <Select 
            placeholder="Select patient" 
            suffixIcon={<Icons.ChevronDown />}
            defaultValue="child1"
          >
            {memberOptions.map(option => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
            <Option value="child1">Child 1</Option>
            <Option value="child2">Child 2</Option>
            <Option value="spouse">Spouse</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Product" name="product">
          <Select 
            placeholder="Select product" 
            suffixIcon={<Icons.ChevronDown />}
            defaultValue="dental"
          >
            <Option value="dental">Dental</Option>
            <Option value="vision">Vision</Option>
            <Option value="hearing">Hearing</Option>
            <Option value="life">Life & AD&D</Option>
            <Option value="disability">Disability</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Delivery Method" name="deliveryMethod">
          <Checkbox.Group defaultValue={['email']}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
              <Checkbox value="email">Email</Checkbox>
              <Checkbox value="fax">Fax</Checkbox>
            </div>
          </Checkbox.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SendPatientDetailsModal;
