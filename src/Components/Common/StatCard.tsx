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
                "p-6 rounded-[10px] border shadow-sm flex flex-col justify-between h-full min-h-[160px] transition-all",
                isDark
                    ? "bg-primary border-transparent text-white"
                    : "bg-white border-[#EDEDF2] text-[#0A0E27]",
                className
            )}
        >
            <div className="flex justify-between items-start">
                <span className={cn(
                    "text-[14px] font-bold leading-tight",
                    isDark ? "text-white" : "text-[#0A0E27]"
                )}>
                    {label}
                </span>
                <div className={cn(
                    "p-2 rounded-lg",
                    isDark ? "text-white" : "text-[#0A0E27]"
                )}>
                    {icon}
                </div>
            </div>

            <div className="mt-4">
                <h3 className="text-[28px] font-black tracking-tight leading-none">
                    {value}
                </h3>

                {(trend || subValue) && (
                    <div className="mt-3 flex items-center gap-1.5">
                        {trend && (
                            <span className={cn(
                                "text-[13px] font-bold flex items-center",
                                trend.isPositive ? "text-[#12B76A]" : "text-[#F04438]"
                            )}>
                                {trend.isPositive ? '↗' : '↘'} {trend.value}
                            </span>
                        )}
                        {subValue && (
                            <span className={cn(
                                "text-[13px] font-medium",
                                isDark ? "text-white/60" : "text-[#667085]"
                            )}>
                                {trend ? `from ${subValue}` : subValue}
                            </span>
                        )}
                    </div>
                )}
            </div>

            {isDark && (
                <div className="mt-4 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#FFB020] w-3/4 rounded-full" />
                </div>
            )}
        </div>
    );
};

export default StatCard;
