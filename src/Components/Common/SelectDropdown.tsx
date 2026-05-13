import React from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { cn } from '../../Utils/cn';

export interface SelectOption {
    label: string;
    value: string;
}

interface SelectDropdownProps {
    value: string;
    onChange: (value: string) => void;
    options: SelectOption[];
    placeholder?: string;
    disabled?: boolean;
    error?: string;
    className?: string;
    id?: string;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({
    value,
    onChange,
    options,
    placeholder,
    disabled = false,
    error,
    className,
    id,
}) => {
    return (
        <div className="flex flex-col gap-1 w-full">
            <div className="relative w-full">
                <select
                    id={id}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    disabled={disabled}
                    className={cn(
                        'w-full h-12 pl-4 pr-10 rounded-xl border bg-[#F8F9FC] outline-none transition-all text-[15px] font-medium appearance-none cursor-pointer',
                        'focus:bg-white focus:ring-2 focus:ring-[#1A1F4D]/10',
                        'disabled:opacity-50 disabled:cursor-not-allowed',
                        error ? 'border-red-400' : 'border-[#EDEDF2]',
                        !value && 'text-[#667085]',
                        className
                    )}
                >
                    {placeholder && (
                        <option value="" disabled hidden>
                            {placeholder}
                        </option>
                    )}
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>

                {/* Custom chevron icon */}
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#667085]">
                    <IconChevronDown size={18} />
                </span>
            </div>

            {error && (
                <p className="text-xs text-red-500 font-bold ml-1">{error}</p>
            )}
        </div>
    );
};

export default SelectDropdown;
