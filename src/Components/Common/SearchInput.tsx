import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { cn } from '../../Utils/cn';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    containerClassName?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ 
    className, 
    containerClassName,
    placeholder = "Search...",
    ...props 
}) => {
    return (
        <div className={cn("relative", containerClassName)}>
            <IconSearch 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" 
                size={18} 
            />
            <input
                type="text"
                placeholder={placeholder}
                className={cn(
                    "w-full pl-10 pr-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-lg text-sm focus:outline-none focus:border-primary transition-colors",
                    className
                )}
                {...props}
            />
        </div>
    );
};

export default SearchInput;
