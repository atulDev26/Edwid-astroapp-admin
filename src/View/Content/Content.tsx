import React from 'react';

const Content = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-2">
                <h1 className="typography-h1 text-[#0A0E27]">Content</h1>
                <p className="text-on-surface-variant typography-body-lg">Manage blogs, articles, and app content.</p>
            </div>
            <div className="bg-white p-12 rounded-2xl border border-outline-variant shadow-sm text-center">
                <p className="text-on-surface-variant">CMS management interface will be here.</p>
            </div>
        </div>
    );
};

export default Content;
