import {
    IconCalendar,
    IconChevronRight,
    IconMessage2,
    IconStopwatch,
    IconClockHour4,
    IconUserSearch,
    IconSearch,
    IconChevronDown,
    IconStarFilled,
} from '@tabler/icons-react';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import Button from '../../Components/Common/Button';
import CustomDataTable from '../../Components/Common/DataTable';
import Pagination from '../../Components/Common/Pagination';

interface ChatSession {
    id: string;
    slNo: string;
    user: {
        name: string;
        image: string;
    };
    mobile: string;
    astrologer: {
        name: string;
        image: string;
    };
    duration: string;
    dateTime: string;
    amount: string;
    rating: number | null;
    status: 'COMPLETED' | 'MISSED';
}

const mockData: ChatSession[] = [
    {
        id: '1',
        slNo: '01',
        user: { name: 'Rahul Verma', image: 'https://i.pravatar.cc/150?u=rahul' },
        mobile: '+91 98765 43210',
        astrologer: { name: 'Acharya Gupta', image: 'https://i.pravatar.cc/150?u=acharya' },
        duration: '15m 30s',
        dateTime: '24 Oct 2023 10:30 AM',
        amount: '₹ 450.00',
        rating: 5,
        status: 'COMPLETED'
    },
    {
        id: '2',
        slNo: '02',
        user: { name: 'Ananya S.', image: 'https://i.pravatar.cc/150?u=ananya' },
        mobile: '+91 88776 65544',
        astrologer: { name: 'Pandit Sharma', image: 'https://i.pravatar.cc/150?u=pandit' },
        duration: '00m 00s',
        dateTime: '24 Oct 2023 09:15 AM',
        amount: '₹ 0.00',
        rating: null,
        status: 'MISSED'
    },
    {
        id: '3',
        slNo: '03',
        user: { name: 'Vikram Singh', image: 'https://i.pravatar.cc/150?u=vikram' },
        mobile: '+91 77665 44332',
        astrologer: { name: 'Acharya Gupta', image: 'https://i.pravatar.cc/150?u=acharya2' },
        duration: '22m 10s',
        dateTime: '23 Oct 2023 08:45 PM',
        amount: '₹ 660.00',
        rating: 5,
        status: 'COMPLETED'
    }
];

const ChatHistory = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    const stats = [
        {
            label: 'TOTAL CHAT SESSION',
            value: '12,842',
            icon: <IconMessage2 size={24} className="text-white" />,
            iconBg: 'bg-[#0A0E27]'
        },
        {
            label: 'TOTAL CHAT DURATION',
            value: '458h 32m',
            icon: <IconStopwatch size={24} className="text-white" />,
            iconBg: 'bg-[#FFB800]'
        },
        {
            label: 'AVG SESSION DURATION',
            value: '14m 20s',
            icon: <IconClockHour4 size={24} className="text-white" />,
            iconBg: 'bg-[#FF8A00]'
        },
        {
            label: 'UNIQUE CHAT USER',
            value: '5,204',
            icon: <IconUserSearch size={24} className="text-white" />,
            iconBg: 'bg-[#7F56D9]'
        }
    ];

    const columns = [
        {
            name: 'SL NO',
            width: '60px',
            cell: (row: ChatSession) => <span className="font-bold text-[#0A0E27] text-[13px]">{row.slNo}</span>
        },
        {
            name: 'USER PROFILE',
            width: '150px',
            cell: (row: ChatSession) => {
                const nameParts = row.user.name.split(' ');
                return (
                    <div className="flex items-center gap-2.5">
                        <img src={row.user.image} alt={row.user.name} className="w-8 h-8 rounded-full object-cover shrink-0" />
                        <div className="flex flex-col">
                            <span className="font-bold text-[#0A0E27] text-[13px] leading-tight">{nameParts[0]}</span>
                            {nameParts.length > 1 && (
                                <span className="font-bold text-[#0A0E27] text-[13px] leading-tight">{nameParts.slice(1).join(' ')}</span>
                            )}
                        </div>
                    </div>
                );
            }
        },
        {
            name: 'MOBILE',
            width: '120px',
            cell: (row: ChatSession) => {
                const parts = row.mobile.split(' ');
                return (
                    <div className="flex flex-col">
                        <span className="text-[#464651] font-medium text-[13px] leading-tight">{parts[0]} {parts[1]}</span>
                        {parts[2] && <span className="text-[#464651] font-medium text-[13px] leading-tight">{parts[2]}</span>}
                    </div>
                );
            }
        },
        {
            name: 'ASTROLOGER',
            width: '150px',
            cell: (row: ChatSession) => {
                const nameParts = row.astrologer.name.split(' ');
                return (
                    <div className="flex items-center gap-2.5">
                        <img src={row.astrologer.image} alt={row.astrologer.name} className="w-8 h-8 rounded-full object-cover shrink-0" />
                        <div className="flex flex-col">
                            <span className="text-[#464651] font-medium text-[13px] leading-tight">{nameParts[0]}</span>
                            {nameParts.length > 1 && (
                                <span className="text-[#464651] font-medium text-[13px] leading-tight">{nameParts.slice(1).join(' ')}</span>
                            )}
                        </div>
                    </div>
                );
            }
        },
        {
            name: 'CHAT DURATION',
            width: '120px',
            cell: (row: ChatSession) => <span className="text-[#464651] font-medium text-[13px]">{row.duration}</span>
        },
        {
            name: 'DATE & TIME',
            width: '120px',
            cell: (row: ChatSession) => {
                const parts = row.dateTime.split(' ');
                return (
                    <div className="flex flex-col gap-0.5">
                        <span className="text-[#464651] font-medium text-[13px] leading-none">{parts[0]} {parts[1]}</span>
                        <span className="text-[#464651] font-medium text-[13px] leading-none">{parts[2]}</span>
                        <span className="text-[11px] text-[#464651]/70 font-medium leading-none mt-0.5">{parts[3]} {parts[4]}</span>
                    </div>
                );
            }
        },
        {
            name: 'AMOUNT',
            width: '100px',
            cell: (row: ChatSession) => <span className="font-bold text-[#0A0E27] text-[13px]">{row.amount}</span>
        },
        {
            name: 'RATING',
            width: '110px',
            cell: (row: ChatSession) => (
                <div className="flex items-center gap-0.5">
                    {row.rating ? (
                        [...Array(5)].map((_, i) => (
                            <IconStarFilled key={i} size={14} className={i < row.rating! ? 'text-[#FFB800]' : 'text-outline-variant'} />
                        ))
                    ) : (
                        <span className="text-[#464651]">—</span>
                    )}
                </div>
            )
        },
        {
            name: 'STATUS',
            width: '110px',
            cell: (row: ChatSession) => (
                <span className={`px-2.5 py-1 rounded-md text-[10px] font-black tracking-wider uppercase border ${row.status === 'COMPLETED'
                    ? 'bg-[#E7F9ED] text-[#12B76A] border-[#D1FADF]'
                    : 'bg-[#FFF1F0] text-[#F04438] border-[#FEE4E2]'
                    }`}>
                    {row.status}
                </span>
            )
        },
        {
            name: 'ACTION',
            right: true,
            width: '90px',
            cell: () => (
                <Button
                    variant="outlined"
                    size="sm"
                    className="border-[#0A0E27] text-[#0A0E27] hover:bg-[#0A0E27] hover:text-white font-bold px-4 py-1.5 rounded-lg text-xs whitespace-nowrap"
                >
                    View
                </Button>
            )
        }
    ];

    return (
        <div className="space-y-8">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
                <Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
                <IconChevronRight size={14} className="text-on-surface-variant/50" />
                <Link to="/reports" className="hover:text-primary transition-colors">Reports</Link>
                <IconChevronRight size={14} className="text-on-surface-variant/50" />
                <span className="text-[#0A0E27] font-bold">Chat History</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-black text-[#0A0E27] tracking-tight">Chat History</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-[24px] border border-outline-variant/30 shadow-sm flex items-center gap-5">
                        <div className={`w-14 h-14 ${stat.iconBg} rounded-2xl flex items-center justify-center shadow-lg shadow-black/5`}>
                            {stat.icon}
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{stat.label}</span>
                            <span className="text-2xl font-black text-[#0A0E27]">{stat.value}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Filters Section */}
            <div className="space-y-4">
                {/* Date Filter Bar */}
                <div className="bg-[#F8F9FC] p-4 rounded-[28px] border border-outline-variant/30 shadow-sm overflow-x-auto">
                    <div className="flex items-end gap-3">
                        {/* Date From */}
                        <div className="min-w-[150px] space-y-2">
                            <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">
                                Date From
                            </label>

                            <div className="relative">
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    placeholderText="dd-mm-yyyy"
                                    wrapperClassName="w-full"
                                    className="w-full h-11 px-4 pr-10 rounded-xl border border-outline-variant bg-white text-sm font-medium focus:outline-none focus:border-primary transition-all placeholder:text-[#98A2B3]"
                                />

                                <IconCalendar
                                    size={18}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#98A2B3] pointer-events-none"
                                />
                            </div>
                        </div>

                        {/* Date To */}
                        <div className="min-w-[150px] space-y-2">
                            <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">
                                Date To
                            </label>

                            <div className="relative">
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    placeholderText="dd-mm-yyyy"
                                    wrapperClassName="w-full"
                                    className="w-full h-11 px-4 pr-10 rounded-xl border border-outline-variant bg-white text-sm font-medium focus:outline-none focus:border-primary transition-all placeholder:text-[#98A2B3]"
                                />

                                <IconCalendar
                                    size={18}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#98A2B3] pointer-events-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Filters Bar */}
                <div className="bg-[#F8F9FC] p-4 rounded-[28px] border border-outline-variant/30 shadow-sm overflow-x-auto">
                    <div className="flex items-end gap-3">
                        {/* Search */}
                        <div className="min-w-[180px] space-y-2">
                            <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">
                                Search (Name / Mobile)
                            </label>

                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Ex: John Doe"
                                    className="w-full h-11 px-4 pr-10 rounded-xl border border-outline-variant bg-white text-sm font-medium focus:outline-none focus:border-primary transition-all placeholder:text-[#98A2B3]"
                                />

                                <IconSearch
                                    size={18}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#98A2B3] pointer-events-none"
                                />
                            </div>
                        </div>

                        {/* Status */}
                        <div className="min-w-[150px] space-y-2">
                            <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">
                                Status
                            </label>

                            <div className="relative">
                                <select className="w-full h-11 px-4 pr-10 rounded-xl border border-outline-variant bg-white text-sm font-medium appearance-none focus:outline-none focus:border-primary transition-all">
                                    <option>All Status</option>
                                </select>

                                <IconChevronDown
                                    size={18}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#98A2B3] pointer-events-none"
                                />
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="min-w-[150px] space-y-2">
                            <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">
                                Rating
                            </label>

                            <div className="relative">
                                <select className="w-full h-11 px-4 pr-10 rounded-xl border border-outline-variant bg-white text-sm font-medium appearance-none focus:outline-none focus:border-primary transition-all">
                                    <option>Any Rating</option>
                                </select>

                                <IconChevronDown
                                    size={18}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#98A2B3] pointer-events-none"
                                />
                            </div>
                        </div>

                        {/* Button */}
                        <div className="min-w-[170px]">
                            <Button
                                variant="primary"
                                className="w-full h-11 bg-[#FFB020] text-[#0A0E27] hover:bg-[#ffb020ea] font-bold rounded-xl shadow-sm border-none"
                            >
                                Reset
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-[28px] border border-outline-variant/30 shadow-sm overflow-hidden">
                <CustomDataTable
                    columns={columns}
                    data={mockData}
                    selectableRows={false}
                />
                <div className="p-6 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-sm text-on-surface-variant font-medium">
                        Showing 1 to 10 of 2,450 results
                    </span>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={245}
                        totalResults={2450}
                        rowsPerPage={10}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default ChatHistory;
