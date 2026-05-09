import React from 'react';
import type { Icon as TablerIcon } from '@tabler/icons-react';
import { cn } from '../../Utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'inverted' | 'ghost' | 'neutral';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    icon?: TablerIcon;
    iconPosition?: 'left' | 'right';
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', icon: Icon, iconPosition = 'left', isLoading, children, ...props }, ref) => {

        const variants = {
            primary: 'bg-primary text-on-primary hover:opacity-90 shadow-sm',
            secondary: 'bg-secondary text-on-secondary hover:opacity-90 shadow-sm',
            tertiary: 'bg-tertiary text-on-tertiary hover:opacity-90 shadow-sm',
            neutral: 'bg-surface-container-highest text-on-surface hover:bg-surface-container-high',
            outlined: 'bg-transparent border border-outline text-on-surface hover:bg-surface-container-low',
            inverted: 'bg-inverse-surface text-inverse-on-surface hover:opacity-90 shadow-sm',
            ghost: 'bg-transparent text-on-surface hover:bg-surface-container-low',
        };

        const sizes = {
            sm: 'px-3 py-1.5 typography-label-sm gap-1.5 rounded-sm',
            md: 'px-4 py-2 typography-body-md gap-2 rounded-md',
            lg: 'px-6 py-3 typography-body-lg gap-2.5 rounded-lg',
            icon: 'p-2 rounded-md',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer',
                    variants[variant],
                    size === 'icon' ? sizes.icon : sizes[size],
                    className
                )}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading ? (
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                ) : (
                    <>
                        {size !== 'icon' && Icon && iconPosition === 'left' && (
                            <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} stroke={2} />
                        )}
                        {size !== 'icon' && children}
                        {size !== 'icon' && Icon && iconPosition === 'right' && (
                            <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} stroke={2} />
                        )}
                        {size === 'icon' && Icon && !children && (
                            <Icon size={20} stroke={2} />
                        )}
                    </>
                )}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
