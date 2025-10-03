import React from 'react';
import { Table } from 'antd';
import './PatientHistory.css';

const PatientHistory = () => {
  // Top table: Deductible/Maximum/Benefit Percentages
  const topColumns = [
    { title: 'Deductible', dataIndex: 'label', key: 'label', width: 260 },
    { title: 'In-Network', dataIndex: 'inNet', key: 'inNet', width: 200 },
    { title: 'Out-of-Network', dataIndex: 'outNet', key: 'outNet', width: 200 },
  ];

  const topData = [
    { key: 'rd', label: 'Remaining deductible', inNet: '$50.00', outNet: '$50.00' },
    { key: 'max', label: 'Dental Rewards carry-over', inNet: '$1,600', outNet: '$1,600' },
    { key: 'rm', label: 'Remaining maximum', inNet: '$3,600.00', outNet: '$3,600.00' },
    { key: 'bp1', label: 'Type 1 - Preventive', inNet: '100%', outNet: '90%' },
    { key: 'bp2', label: 'Type 2 - Basic', inNet: '100%', outNet: '90%' },
    { key: 'bp3', label: 'Type 3 - Major', inNet: '50%', outNet: '90%' },
  ];

  // Left column: Procedure next eligible
  const leftColumns = [
    {
      title: 'Procedure',
      dataIndex: 'procedure',
      key: 'procedure',
      render: (text) => <span className="ph-wrap-2">{text}</span>,
    },
    {
      title: 'Next Eligible',
      dataIndex: 'nextEligible',
      key: 'nextEligible',
    },
  ];

  const leftData = [
    { key: '1', procedure: 'Routine Exam', nextEligible: '01/08/2024' },
    { key: '2', procedure: 'Comprehensive Exam', nextEligible: '01/08/2024' },
    { key: '3', procedure: 'Periapicals', nextEligible: '01/08/2024' },
    { key: '4', procedure: 'Fullmouth', nextEligible: '01/08/2024' },
    { key: '5', procedure: 'Prophylaxis (Cleanings)', nextEligible: '01/08/2024' },
    { key: '6', procedure: 'Fluoride', nextEligible: '01/08/2024' },
    { key: '7', procedure: 'Sealant', nextEligible: '01/08/2024' },
    { key: '8', procedure: 'Periodontal Maintenance', nextEligible: '01/08/2024' },
    { key: '9', procedure: 'Root Planing and Scaling (D4341)', nextEligible: '01/08/2024' },
  ];

  // Right top: Procedure History (empty demo rows)
  const procColumns = [
    { title: 'All Procedure', dataIndex: 'allProc', key: 'allProc' },
    { title: 'Tooth no.', dataIndex: 'tooth', key: 'tooth', width: 140 },
  ];

  const procData = [
    { key: 'p1', allProc: 'Filling - Composite', tooth: '14' },
    { key: 'p2', allProc: 'Crown - Porcelain', tooth: '7' },
    { key: 'p3', allProc: 'Prophylaxis (Cleaning)', tooth: '-' },
  ];

  // Right bottom: Tooth History
  const toothColumns = [
    { title: 'Tooth', dataIndex: 'tooth', key: 'tooth' },
    { title: 'Procedure Code', dataIndex: 'code', key: 'code' },
    { title: 'Amount of Services', dataIndex: 'amount', key: 'amount' },
    { title: 'Date of Service', dataIndex: 'dos', key: 'dos' },
  ];

  const toothData = [
    { key: 't1', tooth: 'Top right', code: 'D1110', amount: '1', dos: '01/08/2024' },
    { key: 't2', tooth: 'Top left', code: 'D1208', amount: '1', dos: '01/08/2024' },
    { key: 't3', tooth: 'Lower right', code: 'D2392', amount: '1', dos: '12/01/2023' },
    { key: 't4', tooth: 'Lower left', code: 'D2740', amount: '1', dos: '11/20/2023' },
  ];

  return (
    <div className="patient-history">
      <div className="ph-top">
        <div className="ph-card">
          <div className="ph-title">Benefits Overview</div>
          <Table
            columns={topColumns}
            dataSource={topData}
            pagination={false}
            size="small"
            className="ph-table"
            scroll={{ x: 800 }}
          />
        </div>
      </div>

      <div className="ph-split">
        <div className="ph-left">
          <div className="ph-card">
            <div className="ph-title">Next Eligible Procedures</div>
            <Table
              columns={leftColumns}
              dataSource={leftData}
              pagination={false}
              size="small"
              className="ph-table ph-left-table"
            />
          </div>
        </div>
        <div className="ph-right">
          <div className="ph-card">
            <div className="ph-title">Procedure History</div>
            <Table
              columns={procColumns}
              dataSource={procData}
              pagination={false}
              size="small"
              className="ph-table"
              scroll={{ x: 600 }}
            />
          </div>

          <div className="ph-card">
            <div className="ph-title">Tooth History</div>
            <Table
              columns={toothColumns}
              dataSource={toothData}
              pagination={false}
              size="small"
              className="ph-table ph-tooth-table"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientHistory;


