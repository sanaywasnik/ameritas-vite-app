import React, { useState, useEffect } from 'react';
import { Modal, Form, Select, DatePicker, message } from 'antd';

import { Icons } from '../Icons';
import './UpdateDependentStatusModal.css';

const { Option } = Select;

const UpdateDependentStatusModal = ({ open, onClose, member, activePersonKey }) => {
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
    // For now just simulate an update success
    message.success('Dependent status updated');
    onClose?.();
  };

  const triggerSubmit = () => form.submit();

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={(
        <div className="update-footer">
          <button type="button" className="btn-secondary" onClick={onClose}>Discard</button>
          <button type="button" onClick={triggerSubmit} className="btn-primary">Update</button>
        </div>
      )}
      destroyOnClose
      className="update-dependent-status-modal"
      title={<div className="update-modal-title">Update Dependent Status</div>}
    >
      <Form form={form} layout="vertical" requiredMark={false} onFinish={handleFinish}>
        <Form.Item label="Member Details" name="memberDetails">
          <Select placeholder="Select member" suffixIcon={<Icons.ChevronDown />}>
            {memberOptions.map(option => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Date of Birth" name="dateOfBirth">
          <DatePicker 
            placeholder="Select date" 
            suffixIcon={<Icons.Calendar />}
            style={{ width: '100%' }}
          />
        </Form.Item>

        <Form.Item label="Share Information" name="shareInformation">
          <Select placeholder="Select option" suffixIcon={<Icons.ChevronDown />}>
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Student" name="student">
          <Select placeholder="Select option" suffixIcon={<Icons.ChevronDown />}>
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdateDependentStatusModal;