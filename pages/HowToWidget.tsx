
import React from 'react';

const CodeBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto text-sm my-4">
        <code>{children}</code>
    </pre>
);

const HowToWidget: React.FC = () => {
    const jsExample = `
import React, { useEffect } from 'react';

const ChatWidget: React.FC = () => {
    useEffect(() => {
        // --- PASTE YOUR CHAT WIDGET SCRIPT HERE ---
        const script = document.createElement('script');
        script.src = 'https://your-chat-widget-provider.com/widget.js';
        script.async = true;
        script.id = 'chat-widget-script'; 
        document.body.appendChild(script);

        return () => {
            const existingScript = document.getElementById('chat-widget-script');
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, []);

    return (
      // ...
    );
};
    `.trim();

    const cssExample = `
// ... inside the ChatWidget component's return statement

return (
    <>
        <style>{\`
            /* --- ADD YOUR CHAT WIDGET CSS OR STYLES HERE --- */
            .chat-widget-launcher {
                bottom: 25px !important;
                right: 25px !important;
            }
        \`}</style>
    </>
);
    `.trim();


    return (
        <div className="bg-white py-20 sm:py-28">
            <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">How to Add a Custom Chat Widget</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">This guide explains how to add a third-party chat widget that will appear on every page of the application.</p>
                </div>

                <div className="mt-16 text-lg text-gray-700 leading-relaxed space-y-8">
                    <p>
                        The application is structured to make this process simple and clean. All the code for the widget is managed in a single, dedicated file.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 1: Locate the Widget File</h2>
                        <p>
                            The first step is to open the correct file in the editor. All the code for the chat widget should be placed in:
                        </p>
                        <div className="mt-2">
                             <code className="text-base bg-gray-100 text-indigo-700 font-mono p-2 rounded-md border border-gray-200">
                                components/ChatWidget.tsx
                            </code>
                        </div>
                       
                        <p className="mt-4">
                            This component is already included on every page, so any code you add here will be loaded automatically throughout the site.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 2: Add Your JavaScript Snippet</h2>
                        <p>
                            Most chat providers (like Intercom, Drift, HubSpot, etc.) will give you a JavaScript snippet to add to your site. You should paste this snippet inside the <code className="text-base bg-gray-100 text-indigo-700 font-mono p-1 rounded-md border border-gray-200">useEffect</code> hook in the <code className="text-base bg-gray-100 text-indigo-700 font-mono p-1 rounded-md border border-gray-200">ChatWidget.tsx</code> file.
                        </p>
                        <p className="mt-2">
                           Here is an example of what it should look like:
                        </p>
                        <CodeBlock>{jsExample}</CodeBlock>
                         <p>
                            This code dynamically creates a <code className="text-base bg-gray-100 text-indigo-700 font-mono p-1 rounded-md border border-gray-200">&lt;script&gt;</code> tag and adds it to the page. The <code className="text-base bg-gray-100 text-indigo-700 font-mono p-1 rounded-md border border-gray-200">return</code> function ensures the script is cleaned up when the user navigates away, which is important for a smooth single-page application experience.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 3: Add Custom CSS (Optional)</h2>
                        <p>
                            If you need to override the default styles of your chat widget (for example, to adjust its position), you can add CSS directly into the <code className="text-base bg-gray-100 text-indigo-700 font-mono p-1 rounded-md border border-gray-200">&lt;style&gt;</code> tag within the same file.
                        </p>
                        <CodeBlock>{cssExample}</CodeBlock>
                        <p>
                            By adding your custom styles here, you keep all widget-related code in one place.
                        </p>
                    </div>

                    <div className="!mt-12 p-6 bg-indigo-50 border border-indigo-200 rounded-lg">
                        <h3 className="text-xl font-bold text-indigo-800">That's It!</h3>
                        <p className="mt-2 text-indigo-700">
                           Once you've added your script to <code className="text-base bg-gray-100 text-indigo-700 font-mono p-1 rounded-md border border-gray-200">ChatWidget.tsx</code>, your chat widget will be live across the entire site. This centralized approach makes it easy to manage, update, or remove the widget in the future.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToWidget;
