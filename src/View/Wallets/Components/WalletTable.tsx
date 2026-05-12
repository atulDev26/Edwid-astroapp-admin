import {
    IconArrowDownLeft,
    IconArrowUpRight,
    IconRotate,
    IconShoppingBag
} from '@tabler/icons-react';
import React from 'react';
import Badge from '../../../Components/Common/Badge';
import CustomDataTable from '../../../Components/Common/DataTable';
import MultiSelectFilter from '../../../Components/Common/MultiSelectFilter';
import SearchInput from '../../../Components/Common/SearchInput';
import DateRangeFilter from '../../../Components/Common/DateRangeFilter';
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
        id: '5',
        txnId: '#TXN-88917',
        date: 'Oct 24',
        time: '08:00',
        user: { name: 'Priya Singh', initials: 'PS' },
        type: 'Deposit',
        amount: '+₹1,000.00',
        isCredit: true,
        closingBalance: '₹1,500.00',
        status: 'Success'
    },
    {
        id: '6',
        txnId: '#TXN-88916',
        date: 'Oct 23',
        time: '16:30',
        user: { name: 'Amit Verma', initials: 'AV' },
        type: 'Session',
        amount: '-₹200.00',
        isCredit: false,
        closingBalance: '₹300.00',
        status: 'Success'
    },
    {
        id: '7',
        txnId: '#TXN-88915',
        date: 'Oct 23',
        time: '14:15',
        user: { name: 'Sneha Gupta', initials: 'SG' },
        type: 'Deposit',
        amount: '+₹750.00',
        isCredit: true,
        closingBalance: '₹1,100.00',
        status: 'Success'
    },
    {
        id: '8',
        txnId: '#TXN-88914',
        date: 'Oct 22',
        time: '18:00',
        user: { name: 'Rohan Mehra', initials: 'RM' },
        type: 'Store Purchase',
        amount: '-₹450.00',
        isCredit: false,
        closingBalance: '₹250.00',
        status: 'Success'
    },
    {
        id: '9',
        txnId: '#TXN-88913',
        date: 'Oct 22',
        time: '12:00',
        user: { name: 'Kavya Joshi', initials: 'KJ' },
        type: 'Session',
        amount: '-₹300.00',
        isCredit: false,
        closingBalance: '₹50.00',
        status: 'Processing'
    },
    {
        id: '10',
        txnId: '#TXN-88912',
        date: 'Oct 21',
        time: '10:00',
        user: { name: 'Vikram Raj', initials: 'VR' },
        type: 'Deposit',
        amount: '+₹2,000.00',
        isCredit: true,
        closingBalance: '₹2,300.00',
        status: 'Success'
    }
];

const astrologerEarnings: Transaction[] = [
    {
        id: '101',
        txnId: '#TXN-AST-991',
        date: 'Oct 23',
        time: '12:00',
        user: { name: 'Astro Deepa', initials: 'AD' },
        type: 'Session',
        amount: '+₹4,200.00',
        isCredit: true,
        closingBalance: '₹12,500.00',
        status: 'Success'
    }
];

const refundRequests: Transaction[] = [
    {
        id: '201',
        txnId: '#TXN-REF-441',
        date: 'Oct 22',
        time: '10:30',
        user: { name: 'Rahul Jain', initials: 'RJ' },
        type: 'Refund',
        amount: '+₹350.00',
        isCredit: true,
        closingBalance: '₹850.00',
        status: 'Processing'
    }
];

const WalletTable = ({ activeTab }: { activeTab: number }) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [typeFilter, setTypeFilter] = React.useState<string[]>([]);
    const [startDate, setStartDate] = React.useState<Date | null>(null);
    const [endDate, setEndDate] = React.useState<Date | null>(null);

    const filteredTransactions = React.useMemo(() => {
        const baseData = activeTab === 0
            ? userTransactions
            : activeTab === 1
                ? astrologerEarnings
                : refundRequests;

        return baseData.filter(txn => {
            const matchesSearch = txn.txnId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                txn.user.name.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesType = typeFilter.length === 0 || typeFilter.includes(txn.type);

            // Date filtering logic (Mocked since data is string-based, but ready for real dates)
            let matchesDate = true;
            if (startDate && endDate) {
                // In a real app, you'd do: new Date(txn.timestamp) >= startDate && ...
                matchesDate = true; 
            }

            return matchesSearch && matchesType && matchesDate;
        });
    }, [searchQuery, typeFilter, startDate, endDate, activeTab]);

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
                <div className="flex-1 min-w-[240px]">
                    <SearchInput
                        placeholder="Search Txn ID or User..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <MultiSelectFilter
                    label="Type"
                    options={['Deposit', 'Session', 'Refund', 'Store Purchase']}
                    selectedValues={typeFilter}
                    onChange={setTypeFilter}
                />

                <DateRangeFilter 
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(dates) => {
                        const [start, end] = dates;
                        setStartDate(start);
                        setEndDate(end);
                    }}
                />
            </div>

            <CustomDataTable
                columns={columns}
                data={filteredTransactions}
                selectableRows={false}
            />

            <div className="p-6 border-t border-[#EDEDF2] flex items-center justify-between">
                <span className="text-[12px] font-bold text-outline uppercase">
                    Showing {filteredTransactions.length} entries
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
