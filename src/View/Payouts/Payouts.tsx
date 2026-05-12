import React, { useState } from 'react';
import Button from '../../Components/Common/Button';
import Breadcrumb from '../../Components/Common/Breadcrumb';
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

    const breadcrumbItems = [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Payouts' }
    ];

    return (
        <div className="space-y-6 md:space-y-8 max-w-[1600px] mx-auto pb-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                    <Breadcrumb items={breadcrumbItems} />
                    <h1 className="text-[28px] md:text-[32px] font-black text-[#0A0E27] tracking-tight leading-tight">
                        Payout Management
                    </h1>
                    <p className="text-[14px] md:text-[15px] font-medium text-[#667085]">
                        Control financial flows and verify astrologer earnings.
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <Button
                        variant="outlined"
                        className="h-10 px-4 md:px-6 rounded-md border-[#EDEDF2] text-[#0A0E27] font-bold text-[13px] md:text-[14px]"
                    >
                        Export CSV
                    </Button>
                    <Button
                        variant="primary"
                        className="h-10 px-4 md:px-6 rounded-md bg-primary text-white font-bold text-[13px] md:text-[14px] shadow-sm"
                    >
                        Financial Summary
                    </Button>
                </div>
            </div>

            {/* Stats Section */}
            <PayoutStats />

            {/* Main Content Section */}
            <div className="space-y-6">
                <div className="w-full overflow-x-auto no-scrollbar border-b border-[#EDEDF2]">
                    <div className="flex items-center gap-8 px-2 w-[200px]">
                        {TABS.map((tab, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(i)}
                                className={cn(
                                    "relative py-4 text-[14px] font-bold transition-all whitespace-nowrap cursor-pointer",
                                    activeTab === i
                                        ? "text-[#0A0E27]"
                                        : "text-[#667085] hover:text-[#0A0E27]"
                                )}
                            >
                                {tab.label}{tab.count !== undefined && (
                                    <span className="ml-1.5 px-2 py-0.5 rounded-full bg-[#FFB020] text-[#0A0E27] text-[11px] font-black">
                                        {tab.count.toLocaleString()}
                                    </span>
                                )}
                                {activeTab === i && (
                                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <PayoutTable activeTab={activeTab} />
            </div>
        </div>
    );
};

export default Payouts;
