import React from 'react';
import { cn } from '../../Utils/cn';

export type BadgeVariant = 'success' | 'warning' | 'error' | 'info' | 'neutral';

interface BadgeProps {
    children: React.ReactNode;
    variant?: BadgeVariant;
    icon?: React.ReactNode;
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'neutral',
    icon,
    className,
}) => {
    const variants = {
        success: "bg-[#E7F9ED] text-[#12B76A] border-[#D1FADF]",
        warning: "bg-[#FFF8E7] text-[#FFB800] border-[#FEF0C7]",
        error: "bg-[#FFF1F0] text-[#F04438] border-[#FEE4E2]",
        info: "bg-[#F0F5FF] text-[#2E90FA] border-[#D1E9FF]",
        neutral: "bg-[#F8F9FC] text-[#667085] border-[#EDEDF2]",
    };

    return (
        <span className={cn(
            "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border",
            variants[variant],
            className
        )}>
            {icon && <span className="shrink-0">{icon}</span>}
            <span className="uppercase tracking-wider">{children}</span>
        </span>
    );
};

export default Badge;
