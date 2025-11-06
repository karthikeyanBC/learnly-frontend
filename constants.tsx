
import React from 'react';
import { HiOutlineUserGroup, HiOutlineLightBulb, HiOutlineMap, HiOutlineArrowPathRoundedSquare, HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
// TYPE DEFINITIONS

export interface DetailPageItem {
    slug: string;
    title: string;
    description: string;
    icon: React.ReactElement<{ className?: string }>;
    accordionFeatures: AccordionFeature[];
}

export interface AccordionFeature {
    title: string;
    description: string;
    icon?: React.ReactElement<{ className?: string }>;
    imageUrl?: string;
    imageSeed?: number;
}

export interface FeatureDetail extends DetailPageItem {}
export interface SolutionDetail extends DetailPageItem {}

export type IntegrationCategory = 'All' | 'Authentication' | 'HRIS' | 'CRM' | 'Collaboration' | 'Content Providers' | 'Recognition' | 'Analytics' | 'Virtual Classroom';

export interface Integration {
    name: string;
    description: string;
    icon: React.ReactElement<{ className?: string }>;
    category: IntegrationCategory;
}

export interface Competitor {
    slug: string;
    name: string;
    headline: string;
    subheading: string;
    strengths: {
        icon: React.ReactElement<{ className?: string }>;
        title: string;
        description: string;
    }[];
    featureComparison: {
        feature: string;
        learnly: boolean | string;
        competitor: boolean | string;
    }[];
    summaryTitle: string;
    summaryDescription: string;
}

// LOGO COMPONENT
const logoDarkB64 = 'https://d9q55ve2f7k8m.cloudfront.net/learnly/images/learnly-logo-dark.png';
const logoLightB64 = 'https://d9q55ve2f7k8m.cloudfront.net/learnly/images/learnly-logo-light.png';

interface LogoProps {
    className?: string;
    variant?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-8 w-auto', variant = 'dark' }) => (
    <img
        src={variant === 'dark' ? logoDarkB64 : logoLightB64}
        alt="Learnly Logo"
        className={className}
    />
);


// ICON COMPONENTS (Heroicons Outline Set)

export const AcademicCapIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
    </svg>
);
export const AdjustmentsHorizontalIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
    </svg>
);
export const ArrowPathIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.691V5.25a2.25 2.25 0 0 0-2.25-2.25h-6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25h6.75a2.25 2.25 0 0 0 2.25-2.25Z" />
    </svg>
);
export const ArrowTrendingUpIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 18 9-9 4.5 4.5L21.75 6" />
    </svg>
);
export const ArrowUturnLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
    </svg>
);
export const BookOpenIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
);
export const BuildingOfficeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6h1.5m-1.5 3h1.5m-1.5 3h1.5M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
);
export const ChartBarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v16.5c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V3.375Z" />
    </svg>
);
export const ChartPieIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
    </svg>
);
export const ChatBubbleOvalLeftEllipsisIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.721.282c-.81.061-1.555.438-2.146.997l-2.613 2.613c-.41.41-.976.625-1.58.625h-1.12c-.604 0-1.17-.215-1.58-.625L7.613 18.24c-.59-.56-1.336-.936-2.146-.997l-3.721-.282A2.25 2.25 0 0 1 1.5 14.894V10.608c0-.97.616-1.813 1.5-2.097m16.5 0a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25m16.5 0-1.17-1.17a2.25 2.25 0 0 0-3.182 0l-1.17 1.17m10.5 0-1.17-1.17a2.25 2.25 0 0 0-3.182 0l-1.17 1.17" />
    </svg>
);
export const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);
export const ClipboardDocumentCheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
    </svg>
);
export const ClipboardDocumentListIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" />
    </svg>
);
export const Cog6ToothIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m18 0h-1.5M12 15.75a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5Z" />
    </svg>
);
export const DevicePhoneMobileIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
);
export const DocumentTextIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
);
export const EnvelopeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
);
export const HomeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
    </svg>
);
export const KeyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v-2.25L10.875 12.75a.94.94 0 0 1 .432-.163l.286-.071a6.002 6.002 0 0 1 5.158-5.334ZM8.25 12.75a3 3 0 0 0-3 3m-3 0a6 6 0 0 0 6 6m0-6a3 3 0 0 1 3-3m0 3a6 6 0 0 0-6-6" />
    </svg>
);
export const LightBulbIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-1.125 6.01 6.01 0 0 0 1.5-1.125 6.01 6.01 0 0 0 1.5-1.125 6.01 6.01 0 0 0 1.5-1.125A6.01 6.01 0 0 0 12 3a6.01 6.01 0 0 0-4.5 2.25 6.01 6.01 0 0 0-1.5 1.125 6.01 6.01 0 0 0-1.5 1.125 6.01 6.01 0 0 0-1.5 1.125 6.01 6.01 0 0 0-1.5 1.125m0 0A12.016 12.016 0 0 1 12 21a12.016 12.016 0 0 1-4.5-8.25m0 0c0-1.5.375-2.925 1.05-4.2M12 18v-5.25" />
    </svg>
);
export const LinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
    </svg>
);
export const LockClosedIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
);
export const MapIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75L21 12m0 0l-7.5 5.25M21 12l-7.5-5.25M3 12l7.5-5.25M3 12l7.5 5.25" />
    </svg>
);
export const PaintBrushIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
);
export const PresentationChartLineIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125h17.25c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h17.25M9 14.25l6-6m-5.25 6h5.25" />
    </svg>
);
export const PuzzlePieceIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v.113h-4.25v-.113c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875S3.75 1.964 3.75 3c0 .369.128.713.349 1.003.215.283.401.604.401.959v2.175a2.25 2.25 0 0 0 .75 1.586l.292.292a2.25 2.25 0 0 1 0 3.182l-.292.292a2.25 2.25 0 0 0-.75 1.586v2.175c0 .355-.186.676-.401.959a1.875 1.875 0 0 1-.349 1.003c0 1.036 1.007 1.875 2.25 1.875s2.25-.84 2.25-1.875c0-.369-.128-.713-.349-1.003a2.25 2.25 0 0 0-.401-.959v-.113h4.25v.113c0 .355-.186.676-.401.959a1.875 1.875 0 0 1-.349 1.003c0 1.036 1.007 1.875 2.25 1.875s2.25-.84 2.25-1.875c0-.369-.128-.713-.349-1.003a2.25 2.25 0 0 0-.401-.959v-2.175a2.25 2.25 0 0 0-.75-1.586l-.292-.292a2.25 2.25 0 0 1 0-3.182l.292-.292A2.25 2.25 0 0 0 14.25 8.262V6.087Z" />
    </svg>
);
export const QueueListIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.125 1.125 0 0 1 0 2.25H5.625a1.125 1.125 0 0 1 0-2.25Z" />
    </svg>
);
export const RocketLaunchIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a14.98 14.98 0 0 0-5.84-2.56M12 12A14.982 14.982 0 0 1 2.25 9.75c0-1.357.38-2.662 1.05-3.822A12.022 12.022 0 0 1 12 3c2.305 0 4.408.867 6 2.292m-6 4.292a14.982 14.982 0 0 1 5.84 2.56" />
    </svg>
);
export const ShieldCheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Z" />
    </svg>
);
export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.898 20.562 16.25 21.75l-.648-1.188a2.25 2.25 0 0 1-1.4-1.4L13.25 18l1.188-.648a2.25 2.25 0 0 1 1.4-1.4l.648-1.188.648 1.188a2.25 2.25 0 0 1 1.4 1.4l1.188.648-1.188.648a2.25 2.25 0 0 1-1.4 1.4Z" />
    </svg>
);
export const UserGroupIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.67c.12-.143.25-.284.39-.422m-7.133 2.886A6.375 6.375 0 0112 12.75c1.626 0 3.123.624 4.243 1.658m-11.862.962a6.375 6.375 0 010-11.862A6.375 6.375 0 0112 3.75c1.626 0 3.123.624 4.243 1.658m-11.862.962A6.375 6.375 0 013.75 12c0 1.626.624 3.123 1.658 4.243z" />
    </svg>
);
export const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
);
export const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.5-2.962C10.536 14.048 11.234 13.22 12 12.504m-7.5 2.962C5.076 14.048 5.774 13.22 6.5 12.504m0 0a3.004 3.004 0 0 0 5.5 0m0 0a3.004 3.004 0 0 1 5.5 0m-9.5-2.962C7.036 8.548 7.734 7.72 8.5 7.004m0 0a3.004 3.004 0 0 0 5.5 0m0 0a3.004 3.004 0 0 1 5.5 0m-9.5 2.962C7.036 11.452 7.734 12.28 8.5 13.004m0 0a3.004 3.004 0 0 0 5.5 0m0 0a3.004 3.004 0 0 1 5.5 0" />
    </svg>
);
export const VideoCameraIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5 21 5.25m0 0l-3.75 3.75M21 5.25v13.5m0-13.5L15.75 10.5m0 0L21 18.75M15.75 10.5l-6 6M4.5 12l6-6m0 0l6 6m-6-6v12" />
    </svg>
);
export const WrenchScrewdriverIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17 15.17 11.42" />
    </svg>
);


const appStoreIconUrl = 'https://d9q55ve2f7k8m.cloudfront.net/learnly/images/appstoreicon.png';
const googlePlayIconUrl = 'https://d9q55ve2f7k8m.cloudfront.net/learnly/images/google-play-icon.png';

export const AppStoreIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img src={appStoreIconUrl} alt="Download on the App Store" className={className} />
);

export const GooglePlayIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img src={googlePlayIconUrl} alt="Get it on Google Play" className={className} />
);

// FIX: Add missing Lucide icon components to resolve import errors.
export const LucideUsersIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
);

export const LucideMailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
);

export const LucideLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/>
    </svg>
);

// DATA (PLACEHOLDERS)

export const menuSolutions: { [key: string]: SolutionDetail[] } = {
    'Use Cases': [
        {
            slug: 'employee-training',
            title: 'Employee Training',
            description: 'Onboard, upskill, and retain top talent with engaging training programs.',
            icon: <UserIcon />,
            accordionFeatures: []
        },
        {
            slug: 'customer-training',
            title: 'Customer Training',
            description: 'Increase product adoption and reduce support tickets with a customer academy.',
            icon: <BookOpenIcon />,
            accordionFeatures: []
        },
        {
            slug: 'partner-training',
            title: 'Partner Training',
            description: 'Enable your channel partners to sell more effectively with product and sales training.',
            icon: <HiOutlineUserGroup />,
            accordionFeatures: []
        },
         {
            slug: 'compliance-training',
            title: 'Compliance Training',
            description: 'Automate required training, track completions, and reduce corporate risk.',
            icon: <ShieldCheckIcon />,
            accordionFeatures: [],
        },
    ]
};

export const featureMenuLinks = [
    { slug: 'learning-content', title: 'Learning & Content', description: 'Create engaging courses with AI, SCORM, videos, and more.', icon: <BookOpenIcon /> },
    { slug: 'learner-engagement', title: 'Learner Engagement', description: 'Motivate learners with gamification, collaboration, and mobile access.', icon: <SparklesIcon /> },
    { slug: 'admin-platform', title: 'Admin & Platform', description: 'Manage users, customize branding, and scale with ease.', icon: <Cog6ToothIcon /> },
    { slug: 'automation-analytics', title: 'Automation & Analytics', description: 'Automate tasks and prove the impact of your training programs.', icon: <ChartBarIcon /> }
];

export const menuFeatures: { [key: string]: FeatureDetail[] } = {
    'Learning & Content': [
        {
            slug: 'ai-course-creation',
            title: 'AI Course Creation',
            description: 'Generate complete courses from a prompt, document, or video in minutes.',
            icon: <SparklesIcon />,
            accordionFeatures: [
                 {
                    title: 'AI Course Creation',
                    description: 'Generate complete courses from documents, videos, or simple prompts in minutes. The AI builds outlines, lessons, and quizzes, saving you 90% of creation time.',
                },
                {
                    title: 'Skills & Competency Engine',
                    description: 'Map skills to content and job roles. Identify and close skill gaps with targeted training paths that align with business goals.',
                },
            ]
        },
        {
            slug: 'skills-engine',
            title: 'Skills & Competency Engine',
            description: 'Map skills to content and track competency development across your organization.',
            icon: <ArrowTrendingUpIcon />,
            accordionFeatures: [
                {
                    title: 'Map Skills to Job Roles',
                    description: 'Define the exact skills and competencies required for every role in your organization to build clear career pathways.',
                },
                {
                    title: 'Identify & Close Skill Gaps',
                    description: 'Automatically analyze learner skills, identify gaps against their job role, and assign targeted training to accelerate development.',
                },
            ]
        },
    ],
    'Automation & Analytics': [
        {
            slug: 'learning-analytics-dashboards',
            title: 'Learning Analytics Dashboards',
            description: 'Track, measure, and prove the impact of your training with powerful dashboards.',
            icon: <PresentationChartLineIcon />,
            accordionFeatures: [
                {
                    title: 'Learning Analytics Dashboards',
                    description: 'Gain deep insights into learner progress, course effectiveness, and engagement with our comprehensive, real-time analytics dashboards.',
                },
                {
                    title: 'Automated Rules Engine',
                    description: "Set up 'if-this-then-that' rules to automate enrollments, assign certificates, and send notifications, saving you countless admin hours.",
                },
            ]
        }
    ]
};

export const challenges = [
    {
        icon: <SparklesIcon />,
        title: 'Low Learner Engagement',
        description: 'Traditional LMS platforms are boring. Learnly uses gamification, social learning, and mobile access to make learning enjoyable.'
    },
    {
        icon: <BookOpenIcon />,
        title: 'Slow Content Creation',
        description: 'Building courses is time-consuming. Our AI Course Creator turns your existing materials into engaging courses in minutes.'
    },
    {
        icon: <ChartBarIcon />,
        title: 'Proving Training ROI',
        description: 'Struggling to show the value of your programs? Our analytics dashboards connect learning outcomes to business results.'
    }
];

export const trustedByLogos: { name: string; logo: React.FC }[] = [
    { name: 'Company A', logo: () => <span className="font-bold text-xl">Company A</span> },
    { name: 'Company B', logo: () => <span className="font-bold text-xl">Company B</span> },
    { name: 'Company C', logo: () => <span className="font-bold text-xl">Company C</span> },
    { name: 'Company D', logo: () => <span className="font-bold text-xl">Company D</span> },
    { name: 'Company E', logo: () => <span className="font-bold text-xl">Company E</span> },
];

export const pricingTiers = {
    monthly: [
        { label: '10-100 Users', min: 10, max: 100, price: 5.00 },
        { label: '101-250 Users', min: 101, max: 250, price: 4.50 },
        { label: '251-500 Users', min: 251, max: 500, price: 4.00 },
        { label: '501-1000 Users', min: 501, max: 1000, price: 3.50 },
        { label: '1001+ Users', min: 1001, max: Infinity, price: null },
    ],
    annually: [
        { label: '10-100 Users', min: 10, max: 100, price: 4.00 },
        { label: '101-250 Users', min: 101, max: 250, price: 3.60 },
        { label: '251-500 Users', min: 251, max: 500, price: 3.20 },
        { label: '501-1000 Users', min: 501, max: 1000, price: 2.80 },
        { label: '1001+ Users', min: 1001, max: Infinity, price: null },
    ]
};

export const allPlansFeatures = {
    'Learning Features': [
        'Unlimited Learning Paths (Courses): Create and assign as many courses and structured learning paths as you need.',
        "Smart Learning Tools: Learners get 'Smart Notes,' AI-generated Flashcards (SRS), and 'Curated Sources with Citations.'",
        "Gamification & Engagement: Motivate learners with points, badges, leaderboards, 'Smart Rescheduling,' and 'Streak Protection.'",
        "Mobile App & Offline Access: Full-featured learning on native iOS & Android apps, including 'Offline Access.'",
    ],
    'Content Creation': [
        'AI-Powered Course Creator: Build a full course from a simple prompt, document, or video.',
        'AI-Powered Quizzes: Automatically generate insightful quiz questions and flashcards from your course content.',
        'Drag-and-Drop Lesson Editor: An intuitive, powerful editor to build and organize lessons.',
        'Full Version History & Rollback: Edit with confidence and roll back to a previous version at any time.',
        'Custom Certificate Designer: Create and automate branded certificates of completion.',
    ],
    'Learning Programs': [
        'Cohort-Based Learning: Run scheduled, instructor-led courses with a shared timeline and private discussions.',
        "Learning Plans (Journey Builder): Build structured learning paths with our visual 'Journey Builder' automations.",
        "Competency-Based Learning: Map courses and assessments to core skills (includes 'Template library for competencies').",
        "Blended Training (Live & OJT): Combine on-demand courses with the 'Live Training' module and 'On-the-Job (OJT) training' (includes 'Template library for OJT').",
    ],
    'Team Management': [
        `Team & Group Management: Organize learners into 'Multi-manager teams' and "smart groups" with team-based tracking.`,
        "Role-Based Access Control (RBAC): Use default roles (Admin, Manager, Author) or create unlimited 'Custom roles' with granular permissions.",
        'Bulk User Invites: Add learners easily via email/CSV upload or invite link.',
    ],
    'Branding & Customization': [
        'Custom Org Branding: White-label your portal with your own logo, colors, and branding.',
        'Custom Domain & SSL: Host your learning portal on your own secure custom domain.',
    ],
    'Standards & Integrations': [
        "Core Standards: Full support for 'SCORM 1.2 / 2004,' 'LTI,' and 'xAPI.'",
        "Video Conferencing: Native integrations with 'Zoom,' 'Google Meet,' 'Microsoft Teams,' and 'BrainCert.'",
        "Content Integrations: Connect to libraries from 'LinkedIn Learning,' 'Udemy Business,' and 'Go1 Content.'",
        "Digital Badges: Issue verifiable credentials with our built-in designer or 'Credly' integration.",
    ],
    'Analytics & Reporting': [
        'Comprehensive Reporting: Track all key metrics like enrollments, progress, and completion rates.',
        "Skill Maps & Skill Gap Analysis: Get a high-level view of your team's skills and where to focus training.",
        "Automated Manager Digests: Send 'Weekly manager digest emails' to your team leads automatically.",
        "Notifications: Keep everyone in the loop with 'Assignment notifications' and system alerts.",
        'Full CSV Exports: Export your user, course, and reporting data at any time.',
    ],
};

export const integrations: Integration[] = [
    { name: 'Okta', description: 'Single Sign-On (SSO) for seamless user authentication.', icon: <KeyIcon />, category: 'Authentication' },
    { name: 'Workday', description: 'Sync employee data automatically from your HRIS.', icon: <BuildingOfficeIcon />, category: 'HRIS' },
    { name: 'Salesforce', description: 'Connect learning data with your CRM for sales enablement.', icon: <UsersIcon />, category: 'CRM' },
    { name: 'Slack', description: 'Send learning notifications and updates directly to Slack.', icon: <ChatBubbleOvalLeftEllipsisIcon />, category: 'Collaboration' },
    { name: 'LinkedIn Learning', description: 'Import content from LinkedIn Learning into your library.', icon: <BookOpenIcon />, category: 'Content Providers' },
    { name: 'Credly', description: 'Issue digital badges and credentials for course completions.', icon: <ShieldCheckIcon />, category: 'Recognition' },
    { name: 'Tableau', description: 'Push learning data to your BI tools for advanced analytics.', icon: <PresentationChartLineIcon />, category: 'Analytics' },
    { name: 'Zoom', description: 'Host live virtual training sessions within the Learnly platform.', icon: <VideoCameraIcon />, category: 'Virtual Classroom' },
    { name: 'Azure AD', description: 'Enable secure sign-on with Microsoft Azure Active Directory.', icon: <KeyIcon />, category: 'Authentication' },
    { name: 'BambooHR', description: 'Keep your user list in sync with your HR Information System.', icon: <BuildingOfficeIcon />, category: 'HRIS' },
    { name: 'Microsoft Teams', description: 'Collaborate and share learning updates within Teams channels.', icon: <ChatBubbleOvalLeftEllipsisIcon />, category: 'Collaboration' },
    { name: 'Google Meet', description: 'Schedule and launch virtual classrooms directly from Learnly.', icon: <VideoCameraIcon />, category: 'Virtual Classroom' },
];

export const complianceData = [
    { name: 'SOC 2 Type II', description: 'In Progress', icon: <ShieldCheckIcon /> },
    { name: 'GDPR', description: 'Compliant', icon: <ShieldCheckIcon /> },
    { name: 'ISO 27001', description: 'Certified', icon: <ShieldCheckIcon /> },
    { name: 'PCI DSS', description: 'Compliant', icon: <ShieldCheckIcon /> },
];

export const footerLinks = {
    main: {
        'Platform': [
            { name: 'Features', href: '/features' },
            { name: 'Pricing', href: '/pricing' },
            { name: 'Integrations', href: '/integrations' },
        ],
        'Solutions': [
            { name: 'Employee Training', href: '/solutions/employee-training' },
            { name: 'Customer Training', href: '/solutions/customer-training' },
            { name: 'Partner Training', href: '/solutions/partner-training' },
            { name: 'Compliance Training', href: '/solutions/compliance-training' },
        ],
        'Resources': [
            { name: 'Blog', href: 'https://blog.braincert.com/' },
            { name: 'Help Center', href: 'https://help.learnly.io/' },
            { name: 'Status', href: '#' },
            { name: 'Developers', href: '/developer' },
        ],
        'Company': [
            { name: 'About Us', href: '/about' },
            { name: 'Contact Us', href: '/contact' },
            { name: 'Security', href: '/security' },
            { name: 'Careers', href: 'https://www.braincert.com/careers' },
        ],
    },
    comparisons: [
        { name: 'TalentLMS', href: '/compare/talentlms-alternative' },
        { name: 'iSpring LMS', href: '/compare/ispring-lms-alternative' },
        { name: 'Workramp', href: '/compare/workramp-alternative' },
        { name: 'Docebo', href: '/compare/docebo-alternative' },
        { name: 'Skilljar', href: '/compare/skilljar-alternative' },
        { name: 'Litmos LMS', href: '/compare/litmos-lms-alternative' },
        { name: 'Absorb LMS', href: '/compare/absorb-lms-alternative' },
        { name: 'Blackboard', href: '/compare/blackboard-alternative' },
        { name: 'Canvas', href: '/compare/canvas-alternative' },
    ]
};

export const pricingPlans = {
    monthly: [
        { name: 'Starter', description: 'For small teams getting started.', price: '$49', priceUnit: '/month', features: ['Up to 50 users', 'Basic Reporting'], cta: 'Get Started', highlight: false },
        { name: 'Pro', description: 'For growing businesses that need more power.', price: '$299', priceUnit: '/month', features: ['Up to 500 users', 'Advanced Reporting', 'API Access'], cta: 'Start Free Trial', highlight: true },
        { name: 'Enterprise', description: 'For large organizations with complex needs.', price: 'Custom', priceUnit: '', features: ['Unlimited users', 'SSO', 'Dedicated Support'], cta: 'Contact Sales', highlight: false },
    ],
    annually: [
        { name: 'Starter', description: 'For small teams getting started.', price: '$39', priceUnit: '/month', features: ['Up to 50 users', 'Basic Reporting'], cta: 'Get Started', highlight: false },
        { name: 'Pro', description: 'For growing businesses that need more power.', price: '$239', priceUnit: '/month', features: ['Up to 500 users', 'Advanced Reporting', 'API Access'], cta: 'Start Free Trial', highlight: true },
        { name: 'Enterprise', description: 'For large organizations with complex needs.', price: 'Custom', priceUnit: '', features: ['Unlimited users', 'SSO', 'Dedicated Support'], cta: 'Contact Sales', highlight: false },
    ],
};

const placeholderFeature = {
    icon: <SparklesIcon />,
    title: 'Placeholder Feature',
    description: 'This is a placeholder feature description.',
    imageSeed: 1
};

export const solutionPageData: { [key: string]: any } = {
    'employee-training': {
        headline: 'Employee Training, Reimagined.',
        subheading: 'Build a culture of learning that drives performance and retention.',
        challenge: { title: 'The Challenge', description: 'Disengaged employees, widening skill gaps, and high turnover rates.' },
        solution: { title: 'The Solution', description: 'An engaging learning hub that boosts skills, improves retention, and drives performance.' },
        keyCapabilities: [
            { icon: <AdjustmentsHorizontalIcon />, title: 'Automated Onboarding Paths', description: 'Automate your entire onboarding process. Use our visual journey builder to enroll new hires in a structured path of content, tasks, and live sessions from their very first day.', imageSeed: 1 },
            { icon: <ArrowTrendingUpIcon />, title: 'Skills Engine & Career Pathing', description: 'Go beyond simple courses. Map core competencies to every role, identify skill gaps in real-time, and give employees a clear visual path for professional growth within the company.', imageSeed: 2 },
            { icon: <HiOutlineUserGroup />, title: 'Cohort-Based Learning', description: 'Run new-hire classes and leadership programs as a group. Drip-feed content on a shared schedule and build community with private discussions and live sessions to keep everyone engaged.', imageSeed: 3 },
            { icon: <SparklesIcon />, title: 'AI Course Creation', description: 'Instantly turn your existing employee handbooks, SOPs, and internal wikis into engaging courses, quizzes, and flashcards with a single click. Stop spending weeks on content creation.', imageSeed: 4 },
            { icon: <ChartBarIcon />, title: 'Manager Dashboards & Analytics', description: "Empower your team leads. Give them a dedicated dashboard to track their team's progress, see skill improvements, and even edit assignment due dates without any admin help.", imageSeed: 5 },
        ]
    },
    'customer-training': {
        headline: 'Turn Customers into Superfans.',
        subheading: 'Increase product adoption, boost retention, and create brand advocates.',
        challenge: { title: 'The Challenge', description: 'High support costs, low product adoption rates, and customer churn.' },
        solution: { title: 'The Solution', description: 'A scalable customer academy to successfully onboard and educate users.' },
        keyCapabilities: [
            { icon: <PaintBrushIcon />, title: 'Branded Customer Academies', description: 'Launch a beautiful, white-labeled "Customer University" on your own domain. Create public and private academies that look and feel just like your brand to provide a seamless customer experience.', imageSeed: 6 },
            { icon: <AdjustmentsHorizontalIcon />, title: 'Product Onboarding Journeys', description: 'Guide new customers to success. Create automated learning paths that walk users through account setup, key features, and advanced workflows to dramatically boost product adoption.', imageSeed: 7 },
            { icon: <ShieldCheckIcon />, title: 'Digital Certification Programs', description: 'Create an ecosystem of experts. Build official certification programs with our advanced assessments (including coding and adaptive tests) and automatically issue verifiable certificates and badges.', imageSeed: 8 },
            { icon: <ClipboardDocumentCheckIcon />, title: 'Assessments & Question Analysis', description: 'Understand where your customers get stuck. Use AI-powered quizzes and detailed analytics to see which product areas are most confusing, allowing you to proactively create help content and reduce support tickets.', imageSeed: 9 },
            { icon: <SparklesIcon />, title: 'Gamification & Engagement', description: 'Make learning your product rewarding. Use points, badges, and leaderboards to motivate customers to complete their training and become power users and loyal advocates for your brand.', imageSeed: 10 },
        ]
    },
    'partner-training': {
        headline: 'Empower Your Channel Partners.',
        subheading: 'Provide the knowledge and skills your partners need to succeed.',
        challenge: { title: 'The Challenge', description: 'Inconsistent partner performance and low channel sales volume.' },
        solution: { title: 'The Solution', description: 'A centralized partner portal for sales, product, and brand enablement.' },
        keyCapabilities: [
             { icon: <HiOutlineUserGroup />, title: 'Branded Partner Portals', description: 'Create a private, secure, and branded academy for each of your channel partners. Give them a dedicated portal to train their sales and support reps on your products.', imageSeed: 11 },
             { icon: <SparklesIcon />, title: 'Sales & Pitch Certification', description: 'Ensure your partners are on-message. Use our AI Pitch Certification tool to let partner reps practice their pitch, get instant AI feedback on their delivery, and submit their best take for your review.', imageSeed: 12 },
             { icon: <BookOpenIcon />, title: 'Rapid Content Creation', description: 'Keep partners updated in real-time. Use our AI to instantly turn your latest product release notes and sales playbooks into new micro-learning modules.', imageSeed: 13 },
             { icon: <ShieldCheckIcon />, title: 'Partner Certification Programs', description: 'Track and certify your entire channel. Build formal certification paths (e.g., "Partner Sales Certified," "Partner Support Certified") and use our advanced assessments to ensure every partner is qualified to represent you.', imageSeed: 14 },
             { icon: <ArrowTrendingUpIcon />, title: 'Partner Performance Tracking', description: 'See which partners are your true champions. Use our analytics dashboards to track partner engagement, quiz scores, and certification status across your entire channel ecosystem.', imageSeed: 15 },
        ]
    },
     'compliance-training': {
        headline: 'Automate Compliance Training.',
        subheading: 'Reduce risk, ensure compliance, and protect your organization.',
        challenge: { title: 'The Challenge', description: 'Manual compliance tracking, low completion rates, and audit risks.' },
        solution: { title: 'The Solution', description: 'Automated assignments, timely reminders, and detailed reporting for compliance.' },
        keyCapabilities: [
            { icon: <AdjustmentsHorizontalIcon />, title: 'Automated Enrollments & Reminders', description: "Put your compliance training on autopilot. Use our journey builder to automatically enroll all new hires in required training and send smart reminders to overdue employees.", imageSeed: 16 },
            { icon: <DocumentTextIcon />, title: 'Audit Logs & Defensible Reporting', description: 'Pass any audit with confidence. Generate detailed, unchangeable, and time-stamped reports and audit logs that show exactly who completed what training, and when.', imageSeed: 17 },
            { icon: <ShieldCheckIcon />, title: 'Automated Re-certification', description: 'Never miss a deadline. Set your annual (e.g., HIPAA, GDPR) training to automatically re-enroll employees based on their last completion date (e.g., "Enroll again 365 days after completion").', imageSeed: 18 },
            { icon: <BookOpenIcon />, title: 'Full SCORM & xAPI Support', description: 'Use your existing, approved content. Easily upload and track all your SCORM 1.2 / 2004 or xAPI packages from any authoring tool, and all completions will flow directly into our audit logs.', imageSeed: 19 },
            { icon: <CheckCircleIcon />, title: 'Versioned Digital Certificates', description: 'Automatically issue a verifiable, version-controlled certificate the moment an employee completes a mandatory course. This gives you a clear and provable record of certification for every user.', imageSeed: 20 },
        ]
    }
};

export const solutionPageFaqs: { [key: string]: any[] } = {
    'employee-training': [
        { question: 'My managers are too busy to build courses. How fast can we create content?', answer: "You can create a new course in minutes, not months. Our AI Course Creator can build a complete, engaging training module from your existing employee handbook, a simple prompt, or a slide deck. This frees your managers to mentor, not just build content." },
        { question: 'How can I create different onboarding paths for different roles?', answer: 'With our Automated User Journeys. You can create a specific learning path for "New Sales Hires" and another for "New Engineers." Then, you can set a rule to automatically enroll users in the correct path based on their team or role.' },
        { question: "Will this just create more work for my managers?", answer: "No, it creates less. Managers get a dedicated dashboard to see their team's progress at a glance. With automated enrollments, reminders, and due date editing, they can stop chasing people and focus on coaching." },
        { question: 'How do I know if my employees are actually learning skills, not just clicking "next"?', answer: "Go beyond simple completion. Our Skills Engine and Competency Frameworks allow you to map core skills to your courses. You can track your team's skill development in real-time and identify critical gaps." },
        { question: "How can we make training more engaging for new hires?", answer: 'By making it social. Use our Cohort-Based Learning feature to enroll your "Fall 2025" new-hire class into a program together. They\'ll have a shared schedule, live sessions, and a private discussion forum to build connections.' }
    ],
    'customer-training': [
        { question: 'We need our academy to match our brand. Is this just a generic portal?', answer: "It will look exactly like your brand. Learnly allows you to create Branded Learning Portals with your own custom domain, logo, and colors. This gives your customers a seamless, professional experience." },
        { question: 'How does this help reduce our support ticket volume?', answer: "By proactively educating users at scale. You can build an automated onboarding journey that answers your 50 most common questions before a user ever has to ask them. Our analytics also show which quiz questions are failing, pinpointing exactly where your product is confusing." },
        { question: 'Can we create private, separate portals for our biggest customers?', answer: "Yes. You can launch Multiple Branded Academies from a single account. This allows you to give your largest enterprise customers their own private, white-labeled portal to train their own teams on your product." },
        { question: 'Can we offer official certifications for our product?', answer: "Absolutely. You can build and manage official certification programs using our Advanced Assessments (including coding and adaptive tests) and automatically issue verifiable Digital Certificates upon completion." },
        { question: 'How do we prove the ROI of our customer academy?', answer: "Our analytics dashboards show you which customers are most engaged and which features they're learning. By integrating with your CRM, you can correlate training completion with higher product adoption, faster onboarding, and increased renewal rates." }
    ],
    'partner-training': [
        { question: 'How can we make sure our channel partners are on-message?', answer: "With our AI Pitch Certification tool. Let partner reps practice and record their sales pitch. Our AI will give them instant feedback on their delivery and clarity, and they can submit their best take for your team's approval." },
        { question: "We have hundreds of partners. How can we train them without them seeing each other's data?", answer: "You can create a Branded Partner Portal for each channel partner. This gives them a secure, private, and white-labeled academy where they can manage and train their own teams, and you get a central dashboard to see everyone's progress." },
        { question: 'Our product changes constantly. How do we keep partners updated?', answer: "Use our AI Course Creator. When you have a new product release, just paste the release notes to instantly create a micro-learning module. You can then push this new module to all your partner portals in one click." },
        { question: 'How do I track which partners are certified to sell?', answer: 'You can build formal Partner Certification Programs and track them in our analytics. Easily see which partners (and which reps) are "Sales Certified" or "Support Certified," and which ones need a nudge.' },
        { question: 'Can we run a live, scheduled bootcamp for a new partner?', answer: "Yes. Our Cohort-Based Learning feature is perfect for this. You can enroll a new partner in a 4-week, time-based bootcamp that includes drip-fed content, live weekly training sessions, and a private discussion area." }
    ],
    'compliance-training': [
        { question: 'How does Learnly help us pass an audit?', answer: "Our Audit Logs and Defensible Reporting are built for this. We provide a detailed, unchangeable, and time-stamped record of every user action, course completion, and policy acknowledgment. You can export a report for an auditor instantly." },
        { question: 'We already have our official compliance courses in SCORM. Can we use them?', answer: "Yes. Learnly has full support for SCORM 1.2 / 2004 and xAPI packages. You can upload your existing, approved content, and all completions and quiz scores will be tracked in our audit logs." },
        { question: 'How do we manage annual re-certification for HIPAA, GDPR, etc.?', answer: 'With our Automated User Journeys. You can create a rule to automatically re-enroll all employees in a specific course exactly 365 days after their last completion. This "set it and forget it" system ensures no one falls out of compliance.' },
        { question: 'My managers are tired of manually chasing overdue employees. How can you help?', answer: 'Use our Reports Automation. You can schedule an "Overdue Report" to be sent to managers via Email, Slack, or MS Teams every Monday. You can also have the system send automated reminders directly to the learners.' },
        { question: 'How do we prove an employee understood a policy, not just clicked "complete"?', answer: "Combine three features. You can require a user to complete a lesson, then pass an Advanced Assessment (quiz), and then automatically issue a version-controlled Digital Certificate. This gives you a provable record that they passed a test on the material." }
    ]
};

export const featurePageData: { [key: string]: any } = {
    'learning-content': {
        icon: <BookOpenIcon />,
        headline: 'Learning & Content',
        subheading: 'Create engaging courses with AI, SCORM, videos, and more.',
        keyCapabilities: [
            { icon: <SparklesIcon />, title: 'AI-Powered Course Creation', description: 'Go from prompt to course in minutes. Our AI automatically generates complete courses, flashcards, and quizzes from your existing documents, videos, or curated sources.' },
            { icon: <HiOutlineUserGroup />, title: 'Cohort-Based Learning', description: 'Run scheduled, instructor-led courses. Keep groups in sync with drip-fed content, private discussions, and integrated live training modules via Zoom or Teams.' },
            { icon: <PuzzlePieceIcon />, title: 'SCORM, LTI & xAPI Support', description: 'Import content from any authoring tool. Easily upload, manage, and track all your existing SCORM 1.2 / 2004, LTI, or xAPI packages in one unified platform.' },
            { icon: <AcademicCapIcon />, title: 'Advanced Assessments & AI Quizzes', description: 'Let our AI generate insightful quiz questions, or build your own. Measure skills with Standard quizzes, Coding challenges, Psychometric evaluations, and Adaptive tests.' },
            { icon: <ArrowTrendingUpIcon />, title: 'Competency Frameworks & Skills Engine', description: 'Map, measure, and close skill gaps. Define custom competencies, set proficiency scales, and use template libraries to align competency-based learning with business goals.' },
            { icon: <QueueListIcon />, title: 'Learning Plans & OJT', description: 'Build structured learning paths with our visual Journey Builder. Combine on-demand courses with On-the-Job (OJT) training, using templates to track real-world tasks.' }
        ]
    },
    'learner-engagement': {
        icon: <SparklesIcon />,
        headline: 'Learner Engagement',
        subheading: 'Motivate learners with gamification, collaboration, and mobile access.',
        keyCapabilities: [
            { icon: <HomeIcon />, title: 'Personalized Learner Dashboard', description: "Give learners a single, personalized homepage to see all their assigned courses, track their current progress, and view their achievements at a glance." },
            { icon: <SparklesIcon />, title: 'Gamification & Streaks', description: "Drive motivation with game mechanics. Use points, badges, and leaderboards to motivate learners. Smart rescheduling and streak protection keep them engaged." },
            { icon: <HiOutlineLightBulb />, title: 'Smart Learning Tools', description: "Empower self-study. Learners can review AI-generated Flashcards (using Spaced Repetition), take 'Smart Notes,' and build their own 'Collections' of knowledge." },
            { icon: <DevicePhoneMobileIcon />, title: 'Mobile & Offline Access', description: "Learn anytime, anywhere. Give your learners the flexibility to train, take quizzes, and even access content with 'Offline Access' via our native iOS & Android apps." },
            { icon: <HiOutlineUserGroup />, title: 'Social Learning & Discussions', description: "Build a learning community. Foster peer-to-peer learning with threaded Discussion Forums inside each course, allowing learners to ask questions and share insights." },
            { icon: <ShieldCheckIcon />, title: 'Digital Certificates & Badges', description: "Reward learners and certify their skills. Use our built-in designer tool to create custom, verifiable certificates and connect to Credly for digital badges." }
        ]
    },
    'admin-platform': {
        icon: <Cog6ToothIcon />,
        headline: 'Admin & Platform',
        subheading: 'Manage users, customize branding, and scale with ease.',
        keyCapabilities: [
            { icon: <HiOutlineUserGroup />, title: 'Team Management', description: 'Organize your learners into multi-manager teams. Easily invite learners via email/CSV and track all team-based learning and progress from one dashboard.' },
            { icon: <ShieldCheckIcon />, title: 'Custom Roles & Permissions', description: 'Get total control over your platform. Use our pre-built roles (Admin, Manager, Author) or create unlimited custom roles with specific, granular permissions.' },
            { icon: <PaintBrushIcon />, title: 'Learning Portals & Branding', description: 'Create unique, branded learning environments. Launch multiple public or private academies with your own custom branding, logo, and custom domain with SSL.' },
            { icon: <LockClosedIcon />, title: 'Enterprise Security & SSO', description: 'Integrate seamlessly and securely. Enable SSO & SAML with any major provider like Okta or Azure AD. Control how users sign up with advanced registration rules.' },
            { icon: <LinkIcon />, title: 'Integrations', description: 'Connect your entire tech stack. Native integrations with Salesforce, MS Teams, Zoom, Google Meet, LinkedIn Learning, Udemy Business, and more.' },
            { icon: <ArrowUturnLeftIcon />, title: 'Content Versioning & Rollback', description: 'Edit with confidence. Our drag-and-drop lesson editor includes full version history, allowing you to review changes and roll back to a previous version at any time.' }
        ]
    },
    'automation-analytics': {
        icon: <ChartBarIcon />,
        headline: 'Automation & Analytics',
        subheading: 'Automate tasks and prove the impact of your training programs.',
        keyCapabilities: [
            { icon: <HiOutlineArrowPathRoundedSquare />, title: 'Automated User Journeys', description: "Put your training on autopilot. Use our visual 'Journey Builder' to create trigger-based workflows. Automatically enroll users in courses, send smart reminders, and assign certifications.", imageSeed: 19 },
            { icon: <HiOutlineMap />, title: 'Skill Gap & Skill Map Reports', description: "Visually connect training to business value. See a real-time map of your organization's skills. Identify critical gaps and target your training investments.", imageSeed: 20 },
            { icon: <ChartPieIcon />, title: "Advanced Reporting & Bloom's Taxonomy", description: "Measure true comprehension, not just memorization. Our Bloom's Taxonomy reports analyze cognitive skills, while you can drill down into any custom metric on learner progress, quiz scores, and more.", imageSeed: 1 },
            { icon: <EnvelopeIcon />, title: 'Automated Manager Digests', description: "Keep managers in the loop without the work. Automatically send weekly email digests to managers summarizing their team's progress, completions, and overdue assignments.", imageSeed: 2 },
            { icon: <LinkIcon />, title: 'API & Webhooks', description: 'Extend your platform. Use our comprehensive API for programmatic access and configure webhooks for real-time notifications on system events.', imageSeed: 3 },
            { icon: <ShieldCheckIcon />, title: 'Audit Logs & Compliance', description: 'Maintain a defensible, unchangeable record of all training. Generate detailed Audit Logs to track every user action, system event, and policy acknowledgment.', imageSeed: 4 }
        ]
    },
};

export const featurePageAccordionsData: { [key: string]: AccordionFeature[] } = {
    'learning-content': [
        { icon: <SparklesIcon />, title: 'AI-Powered Course Creation', description: 'Go from prompt to course in minutes. Our AI automatically generates complete courses, flashcards, and quizzes from your existing documents, videos, or curated sources.', imageSeed: 1 },
        { icon: <HiOutlineUserGroup />, title: 'Cohort-Based Learning', description: 'Run scheduled, instructor-led courses. Keep groups in sync with drip-fed content, private discussions, and integrated live training modules via Zoom or Teams.', imageSeed: 2 },
        { icon: <BookOpenIcon />, title: 'SCORM, LTI & xAPI Support', description: 'Import content from any authoring tool. Easily upload, manage, and track all your existing SCORM 1.2 / 2004, LTI, or xAPI packages in one unified platform.', imageSeed: 3 },
        { icon: <DocumentTextIcon />, title: 'Advanced Assessments & AI Quizzes', description: 'Let our AI generate insightful quiz questions, or build your own. Measure skills with Standard quizzes, Coding challenges, Psychometric evaluations, and Adaptive tests.', imageSeed: 4 },
        { icon: <ArrowTrendingUpIcon />, title: 'Competency Frameworks & Skills Engine', description: 'Map, measure, and close skill gaps. Define custom competencies, set proficiency scales, and use template libraries to align competency-based learning with business goals.', imageSeed: 5 },
        { icon: <ClipboardDocumentListIcon />, title: 'Learning Plans & OJT', description: 'Build structured learning paths with our visual Journey Builder. Combine on-demand courses with On-the-Job (OJT) training, using templates to track real-world tasks.', imageSeed: 6 }
    ],
    'learner-engagement': [
        { icon: <UserIcon />, title: 'Personalized Learner Dashboard', description: "Give learners a single, personalized homepage to see all their assigned courses, track their current progress, and view their achievements at a glance.", imageSeed: 7 },
        { icon: <SparklesIcon />, title: 'Gamification & Streaks', description: "Drive motivation with game mechanics. Use points, badges, and leaderboards to motivate learners. Smart rescheduling and streak protection keep them engaged.", imageSeed: 8 },
        { icon: <HiOutlineLightBulb />, title: 'Smart Learning Tools', description: "Empower self-study. Learners can review AI-generated Flashcards (using Spaced Repetition), take 'Smart Notes,' and build their own 'Collections' of knowledge.", imageSeed: 9 },
        { icon: <DevicePhoneMobileIcon />, title: 'Mobile & Offline Access', description: "Learn anytime, anywhere. Give your learners the flexibility to train, take quizzes, and even access content with 'Offline Access' via our native iOS & Android apps.", imageSeed: 10 },
        { icon: <HiOutlineUserGroup />, title: 'Social Learning & Discussions', description: "Build a learning community. Foster peer-to-peer learning with threaded Discussion Forums inside each course, allowing learners to ask questions and share insights.", imageSeed: 11 },
        { icon: <ShieldCheckIcon />, title: 'Digital Certificates & Badges', description: "Reward learners and certify their skills. Use our built-in designer tool to create custom, verifiable certificates and connect to Credly for digital badges.", imageSeed: 12 }
    ],
    'admin-platform': [
        { icon: <HiOutlineUserGroup />, title: 'Team Management', description: 'Organize your learners into multi-manager teams. Easily invite learners via email/CSV and track all team-based learning and progress from one dashboard.', imageSeed: 13 },
        { icon: <ShieldCheckIcon />, title: 'Custom Roles & Permissions', description: 'Get total control over your platform. Use our pre-built roles (Admin, Manager, Author) or create unlimited custom roles with specific, granular permissions.', imageSeed: 14 },
        { icon: <PaintBrushIcon />, title: 'Learning Portals & Branding', description: 'Create unique, branded learning environments. Launch multiple public or private academies with your own custom branding, logo, and custom domain with SSL.', imageSeed: 15 },
        { icon: <ShieldCheckIcon />, title: 'Enterprise Security & SSO', description: 'Integrate seamlessly and securely. Enable SSO & SAML with any major provider like Okta or Azure AD. Control how users sign up with advanced registration rules.', imageSeed: 16 },
        { icon: <LinkIcon />, title: 'Integrations', description: 'Connect your entire tech stack. Native integrations with Salesforce, MS Teams, Zoom, Google Meet, LinkedIn Learning, Udemy Business, and more.', imageSeed: 17 },
        { icon: <ArrowUturnLeftIcon />, title: 'Content Versioning & Rollback', description: 'Edit with confidence. Our drag-and-drop lesson editor includes full version history, allowing you to review changes and roll back to a previous version at any time.', imageSeed: 18 }
    ],
    'automation-analytics': [
        { icon: <HiOutlineAdjustmentsHorizontal />, title: 'Automated User Journeys', description: "Put your training on autopilot. Use our visual 'Journey Builder' to create trigger-based workflows. Automatically enroll users in courses, send smart reminders, and assign certifications.", imageSeed: 19 },
        { icon: <HiOutlineMap />, title: 'Skill Gap & Skill Map Reports', description: "Visually connect training to business value. See a real-time map of your organization's skills. Identify critical gaps and target your training investments.", imageSeed: 20 },
        { icon: <DocumentTextIcon />, title: "Advanced Reporting & Bloom's Taxonomy", description: "Measure true comprehension, not just memorization. Our Bloom's Taxonomy reports analyze cognitive skills, while you can drill down into any custom metric on learner progress, quiz scores, and more.", imageSeed: 1 },
        { icon: <EnvelopeIcon />, title: 'Automated Manager Digests', description: "Keep managers in the loop without the work. Automatically send weekly email digests to managers summarizing their team's progress, completions, and overdue assignments.", imageSeed: 2 },
        { icon: <LinkIcon />, title: 'API & Webhooks', description: 'Extend your platform. Use our comprehensive API for programmatic access and configure webhooks for real-time notifications on system events.', imageSeed: 3 },
        { icon: <ShieldCheckIcon />, title: 'Audit Logs & Compliance', description: 'Maintain a defensible, unchangeable record of all training. Generate detailed Audit Logs to track every user action, system event, and policy acknowledgment.', imageSeed: 4 }
    ]
};

const createPlaceholderCompetitor = (slug: string, name: string): Competitor => ({
    slug,
    name,
    headline: `Learnly vs ${name}`,
    subheading: `See how Learnly's all-in-one platform compares to ${name}.`,
    strengths: [
        { icon: <SparklesIcon />, title: 'Powerful AI Tools', description: 'Learnly\'s AI saves hours of manual work.' },
        { icon: <ChartBarIcon />, title: 'Actionable Analytics', description: 'Measure the real impact of your training programs.' },
        { icon: <Cog6ToothIcon />, title: 'All-in-One Simplicity', description: 'One platform for all your training needs, no complex add-ons.' }
    ],
    featureComparison: [
        { feature: 'AI Course Creator', learnly: true, competitor: 'Limited' },
        { feature: 'Hosted SaaS Solution', learnly: true, competitor: true },
        { feature: 'External Audience Training', learnly: true, competitor: 'Varies' }
    ],
    summaryTitle: 'Ready for a smarter learning platform?',
    summaryDescription: `Discover why growing companies are switching from ${name} to Learnly for a more powerful, intuitive, and integrated learning experience.`
});

export const comparisonData: { [key: string]: Competitor } = {
    'talentlms': {
        slug: 'talentlms',
        name: 'TalentLMS',
        headline: 'Learnly vs TalentLMS',
        subheading: 'See why modern organizations choose Learnly over TalentLMS for a more powerful and intuitive learning platform.',
        strengths: [
            { icon: <SparklesIcon />, title: 'Superior AI Capabilities', description: 'Learnly\'s AI course creator saves hours of work.' },
            { icon: <ChartBarIcon />, title: 'Deeper Analytics', description: 'Go beyond completion rates and measure true business impact.' },
            { icon: <UsersIcon />, title: 'Better for All Audiences', description: 'Built for employee, customer, and partner training from day one.' }
        ],
        featureComparison: [
            { feature: 'AI Course Creator', learnly: true, competitor: false },
            { feature: 'Advanced Analytics', learnly: 'Built-in', competitor: 'Limited' },
            { feature: 'Customer Training Features', learnly: true, competitor: 'Add-on' }
        ],
        summaryTitle: 'Ready for a true learning partner?',
        summaryDescription: 'Move beyond basic course delivery. Choose Learnly to get the AI-powered tools and deep analytics you need to drive real business growth.'
    },
    'docebo': {
        slug: 'docebo',
        name: 'Docebo',
        headline: 'Learnly vs Docebo',
        subheading: 'Discover how Learnly provides a more integrated and cost-effective solution compared to Docebo.',
        strengths: [
            { icon: <SparklesIcon />, title: 'Integrated AI', description: 'Learnly\'s AI is built-in, not a costly add-on.' },
            { icon: <ChartBarIcon />, title: 'Transparent Pricing', description: 'Simple, predictable pricing that scales with you.' },
            { icon: <RocketLaunchIcon />, title: 'Faster Time-to-Value', description: 'Get up and running in days, not months.' }
        ],
        featureComparison: [
            { feature: 'AI Course Creator', learnly: true, competitor: 'Add-on' },
            { feature: 'All-in-One Platform', learnly: true, competitor: 'Multiple Products' },
            { feature: 'Customer Support', learnly: 'Rated 9.8/10', competitor: 'Rated 8.5/10' }
        ],
        summaryTitle: 'Ready for an all-in-one solution?',
        summaryDescription: 'Stop juggling multiple tools and subscriptions. Learnly provides everything you need in one powerful, easy-to-use platform.'
    },
    'learndash': {
        slug: 'learndash',
        name: 'LearnDash',
        headline: 'Learnly vs LearnDash',
        subheading: 'Compare the all-in-one power of Learnly (SaaS) with the complexity of LearnDash (WordPress Plugin).',
        strengths: [
            { icon: <Cog6ToothIcon />, title: 'Fully Hosted Solution', description: 'No plugins, no maintenance. We handle the tech stack for you.' },
            { icon: <ShieldCheckIcon />, title: 'Enterprise Security', description: 'Robust security and compliance features out-of-the-box.' },
            { icon: <UsersIcon />, title: 'Dedicated Support', description: 'Expert support included, no need to hire WordPress developers.' }
        ],
        featureComparison: [
            { feature: 'Hosting Included', learnly: true, competitor: false },
            { feature: 'AI Course Creator', learnly: true, competitor: false },
            { feature: 'SCORM/xAPI', learnly: true, competitor: 'Limited' }
        ],
        summaryTitle: 'Focus on learning, not plugins.',
        summaryDescription: 'Leave the technical headaches behind. Learnly is a complete, enterprise-ready SaaS solution that just works, so you can focus on what matters.'
    },
    'ispring-lms': createPlaceholderCompetitor('ispring-lms', 'iSpring LMS'),
    'workramp': createPlaceholderCompetitor('workramp', 'Workramp'),
    'skilljar': createPlaceholderCompetitor('skilljar', 'Skilljar'),
    'litmos-lms': createPlaceholderCompetitor('litmos-lms', 'Litmos LMS'),
    'absorb-lms': createPlaceholderCompetitor('absorb-lms', 'Absorb LMS'),
    'blackboard': createPlaceholderCompetitor('blackboard', 'Blackboard'),
    'canvas': createPlaceholderCompetitor('canvas', 'Canvas'),
};

export const seoData = {
    default: {
        title: 'Learnly | The AI-Powered LMS for Employee & Customer Training',
        description: 'Learnly is the all-in-one AI-Powered Learning Management System for modern organizations, focused on employee, customer, and partner training.'
    },
    home: {
        title: 'Learnly | The AI-Powered LMS for Employee & Customer Training',
        description: 'Learnly is the all-in-one AI-Powered Learning Management System for modern organizations, focused on employee, customer, and partner training.'
    },
    features: {
        title: 'Features | Learnly LMS',
        description: 'Explore the powerful features of Learnly, from AI course creation and skills engines to advanced analytics and enterprise-grade security.'
    },
    pricing: {
        title: 'Pricing | Learnly LMS',
        description: 'Simple, transparent, and predictable pricing. Find the right plan for your team and start your free trial today.'
    },
    integrations: {
        title: 'Integrations | Learnly LMS',
        description: 'Connect Learnly with your favorite tools like Slack, Salesforce, Workday, and more to create a seamless learning ecosystem.'
    },
    about: {
        title: 'About Us | Learnly',
        description: 'Learn about our mission to empower organizations to build high-performing teams by making learning more accessible, engaging, and impactful.'
    },
    security: {
        title: 'Security & Trust | Learnly',
        description: 'Your trust is our top priority. Learn about our commitment to protecting your data with enterprise-grade security, compliance, and reliability.'
    },
    solutions: {
        title: 'Solutions | Learnly LMS',
        description: 'Discover how Learnly provides tailored solutions for employee training, customer education, partner enablement, and compliance.'
    },
    'ai-course-creation': {
        title: 'AI Course Creation | Learnly',
        description: 'Go from a simple prompt, document, or video to a complete, engaging course in minutes with our powerful AI Course Creator.'
    },
    'learning-content': {
        title: 'Learning & Content Features | Learnly',
        description: 'Create engaging courses with AI, SCORM, videos, and more. Explore our full suite of content creation and management tools.'
    },
    'learner-engagement': {
        title: 'Learner Engagement Features | Learnly',
        description: 'Motivate learners with gamification, social learning, mobile access, and smart learning tools designed to keep them engaged.'
    },
    'admin-platform': {
        title: 'Admin & Platform Features | Learnly',
        description: 'Manage users, customize branding, and scale with ease using our powerful administrative tools, custom roles, and security features.'
    },
    'automation-analytics': {
        title: 'Automation & Analytics Features | Learnly',
        description: 'Automate repetitive tasks and prove the impact of your training programs with our visual journey builder and deep analytics dashboards.'
    },
    contact: {
        title: 'Contact Us | Learnly',
        description: 'Get in touch with the Learnly team. We\'d love to hear from you and answer any questions you may have.'
    },
    terms: {
        title: 'Terms of Service | Learnly',
        description: 'Read the Terms of Service for using the Learnly platform.'
    },
    privacy: {
        title: 'Privacy Policy | Learnly',
        description: 'Learn how we collect, use, and protect your data in our Privacy Policy.'
    },
    developer: {
        title: 'Developer API | Learnly',
        description: 'Explore the Learnly REST API to programmatically interact with your learning data, manage users, and track progress.'
    },
    'branding-guide': {
        title: 'Branding & Customization Guide | Learnly',
        description: 'Learn how to customize the branding, logo, icons, and SEO settings of your Learnly application.'
    },
    'book-a-demo': {
        title: 'Book a Demo | Learnly',
        description: 'Schedule a personalized demo with one of our product specialists to see how Learnly can transform your training programs.'
    },
    'not-found': {
        title: 'Page Not Found | Learnly',
        description: 'The page you were looking for could not be found.'
    }
};
