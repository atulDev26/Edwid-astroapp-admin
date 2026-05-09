import React from 'react';
import type { Icon as TablerIcon } from '@tabler/icons-react';
import { cn } from '../../Utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    icon?: TablerIcon;
    error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, icon: Icon, error, id, type = 'text', ...props }, ref) => {
        return (
            <div className="space-y-2 w-full">
                {label && (
                    <label 
                        htmlFor={id} 
                        className="typography-label-sm text-on-surface block font-semibold"
                    >
                        {label}
                    </label>
                )}
                <div className="relative group">
                    {Icon && (
                        <div className={cn(
                            "absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200",
                            error ? "text-error" : "text-outline group-focus-within:text-primary"
                        )}>
                            <Icon size={18} />
                        </div>
                    )}
                    <input
                        id={id}
                        ref={ref}
                        type={type}
                        className={cn(
                            "w-full pr-4 py-3.5 bg-white border rounded-md typography-body-md focus:outline-none transition-all duration-200 placeholder:text-outline-variant",
                            Icon ? "pl-11" : "pl-4",
                            error 
                                ? "border-error focus:ring-4 focus:ring-error/5" 
                                : "border-outline-variant focus:border-primary focus:ring-4 focus:ring-primary/5",
                            className
                        )}
                        {...props}
                    />
                </div>
                {error && (
                    <p className="text-error typography-label-sm animate-in fade-in slide-in-from-top-1">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input;
