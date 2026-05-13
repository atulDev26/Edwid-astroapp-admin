import React, { useState } from 'react';
import { IconCalendar } from '@tabler/icons-react';
import { cn } from '../../Utils/cn';
import StatsGrid from './Components/StatsGrid';
import QuickActions from './Components/QuickActions';
import ChartsSection from './Components/ChartsSection';
import LiveStatusHub from './Components/LiveStatusHub';
import ConsultationsTable from './Components/ConsultationsTable';

const TIME_RANGES = ['Today', '7 Days', '30 Days'] as const;

const Dashboard = () => {
    const [timeRange, setTimeRange] = useState<string>('Today');

    return (
        <div className="space-y-6 sm:space-y-8 pb-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
                <div className="space-y-1">
                    <h1 className="text-[26px] sm:text-[32px] font-black text-[#0A0E27] tracking-tight">System Overview</h1>
                    <p className="text-[14px] sm:text-[15px] font-medium text-[#667085]">
                        Real-time performance metrics and astrologer segments.
                    </p>
                </div>

                <div className="flex items-center gap-1 p-1 bg-white border border-[#EDEDF2] rounded-2xl shadow-sm self-start sm:self-auto flex-wrap">
                    {TIME_RANGES.map((range) => (
                        <button
                            key={range}
                            onClick={() => setTimeRange(range)}
                            className={cn(
                                'px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-[13px] sm:text-[14px] font-black transition-all whitespace-nowrap',
                                timeRange === range
                                    ? 'bg-[#0A0E27] text-white shadow-lg'
                                    : 'text-[#667085] hover:bg-gray-50'
                            )}
                        >
                            {range}
                        </button>
                    ))}
                    <div className="w-px h-5 bg-[#EDEDF2] mx-1" />
                    <button className="p-2 sm:p-2.5 text-[#667085] hover:bg-gray-50 rounded-xl transition-colors">
                        <IconCalendar size={18} />
                    </button>
                </div>
            </div>

            <StatsGrid />

            <QuickActions />

            <ChartsSection />

            <LiveStatusHub />

            <ConsultationsTable />
        </div>
    );
};

export default Dashboard;
