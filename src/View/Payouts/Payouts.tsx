import React, { useState } from 'react';
import Button from '../../Components/Common/Button';
import PayoutStats from './Components/PayoutStats';
import PayoutTable from './Components/PayoutTable';
import { cn } from '../../Utils/cn';

const TABS = [
    { label: 'Pending Requests', count: 12 },
    { label: 'Processed', count: 1204 },
    { label: 'Rejected / Flagged', count: 42 },
    { label: 'Auto-Payout Rules' }
];

const Payouts = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="space-y-8 w-full max-w-full overflow-x-hidden pb-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                    <h1 className="text-[32px] font-black text-[#0A0E27] tracking-tight leading-tight">
                        Payout Management
                    </h1>
                    <p className="text-[15px] font-medium text-[#667085]">
                        Control financial flows and verify astrologer earnings.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Button
                        variant="outlined"
                        className="h-11 px-6 rounded-md border-[#EDEDF2] text-[#0A0E27] font-bold text-[14px]"
                    >
                        Export CSV
                    </Button>
                    <Button
                        variant="primary"
                        className="h-11 px-6 rounded-md bg-primary text-white font-bold text-[14px] shadow-sm"
                    >
                        Financial Summary
                    </Button>
                </div>
            </div>

            {/* Stats Section */}
            <PayoutStats />

            {/* Main Content Section */}
            <div className="space-y-6">
                {/* Tabs Navigation */}
                <div className="bg-white rounded-[10px] border border-[#EDEDF2] shadow-sm overflow-hidden">
                    <div className="border-b border-[#EDEDF2] overflow-x-auto no-scrollbar">
                        <div className="flex items-center gap-8 px-6">
                            {TABS.map((tab, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveTab(i)}
                                    className={cn(
                                        "relative py-4 text-[14px] font-bold transition-all whitespace-nowrap",
                                        activeTab === i
                                            ? "text-[#0A0E27]"
                                            : "text-[#667085] hover:text-[#0A0E27]"
                                    )}
                                >
                                    {tab.label} {tab.count !== undefined && <span className="opacity-60 ml-1">({tab.count.toLocaleString()})</span>}
                                    {activeTab === i && (
                                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0A0E27] rounded-full" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Table Section - Reactive to activeTab */}
                <PayoutTable activeTab={activeTab} />
            </div>
        </div>
    );
};

export default Payouts;
