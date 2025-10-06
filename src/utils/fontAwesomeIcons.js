// FontAwesome Pro icons utility
// Since we're using the CDN kit, we can reference icons by their class names
// This file provides a mapping for commonly used icons

export const faIcons = {
  // Navigation
  bars: 'fas fa-bars',
  xmark: 'fas fa-xmark',
  chevronUp: 'fas fa-chevron-up',
  chevronDown: 'fas fa-chevron-down',
  
  // Status
  circleCheck: 'fas fa-circle-check',
  circleXmark: 'fas fa-circle-xmark',
  
  // Communication
  phone: 'fas fa-phone',
  envelope: 'far fa-envelope',
  messages: 'fas fa-messages',
  
  // Users
  users: 'fas fa-users',
  userPen: 'far fa-user-pen',
  userGear: 'far fa-user-gear',
  usersGear: 'far fa-users-gear',
  
  // Actions
  magnifyingGlass: 'fas fa-magnifying-glass',
  magnifyingGlassLocation: 'far fa-magnifying-glass-location',
  bolt: 'fas fa-bolt',
  sparkles: 'fas fa-sparkles',
  
  // Documents
  idCardClip: 'far fa-id-card-clip',
  suitcaseMedical: 'far fa-suitcase-medical',
  fileMedical: 'far fa-file-medical',
  fileUser: 'far fa-file-user',
  file: 'far fa-file',
  fileLines: 'far fa-file-lines',
  buildingMemo: 'far fa-building-memo',
  
  // Calendar
  calendar: 'far fa-calendar'
};

// Helper function to get icon class
export const getIconClass = (iconName) => {
  return faIcons[iconName] || 'fas fa-question';
};
