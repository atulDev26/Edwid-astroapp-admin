import React, { useState } from 'react';
import CustomDataTable from '../../Components/Common/DataTable';
import Pagination from '../../Components/Common/Pagination';
import Button from '../../Components/Common/Button';
import { 
    IconDownload, 
    IconBan, 
    IconPlus, 
    IconChevronDown, 
    IconCalendar, 
    IconWallet, 
    IconFilter 
} from '@tabler/icons-react';
import { cn } from '../../Utils/cn';

const Users = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const data = [
        {
            id: 'USR-9021',
            name: 'Sarah Jenkins',
            email: 'sarah.j@example.com',
            phone: '+1 (555) 234-5678',
            registered: 'Oct 12, 2023',
            walletBalance: 4500.00,
            totalSpend: 12250.00,
            status: 'Active',
            lastActive: '2 hours ago',
            avatar: 'https://i.pravatar.cc/150?u=sarah'
        },
        {
            id: 'USR-8834',
            name: 'Michael Rodriguez',
            email: 'm.rodriguez@company.net',
            phone: '+1 (555) 987-6543',
            registered: 'Sep 04, 2023',
            walletBalance: 150.00,
            totalSpend: 8900.00,
            status: 'Blocked',
            lastActive: '4 days ago',
            avatar: ''
        },
        {
            id: 'USR-7721',
            name: 'David Chen',
            email: 'david.chen@gmail.com',
            phone: '+44 7700 900077',
            registered: 'Nov 22, 2023',
            walletBalance: 8200.00,
            totalSpend: 45000.00,
            status: 'Active',
            lastActive: 'Just now',
            avatar: 'https://i.pravatar.cc/150?u=david'
        },
        {
            id: 'USR-9942',
            name: 'Priya Patel',
            email: 'p.patel@startup.in',
            phone: '+91 98765 43210',
            registered: 'Jan 05, 2024',
            walletBalance: 0.00,
            totalSpend: 1200.00,
            status: 'Active',
            lastActive: '1 week ago',
            avatar: 'https://i.pravatar.cc/150?u=priya'
        }
    ];

    const columns = [
        {
            name: 'User',
            selector: (row: any) => row.name,
            cell: (row: any) => (
                <div className="flex items-center gap-3 py-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border border-outline-variant">
                        {row.avatar ? (
                            <img src={row.avatar} alt={row.name} className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-sm font-bold text-primary">
                                {row.name.split(' ').map((n: string) => n[0]).join('')}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold text-on-surface">{row.name}</span>
                        <span className="text-xs text-on-surface-variant font-medium">ID: #{row.id}</span>
                    </div>
                </div>
            ),
            grow: 2,
        },
        {
            name: 'Contact',
            selector: (row: any) => row.phone,
            cell: (row: any) => (
                <div className="flex flex-col">
                    <span className="font-semibold text-on-surface text-sm">{row.phone}</span>
                    <span className="text-xs text-on-surface-variant font-medium">{row.email}</span>
                </div>
            ),
            grow: 2,
        },
        {
            name: 'Registered',
            selector: (row: any) => row.registered,
            sortable: true,
        },
        {
            name: 'Wallet Balance',
            selector: (row: any) => row.walletBalance,
            cell: (row: any) => (
                <span className="font-semibold text-on-surface text-sm">
                    ₹ {row.walletBalance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                </span>
            ),
            sortable: true,
        },
        {
            name: 'Total Spend',
            selector: (row: any) => row.totalSpend,
            cell: (row: any) => (
                <div className="flex flex-col w-full">
                    <span className="text-xs text-on-surface-variant font-medium text-right pr-4">
                        ₹ {row.totalSpend.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </span>
                </div>
            ),
            sortable: true,
            right: true,
        },
        {
            name: 'Status',
            selector: (row: any) => row.status,
            cell: (row: any) => (
                <div className={cn(
                    "px-3 py-1 rounded-full flex items-center gap-1.5",
                    row.status === 'Active' ? "bg-primary/5 text-primary" : "bg-error/5 text-error"
                )}>
                    <div className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        row.status === 'Active' ? "bg-primary" : "bg-error"
                    )} />
                    <span className="text-xs font-bold">{row.status}</span>
                </div>
            ),
        },
        {
            name: 'Last Active',
            selector: (row: any) => row.lastActive,
            cell: (row: any) => (
                <span className="text-sm text-on-surface-variant">{row.lastActive}</span>
            ),
        },
    ];

    return (
        <div className="space-y-6">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                    <h1 className="typography-h1 text-on-surface">User Management</h1>
                    <p className="text-on-surface-variant typography-body-md">
                        Manage platform users, view balances, and control access.
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <Button variant="outlined" size="md" icon={IconDownload}>
                        Export CSV
                    </Button>
                    <Button variant="outlined" size="md" icon={IconBan} className="text-on-surface-variant">
                        Bulk Action
                    </Button>
                    <Button variant="primary" size="md" icon={IconPlus}>
                        New User
                    </Button>
                </div>
            </div>

            {/* Filters Section */}
            <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-outline-variant bg-white text-sm font-medium cursor-pointer hover:border-primary transition-all">
                    <span>Status: All</span>
                    <IconChevronDown size={16} className="text-on-surface-variant" />
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-outline-variant bg-white text-sm font-medium cursor-pointer hover:border-primary transition-all">
                    <IconCalendar size={16} className="text-on-surface-variant" />
                    <span>Date Range</span>
                    <IconChevronDown size={16} className="text-on-surface-variant" />
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-outline-variant bg-white text-sm font-medium cursor-pointer hover:border-primary transition-all">
                    <IconWallet size={16} className="text-on-surface-variant" />
                    <span>Balance: Any</span>
                    <IconChevronDown size={16} className="text-on-surface-variant" />
                </div>
                <div className="flex items-center gap-2 text-primary font-bold text-sm cursor-pointer hover:opacity-80 transition-all ml-2">
                    <IconFilter size={18} />
                    <span>More Filters</span>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-2xl border border-outline-variant shadow-sm overflow-hidden">
                <CustomDataTable
                    columns={columns}
                    data={data}
                    noDataComponent={
                        <div className="p-12 text-center space-y-4">
                            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center text-primary mx-auto">
                                <span className="text-2xl font-bold">U</span>
                            </div>
                            <h3 className="typography-h3 text-on-surface">No Users Found</h3>
                            <p className="text-on-surface-variant typography-body-md">
                                Start by adding new users
                            </p>
                        </div>
                    }
                />
                <Pagination
                    currentPage={currentPage}
                    totalPages={12}
                    totalResults={128}
                    rowsPerPage={rowsPerPage}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
        </div>
    );
};

export default Users;
