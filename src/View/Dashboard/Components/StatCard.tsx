import React from 'react';
import { IconTrendingUp } from '@tabler/icons-react';
import { cn } from '../../../Utils/cn';

export interface StatCardProps {
    title: string;
    value: string;
    trend?: string;
    icon: React.ElementType;
    iconColor: string;
    badge?: string;
    badgeColor?: string;
    subValues?: { label: string; value: string }[];
    footer?: string;
    progress?: number;
}

const StatCard: React.FC<StatCardProps> = ({
    title, value, trend, icon: Icon, iconColor, badge, badgeColor, subValues, footer, progress
}) => (
    <div className="bg-white p-5 sm:p-6 rounded-[24px] border border-[#EDEDF2] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
        <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between">
                <p className="text-[11px] font-black text-[#667085] uppercase tracking-widest">{title}</p>
                <div className={cn('p-2 rounded-xl bg-opacity-10', iconColor.replace('text-', 'bg-'))}>
                    <Icon className={iconColor} size={20} />
                </div>
            </div>

            <div className="flex items-end gap-3 flex-wrap">
                <h3 className="text-[24px] sm:text-[28px] font-black text-[#0A0E27] tracking-tight">{value}</h3>
                {trend && (
                    <div className="flex items-center gap-0.5 px-2 py-0.5 rounded-lg bg-green-50 text-[#12B76A] text-[12px] font-bold mb-1">
                        <IconTrendingUp size={14} />
                        {trend}
                    </div>
                )}
                {badge && (
                    <span className={cn('px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider mb-1 ml-auto', badgeColor)}>
                        {badge}
                    </span>
                )}
            </div>

            {footer && <p className="text-[12px] font-medium text-[#667085]">{footer}</p>}

            {progress !== undefined && (
                <div className="h-1.5 w-full bg-[#F2F4F7] rounded-full overflow-hidden">
                    <div className="h-full bg-orange-400 rounded-full" style={{ width: `${progress}%` }} />
                </div>
            )}
        </div>

        {subValues && (
            <div className="pt-4 mt-4 border-t border-[#F2F4F7] grid grid-cols-2 gap-4">
                {subValues.map((sv, i) => (
                    <div key={i} className="space-y-0.5">
                        <p className="text-[10px] font-bold text-[#98A2B3] uppercase tracking-wider">{sv.label}</p>
                        <p className="text-[13px] font-black text-[#344054]">{sv.value}</p>
                    </div>
                ))}
            </div>
        )}
    </div>
);

export default StatCard;
