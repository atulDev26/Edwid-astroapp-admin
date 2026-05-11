import { IconArrowsExchange, IconChevronDown, IconEye, IconFlag, IconMessage2, IconPhone } from '@tabler/icons-react';
import React from 'react';
import Button from '../../../Components/Common/Button';
import CustomDataTable from '../../../Components/Common/DataTable';
import { type Session } from '../../../api/types';

interface OngoingSessionsSectionProps {
    sessions: Session[];
}

const OngoingSessionsSection: React.FC<OngoingSessionsSectionProps> = ({ sessions }) => {
    const columns = [
        {
            name: 'TYPE',
            width: '80px',
            cell: (row: Session) => (
                <div className="text-on-surface-variant">
                    {row.type === 'chat' ? <IconMessage2 size={20} /> : <IconPhone size={20} />}
                </div>
            )
        },
        {
            name: 'ASTROLOGER',
            selector: (row: Session) => row.astrologer.name,
            sortable: true,
            width: '240px',
            cell: (row: Session) => (
                <div className="flex items-center gap-3">
                    <img src={row.astrologer.image} alt="" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
                    <span className="bg-[#F2F4FF] text-[#246BFD] px-3 py-1 rounded-lg text-xs font-bold">
                        {row.astrologer.name}
                    </span>
                </div>
            )
        },
        {
            name: 'USER',
            selector: (row: Session) => row.user.name,
            sortable: true,
            width: '280px',
            cell: (row: Session) => (
                <div className="flex flex-col gap-1 py-3">
                    <span className="bg-[#E8EFFF] text-[#246BFD] px-3 py-1 rounded-lg text-xs font-bold w-fit">
                        {row.user.name}
                    </span>
                    <span className="text-[11px] text-on-surface-variant font-medium">
                        {row.user.gender} • {row.user.dob} • {row.user.location}
                    </span>
                </div>
            )
        },
        {
            name: 'START/DURATION',
            cell: (row: Session) => (
                <div className="flex flex-col gap-0.5">
                    <span className="text-xs text-on-surface-variant font-medium">{row.startTime}</span>
                    <span className="text-sm font-bold text-[#0A0E27]">{row.duration}</span>
                </div>
            )
        },
        {
            name: 'STATUS/SIGNAL',
            cell: (row: Session) => (
                <div className="flex items-center gap-1.5 bg-[#E7F9ED] text-[#12B76A] px-3 py-1 rounded-full text-[11px] font-bold">
                    <div className="w-2 h-2 rounded-full bg-[#12B76A]" />
                    {row.status}
                </div>
            )
        },
        {
            name: 'VALUE',
            selector: (row: Session) => row.value,
            sortable: true,
            cell: (row: Session) => (
                <span className="text-sm font-bold text-[#0A0E27]">₹{row.value}</span>
            )
        },
        {
            name: 'ACTION',
            right: true,
            width: '220px',
            cell: () => (
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="h-8 px-4 rounded-lg bg-[#F2F4FF] text-[#246BFD] font-bold hover:bg-[#D0D5FF]">View</Button>
                    <IconEye size={18} className="text-[#C7C5D3] cursor-pointer hover:text-[#246BFD]" />
                    <IconArrowsExchange size={18} className="text-[#C7C5D3] cursor-pointer hover:text-[#246BFD]" />
                    <IconFlag size={18} className="text-[#C7C5D3] cursor-pointer hover:text-error" />
                </div>
            )
        }
    ];

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
                <div className="space-y-1">
                    <h2 className="text-xl font-bold text-[#0A0E27]">Ongoing Sessions</h2>
                    <p className="text-sm text-on-surface-variant font-medium">Real-time active interactions</p>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                        <div className="w-2 h-2 rounded-full bg-[#12B76A] animate-pulse" />
                        LIVE MONITOR RUNNING ({sessions.length} SESSIONS)
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1.5 bg-white border border-outline-variant rounded-lg text-sm font-medium cursor-pointer hover:bg-gray-50">
                        All <IconChevronDown size={16} />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-md border border-outline-variant shadow-sm overflow-hidden">
                <CustomDataTable
                    columns={columns}
                    data={sessions}
                    selectableRows={false}
                />
                <div className="px-8 py-4 flex items-center justify-between border-t border-outline-variant">
                    <span className="text-sm font-bold text-[#0A0E27]">Page 1 of 1</span>
                    <div className="flex gap-2">
                        <Button variant="outlined" className="bg-[#FEE4E2] border-none text-[#F04438] opacity-50 cursor-not-allowed">Prev</Button>
                        <Button variant="primary" className="bg-[#FF981F] border-none hover:bg-[#E68A1C]">Next</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OngoingSessionsSection;
