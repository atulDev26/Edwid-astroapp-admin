import React from 'react';

const Notifications = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-2">
                <h1 className="typography-h1 text-[#0A0E27]">Notifications</h1>
                <p className="text-on-surface-variant typography-body-lg">Manage push notifications and system alerts.</p>
            </div>
            <div className="bg-white p-12 rounded-2xl border border-outline-variant shadow-sm text-center">
                <p className="text-on-surface-variant">Notification broadcast tools will be here.</p>
            </div>
        </div>
    );
};

export default Notifications;
