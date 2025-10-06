import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button, Table, Space, Tag, message, Divider } from 'antd';

import './ProcedureCodeLookupModal.css';

const ProcedureCodeLookupModal = ({ open, onClose, member, activePersonKey }) => {
  const [form] = Form.useForm();
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchedCodes, setSearchedCodes] = useState([]);

  // Mock procedure code data
  const mockProcedureData = {
    'D0120': {
      code: 'D0120',
      description: 'Periodic oral evaluation - established patient',
      category: 'Preventive',
      fee: '$45.00',
      status: 'Active'
    },
    'D1110': {
      code: 'D1110',
      description: 'Prophylaxis - adult',
      category: 'Preventive',
      fee: '$85.00',
      status: 'Active'
    },
    'D2140': {
      code: 'D2140',
      description: 'Amalgam - one surface, permanent',
      category: 'Basic',
      fee: '$125.00',
      status: 'Active'
    },
    'D2750': {
      code: 'D2750',
      description: 'Crown - porcelain fused to high noble metal',
      category: 'Major',
      fee: '$1,200.00',
      status: 'Active'
    },
    'D6010': {
      code: 'D6010',
      description: 'Implant - endosteal',
      category: 'Major',
      fee: '$2,500.00',
      status: 'Active'
    }
  };

  const handleSearch = async (values) => {
    const { procedureCodes } = values;
    if (!procedureCodes || !procedureCodes.trim()) {
      message.warning('Please enter at least one procedure code');
      return;
    }

    setSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      const codes = procedureCodes.split(/[,\s]+/).filter(code => code.trim());
      const results = [];
      const foundCodes = [];

      codes.forEach(code => {
        const upperCode = code.toUpperCase().trim();
        if (mockProcedureData[upperCode]) {
          results.push({
            ...mockProcedureData[upperCode],
            key: `${upperCode}-${Date.now()}-${Math.random()}`
          });
          foundCodes.push(upperCode);
        } else {
          results.push({
            code: upperCode,
            description: 'Code not found',
            category: 'Unknown',
            fee: 'N/A',
            status: 'Not Found',
            key: `${upperCode}-not-found-${Date.now()}`
          });
        }
      });

      setSearchResults(results);
      setSearchedCodes(foundCodes);
      setSearching(false);
    }, 1000);
  };

  const handleClear = () => {
    form.resetFields();
    setSearchResults([]);
    setSearchedCodes([]);
  };

  const columns = [
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
      width: 100,
      render: (code, record) => (
        <span className={record.status === 'Not Found' ? 'code-not-found' : 'code-found'}>
          {code}
        </span>
      )
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (description, record) => (
        <span className={record.status === 'Not Found' ? 'description-not-found' : 'description-found'}>
          {description}
        </span>
      )
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      width: 120,
      render: (category) => {
        const color = category === 'Preventive' ? 'green' : 
                     category === 'Basic' ? 'blue' : 
                     category === 'Major' ? 'red' : 'default';
        return <Tag color={color}>{category}</Tag>;
      }
    },
    {
      title: 'Fee',
      dataIndex: 'fee',
      key: 'fee',
      width: 100,
      render: (fee) => <span className="fee-amount">{fee}</span>
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (status) => (
        <Tag color={status === 'Active' ? 'green' : 'red'}>
          {status}
        </Tag>
      )
    }
  ];

  const triggerSubmit = () => form.submit();

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={(
        <div className="update-footer">
          <button type="button" className="btn-secondary" onClick={handleClear}>Clear</button>
          <button type="button" onClick={triggerSubmit} className="btn-primary">Search</button>
        </div>
      )}
      destroyOnClose
      className="procedure-code-modal"
      title={<div className="update-modal-title">Procedure Code Lookup</div>}
      width={800}
    >
      <Form form={form} layout="vertical" requiredMark={false} onFinish={handleSearch}>
        <div className="search-section">
          <Form.Item 
            label="Procedure Codes" 
            name="procedureCodes"
            help="Enter procedure codes separated by commas or spaces (e.g., D0120, D1110 or D0120 D1110)"
          >
            <Input.TextArea 
              placeholder="Enter procedure codes (e.g., D0120, D1110, D2140)"
              rows={3}
              className="procedure-input"
            />
          </Form.Item>
        </div>

        {searchResults.length > 0 && (
          <>
            <Divider />
            <div className="results-section">
              <div className="results-header">
                <h4>Search Results ({searchResults.length} codes found)</h4>
                {searchedCodes.length > 0 && (
                  <div className="searched-codes">
                    <span>Found: </span>
                    {searchedCodes.map(code => (
                      <Tag key={code} color="green">{code}</Tag>
                    ))}
                  </div>
                )}
              </div>
              
              <Table
                columns={columns}
                dataSource={searchResults}
                pagination={false}
                size="small"
                className="procedure-table"
                scroll={{ y: 300 }}
              />
            </div>
          </>
        )}
      </Form>
    </Modal>
  );
};

export default ProcedureCodeLookupModal;
