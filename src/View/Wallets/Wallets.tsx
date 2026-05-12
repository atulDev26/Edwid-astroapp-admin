import React, { useState } from 'react';
import { IconDownload } from '@tabler/icons-react';
import Breadcrumb from '../../Components/Common/Breadcrumb';
import Button from '../../Components/Common/Button';
import WalletStats from './Components/WalletStats';
import WalletTable from './Components/WalletTable';
import { cn } from '../../Utils/cn';

const TABS = [
    { label: 'User Transactions' },
    { label: 'Astrologer Earnings' },
    { label: 'Refunds', count: 24 }
];

const Wallets = () => {
    const [activeTab, setActiveTab] = useState(0);

    const breadcrumbItems = [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Wallets' }
    ];

    return (
        <div className="space-y-8 w-full max-w-full overflow-x-hidden pb-10">
            {/* Top Navigation & Header */}
            <div className="flex flex-col gap-6">
                <Breadcrumb items={breadcrumbItems} />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-[32px] font-black text-[#0A0E27] tracking-tight leading-tight">
                            Wallet & Payments
                        </h1>
                        <p className="text-[15px] font-medium text-[#667085]">
                            Manage user balances, transactions, and astrologer earnings.
                        </p>
                    </div>
                    <Button
                        variant="outlined"
                        icon={IconDownload}
                        className="h-11 px-6 rounded-md border-[#EDEDF2] text-[#0A0E27] font-bold text-[14px] shadow-sm w-fit"
                    >
                        Export Report
                    </Button>
                </div>
            </div>

            {/* Stats Overview */}
            <WalletStats />

            {/* Main Content Area */}
            <div className="space-y-6">
                {/* Tab Navigation */}
                <div className="border-b border-[#EDEDF2]">
                    <div className="flex items-center gap-8 px-2 overflow-x-auto no-scrollbar">
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
                                {tab.label} {tab.count !== undefined && (
                                    <span className="ml-1.5 px-2 py-0.5 rounded-full bg-[#FFB020] text-[#0A0E27] text-[11px] font-black">
                                        {tab.count}
                                    </span>
                                )}
                                {activeTab === i && (
                                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Transaction Table */}
                <WalletTable activeTab={activeTab} />
            </div>
        </div>
    );
};

export default Wallets;
