import { IconStar } from '@tabler/icons-react';
import React from 'react';
import Button from '../../../Components/Common/Button';
import CustomDataTable from '../../../Components/Common/DataTable';
import Pagination from '../../../Components/Common/Pagination';
import { type Completion } from '../../../api/types';

interface RecentCompletionsSectionProps {
    completions: Completion[];
    currentPage: number;
    onPageChange: (page: number) => void;
    onViewSession: (session: Completion) => void;
}

const RecentCompletionsSection: React.FC<RecentCompletionsSectionProps> = ({
    completions,
    currentPage,
    onPageChange,
    onViewSession
}) => {
    const columns = [
        {
            name: 'PARTICIPANT',
            selector: (row: Completion) => row.participant.name,
            sortable: false,
            width: '300px',
            cell: (row: Completion) => (
                <div className="flex flex-col gap-1 py-3">
                    <span className="bg-[#E8EFFF] text-[#246BFD] px-3 py-1 rounded-lg text-xs font-bold w-fit">
                        {row.participant.name}
                    </span>
                    <span className="text-[11px] text-on-surface-variant font-medium">
                        {row.participant.gender} • {row.participant.dob} • {row.participant.location}
                    </span>
                </div>
            )
        },
        {
            name: 'EXPERT',
            selector: (row: Completion) => row.expert,
            sortable: false,
            width: '200px',
            cell: (row: Completion) => (
                <span className="bg-[#F2F4FF] text-[#246BFD] px-3 py-1 rounded-lg text-xs font-bold">
                    {row.expert}
                </span>
            )
        },
        {
            name: 'START TIME',
            selector: (row: Completion) => row.startTime,
            sortable: true,
            cell: (row: Completion) => <span className="text-sm font-medium text-on-surface-variant">{row.startTime}</span>
        },
        {
            name: 'END TIME',
            selector: (row: Completion) => row.endTime,
            sortable: true,
            cell: (row: Completion) => <span className="text-sm font-medium text-on-surface-variant">{row.endTime}</span>
        },
        {
            name: 'STATUS',
            cell: (row: Completion) => (
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">{row.status}</span>
            )
        },
        {
            name: 'DURATION',
            selector: (row: Completion) => row.duration,
            sortable: true,
            cell: (row: Completion) => <span className="text-sm font-bold text-[#0A0E27]">{row.duration}</span>
        },
        {
            name: 'AMOUNT',
            selector: (row: Completion) => row.amount,
            sortable: true,
            cell: (row: Completion) => <span className="text-sm font-bold text-[#0A0E27]">₹{row.amount}</span>
        },
        {
            name: 'RATING',
            cell: (row: Completion) => (
                <div className="flex items-center gap-1">
                    {row.rating ? (
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <IconStar
                                    key={i}
                                    size={14}
                                    className={i < row.rating! ? 'text-[#FEAE2C] fill-[#FEAE2C]' : 'text-outline-variant'}
                                />
                            ))}
                        </div>
                    ) : (
                        <span className="text-xs italic text-on-surface-variant">No rating</span>
                    )}
                </div>
            )
        },
        {
            name: 'ACTION',
            right: true,
            width: '120px',
            cell: (row: Completion) => (
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onViewSession(row)}
                    className="h-8 px-6 rounded-lg bg-[#F2F4FF] text-[#246BFD] font-bold hover:bg-[#D0D5FF]"
                >
                    View
                </Button>
            )
        }
    ];

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
                <div className="space-y-1">
                    <h2 className="text-xl font-bold text-[#0A0E27]">RECENT COMPLETIONS</h2>
                    <p className="text-sm text-on-surface-variant font-medium">History of the last 5 sessions</p>
                </div>
            </div>

            <div className="bg-white rounded-md border border-outline-variant shadow-sm overflow-hidden">
                <CustomDataTable
                    columns={columns}
                    data={completions}
                    selectableRows={false}
                />
                <Pagination
                    currentPage={currentPage}
                    totalPages={1}
                    totalResults={completions.length}
                    rowsPerPage={5}
                    onPageChange={onPageChange}
                />
            </div>
        </div>
    );
};

export default RecentCompletionsSection;
