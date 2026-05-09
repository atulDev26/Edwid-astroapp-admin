import React from 'react';

const LiveMonitor = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-2">
                <h1 className="typography-h1 text-[#0A0E27]">Live Monitor</h1>
                <p className="text-on-surface-variant typography-body-lg">Real-time monitoring of sessions and consultations.</p>
            </div>
            <div className="bg-white p-12 rounded-2xl border border-outline-variant shadow-sm text-center text-error font-bold animate-pulse">
                LIVE MONITORING ACTIVE
            </div>
        </div>
    );
};

export default LiveMonitor;
