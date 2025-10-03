import React, { useState, useEffect } from 'react';
import { Layout, message } from 'antd';
import Header from '../components/Header';
import SearchPanel from '../components/SearchPanel';
import MemberDetails from '../components/MemberDetails';
import MemberDashboard from '../components/MemberDashboard';
import './MemberSearch.css';
import LeftRail from '../components/LeftRail';
import { members } from '../data/members';

const MemberSearch = () => {
  const [memberData, setMemberData] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [activePersonKey, setActivePersonKey] = useState(null);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsTablet(window.innerWidth <= 1200); // Hide Left Rail when hamburger appears
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleSearch = async (searchParams) => {
    let found = null;
    let depMatch = null;
    const q = (searchParams.subscriberId || '').toLowerCase();

    if (searchParams.searchBy === 'subscriberId') {
      if (searchParams.memberType === 'dependent') {
        // Find dependent by dependentId like SUBA10234-01
        for (const m of members) {
          const d = (m.dependents || []).find((x) => (x.dependentId || '').toLowerCase() === q);
          if (d) {
            found = m;
            depMatch = d;
            break;
          }
        }
      } else {
        found = members.find((m) => m.subscriberId.toLowerCase() === q);
      }
    } else if (searchParams.searchBy === 'nameDob') {
      const fn = (searchParams.firstName || '').toLowerCase();
      const ln = (searchParams.lastName || '').toLowerCase();
      if (searchParams.memberType === 'dependent') {
        for (const m of members) {
          const d = (m.dependents || []).find((x) => x.name.toLowerCase().includes(fn) && x.name.toLowerCase().includes(ln));
          if (d) {
            found = m;
            depMatch = d;
            break;
          }
        }
      } else {
        found = members.find((m) => m.name.toLowerCase().includes(fn) && m.name.toLowerCase().includes(ln));
      }
    } else if (searchParams.searchBy === 'ssn') {
      const ssnQ = (searchParams.ssn || '').replace(/[^0-9]/g, '');
      if (searchParams.memberType === 'dependent') {
        for (const m of members) {
          const d = (m.dependents || []).find((x) => (x.ssn || '').replace(/[^0-9]/g, '') === ssnQ);
          if (d) {
            found = m;
            depMatch = d;
            break;
          }
        }
      } else {
        found = members.find((m) => (m.ssn || '').replace(/[^0-9]/g, '') === ssnQ);
      }
    }

    if (found && searchParams.memberType !== 'dependent') {
      setSelectedMember(found);
      setActivePersonKey('primary');
      setMemberData({
        name: found.name,
        subscriberId: found.subscriberId,
        dob: new Date(found.dob).toLocaleDateString(),
        email: found.email,
        mobile: found.mobile,
        address: found.address,
        skillName: found.skillName,
        carrier: found.carrier,
        planSponsor: found.planSponsor.name,
        planSponsorEffectiveDate: found.planSponsor.effectiveDate,
        planSponsorTerminationDate: found.planSponsor.terminationDate,
        planSponsorAddress: found.planSponsor.address,
        planSponsorContact: found.planSponsor.contact,
        planSponsorContactNo: found.planSponsor.contactNo,
        billingEntity: found.planSponsor.billingEntity,
        tpa: found.planSponsor.tpa,
        coverage: found.coverageDetails?.dental,
      });
      message.success('Member found successfully!');
      return;
    }

    if (found && depMatch) {
      setSelectedMember(found);
      // find dependent index for dropdown defaulting
      const depIdx = (found.dependents || []).findIndex((d) => (d.dependentId || '') === (depMatch.dependentId || ''));
      setActivePersonKey(depIdx >= 0 ? `dep-${depIdx}` : 'primary');
      // Determine a default coverage card based on dependent coverage list
      const covKey = (depMatch.coverage || []).includes('dental')
        ? 'dental'
        : ((depMatch.coverage || [])[0] || 'dental');
      setMemberData({
        name: depMatch.name,
        subscriberId: depMatch.dependentId || found.subscriberId,
        dob: depMatch.dob ? new Date(depMatch.dob).toLocaleDateString() : '--',
        email: depMatch.email || '--',
        mobile: found.mobile,
        address: found.address,
        skillName: found.skillName,
        carrier: found.carrier,
        planSponsor: found.planSponsor.name,
        planSponsorEffectiveDate: found.planSponsor.effectiveDate,
        planSponsorTerminationDate: found.planSponsor.terminationDate,
        planSponsorAddress: found.planSponsor.address,
        planSponsorContact: found.planSponsor.contact,
        planSponsorContactNo: found.planSponsor.contactNo,
        billingEntity: found.planSponsor.billingEntity,
        tpa: found.planSponsor.tpa,
        coverage: found.coverageDetails?.[covKey],
      });
      message.success('Dependent found successfully!');
      return;
    }

    setMemberData(null);
    setSelectedMember(null);
    message.warning('No matching member found');
  };

  const handleCreateCase = () => {
    message.info('Creating new case...');
    console.log('Create case clicked');
  };

  return (
    <Layout className="member-search-layout">
      <Header />
      {!isTablet && (
        <LeftRail household={selectedMember ? { subscriber: { name: selectedMember.name }, dependents: selectedMember.dependents || [] } : null} allMembers={members} />
      )}
      
      <div className="main-layout">
        <div className="left-panel">
          <SearchPanel onSearch={handleSearch} onCreateCase={handleCreateCase} onClear={() => setMemberData(null)} coverage={memberData?.coverage} />
        </div>

        <div className="right-panel">
          <MemberDetails memberData={memberData} />
          <div className="dashboard-wrapper">
            <MemberDashboard member={selectedMember} activePersonKey={activePersonKey} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MemberSearch;
