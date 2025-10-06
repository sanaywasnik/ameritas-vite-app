import React, { useState } from 'react';
import { Layout, Avatar, Space, Select, Popover, Switch, Button, Modal, Table } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';
// Using FontAwesome Pro via CDN - no React components needed
import './Header.css';
import logo from '../assets/ameritas_logo.png';
import aiNextLogo from '../assets/AINext_logo.png';
import { members as allMembers } from '../data/members';

const { Header: AntHeader } = Layout;

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [membersOpen, setMembersOpen] = useState(false);
  const personaOptions = [
    { label: 'Subscriber / Member', value: 'subscriber-member', disabled: false },
    { label: 'Provider', value: 'provider', disabled: true },
    { label: 'Plan Sponsor', value: 'plan-sponsor', disabled: true },
    { label: 'Producer', value: 'producer', disabled: true },
  ];

  const [personaOpen, setPersonaOpen] = useState(false);

  return (
    <AntHeader className="app-header">
      <div className="header-left">
        <Button 
          type="text"
          className="hamburger-menu"
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
          aria-label="Menu"
          icon={<i className="fas fa-bars hamburger-icon"></i>}
        />
        <img src={logo} alt="Ameritas" className="ameritas-logo" />
        <img src={aiNextLogo} alt="AI Next" className="ai-next-logo" />
      </div>
      
      <div className="header-center">
        <img src={logo} alt="Ameritas" className="ameritas-logo" />
        <img src={aiNextLogo} alt="AI Next" className="ai-next-logo" />
      </div>
      
      <div className="header-right">
        <Space size="middle">
          <Select
            className="persona-select"
            options={personaOptions}
            defaultValue="subscriber-member"
            size="middle"
            style={{ minWidth: 200 }}
            suffixIcon={<i className={`fas fa-chevron-${personaOpen ? 'up' : 'down'}`}></i>}
            onDropdownVisibleChange={(open) => setPersonaOpen(open)}
          />

          <Popover
            placement="bottomRight"
            trigger="click"
            overlayClassName="profile-popover"
            open={open}
            onOpenChange={(v) => setOpen(v)}
            content={(
              <div className="profile-card">
                <div className="profile-top">
                  <div className="profile-top-left">
                    <Avatar size={40} style={{ backgroundColor: '#e6f4ff', color: '#1677ff', fontWeight: 700 }}>SW</Avatar>
                    <div className="profile-name-role">
                      <div className="ds-body-sm-bold">Sanay Wasnik</div>
                      <div className="ds-body-sm" style={{ color: '#595959' }}>Customer Care</div>
                    </div>
                  </div>
                  <button className="popover-close" onClick={() => setOpen(false)} aria-label="Close profile popover">
                    <i className="fas fa-xmark"></i>
                  </button>
                </div>
                <div className="profile-divider" />
                <div className="profile-bottom">
                  <div className="profile-status-left">
                    {isOnline ? (
                      <i className="fas fa-circle-check" style={{ color: '#52c41a', fontSize: 18 }}></i>
                    ) : (
                      <i className="fas fa-circle-xmark" style={{ color: '#bfbfbf', fontSize: 18 }}></i>
                    )}
                    <span className="ds-body-sm" style={{ marginLeft: 8 }}>{isOnline ? 'Online' : 'Offline'}</span>
                  </div>
                  <Switch checked={isOnline} onChange={(v) => setIsOnline(v)} />
                </div>
              </div>
            )}
          >
            <div className="user-avatar-wrapper">
              <Avatar size={32} style={{ backgroundColor: '#e6f4ff', color: '#1677ff', fontWeight: 700 }}>SW</Avatar>
              <span className="online-indicator" />
            </div>
          </Popover>
        </Space>
      </div>
      
      {/* Hamburger Menu for Tablet */}
      {hamburgerOpen && (
        <div className="hamburger-overlay">
          <div className="hamburger-content">
            <div className="hamburger-header">
              <h3>Menu</h3>
              <button 
                className="hamburger-close"
                onClick={() => setHamburgerOpen(false)}
                aria-label="Close menu"
              >
                <i className="fas fa-xmark"></i>
              </button>
            </div>
            
            <div className="hamburger-actions">
              <button className="hamburger-action-item">
                <i className="fas fa-messages"></i>
                <span>Chat</span>
              </button>
              
              <button className="hamburger-action-item">
                <i className="far fa-envelope"></i>
                <span>Email</span>
              </button>
              
              <button className="hamburger-action-item" onClick={() => setMembersOpen(true)}>
                <i className="fas fa-users"></i>
                <span>Members</span>
              </button>
              
              <div className="hamburger-persona">
                <label>Persona:</label>
                <Select
                  options={personaOptions}
                  defaultValue="subscriber-member"
                  size="small"
                  style={{ minWidth: 180 }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Members Modal (same data as Left Rail) */}
      <Modal
        open={membersOpen}
        onCancel={() => setMembersOpen(false)}
        footer={null}
        width={1200}
        title="Test Data - Subscribers & Dependents"
      >
        <Table
          size="small"
          pagination={{ pageSize: 10 }}
          scroll={{ x: true }}
          columns={[
            { title: 'SUBSCRIBER ID', dataIndex: 'subscriberId', key: 'subscriberId' },
            { title: 'Primary First Name', dataIndex: 'firstName', key: 'firstName' },
            { title: 'Last Name', dataIndex: 'lastName', key: 'lastName' },
            { title: 'DOB', dataIndex: 'dob', key: 'dob' },
            { title: 'Email', dataIndex: 'email', key: 'email' },
            { title: 'Dependent Name', dataIndex: 'depName', key: 'depName' },
            { title: 'Relation', dataIndex: 'relation', key: 'relation' },
            { title: 'Dep DOB', dataIndex: 'depDob', key: 'depDob' },
            { title: 'Dep Email', dataIndex: 'depEmail', key: 'depEmail' },
            { title: 'SSN', dataIndex: 'ssn', key: 'ssn' },
            { title: 'Dependent ID', dataIndex: 'depId', key: 'depId' },
          ]}
          dataSource={(allMembers || []).flatMap((m) => {
            const [firstName, ...rest] = m.name.split(' ');
            const lastName = rest.join(' ');
            const base = { subscriberId: m.subscriberId, firstName, lastName, dob: m.dob, email: m.email, ssn: m.ssn };
            const rows = [ { key: `${m.subscriberId}-self`, ...base, depName: '—', relation: 'Self', depDob: '—', depEmail: '—', depId: '—' } ];
            (m.dependents || []).forEach((d, idx) => rows.push({ key: `${m.subscriberId}-${idx}`, subscriberId: d.subscriberId || m.subscriberId, firstName, lastName, dob: '—', email: '—', depName: d.name, relation: d.relation, depDob: d.dob, depEmail: d.email || '—', ssn: d.ssn, depId: d.dependentId || '—' }));
            return rows;
          })}
        />
      </Modal>
    </AntHeader>
  );
};

export default Header;
