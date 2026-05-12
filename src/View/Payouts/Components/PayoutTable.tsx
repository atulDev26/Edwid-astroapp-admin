import React from 'react';
import { 
    IconCheck, 
    IconX, 
    IconEye, 
    IconCircleCheck, 
    IconAlertTriangle 
} from '@tabler/icons-react';
import CustomDataTable from '../../../Components/Common/DataTable';
import Badge from '../../../Components/Common/Badge';
import Button from '../../../Components/Common/Button';

interface PayoutRequest {
    id: string;
    astrologer: {
        name: string;
        id: string;
        image: string;
    };
    requestedAmount: string;
    walletBalance: string;
    requestedDate: string;
    requestedTime: string;
    compliance: 'Verified' | 'Review';
}

const mockData: PayoutRequest[] = [
    {
        id: '1',
        astrologer: {
            name: 'Dr. Celestia Vora',
            id: '#ASTRO-9921',
            image: 'https://i.pravatar.cc/150?u=celestia'
        },
        requestedAmount: '$8,450.00',
        walletBalance: '$12,902.50',
        requestedDate: 'Oct 24, 2024',
        requestedTime: '14:20',
        compliance: 'Verified'
    },
    {
        id: '2',
        astrologer: {
            name: 'Swami Arpan',
            id: '#ASTRO-1024',
            image: 'https://i.pravatar.cc/150?u=arpan'
        },
        requestedAmount: '$12,000.00',
        walletBalance: '$12,000.00',
        requestedDate: 'Oct 24, 2024',
        requestedTime: '12:45',
        compliance: 'Review'
    },
    {
        id: '3',
        astrologer: {
            name: 'Astro Maya',
            id: '#ASTRO-8871',
            image: 'https://i.pravatar.cc/150?u=maya'
        },
        requestedAmount: '$450.00',
        walletBalance: '$1,250.00',
        requestedDate: 'Oct 23, 2024',
        requestedTime: '09:12',
        compliance: 'Verified'
    }
];

const PayoutTable = () => {
    const columns = [
        {
            name: 'ASTROLOGER',
            selector: (row: PayoutRequest) => row.astrologer.name,
            cell: (row: PayoutRequest) => (
                <div className="flex items-center gap-3 py-2">
                    <img src={row.astrologer.image} alt="" className="w-10 h-10 rounded-full object-cover" />
                    <div className="flex flex-col">
                        <span className="text-[14px] font-bold text-[#0A0E27]">{row.astrologer.name}</span>
                        <span className="text-[11px] font-medium text-[#667085]">{row.astrologer.id}</span>
                    </div>
                </div>
            ),
            width: '250px'
        },
        {
            name: 'REQUESTED AMOUNT',
            selector: (row: PayoutRequest) => row.requestedAmount,
            cell: (row: PayoutRequest) => (
                <span className="text-[14px] font-bold text-[#0A0E27]">{row.requestedAmount}</span>
            ),
        },
        {
            name: 'WALLET BALANCE',
            selector: (row: PayoutRequest) => row.walletBalance,
            cell: (row: PayoutRequest) => (
                <span className="text-[14px] font-bold text-[#667085]">{row.walletBalance}</span>
            ),
        },
        {
            name: 'REQUESTED DATE',
            selector: (row: PayoutRequest) => row.requestedDate,
            cell: (row: PayoutRequest) => (
                <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-[#0A0E27]">{row.requestedDate}</span>
                    <span className="text-[11px] font-medium text-[#667085]">{row.requestedTime}</span>
                </div>
            ),
        },
        {
            name: 'COMPLIANCE',
            selector: (row: PayoutRequest) => row.compliance,
            cell: (row: PayoutRequest) => (
                <Badge 
                    variant={row.compliance === 'Verified' ? 'success' : 'warning'}
                    icon={row.compliance === 'Verified' ? <IconCircleCheck size={14} /> : <IconAlertTriangle size={14} />}
                >
                    {row.compliance}
                </Badge>
            ),
        },
        {
            name: 'ACTIONS',
            right: true,
            cell: () => (
                <div className="flex items-center gap-2">
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#E7F9ED] text-[#12B76A] hover:opacity-80 transition-all">
                        <IconCheck size={18} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#FFF1F0] text-[#F04438] hover:opacity-80 transition-all">
                        <IconX size={18} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#FFF8E7] text-[#FFB800] hover:opacity-80 transition-all">
                        <IconEye size={18} />
                    </button>
                </div>
            ),
        }
    ];

    return (
        <div className="bg-white rounded-[28px] border border-[#EDEDF2] shadow-sm overflow-hidden">
            <div className="p-6 border-b border-[#EDEDF2] flex items-center justify-between">
                <div className="flex flex-col">
                    <h2 className="text-[18px] font-black text-[#0A0E27]">Pending Payout Requests</h2>
                    <p className="text-[13px] font-medium text-[#667085]">Verification required for withdrawals exceeding $5,000.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outlined" className="h-10 px-4 text-[13px] font-bold rounded-xl border-[#EDEDF2] text-[#0A0E27]">
                        Filters
                    </Button>
                    <Button variant="primary" className="h-10 px-4 text-[13px] font-bold rounded-xl bg-[#0A0E27] text-white">
                        Batch Approve
                    </Button>
                </div>
            </div>
            
            <CustomDataTable 
                columns={columns}
                data={mockData}
                selectableRows={false}
            />
            
            <div className="p-6 border-t border-[#EDEDF2] flex items-center justify-between">
                <span className="text-[12px] font-bold text-[#667085] uppercase tracking-wider">
                    SHOWING 3 OF 12 PENDING REQUESTS
                </span>
                <div className="flex items-center gap-2">
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#EDEDF2] text-[#667085] hover:bg-gray-50">
                        {'<'}
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#EDEDF2] text-[#667085] hover:bg-gray-50">
                        {'>'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PayoutTable;
