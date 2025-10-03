import React, { useState } from 'react';
import { Table, DatePicker, Button } from 'antd';
import './BillingPayment.css';

const BillingPayment = () => {
  const [asOfDate, setAsOfDate] = useState(null);

  // Top billing info items
  const billingInfo = [
    { label: 'Billing Frequency', value: 'Monthly' },
    { label: 'Billing Method', value: 'Paper' },
    { label: 'Payment Method', value: 'Credit Card' },
    { label: 'Invoice Fee', value: 'Yes' },
    { label: 'Invoice Amount', value: '$$$' },
    { label: 'Grace Period', value: 'XXX Days' },
    { label: 'Coverage Type', value: 'Dental Family' },
  ];

  // Last 12 month billing & payment
  const last12Columns = [
    { title: 'Billed Date', dataIndex: 'billedDate', key: 'billedDate', width: 120 },
    { title: 'Transaction Date', dataIndex: 'txnDate', key: 'txnDate', width: 140 },
    { title: 'Payment Type', dataIndex: 'paymentType', key: 'paymentType', width: 130 },
    { title: 'Payment Type Number', dataIndex: 'paymentTypeNumber', key: 'paymentTypeNumber', width: 160 },
    { title: 'Due Date', dataIndex: 'dueDate', key: 'dueDate', width: 120 },
    { title: 'Paid Through Date', dataIndex: 'paidThroughDate', key: 'paidThroughDate', width: 160 },
    { title: 'Due Date Billed Amount', dataIndex: 'billedAmount', key: 'billedAmount', width: 180 },
    { title: 'Paid Amount', dataIndex: 'paidAmount', key: 'paidAmount', width: 140 },
    { title: 'Date Applied', dataIndex: 'dateApplied', key: 'dateApplied', width: 140 },
    { title: 'Balance', dataIndex: 'balance', key: 'balance', width: 100 },
    { title: 'Rebill', dataIndex: 'rebill', key: 'rebill', width: 100 },
    { title: 'Rebill Date', dataIndex: 'rebillDate', key: 'rebillDate', width: 140 },
    { title: 'Receipt', dataIndex: 'receipt', key: 'receipt', width: 100, render: () => <a>Link</a> },
    { title: 'Billing Invoice', dataIndex: 'billingInvoice', key: 'billingInvoice', width: 140, render: () => <a>Link</a> },
    { title: 'Request Rebill', dataIndex: 'requestRebill', key: 'requestRebill', width: 140, render: (_text, record) => {
      const noRebill = (record.rebill || '').toLowerCase() === 'no';
      const noDate = !record.rebillDate || record.rebillDate === '-' || record.rebillDate === '';
      return (noRebill || noDate) ? <Button size="small">Request</Button> : null;
    } },
  ];

  const last12Data = [
    { key: '1', billedDate: '12/10/2024', txnDate: '12/10/2024', paymentType: 'Debit Card', paymentTypeNumber: '2345', dueDate: '12/11/2024', paidThroughDate: '-', billedAmount: '$120.00', paidAmount: '$120.00', dateApplied: '12/12/2024', balance: '$0', rebill: 'No', rebillDate: '-' },
    { key: '2', billedDate: '11/10/2024', txnDate: '11/10/2024', paymentType: 'Credit Card', paymentTypeNumber: '5126', dueDate: '11/11/2024', paidThroughDate: '-', billedAmount: '$120.00', paidAmount: '$120.00', dateApplied: '11/12/2024', balance: '$0', rebill: 'Yes', rebillDate: '11/15/2024' },
    { key: '3', billedDate: '10/10/2024', txnDate: '10/10/2024', paymentType: 'EFT', paymentTypeNumber: '2355', dueDate: '10/11/2024', paidThroughDate: '-', billedAmount: '$120.00', paidAmount: '$120.00', dateApplied: '10/12/2024', balance: '$0', rebill: 'Yes', rebillDate: '10/15/2024' },
  ];

  // Rates table
  const ratesColumns = [
    { title: 'Tier Structure', dataIndex: 'tier', key: 'tier', width: 220 },
    { title: 'Employee Only', dataIndex: 'empOnly', key: 'empOnly', width: 150 },
    { title: 'Employee & 1 Dependent', dataIndex: 'emp1', key: 'emp1', width: 220 },
    { title: 'Employee & 2 or more', dataIndex: 'emp2', key: 'emp2', width: 220 },
  ];

  const ratesData = [
    { key: 'r1', tier: 'Dental', empOnly: '50', emp1: '67', emp2: '110' },
    { key: 'r2', tier: 'Ortho', empOnly: '45', emp1: '86', emp2: '129' },
    { key: 'r3', tier: 'Hearing', empOnly: '11', emp1: '89', emp2: '135' },
  ];

  return (
    <div className="billing-payment">
      <div className="bp-info-card">
        {billingInfo.map((item) => (
          <div className="bp-info-item" key={item.label}>
            <div className="bp-info-label">{item.label}</div>
            <div className="bp-info-value">{item.value}</div>
          </div>
        ))}
      </div>

      <div className="bp-card">
        <div className="bp-card-title">Last 12 Month Billing & Payment</div>
        <Table
          columns={last12Columns}
          dataSource={last12Data}
          pagination={false}
          size="small"
          className="bp-table"
          scroll={{ x: 1400 }}
        />
      </div>

      <div className="bp-card">
        <div className="bp-card-title">Rates</div>
        <div className="bp-filter">
          <div className="bp-filter-item">
            <span className="bp-filter-label">As of Date</span>
            <DatePicker value={asOfDate} onChange={setAsOfDate} format="MM/DD/YYYY" />
          </div>
          <Button type="primary">Filter</Button>
        </div>
        <div className="bp-meta">
          <div>Effective Date <strong>01/01/2024</strong></div>
          <div>Guarantee Date <strong>01/01/2025</strong></div>
        </div>
        <Table
          columns={ratesColumns}
          dataSource={ratesData}
          pagination={false}
          size="small"
          className="bp-table"
          scroll={{ x: 900 }}
        />
      </div>
    </div>
  );
};

export default BillingPayment;


