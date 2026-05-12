import React from 'react';
import { 
    IconArrowDownLeft, 
    IconArrowUpRight, 
    IconRotate, 
    IconShoppingBag,
    IconSearch,
    IconChevronDown
} from '@tabler/icons-react';
import CustomDataTable from '../../../Components/Common/DataTable';
import Badge from '../../../Components/Common/Badge';
import Button from '../../../Components/Common/Button';
import { cn } from '../../../Utils/cn';

interface Transaction {
    id: string;
    txnId: string;
    date: string;
    time: string;
    user: {
        name: string;
        initials: string;
        image?: string;
    };
    type: 'Deposit' | 'Session' | 'Refund' | 'Store Purchase';
    amount: string;
    isCredit: boolean;
    closingBalance: string;
    status: 'Success' | 'Processing' | 'Failed';
}

const userTransactions: Transaction[] = [
    {
        id: '1',
        txnId: '#TXN-88921',
        date: 'Oct 24',
        time: '14:30',
        user: { name: 'John Doe', initials: 'JD' },
        type: 'Deposit',
        amount: '+₹500.00',
        isCredit: true,
        closingBalance: '₹1,250.00',
        status: 'Success'
    },
    {
        id: '2',
        txnId: '#TXN-88920',
        date: 'Oct 24',
        time: '13:15',
        user: { name: 'Anita Sharma', initials: 'AS' },
        type: 'Session',
        amount: '-₹120.00',
        isCredit: false,
        closingBalance: '₹45.00',
        status: 'Success'
    },
    {
        id: '3',
        txnId: '#TXN-88919',
        date: 'Oct 24',
        time: '11:05',
        user: { name: 'Mohit Kumar', initials: 'MK' },
        type: 'Refund',
        amount: '+₹350.00',
        isCredit: true,
        closingBalance: '₹850.00',
        status: 'Processing'
    },
    {
        id: '4',
        txnId: '#TXN-88918',
        date: 'Oct 24',
        time: '09:45',
        user: { name: 'Rahul Jain', initials: 'RJ' },
        type: 'Store Purchase',
        amount: '-₹1,500.00',
        isCredit: false,
        closingBalance: '₹2,100.00',
        status: 'Success'
    }
];

const WalletTable = ({ activeTab }: { activeTab: number }) => {
    
    const columns = [
        {
            name: 'Txn ID',
            selector: (row: Transaction) => row.txnId,
            cell: (row: Transaction) => (
                <span className="text-[13px] font-bold text-primary">{row.txnId}</span>
            ),
        },
        {
            name: 'Date & Time',
            selector: (row: Transaction) => row.date,
            cell: (row: Transaction) => (
                <div className="flex flex-col">
                    <span className="text-[13px] font-medium text-on-surface">{row.date}, {row.time}</span>
                </div>
            ),
        },
        {
            name: 'User Details',
            selector: (row: Transaction) => row.user.name,
            cell: (row: Transaction) => (
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-[11px] font-bold text-outline">
                        {row.user.initials}
                    </div>
                    <span className="text-[13px] font-medium text-on-surface">{row.user.name}</span>
                </div>
            ),
        },
        {
            name: 'Type',
            selector: (row: Transaction) => row.type,
            cell: (row: Transaction) => {
                const config = {
                    'Deposit': { icon: IconArrowDownLeft, color: 'text-primary' },
                    'Session': { icon: IconArrowUpRight, color: 'text-error' },
                    'Refund': { icon: IconRotate, color: 'text-warning' },
                    'Store Purchase': { icon: IconShoppingBag, color: 'text-error' }
                };
                const { icon: Icon, color } = config[row.type];
                return (
                    <div className={cn("flex items-center gap-1.5", color)}>
                        <Icon size={16} />
                        <span className="text-[13px] font-bold">{row.type}</span>
                    </div>
                );
            },
        },
        {
            name: 'Amount (₹)',
            selector: (row: Transaction) => row.amount,
            right: true,
            cell: (row: Transaction) => (
                <span className={cn(
                    "text-[14px] font-black",
                    row.isCredit ? "text-success" : "text-error"
                )}>
                    {row.amount}
                </span>
            ),
        },
        {
            name: 'Closing Balance',
            selector: (row: Transaction) => row.closingBalance,
            right: true,
            cell: (row: Transaction) => (
                <span className="text-[13px] font-bold text-outline">{row.closingBalance}</span>
            ),
        },
        {
            name: 'Status',
            selector: (row: Transaction) => row.status,
            cell: (row: Transaction) => (
                <Badge variant={row.status === 'Success' ? 'info' : 'warning'}>
                    <div className="flex items-center gap-1.5">
                        <div className={cn(
                            "w-1.5 h-1.5 rounded-full",
                            row.status === 'Success' ? "bg-primary" : "bg-warning"
                        )} />
                        {row.status}
                    </div>
                </Badge>
            ),
        }
    ];

    return (
        <div className="bg-white rounded-[20px] border border-[#EDEDF2] shadow-sm overflow-hidden">
            {/* Filters Bar */}
            <div className="p-6 border-b border-[#EDEDF2] flex flex-wrap items-center gap-4">
                <div className="relative flex-1 min-w-[240px]">
                    <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={18} />
                    <input 
                        type="text" 
                        placeholder="Search Txn ID or User..."
                        className="w-full h-10 pl-10 pr-4 bg-surface-container-low border border-[#EDEDF2] rounded-xl text-[13px] focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                </div>
                <Button variant="outlined" className="h-10 px-4 text-[13px] font-bold rounded-xl border-[#EDEDF2] gap-2">
                    All Types <IconChevronDown size={16} />
                </Button>
                <Button variant="outlined" className="h-10 px-4 text-[13px] font-bold rounded-xl border-[#EDEDF2] gap-2">
                    Last 7 Days <IconChevronDown size={16} />
                </Button>
            </div>

            <CustomDataTable
                columns={columns}
                data={userTransactions}
                selectableRows={false}
            />

            <div className="p-6 border-t border-[#EDEDF2] flex items-center justify-between">
                <span className="text-[12px] font-bold text-outline uppercase">
                    Showing 1 to 10 of 1,245 entries
                </span>
                <div className="flex items-center gap-2">
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#EDEDF2] text-outline hover:bg-gray-50">
                        {'<'}
                    </button>
                    <div className="flex items-center gap-1">
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white text-[13px] font-bold">1</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 text-outline text-[13px] font-bold">2</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 text-outline text-[13px] font-bold">3</button>
                    </div>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#EDEDF2] text-outline hover:bg-gray-50">
                        {'>'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WalletTable;
