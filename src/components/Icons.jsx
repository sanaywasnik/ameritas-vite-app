// Centralized icon components for SVG imports
import React from 'react';

// Solid icons
import BarsIcon from '../assets/icons/solid/bars-solid-full.svg?react';
import BoltIcon from '../assets/icons/solid/bolt-solid-full.svg?react';
import CalendarSolidIcon from '../assets/icons/solid/calendar-solid-full.svg?react';
import ChevronDownIcon from '../assets/icons/solid/chevron-down-solid-full.svg?react';
import ChevronUpIcon from '../assets/icons/solid/chevron-up-solid-full.svg?react';
import CircleCheckIcon from '../assets/icons/solid/circle-check-solid-full.svg?react';
import CircleXmarkIcon from '../assets/icons/solid/circle-xmark-solid-full.svg?react';
import MagnifyingGlassIcon from '../assets/icons/solid/magnifying-glass-solid-full.svg?react';
import PhoneIcon from '../assets/icons/solid/phone-solid-full.svg?react';
import SparklesIcon from '../assets/icons/solid/sparkles-solid-full.svg?react';
import UsersIcon from '../assets/icons/solid/users-solid-full.svg?react';
import XmarkIcon from '../assets/icons/solid/xmark-solid-full.svg?react';

// Regular icons
import BuildingMemoIcon from '../assets/icons/regular/building-memo-regular-full.svg?react';
import CalendarIcon from '../assets/icons/regular/calendar-regular-full.svg?react';
import EnvelopeIcon from '../assets/icons/regular/envelope-regular-full.svg?react';
import FileLinesIcon from '../assets/icons/regular/file-lines-regular-full.svg?react';
import FileMedicalIcon from '../assets/icons/regular/file-medical-regular-full.svg?react';
import FilePdfIcon from '../assets/icons/regular/file-pdf-regular-full.svg?react';
import FileIcon from '../assets/icons/regular/file-regular-full.svg?react';
import FileUserIcon from '../assets/icons/regular/file-user-regular-full.svg?react';
import IdCardClipIcon from '../assets/icons/regular/id-card-clip-regular-full.svg?react';
import MagnifyingGlassLocationIcon from '../assets/icons/regular/magnifying-glass-location-regular-full.svg?react';
import SuitcaseMedicalIcon from '../assets/icons/regular/suitcase-medical-regular-full.svg?react';
import UserGearIcon from '../assets/icons/regular/user-gear-regular-full.svg?react';
import UserPenIcon from '../assets/icons/regular/user-pen-regular-full.svg?react';
import UsersGearIcon from '../assets/icons/regular/users-gear-regular-full.svg?react';

// Wrapper component to standardize icon rendering
const Icon = ({ component: Component, className, style, width, height, color, ...props }) => {
  const mergedStyle = {
    width: width || '1em',
    height: height || '1em',
    color: color || 'currentColor',
    fill: 'currentColor',
    display: 'inline-block',
    verticalAlign: 'middle',
    ...style,
  };
  return <Component className={className} style={mergedStyle} {...props} />;
};

// Export individual icon components
export const Icons = {
  // Solid
  Bars: (props) => <Icon component={BarsIcon} {...props} />,
  Bolt: (props) => <Icon component={BoltIcon} {...props} />,
  CalendarSolid: (props) => <Icon component={CalendarSolidIcon} {...props} />,
  ChevronDown: (props) => <Icon component={ChevronDownIcon} {...props} />,
  ChevronUp: (props) => <Icon component={ChevronUpIcon} {...props} />,
  CircleCheck: (props) => <Icon component={CircleCheckIcon} {...props} />,
  CircleXmark: (props) => <Icon component={CircleXmarkIcon} {...props} />,
  MagnifyingGlass: (props) => <Icon component={MagnifyingGlassIcon} {...props} />,
  Phone: (props) => <Icon component={PhoneIcon} {...props} />,
  Sparkles: (props) => <Icon component={SparklesIcon} {...props} />,
  Users: (props) => <Icon component={UsersIcon} {...props} />,
  Xmark: (props) => <Icon component={XmarkIcon} {...props} />,
  
  // Regular
  BuildingMemo: (props) => <Icon component={BuildingMemoIcon} {...props} />,
  Calendar: (props) => <Icon component={CalendarIcon} {...props} />,
  Envelope: (props) => <Icon component={EnvelopeIcon} {...props} />,
  FileLines: (props) => <Icon component={FileLinesIcon} {...props} />,
  FileMedical: (props) => <Icon component={FileMedicalIcon} {...props} />,
  FilePdf: (props) => <Icon component={FilePdfIcon} {...props} />,
  File: (props) => <Icon component={FileIcon} {...props} />,
  FileUser: (props) => <Icon component={FileUserIcon} {...props} />,
  IdCardClip: (props) => <Icon component={IdCardClipIcon} {...props} />,
  MagnifyingGlassLocation: (props) => <Icon component={MagnifyingGlassLocationIcon} {...props} />,
  SuitcaseMedical: (props) => <Icon component={SuitcaseMedicalIcon} {...props} />,
  UserGear: (props) => <Icon component={UserGearIcon} {...props} />,
  UserPen: (props) => <Icon component={UserPenIcon} {...props} />,
  UsersGear: (props) => <Icon component={UsersGearIcon} {...props} />,
};

