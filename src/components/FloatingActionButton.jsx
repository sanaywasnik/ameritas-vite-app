import React, { useState, useRef, useEffect } from 'react';
// Using FontAwesome Pro via CDN
import QuickActions from './QuickActions';
import './FloatingActionButton.css';

const FloatingActionButton = ({ member, activePersonKey }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const fabRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target) && 
          fabRef.current && !fabRef.current.contains(event.target)) {
        setIsExpanded(false);
        setIsHovered(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleFabClick = () => {
    // Click still works as backup
    setIsExpanded(!isExpanded);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Don't auto-close on mouse leave, let user click close button
  };

  const handleClose = () => {
    setIsExpanded(false);
    setIsHovered(false);
  };

  return (
    <>
      {/* FAB Button */}
      <div 
        ref={fabRef}
        className={`fab-button ${isExpanded ? 'expanded' : ''} ${isMobile ? 'mobile' : ''}`}
        onClick={handleFabClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <i className="fas fa-sparkles fab-sparkles"></i>
        {!isMobile && (
          <>
            <span className="fab-text">Quick Actions</span>
            <i className="fas fa-chevron-up fab-chevron"></i>
          </>
        )}
      </div>

      {/* Overlay Quick Actions Panel */}
      {isExpanded && (
        <div 
          ref={overlayRef}
          className="fab-overlay"
        >
          <div className="fab-overlay-header">
            <div className="fab-overlay-title">
              <i className="fas fa-sparkles fab-overlay-sparkles"></i>
              <span>Quick Actions</span>
            </div>
            <button 
              className="fab-overlay-close"
              onClick={handleClose}
            >
              <i className="fas fa-xmark"></i>
            </button>
          </div>
          <div className="fab-overlay-content">
            <QuickActions 
              member={member} 
              activePersonKey={activePersonKey}
              disabled={!member}
              onActionOpen={() => setIsExpanded(false)}
              usePortal
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingActionButton;
