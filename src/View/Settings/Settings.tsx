import React from 'react';

const Settings = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-2">
                <h1 className="typography-h1 text-[#0A0E27]">Settings</h1>
                <p className="text-on-surface-variant typography-body-lg">Configure global application parameters and preferences.</p>
            </div>
            <div className="bg-white p-12 rounded-2xl border border-outline-variant shadow-sm text-center">
                <p className="text-on-surface-variant">General settings and configurations will be here.</p>
            </div>
        </div>
    );
};

export default Settings;
