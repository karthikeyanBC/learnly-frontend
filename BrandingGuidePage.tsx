import React from 'react';

const CodeBlock: React.FC<{ children: React.ReactNode, lang?: string }> = ({ children, lang = 'html' }) => (
    <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto text-sm my-4">
        <code className={`language-${lang}`}>{children}</code>
    </pre>
);

const BrandingGuidePage: React.FC = () => {
    const faviconExample = `
// In index.html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your App Title</title>
  
  <!-- Replace this link with your new favicon -->
  <link rel="icon" href="path/to/your/favicon.ico">
  
  <!-- Or use an SVG data URI for best quality -->
  <link rel="icon" href="data:image/svg+xml;base64,YOUR_BASE64_ENCODED_SVG_HERE">
  
  <script src="https://cdn.tailwindcss.com"></script>
  ...
</head>
    `.trim();

    const logoImportExample = `
// In constants.tsx

// 1. Add your logo files to the /images directory.
//    (e.g., /images/logo-dark.svg, /images/logo-light.svg)

// 2. Import them at the top of the file.
import logoDark from './images/logo-dark.svg';
import logoLight from './images/logo-light.svg';

// Note: You can now remove the old logoDarkB64 and logoLightB64 constants.
    `.trim();

    const logoComponentExample = `
// In constants.tsx

export const Logo: React.FC</*...*/> = ({ className, variant = 'dark' }) => (
    <img
        // 3. Update the src to use the imported files.
        src={variant === 'dark' ? logoDark : logoLight}
        alt="Your Company Logo" // <-- 4. Also update the alt text!
        className={className}
    />
);
    `.trim();
    
    const logoBase64Example = `
// In constants.tsx

// 1. Encode your new logo SVG to Base64 (e.g., using an online tool).
// 2. Replace the existing Base64 strings with your new ones.
const logoDarkB64 = 'data:image/svg+xml;base64,YOUR_NEW_DARK_LOGO_BASE64_STRING';
const logoLightB64 = 'data:image/svg+xml;base64,YOUR_NEW_LIGHT_LOGO_BASE64_STRING';

// 3. The Logo component will automatically use the new logos.
export const Logo: React.FC</*...*/> = ({ className, variant = 'dark' }) => (
  <img 
    src={variant === 'dark' ? logoDarkB64 : logoLightB64} 
    alt="Your Company Logo" // <-- 4. Also update the alt text!
    className={className} 
  />
);
    `.trim();

    const seoDataExample = `
// In constants.tsx

export const seoData = {
    // ...
    home: {
        title: 'Your New Home Page Title | Your Company',
        description: 'Your new, compelling description for the home page.'
    },
    pricing: {
        title: 'Pricing Plans | Your Company',
        description: 'Discover our simple and transparent pricing.'
    },
    // ...
};
    `.trim();
    
    const iconComponentExample = `
// In constants.tsx

export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75..." />
    </svg>
);
    `.trim();

    const iconReplacementExample = `
// In constants.tsx

export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
    // The entire <svg> block below has been replaced.
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
);
    `.trim();

    const vercelJsonExample = `
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
    `.trim();


    return (
        <div className="bg-white py-20 sm:py-28">
            <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Branding &amp; Customization Guide</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">This guide explains how to update the application's branding, add custom code, and manage SEO to match your needs.</p>
                </div>

                <div className="mt-16 text-lg text-gray-700 leading-relaxed space-y-16">
                     <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Change the Logo</h2>
                        <p>
                            The site logo, used in the header and footer, is managed from a central component. The recommended way is to use an image file from the `/images` directory.
                        </p>
                        <div className="mt-4">
                             <h3 className="text-xl font-semibold text-gray-800">Method A: Using an Image File (Recommended)</h3>
                             <p className="mt-2">
                                This approach is cleaner and easier to manage. First, add your logo files (e.g., `logo-dark.svg`, `logo-light.svg`) to the `/images` directory. Then, open <code className="text-base bg-gray-100 text-indigo-700 font-mono p-1 rounded-md border border-gray-200">constants.tsx</code> and modify it as follows:
                            </p>
                        </div>
                        <CodeBlock lang="typescript">{logoImportExample}</CodeBlock>
                        <CodeBlock lang="typescript">{logoComponentExample}</CodeBlock>

                        <div className="mt-8">
                             <h3 className="text-xl font-semibold text-gray-800">Method B: Using Base64 Data URI (Advanced)</h3>
                            <p className="mt-2">
                                Alternatively, you can embed the logo directly into the code. This is useful for small SVGs but can be harder to update. Open <code className="text-base bg-gray-100 text-indigo-700 font-mono p-1 rounded-md border border-gray-200">constants.tsx</code> and replace the Base64 strings:
                            </p>
                        </div>
                        <CodeBlock lang="typescript">{logoBase64Example}</CodeBlock>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Change the Favicon</h2>
                        <p>
                           The favicon is the small icon that appears in the browser tab. It is defined in the main HTML file.
                        </p>
                        <div className="mt-2">
                             <h3 className="text-xl font-semibold text-gray-800">Step 1: Locate the HTML File</h3>
                             <p>Open the file: <code className="text-base bg-gray-100 text-indigo-700 font-mono p-2 rounded-md border border-gray-200">index.html</code></p>
                        </div>
                         <div className="mt-4">
                             <h3 className="text-xl font-semibold text-gray-800">Step 2: Update the Link Tag</h3>
                            <p>
                                Inside the <code className="text-base bg-gray-100 text-indigo-700 font-mono p-1 rounded-md border border-gray-200">&lt;head&gt;</code> section, find the <code className="text-base bg-gray-100 text-indigo-700 font-mono p-1 rounded-md border border-gray-200">&lt;link rel="icon" ...&gt;</code> tag and replace its <code className="text-base bg-gray-100 text-indigo-700 font-mono p-1 rounded-md border border-gray-200">href</code> attribute with the path to your new favicon.
                            </p>
                        </div>
                        <CodeBlock lang="html">{faviconExample}</CodeBlock>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Change Icons</h2>
                        <p>
                            The application uses an efficient method for icons. Instead of loading an entire icon library, each icon is defined as a self-contained React component. This keeps the application fast and lightweight.
                        </p>
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold text-gray-800">Step 1: Locate the Icon File</h3>
                            <p className="mt-2">
                                All icon components are located in a single, centralized file:
                            </p>
                            <div className="mt-2">
                                 <code className="text-base bg-gray-100 text-indigo-700 font-mono p-2 rounded-md border border-gray-200">
                                    constants.tsx
                                </code>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-xl font-semibold text-gray-800">Step 2: Find &amp; Replace the Icon SVG</h3>
                            <p className="mt-2">
                                Scroll through <code className="text-base bg-gray-100 text-indigo-700 font-mono p-1 rounded-md border border-gray-200">constants.tsx</code> to find the icon component you wish to change (e.g., <code className="text-base bg-gray-100 text-indigo-700 font-mono p-1 rounded-md border border-gray-200">SparklesIcon</code>).
                            </p>
                             <CodeBlock lang="typescript">{iconComponentExample}</CodeBlock>
                            <p>
                                Next, find a new icon you'd like to use from a source like <a href="https://heroicons.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-600 hover:underline">Heroicons</a> or <a href="https://lucide.dev/" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-600 hover:underline">Lucide</a>, and copy its SVG code.
                            </p>
                            <p className="mt-2">
                                Replace the entire <code className="text-base bg-gray-100 text-indigo-700 font-mono p-1 rounded-md border border-gray-200">&lt;svg&gt;...&lt;/svg&gt;</code> block with your new SVG code.
                            </p>
                        </div>
                        
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold text-gray-800">Step 3: Update SVG for React (JSX)</h3>
                            <p className="mt-2">
                                You may need to make minor adjustments to the copied SVG code to make it compatible with React's JSX format:
                            </p>
                             <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Change kebab-case attributes to camelCase (e.g., <code className="text-base bg-gray-100 text-indigo-700 font-mono p-1 rounded-md border border-gray-200">stroke-width</code> becomes <code className="text-base bg-gray-100 text-indigo-700 font-mono p-1 rounded-md border border-gray-200">strokeWidth</code>).</li>
                                <li>Ensure the <code className="text-base bg-gray-100 text-indigo-700 font-mono p-1 rounded-md border border-gray-200">className=&#123;className&#125;</code> prop is passed to the main <code className="text-base bg-gray-100 text-indigo-700 font-mono p-1 rounded-md border border-gray-200">&lt;svg&gt;</code> tag.</li>
                            </ul>
                            <p className="mt-2">Here is the final result after replacing the icon:</p>
                            <CodeBlock lang="typescript">{iconReplacementExample}</CodeBlock>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Update SEO &amp; Social Sharing Info</h2>
                        <p>
                           Search Engine Optimization (SEO) and social sharing tags (Open Graph) are critical for visibility. They are managed from a central location.
                        </p>
                         <div className="mt-4">
                             <h3 className="text-xl font-semibold text-gray-800">Step 1: Update Page Titles &amp; Descriptions</h3>
                            <p>
                                All text-based metadata is stored in the <code className="text-base bg-gray-100 text-indigo-700 font-mono p-1 rounded-md border border-gray-200">seoData</code> object within the file: <code className="text-base bg-gray-100 text-indigo-700 font-mono p-2 rounded-md border border-gray-200">constants.tsx</code>.
                            </p>
                             <p className="mt-2">
                                To change the title or description for any page, simply find its key in the object and edit the corresponding text.
                            </p>
                        </div>
                        <CodeBlock lang="typescript">{seoDataExample}</CodeBlock>
                         <div className="mt-4">
                             <h3 className="text-xl font-semibold text-gray-800">Step 2: Update the Social Sharing Image</h3>
                            <p>
                                When you share a link on platforms like X (Twitter), Slack, or Facebook, they display a preview image. This is controlled by the Open Graph (OG) image.
                            </p>
                            <p className="mt-2">
                                To change this, simply replace the file named <code className="text-base bg-gray-100 text-indigo-700 font-mono p-2 rounded-md border border-gray-200">og-image.png</code> in the root directory of the project.
                            </p>
                             <p className="mt-2 font-semibold">
                                Recommended dimensions for the OG image are 1200x630 pixels.
                            </p>
                        </div>
                    </div>
                    
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Hosting on Vercel (SPA Configuration)</h2>
                        <p>
                           This website is a Single-Page Application (SPA), which means that page navigation is handled by JavaScript in the browser, not by fetching new HTML files from a server. This requires a specific server configuration to work correctly.
                        </p>
                         <div className="mt-4">
                             <h3 className="text-xl font-semibold text-gray-800">The Problem</h3>
                            <p>
                                If you visit the site and click a link to `/features`, the app works fine. However, if you try to directly load or refresh the `/features` page, the server would normally look for a file named `features` and return a 404 error because it doesn't exist.
                            </p>
                        </div>
                         <div className="mt-4">
                             <h3 className="text-xl font-semibold text-gray-800">The Solution: Server Rewrites</h3>
                            <p>
                                To fix this, we use a rewrite rule. This tells the hosting provider (Vercel) to serve the main <code className="text-base bg-gray-100 text-indigo-700 font-mono p-1 rounded-md border border-gray-200">index.html</code> file for any path that isn't a recognized file. Once our app loads, its internal router takes over and displays the correct page based on the URL.
                            </p>
                            <p className="mt-2">
                                This configuration is located in the file: <code className="text-base bg-gray-100 text-indigo-700 font-mono p-2 rounded-md border border-gray-200">vercel.json</code>
                            </p>
                        </div>
                        <CodeBlock lang="json">{vercelJsonExample}</CodeBlock>
                         <p>This simple rule is all that's needed to ensure your SPA works perfectly on Vercel, providing a great experience for both users and search engine crawlers.</p>
                    </div>

                    <div className="!mt-12 p-6 bg-indigo-50 border border-indigo-200 rounded-lg">
                        <h3 className="text-xl font-bold text-indigo-800">Customization Complete!</h3>
                        <p className="mt-2 text-indigo-700">
                           By following these steps, you can fully customize the application's branding, manage its SEO, and understand its hosting configuration.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandingGuidePage;