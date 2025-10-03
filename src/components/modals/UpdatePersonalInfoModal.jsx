import React, { useMemo } from 'react';
import { Modal, Form, Select, Input, Checkbox, Row, Col, message, Radio } from 'antd';
import './UpdatePersonalInfoModal.css';

const { Option } = Select;

const personalInfoOptions = [
  { value: 'address', label: 'Address' },
  { value: 'email', label: 'Email' },
  { value: 'eeob', label: 'eEOB Preference' },
  { value: 'contact', label: 'Contact Number' },
  { value: 'preferredContact', label: 'Preferred Contact Method' },
];

const UpdatePersonalInfoModal = ({ open, onClose, member, activePersonKey }) => {
  const [form] = Form.useForm();

  const memberOptions = useMemo(() => {
    if (!member) return [];
    const options = [{ value: 'primary', label: member.name }];
    (member.dependents || []).forEach((d, idx) => {
      options.push({ value: `dep-${idx}`, label: `${d.name} [Dependent]` });
    });
    return options;
  }, [member]);

  const isDependentOnly = useMemo(() => activePersonKey && activePersonKey.startsWith('dep-'), [activePersonKey]);

  const handleFinish = (values) => {
    // For now just simulate an update success
    message.success('Personal information updated');
    onClose?.();
  };

  const selectedInfo = Form.useWatch('personalInfo', form);
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
      className="update-personal-modal"
      title={<div className="update-modal-title">Update Personal Information</div>}
    >
      <Form form={form} layout="vertical" requiredMark={false} onFinish={handleFinish} initialValues={{ memberKey: isDependentOnly ? activePersonKey : 'primary', personalInfo: 'address' }}>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Member" name="memberKey">
              <Select placeholder="Select member" disabled={!member} options={isDependentOnly ? memberOptions.filter(o => o.value === activePersonKey) : memberOptions} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Personal Info" name="personalInfo">
              <Select placeholder="Select information type">
                {personalInfoOptions.map(opt => (
                  <Option key={opt.value} value={opt.value}>{opt.label}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {selectedInfo === 'address' && (
          <>
            <Form.Item label="Street Address" name={['address', 'street']}>
              <Input placeholder="123 Main St, City" />
            </Form.Item>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="State" name={['address', 'state']}>
                  <Input placeholder="State" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Zip Code" name={['address', 'zip']}>
                  <Input placeholder="ZIP" />
                </Form.Item>
              </Col>
            </Row>
          </>
        )}

        {selectedInfo === 'email' && (
          <Form.Item label="Email" name="email" rules={[{ type: 'email', message: 'Enter valid email' }]}>
            <Input placeholder="name@example.com" />
          </Form.Item>
        )}

        {selectedInfo === 'contact' && (
          <Form.Item label="Contact Number" name="phone">
            <Input placeholder="(555) 555-1212" />
          </Form.Item>
        )}

        {selectedInfo === 'eeob' && (
          <>
            <Form.Item label="Enroll in eEOB" name="eeob" valuePropName="checked">
              <Checkbox>Receive Explanation of Benefits electronically</Checkbox>
            </Form.Item>
            <Form.Item label="Contact Preference" name="eeobContact">
              <Radio.Group options={[{ label: 'Email', value: 'email' }, { label: 'Phone', value: 'phone' }]} />
            </Form.Item>
          </>
        )}

        {selectedInfo === 'preferredContact' && (
          <Form.Item label="Preferred Contact Method" name="preferredContact">
            <Radio.Group options={[{ label: 'Email', value: 'email' }, { label: 'Phone', value: 'phone' }]} />
          </Form.Item>
        )}
      </Form>
    </Modal>
  );
};

export default UpdatePersonalInfoModal;


