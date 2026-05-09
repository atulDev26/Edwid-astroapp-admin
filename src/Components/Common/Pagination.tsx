import React from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { cn } from '../../Utils/cn';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    totalResults: number;
    rowsPerPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    totalResults,
    rowsPerPage,
    onPageChange,
}) => {
    const start = (currentPage - 1) * rowsPerPage + 1;
    const end = Math.min(currentPage * rowsPerPage, totalResults);

    const renderPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage, '...', totalPages);
            }
        }

        return pages.map((page, index) => (
            <button
                key={index}
                onClick={() => typeof page === 'number' && onPageChange(page)}
                disabled={page === '...'}
                className={cn(
                    "w-10 h-10 flex items-center justify-center rounded-lg border text-sm font-medium transition-all",
                    currentPage === page
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-on-surface-variant border-outline-variant hover:border-primary hover:text-primary",
                    page === '...' && "border-none cursor-default"
                )}
            >
                {page}
            </button>
        ));
    };

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 bg-white border-t border-outline-variant rounded-b-2xl">
            <div className="text-sm text-on-surface-variant font-medium text-center sm:text-left">
                Showing <span className="font-bold text-on-surface">{start}</span> to <span className="font-bold text-on-surface">{end}</span> of <span className="font-bold text-on-surface">{totalResults}</span> results
            </div>
            <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 sm:pb-0">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant bg-white text-on-surface-variant hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    <IconChevronLeft size={20} />
                </button>
                <div className="flex items-center gap-2">
                    {renderPageNumbers()}
                </div>
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant bg-white text-on-surface-variant hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    <IconChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
