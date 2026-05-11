import React from 'react';
import { IconTrendingUp } from '@tabler/icons-react';
import { cn } from '../../../Utils/cn';

interface QuickStatsGridProps {
    stats: Array<{
        label: string;
        value: string;
        trend: string;
        icon: any;
        color: string;
    }>;
}

export default function QuickStatsGrid({ stats }: QuickStatsGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-outline-variant shadow-sm flex flex-col items-center text-center space-y-2">
                    <p className="text-sm font-medium text-on-surface-variant uppercase tracking-wide">{stat.label}</p>
                    <p className="text-4xl font-bold text-on-surface">{stat.value}</p>
                    <div className={cn(
                        "flex items-center gap-1 text-[13px] font-bold",
                        stat.trend.includes('+') ? "text-[#00A344]" : "text-on-surface-variant"
                    )}>
                        {stat.trend.includes('+') && <IconTrendingUp size={16} />}
                        {stat.trend}
                    </div>
                </div>
            ))}
        </div>
    );
}
