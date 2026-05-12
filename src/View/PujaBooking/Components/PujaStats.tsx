import React from 'react';
import { 
    IconCalendar, 
    IconClipboardList, 
    IconCircleCheck, 
    IconWallet 
} from '@tabler/icons-react';
import { cn } from '../../../Utils/cn';

type StatItem = {
    label: string;
    value: string;
    trend?: string;
    subValue?: string;
    trendText?: string;
    icon: React.ReactNode;
    iconBg: string;
    badgeColor?: string;
};

const serviceStats: StatItem[] = [
    { label: 'Active Services', value: '24', trend: '+2', trendText: 'since last month', icon: <IconCalendar size={20} />, iconBg: 'bg-blue-50 text-blue-600' },
    { label: 'Pending Bookings', value: '142', subValue: 'Requires assignment', icon: <IconClipboardList size={20} />, iconBg: 'bg-orange-50 text-orange-600' },
    { label: 'Completed (30d)', value: '856', trend: '15%', trendText: 'vs previous', icon: <IconCircleCheck size={20} />, iconBg: 'bg-green-50 text-green-600' },
    { label: 'Revenue (MTD)', value: '₹12.4L', subValue: 'Target: ₹15L', icon: <IconWallet size={20} />, iconBg: 'bg-purple-50 text-purple-600' },
];

const bookingStats: StatItem[] = [
    { label: 'Total Bookings', value: '1,284', trend: '+12% vs LW', icon: <IconCalendar size={20} />, iconBg: 'bg-blue-50 text-blue-600', badgeColor: 'bg-orange-100 text-orange-600' },
    { label: 'Pending Approval', value: '42', trend: 'Urgent', icon: <IconClipboardList size={20} />, iconBg: 'bg-red-50 text-red-600', badgeColor: 'bg-red-100 text-red-600' },
    { label: 'Completed Bookings', value: '1,120', trend: '94% Rate', icon: <IconCircleCheck size={20} />, iconBg: 'bg-green-50 text-green-600', badgeColor: 'bg-yellow-100 text-yellow-700' },
    { label: 'Total Collection', value: '₹ 4,52,800', trend: 'New High', icon: <IconWallet size={20} />, iconBg: 'bg-purple-50 text-purple-600', badgeColor: 'bg-orange-100 text-orange-600' },
];

interface PujaStatsProps {
    activeTab: number;
}

const PujaStats: React.FC<PujaStatsProps> = ({ activeTab }) => {
    const stats = activeTab === 0 ? serviceStats : bookingStats;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
                <div key={i} className="bg-white p-5 rounded-[24px] border border-[#EDEDF2] shadow-sm flex items-center gap-4 group hover:border-[#1A1F4D]/20 transition-all cursor-default">
                    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shrink-0", stat.iconBg)}>
                        {stat.icon}
                    </div>
                    <div className="flex flex-col min-w-0 flex-1">
                        <span className="text-[11px] font-bold text-[#667085] uppercase tracking-wider truncate">{stat.label}</span>
                        <div className="flex items-baseline justify-between gap-2">
                            <span className="text-[22px] font-black text-[#0A0E27]">{stat.value}</span>
                            {stat.trend && (
                                <span className={cn(
                                    "px-2 py-0.5 rounded-lg text-[10px] font-bold",
                                    stat.badgeColor || "text-[#12B76A]"
                                )}>
                                    {activeTab === 1 ? "" : "↗ "} {stat.trend}
                                </span>
                            )}
                        </div>
                        <span className="text-[11px] font-medium text-[#667085] truncate">
                            {stat.subValue || stat.trendText}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PujaStats;
