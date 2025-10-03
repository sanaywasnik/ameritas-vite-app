import React, { useState } from 'react';
import { Card, Radio, Select, Input, Button, Space, Divider, DatePicker, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Icons } from './Icons';
import './SearchPanel.css';

const { Option } = Select;

const SearchPanel = ({ onSearch, onCreateCase, onClear, coverage }) => {
  const [memberType, setMemberType] = useState('subscriber');
  const [searchBy, setSearchBy] = useState('subscriberId');
  const [searchValue, setSearchValue] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState(null);
  const [claimNumber, setClaimNumber] = useState('');
  const [ssn, setSsn] = useState('');
  const [isSearchByOpen, setIsSearchByOpen] = useState(false);

  const handleSearch = () => {
    const payload = { memberType, searchBy };
    if (searchBy === 'subscriberId') {
      payload.subscriberId = searchValue.trim();
    } else if (searchBy === 'nameDob') {
      payload.firstName = firstName.trim();
      payload.lastName = lastName.trim();
      payload.dob = dob ? dob.format('MM/DD/YYYY') : '';
    } else if (searchBy === 'claimNumber') {
      payload.claimNumber = claimNumber.trim();
    } else if (searchBy === 'ssn') {
      payload.ssn = ssn.trim();
    }
    onSearch(payload);
  };

  const handleClear = () => {
    setMemberType('subscriber');
    setSearchBy('subscriberId');
    setSearchValue('');
    setFirstName('');
    setLastName('');
    setDob(null);
    setClaimNumber('');
    setSsn('');
    if (onClear) onClear();
  };

  return (
    <div className="search-panel">
      {/* Search Member Card */}
      <Card className="search-card" bordered={false} bodyStyle={{ padding: 0 }}>
        <div className="search-header card-padding-sm">
          <div className="title-left">
            <span className="search-title">Search Member</span>
          </div>
          <Button type="link" onClick={handleClear} className="clear-button">Clear</Button>
        </div>
        <Divider style={{ margin: 0 }} />
        
        <div className="card-inner card-padding">
        <Space direction="vertical" style={{ width: '100%' }} size="middle">
          <div className="form-group">
            <label className="form-label">Member Type</label>
            <Radio.Group 
              value={memberType} 
              onChange={(e) => setMemberType(e.target.value)}
              className="member-type-radio"
            >
              <Radio value="subscriber">Subscriber</Radio>
              <Radio value="dependent">Dependent</Radio>
            </Radio.Group>
          </div>

          <div className="form-group">
            <label className="form-label">Search By</label>
            <Select
              value={searchBy}
              onChange={setSearchBy}
              style={{ width: '100%' }}
              className="search-select"
              suffixIcon={isSearchByOpen ? <Icons.ChevronUp /> : <Icons.ChevronDown />}
              onDropdownVisibleChange={(open) => setIsSearchByOpen(open)}
            >
              <Option value="subscriberId">Subscriber ID</Option>
              <Option value="nameDob">First Name + Last Name + DOB</Option>
              <Option value="claimNumber" disabled>Claim Number</Option>
              <Option value="ssn">SSN</Option>
            </Select>
          </div>

          {/* Dynamic fields based on searchBy */}
          {searchBy === 'subscriberId' && (
            <div className="form-group">
              <label className="form-label">Subscriber ID</label>
              <Input
                placeholder="Enter Subscriber ID"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onPressEnter={handleSearch}
              />
            </div>
          )}

          {searchBy === 'nameDob' && (
            <>
              <div className="form-group">
                <label className="form-label">First Name</label>
                <Input
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  onPressEnter={handleSearch}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <Input
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  onPressEnter={handleSearch}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Date of Birth</label>
                <DatePicker
                  placeholder="MM/DD/YYYY"
                  style={{ width: '100%' }}
                  value={dob}
                  onChange={setDob}
                  format="MM/DD/YYYY"
                  suffixIcon={<Icons.Calendar />}
                />
              </div>
            </>
          )}

          {searchBy === 'claimNumber' && (
            <div className="form-group">
              <label className="form-label">Claim Number</label>
              <Input
                placeholder="Enter Claim Number"
                value={claimNumber}
                onChange={(e) => setClaimNumber(e.target.value)}
                onPressEnter={handleSearch}
              />
            </div>
          )}

          {searchBy === 'ssn' && (
            <div className="form-group">
              <label className="form-label">Enter SSN Number</label>
              <Input
                placeholder="1234567890"
                value={ssn}
                onChange={(e) => setSsn(e.target.value)}
                onPressEnter={handleSearch}
              />
            </div>
          )}

          <Button
            type="primary"
            icon={<Icons.MagnifyingGlass />}
            block
            onClick={handleSearch}
          >
            Search Member
          </Button>
        </Space>
        </div>
      </Card>

      {/* Coverage Details Card */}
      <Card className="coverage-card" bordered={false} bodyStyle={{ padding: 0 }}>
        <div className="card-padding">
          <h3 className="coverage-title">Coverage Details</h3>
        </div>
        <Divider style={{ margin: 0 }} />
        
        <div className="card-inner card-padding">
        <Space direction="vertical" style={{ width: '100%' }} size="small">
          <div className="coverage-item">
            <span className="coverage-label">Coverage Type</span>
            <span className="coverage-value">{coverage?.coverage || '--'}</span>
          </div>
          
          <div className="coverage-item">
            <span className="coverage-label">Effective Date</span>
            <span className="coverage-value">{coverage?.effectiveDate || '--'}</span>
          </div>
          
          <div className="coverage-item">
            <span className="coverage-label">Termination Date</span>
            <span className="coverage-value">{coverage?.terminationDate || '--'}</span>
          </div>
          
          <div className="coverage-item">
            <span className="coverage-label">Opt-In</span>
            <span className="coverage-value">{coverage?.optIn || '--'}</span>
          </div>
        </Space>
        </div>

        <Divider style={{ margin: 0 }} />

        <div className="card-padding">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            block
            onClick={onCreateCase}
          >
            Create New Case
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SearchPanel;
