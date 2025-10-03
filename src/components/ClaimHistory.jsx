import React, { useState } from 'react';
import { Table } from 'antd';
import ClaimDetailsModal from './modals/ClaimDetailsModal';
import './ClaimHistory.css';

const ClaimHistory = ({ claims }) => {
  const [selectedClaimId, setSelectedClaimId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClaimClick = (claimId) => {
    setSelectedClaimId(claimId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedClaimId(null);
  };

  // Static dummy data used for all users
  const defaultClaims = [
    { claimId: '23423', status: 'PAID', appealId: '', dateOfService: '01/15/2024', patientName: 'John Miller', providerName: 'Dr. Smith Dental', receivedDate: '01/18/2024', paymentAmount: '$150.00', paymentDate: '01/22/2024', rateCoverage: '80%', checkNumber: 'CHK001234' },
    { claimId: '45626', status: 'Pending', appealId: '', dateOfService: '02/10/2024', patientName: 'Mary Miller', providerName: 'Vision Center Plus', receivedDate: '02/12/2024', paymentAmount: '', paymentDate: '', rateCoverage: '100%', checkNumber: '' },
    { claimId: '78921', status: 'PAID', appealId: 'APP-001', dateOfService: '12/05/2023', patientName: 'Ethan Miller', providerName: 'Kids Dental Care', receivedDate: '12/08/2023', paymentAmount: '$85.50', paymentDate: '12/15/2023', rateCoverage: '100%', checkNumber: 'CHK001198' },
    { claimId: '89234', status: 'PAID', appealId: '', dateOfService: '11/20/2023', patientName: 'John Miller', providerName: 'Advanced Dental Associates', receivedDate: '11/22/2023', paymentAmount: '$320.00', paymentDate: '11/28/2023', rateCoverage: '80%', checkNumber: 'CHK001142' },
    { claimId: '91256', status: 'Processing', appealId: '', dateOfService: '02/20/2024', patientName: 'Mary Miller', providerName: 'Family Dental Group', receivedDate: '02/22/2024', paymentAmount: '', paymentDate: '', rateCoverage: '80%', checkNumber: '' },
    { claimId: '92415', status: 'PAID', appealId: '', dateOfService: '01/05/2024', patientName: 'Ethan Miller', providerName: 'Bright Smiles Pediatric', receivedDate: '01/08/2024', paymentAmount: '$95.00', paymentDate: '01/15/2024', rateCoverage: '100%', checkNumber: 'CHK001201' },
    { claimId: '93678', status: 'Denied', appealId: 'APP-002', dateOfService: '12/28/2023', patientName: 'John Miller', providerName: 'Elite Dental Clinic', receivedDate: '01/02/2024', paymentAmount: '', paymentDate: '', rateCoverage: '0%', checkNumber: '' },
    { claimId: '94821', status: 'PAID', appealId: '', dateOfService: '01/30/2024', patientName: 'Mary Miller', providerName: 'Downtown Dental Center', receivedDate: '02/01/2024', paymentAmount: '$210.50', paymentDate: '02/08/2024', rateCoverage: '80%', checkNumber: 'CHK001289' },
    { claimId: '95312', status: 'PAID', appealId: '', dateOfService: '03/03/2024', patientName: 'Emily Carter', providerName: 'Colorado Dental Group', receivedDate: '03/06/2024', paymentAmount: '$132.75', paymentDate: '03/12/2024', rateCoverage: '80%', checkNumber: 'CHK001335' },
    { claimId: '96004', status: 'Pending', appealId: '', dateOfService: '03/15/2024', patientName: 'Emily Carter', providerName: 'Metro Dental Clinic', receivedDate: '03/18/2024', paymentAmount: '', paymentDate: '', rateCoverage: '80%', checkNumber: '' }
  ];

  const columns = [
    {
      title: 'Claim ID',
      dataIndex: 'claimId',
      key: 'claimId',
      width: 100,
      fixed: 'left',
      render: (text) => (
        <span className="claim-id-link" onClick={() => handleClaimClick(text)}>
          {text}
        </span>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (text) => (
        <span className={`status-badge ${text.toLowerCase()}`}>{text}</span>
      ),
    },
    {
      title: 'Appeal ID',
      dataIndex: 'appealId',
      key: 'appealId',
      width: 100,
    },
    {
      title: 'Date of Service',
      dataIndex: 'dateOfService',
      key: 'dateOfService',
      width: 120,
    },
    {
      title: 'Patient Name',
      dataIndex: 'patientName',
      key: 'patientName',
      width: 150,
    },
    {
      title: 'Provider Name',
      dataIndex: 'providerName',
      key: 'providerName',
      width: 180,
    },
    {
      title: 'Received Date',
      dataIndex: 'receivedDate',
      key: 'receivedDate',
      width: 120,
    },
    {
      title: 'Payment Amount',
      dataIndex: 'paymentAmount',
      key: 'paymentAmount',
      width: 130,
      render: (text) => text || '--',
    },
    {
      title: 'Payment Date',
      dataIndex: 'paymentDate',
      key: 'paymentDate',
      width: 120,
      render: (text) => text || '--',
    },
    {
      title: 'Rate Coverage',
      dataIndex: 'rateCoverage',
      key: 'rateCoverage',
      width: 120,
    },
    {
      title: 'Check Number',
      dataIndex: 'checkNumber',
      key: 'checkNumber',
      width: 130,
      render: (text) => text || '--',
    },
  ];

  // Use provided claims if passed, otherwise fall back to defaultClaims
  const dataSource = (claims && claims.length ? claims : defaultClaims).map((claim, index) => ({
    ...claim,
    key: claim.claimId || index,
  }));

  return (
    <>
      <div className="claim-history-container">
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          size="small"
          className="claim-history-table"
          scroll={{ x: 1400 }}
          locale={{
            emptyText: 'No claims found',
          }}
        />
      </div>
      <ClaimDetailsModal 
        open={isModalOpen} 
        onClose={handleCloseModal} 
        claimId={selectedClaimId} 
      />
    </>
  );
};

export default ClaimHistory;

