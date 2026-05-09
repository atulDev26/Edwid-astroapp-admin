import React, { useState, useRef, useEffect } from 'react';
import { IconChevronDown, IconCheck, type Icon as TablerIcon } from '@tabler/icons-react';
import { cn } from '../../Utils/cn';

interface MultiSelectFilterProps {
    label: string;
    options: string[];
    selectedValues: string[];
    onChange: (values: string[]) => void;
    icon?: TablerIcon;
}

const MultiSelectFilter: React.FC<MultiSelectFilterProps> = ({ 
    label, 
    options, 
    selectedValues, 
    onChange, 
    icon: Icon 
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleValue = (value: string) => {
        if (selectedValues.includes(value)) {
            onChange(selectedValues.filter(v => v !== value));
        } else {
            onChange([...selectedValues, value]);
        }
    };

    const displayText = selectedValues.length === 0 
        ? 'All' 
        : selectedValues.length === options.length 
            ? 'All' 
            : selectedValues.join(', ');

    return (
        <div className="relative" ref={dropdownRef}>
            <div 
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-full border border-outline-variant bg-white text-sm font-medium cursor-pointer hover:border-primary transition-all active:scale-95 select-none",
                    isOpen && "border-primary ring-1 ring-primary/20"
                )}
            >
                {Icon && <Icon size={16} className="text-on-surface-variant" />}
                <span className="text-on-surface-variant">
                    {label}: <span className="text-on-surface font-bold whitespace-nowrap">{displayText}</span>
                </span>
                <IconChevronDown size={16} className={cn("text-on-surface-variant transition-transform", isOpen && "rotate-180")} />
            </div>

            {isOpen && (
                <div className="absolute top-12 left-0 z-50 min-w-[160px] bg-white border border-outline-variant rounded-xl shadow-lg py-2 animate-in fade-in zoom-in-95 duration-100">
                    {options.map((option) => (
                        <div 
                            key={option}
                            onClick={() => toggleValue(option)}
                            className="flex items-center justify-between px-4 py-2 hover:bg-surface-container-low cursor-pointer transition-colors"
                        >
                            <span className={cn(
                                "text-sm",
                                selectedValues.includes(option) ? "text-primary font-semibold" : "text-on-surface"
                            )}>
                                {option}
                            </span>
                            {selectedValues.includes(option) && (
                                <IconCheck size={16} className="text-primary" />
                            )}
                        </div>
                    ))}
                    <div className="border-t border-outline-variant mt-2 pt-2 px-4">
                        <button 
                            onClick={() => onChange(options)}
                            className="text-xs text-primary font-bold hover:underline"
                        >
                            Select All
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MultiSelectFilter;
