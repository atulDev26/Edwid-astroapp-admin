import React from 'react';
import { Link } from 'react-router-dom';
import { IconChevronRight } from '@tabler/icons-react';
import { cn } from '../../Utils/cn';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
    return (
        <nav className={cn("flex items-center gap-2 text-xs font-medium text-on-surface-variant", className)}>
            {items.map((item, index) => {
                const isLast = index === items.length - 1;

                return (
                    <React.Fragment key={index}>
                        {item.href && !isLast ? (
                            <Link 
                                to={item.href} 
                                className="hover:text-primary transition-colors"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className={cn(isLast && "text-on-surface font-semibold")}>
                                {item.label}
                            </span>
                        )}
                        
                        {!isLast && (
                            <IconChevronRight 
                                size={12} 
                                className="text-on-surface-variant/40" 
                            />
                        )}
                    </React.Fragment>
                );
            })}
        </nav>
    );
};

export default Breadcrumb;
