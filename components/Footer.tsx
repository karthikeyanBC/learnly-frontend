
import React from 'react';
import { Logo, footerLinks } from '../constants';
import { Page } from '../App';

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
    const renderLinks = (links: { name: string; page?: Page; href?: string }[]) => (
        <ul className="mt-4 space-y-2">
            {links.map(link => {
                const href = link.href ?? (link.page === 'home' ? '/' : `/${link.page}`);
                const isExternal = !!link.href;
                return (
                    <li key={link.name}>
                        <a 
                            href={href} 
                            className="hover:text-indigo-400 transition"
                            {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                        >
                            {link.name}
                        </a>
                    </li>
                );
            })}
        </ul>
    );

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    <div className="col-span-2 md:col-span-4 lg:col-span-1">
                        <a href="/">
                            <Logo variant="light" />
                        </a>
                        <p className="mt-4 text-gray-400 text-sm">The Intelligent Learning Platform</p>
                    </div>
                    <div>
                        <h3 className="font-bold tracking-wider uppercase">Product</h3>
                        {renderLinks(footerLinks.product)}
                    </div>
                     <div>
                        <h3 className="font-bold tracking-wider uppercase">Company</h3>
                        {renderLinks(footerLinks.company)}
                    </div>
                    <div>
                        <h3 className="font-bold tracking-wider uppercase">Resources</h3>
                        {renderLinks(footerLinks.resources)}
                    </div>
                    <div>
                        <h3 className="font-bold tracking-wider uppercase">Legal</h3>
                        {renderLinks(footerLinks.legal)}
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Learnly, Inc. All rights reserved.
                </div>
            </div>
        </footer>
    )
};

export default Footer;
