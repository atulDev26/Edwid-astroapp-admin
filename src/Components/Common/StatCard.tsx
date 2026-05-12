import React from 'react';
import { cn } from '../../Utils/cn';

interface StatCardProps {
    label: string;
    value: string;
    subValue?: string;
    trend?: {
        value: string;
        isPositive?: boolean;
    };
    icon: React.ReactNode;
    variant?: 'light' | 'dark';
    className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
    label,
    value,
    subValue,
    trend,
    icon,
    variant = 'light',
    className,
}) => {
    const isDark = variant === 'dark';

    return (
        <div
            className={cn(
                "relative p-6 rounded-[20px] border shadow-sm flex flex-col justify-between h-full min-h-[160px] transition-all overflow-hidden group",
                isDark
                    ? "bg-[#1A1F4D] border-transparent text-white"
                    : "bg-white border-[#EDEDF2] text-[#0A0E27]",
                className
            )}
        >
            {/* Background Decorative Icon */}
            <div className={cn(
                "absolute right-[-10px] top-4 transition-transform group-hover:scale-110 duration-500",
                isDark ? "text-white/20" : "text-[#0A0E27]/10"
            )}>
                {React.cloneElement(icon as React.ReactElement, { 
                    size: 100, 
                    stroke: 1 
                } as any)}
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="space-y-1">
                    <span className={cn(
                        "text-[13px] font-bold tracking-wider opacity-80 uppercase",
                        isDark ? "text-white" : "text-[#667085]"
                    )}>
                        {label}
                    </span>
                    <h3 className="text-[32px] font-black tracking-tight leading-tight">
                        {value}
                    </h3>
                </div>

                <div className="mt-auto">
                    {(trend || subValue) && (
                        <div className="flex items-center gap-1.5 flex-wrap">
                            {trend && (
                                <span className={cn(
                                    "text-[13px] font-bold flex items-center gap-0.5",
                                    trend.isPositive ? "text-[#12B76A]" : "text-[#F04438]"
                                )}>
                                    {trend.isPositive ? '↗' : '↘'} {trend.value}
                                </span>
                            )}
                            {subValue && (
                                <span className={cn(
                                    "text-[13px] font-medium flex items-center gap-1",
                                    isDark ? "text-white/80" : "text-[#667085]"
                                )}>
                                    {subValue}
                                    {isDark && <span className="text-[16px]">→</span>}
                                </span>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StatCard;
