import React from 'react';
import { Table, Checkbox } from 'antd';
import './ClaimHistory.css';

const CoverageHistory = () => {
  const columns = [
    { title: '', dataIndex: 'select', key: 'select', width: 48, fixed: 'left', render: () => <Checkbox /> },
    { title: 'Effective Date', dataIndex: 'effectiveDate', key: 'effectiveDate', width: 140 },
    { title: 'Term Date', dataIndex: 'termDate', key: 'termDate', width: 140 },
    { title: 'Product', dataIndex: 'product', key: 'product', width: 140 },
    { title: 'Coverage Level', dataIndex: 'coverageLevel', key: 'coverageLevel', width: 160 },
    { title: 'Dependent Member ID', dataIndex: 'dependentMemberId', key: 'dependentMemberId', width: 180 },
    { title: 'Dependent Name', dataIndex: 'dependentName', key: 'dependentName', width: 160 },
    { title: 'Dependent Covered', dataIndex: 'dependentCovered', key: 'dependentCovered', width: 180 },
    { title: 'Relationship', dataIndex: 'relationship', key: 'relationship', width: 140 },
    { title: 'Date of Birth', dataIndex: 'dob', key: 'dob', width: 140 },
    { title: 'Gender', dataIndex: 'gender', key: 'gender', width: 120 },
    { title: 'Dependent SSN', dataIndex: 'ssn', key: 'ssn', width: 150 },
    { title: 'Communication Type', dataIndex: 'communicationType', key: 'communicationType', width: 180 },
    { title: 'Address', dataIndex: 'address', key: 'address', width: 200 },
    { title: 'Email', dataIndex: 'email', key: 'email', width: 200 },
    { title: 'Phone', dataIndex: 'phone', key: 'phone', width: 140 },
    { title: 'Restriction Type', dataIndex: 'restrictionType', key: 'restrictionType', width: 160 },
    { title: 'Overage Notification', dataIndex: 'overageNotification', key: 'overageNotification', width: 180 },
    { title: 'Status', dataIndex: 'status', key: 'status', width: 140 },
    { title: 'Type of disability', dataIndex: 'disabilityType', key: 'disabilityType', width: 180 },
    { title: 'Status Date', dataIndex: 'statusDate', key: 'statusDate', width: 140 },
    { title: 'COB', dataIndex: 'cob', key: 'cob', width: 120 },
    { title: 'Carrier Name', dataIndex: 'carrierName', key: 'carrierName', width: 160 },
    { title: 'COB Effective Date', dataIndex: 'cobEffectiveDate', key: 'cobEffectiveDate', width: 180 },
    { title: 'COB Term Date', dataIndex: 'cobTermDate', key: 'cobTermDate', width: 160 },
  ];

  const data = [
    { key: '1', effectiveDate: '01/01/2024', termDate: '-', product: 'Dental', coverageLevel: 'Family', dependentMemberId: 'SUBA10234-01', dependentName: 'Mary Miller', dependentCovered: 'Yes', relationship: 'Spouse', dob: '06/22/1982', gender: 'F', ssn: '402-23-4567', communicationType: 'Email', address: '2456 Pine St, Omaha, NE', email: 'mary.miller@example.com', phone: '(402) 555-2109', restrictionType: 'Late Entrant', overageNotification: 'Link', status: 'Disabled', disabilityType: '', statusDate: '—', cob: 'Active', carrierName: 'Ameritas', cobEffectiveDate: '01/01/2024', cobTermDate: '-' },
    { key: '2', effectiveDate: '01/01/2024', termDate: '-', product: 'Vision', coverageLevel: 'Employee Only', dependentMemberId: 'SUBA10234-02', dependentName: 'Ethan Miller', dependentCovered: 'Yes', relationship: 'Son', dob: '10/12/2012', gender: 'M', ssn: '402-34-5678', communicationType: 'Email', address: '2456 Pine St, Omaha, NE', email: 'ethan.miller@example.com', phone: '(402) 555-2109', restrictionType: '', overageNotification: 'Link', status: 'Student', disabilityType: '', statusDate: '—', cob: 'Inactive', carrierName: 'Ameritas', cobEffectiveDate: '-', cobTermDate: '-' },
    { key: '3', effectiveDate: '01/01/2024', termDate: '-', product: 'Dental', coverageLevel: 'Employee & 2+', dependentMemberId: '—', dependentName: '—', dependentCovered: '—', relationship: '—', dob: '—', gender: '—', ssn: '—', communicationType: '—', address: '—', email: '—', phone: '—', restrictionType: '', overageNotification: 'Link', status: 'Disabled, Student', disabilityType: '', statusDate: '—', cob: '-', carrierName: '—', cobEffectiveDate: '-', cobTermDate: '-' },
  ];

  return (
    <div className="claim-history-container">
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        size="small"
        className="claim-history-table"
        scroll={{ x: 2400 }}
      />
    </div>
  );
};

export default CoverageHistory;



