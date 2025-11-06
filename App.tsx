
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import IntegrationsPage from './pages/IntegrationsPage';
import CategoryListingPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';
import DetailPage from './pages/FeatureDetailPage';
import SecurityPage from './pages/SecurityPage';
import { menuFeatures, menuSolutions, featureMenuLinks, comparisonData } from './constants';
import AiCourseCreationPage from './pages/AiCourseCreationPage';
import SolutionDetailPage from './pages/SolutionDetailPage';
import FeatureOverviewPage from './pages/FeatureOverviewPage';
import LearningContentPage from './pages/LearningContentPage';
import LearnerEngagementPage from './pages/LearnerEngagementPage';
import AdminPlatformPage from './pages/AdminPlatformPage';
import AutomationAnalyticsPage from './pages/AutomationAnalyticsPage';
import ChatWidget from './components/ChatWidget';
import HowToWidget from './pages/HowToWidget';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import DeveloperPage from './pages/DeveloperPage';
import BrandingGuidePage from './pages/BrandingGuidePage';
import BookADemoPage from './pages/BookADemoPage';
import ComparisonPage from './pages/ComparisonPage';
import NotFoundPage from './pages/NotFoundPage';
import SeoManager from './components/SeoManager';

export type Page = 'home' | 'features' | 'pricing' | 'integrations' | 'about' | 'security' | 'feature-detail' | 'solutions' | 'solution-detail' | 'ai-course-creation' | 'learning-content' | 'learner-engagement' | 'admin-platform' | 'automation-analytics' | 'login' | 'signup' | 'how-to-widget' | 'contact' | 'terms' | 'privacy' | 'developer' | 'branding-guide' | 'book-a-demo' | 'comparison-detail' | 'not-found';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('home');
    const [currentSlug, setCurrentSlug] = useState<string | undefined>(undefined);
    const [currentItem, setCurrentItem] = useState<any | undefined>(undefined);

    useEffect(() => {
        const parsePath = () => {
            const path = window.location.pathname;
            const parts = path.split('/').filter(Boolean);
            window.scrollTo(0, 0);

            // Reset item on each navigation to prevent stale data
            setCurrentItem(undefined);

            if (parts.length === 0) {
                setCurrentPage('home');
                setCurrentSlug(undefined);
                return;
            }

            const [pageOrPrefix, slug] = parts;
            const validPages: Page[] = ['home', 'features', 'pricing', 'integrations', 'about', 'security', 'solutions', 'ai-course-creation', 'login', 'signup', 'how-to-widget', 'contact', 'terms', 'privacy', 'developer', 'branding-guide', 'book-a-demo'];

            if (pageOrPrefix === 'solutions' && slug) {
                const solution = Object.values(menuSolutions).flat().find(f => f.slug === slug);
                setCurrentPage('solution-detail');
                setCurrentSlug(slug);
                setCurrentItem(solution);
            } else if (pageOrPrefix === 'features' && slug) {
                const featureCategorySlugs = featureMenuLinks.map(link => link.slug);
                if (featureCategorySlugs.includes(slug)) {
                    setCurrentPage(slug as Page);
                    setCurrentSlug(undefined);
                } else {
                    const feature = Object.values(menuFeatures).flat().find(f => f.slug === slug);
                    setCurrentPage('feature-detail');
                    setCurrentSlug(slug);
                    setCurrentItem(feature);
                }
            } else if (pageOrPrefix === 'compare' && slug) {
                const competitorKey = slug.replace('-alternative', '');
                const competitor = comparisonData[competitorKey as keyof typeof comparisonData];
                setCurrentPage('comparison-detail');
                setCurrentSlug(slug);
                setCurrentItem(competitor);
            } else if (validPages.includes(pageOrPrefix as Page)) {
                setCurrentPage(pageOrPrefix as Page);
                setCurrentSlug(undefined);
            } else {
                setCurrentPage('not-found');
                setCurrentSlug(undefined);
            }
        };

        const handlePopState = () => parsePath();
        window.addEventListener('popstate', handlePopState);
        
        const handleLinkClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');

            if (anchor && anchor.target !== '_blank' && !e.metaKey && !e.ctrlKey && !e.shiftKey) {
                try {
                    // Use anchor.href to get the fully resolved URL.
                    const url = new URL(anchor.href);

                    // This is the robust way to check for an internal link.
                    if (url.origin === window.location.origin) {
                        e.preventDefault();
                        const newPath = url.pathname + url.search + url.hash;
                        const currentPath = window.location.pathname + window.location.search + window.location.hash;

                        if (newPath !== currentPath) {
                            window.history.pushState({}, '', newPath);
                            parsePath();
                        }
                    }
                } catch (err) {
                    // Let the browser handle links that aren't valid URLs (e.g., mailto:).
                }
            }
        };
        document.addEventListener('click', handleLinkClick);

        parsePath(); // Initial load

        return () => {
            window.removeEventListener('popstate', handlePopState);
            document.removeEventListener('click', handleLinkClick);
        };
    }, []);


    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage />;
            case 'pricing':
                return <PricingPage />;
            case 'integrations':
                return <IntegrationsPage />;
            case 'features':
                return <FeatureOverviewPage />;
            case 'learning-content':
                return <LearningContentPage />;
            case 'learner-engagement':
                return <LearnerEngagementPage />;
            case 'admin-platform':
                return <AdminPlatformPage />;
            case 'automation-analytics':
                return <AutomationAnalyticsPage />;
            case 'solutions':
                return <CategoryListingPage pageTitle="Solutions" pageSubtitle="Tailored learning platforms for every audience" categoriesData={menuSolutions} basePath="solutions" />;
            case 'about':
                return <AboutPage />;
            case 'security':
                return <SecurityPage />;
            case 'ai-course-creation':
                return <AiCourseCreationPage />;
            case 'feature-detail':
                return <DetailPage item={currentItem} />;
            case 'solution-detail':
                return <SolutionDetailPage item={currentItem} />;
            case 'comparison-detail':
                return <ComparisonPage competitor={currentItem} />;
            case 'how-to-widget':
                return <HowToWidget />;
             case 'contact':
                return <ContactPage />;
            case 'book-a-demo':
                return <BookADemoPage />;
            case 'terms':
                return <TermsPage />;
            case 'privacy':
                return <PrivacyPage />;
            case 'developer':
                return <DeveloperPage />;
            case 'branding-guide':
                return <BrandingGuidePage />;
            case 'not-found':
                return <NotFoundPage />;
            case 'login':
            case 'signup':
                // For now, these redirect to home. Can be built out later.
                return <HomePage />;
            default:
                return <HomePage />;
        }
    };

    return (
        <>
            <SeoManager page={currentPage} item={currentItem} />
            <Header />
            <main>{renderPage()}</main>
            <Footer />
            <ChatWidget />
        </>
    );
};

export default App;
