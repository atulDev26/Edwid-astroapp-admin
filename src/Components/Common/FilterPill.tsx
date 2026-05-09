import React from 'react';
import { IconChevronDown, type Icon as TablerIcon } from '@tabler/icons-react';
import { cn } from '../../Utils/cn';

interface FilterPillProps {
    label: string;
    value: string;
    icon?: TablerIcon;
    onClick?: () => void;
    className?: string;
}

const FilterPill: React.FC<FilterPillProps> = ({ label, value, icon: Icon, onClick, className }) => {
    return (
        <div 
            onClick={onClick}
            className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-full border border-outline-variant bg-white text-sm font-medium cursor-pointer hover:border-primary transition-all active:scale-95 select-none",
                className
            )}
        >
            {Icon && <Icon size={16} className="text-on-surface-variant" />}
            <span className="text-on-surface-variant">
                {label}: <span className="text-on-surface font-bold">{value}</span>
            </span>
            <IconChevronDown size={16} className="text-on-surface-variant" />
        </div>
    );
};

export default FilterPill;
