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
                        className="h-11 px-6 rounded-xl border-[#EDEDF2] text-[#0A0E27] font-bold text-[14px]"
                    >
                        Export CSV
                    </Button>
                    <Button 
                        variant="primary" 
                        className="h-11 px-6 rounded-xl bg-[#0A0E27] text-white font-bold text-[14px] shadow-sm"
                    >
                        Financial Summary
                    </Button>
                </div>
            </div>

            {/* Stats Section */}
            <PayoutStats />

            {/* Table/Main Section */}
            <div className="space-y-6">
                <PayoutTable />
                
                {/* Tabs Section */}
                <div className="bg-white rounded-[28px] border border-[#EDEDF2] shadow-sm overflow-hidden p-2">
                    <div className="flex flex-wrap items-center gap-2">
                        {TABS.map((tab, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(i)}
                                className={cn(
                                    "px-6 py-3 rounded-[20px] text-[14px] font-bold transition-all whitespace-nowrap",
                                    activeTab === i 
                                        ? "bg-[#0A0E27]/5 text-[#0A0E27] border-b-2 border-[#0A0E27]" 
                                        : "text-[#667085] hover:bg-gray-50"
                                )}
                            >
                                {tab.label} {tab.count !== undefined && <span className="opacity-60">({tab.count.toLocaleString()})</span>}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payouts;
