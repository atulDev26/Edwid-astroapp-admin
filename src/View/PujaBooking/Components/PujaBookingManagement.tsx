import React, { useState } from 'react';
import {
    IconFilter,
    IconDownload,
    IconCheck,
    IconX,
    IconDotsVertical,
} from '@tabler/icons-react';
import Button from '../../../Components/Common/Button';
import Badge from '../../../Components/Common/Badge';
import CustomDataTable from '../../../Components/Common/DataTable';
import { cn } from '../../../Utils/cn';
import { toast } from 'sonner';

// ─── Types ────────────────────────────────────────────────────────────────────

type BookingStatus = 'Pending' | 'Accepted' | 'Rejected';

interface Booking {
    id: string;
    userName: string;
    serviceName: string;
    dateTime: string;
    amount: string;
    status: BookingStatus;
}

interface HeatmapItem {
    name: string;
    percentage: number;
    color: string;
}

// ─── Mock Data ─────────────────────────────────────────────────────────────────

const initialBookings: Booking[] = [
    { id: '#PUJ-29384', userName: 'Rajesh Kumar Sharma',  serviceName: 'Satyanarayan Katha',      dateTime: 'Oct 24, 2023 10:30 AM', amount: '₹ 5,100',  status: 'Pending'  },
    { id: '#PUJ-29385', userName: 'Anjali Deshpande',     serviceName: 'Ganesh Chaturthi Puja',   dateTime: 'Oct 25, 2023 08:00 AM', amount: '₹ 11,000', status: 'Accepted' },
    { id: '#PUJ-29386', userName: 'Vikram Singh',         serviceName: 'Navagraha Shanti',        dateTime: 'Oct 25, 2023 02:15 PM', amount: '₹ 2,500',  status: 'Pending'  },
    { id: '#PUJ-29387', userName: 'Sneha Patil',          serviceName: 'Maha Mrityunjaya Jaap',   dateTime: 'Oct 26, 2023 06:30 AM', amount: '₹ 21,000', status: 'Rejected' },
    { id: '#PUJ-29388', userName: 'Mohit Verma',          serviceName: 'Saraswati Puja',          dateTime: 'Oct 27, 2023 09:00 AM', amount: '₹ 3,500',  status: 'Pending'  },
];

const heatmapData: HeatmapItem[] = [
    { name: 'Satyanarayan Katha', percentage: 64, color: 'bg-[#1A1F4D]'  },
    { name: 'Maha Mrityunjaya',   percentage: 18, color: 'bg-orange-400' },
    { name: 'Navagraha Shanti',   percentage: 12, color: 'bg-gray-400'   },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

const StatusBadge = ({ status }: { status: BookingStatus }) => {
    const styles: Record<BookingStatus, string> = {
        Accepted: 'bg-blue-50 text-blue-600',
        Rejected: 'bg-red-50 text-red-600',
        Pending:  'bg-orange-50 text-orange-600',
    };
    const dotStyles: Record<BookingStatus, string> = {
        Accepted: 'bg-blue-600',
        Rejected: 'bg-red-600',
        Pending:  'bg-orange-600',
    };
    const variant: Record<BookingStatus, 'success' | 'error' | 'warning'> = {
        Accepted: 'success',
        Rejected: 'error',
        Pending:  'warning',
    };

    return (
        <Badge variant={variant[status]} className={cn('border-none px-3', styles[status])}>
            <div className="flex items-center gap-1.5">
                <div className={cn('w-1.5 h-1.5 rounded-full', dotStyles[status])} />
                {status}
            </div>
        </Badge>
    );
};

const DateTimeCell = ({ dateTime }: { dateTime: string }) => {
    const parts = dateTime.split(' ');
    const date = parts.slice(0, 3).join(' ');
    const time = parts.slice(3).join(' ');
    return (
        <div className="flex flex-col">
            <span className="text-[13px] font-bold text-[#0A0E27]">{date}</span>
            <span className="text-[11px] font-medium text-[#667085]">{time}</span>
        </div>
    );
};

const ActionButtons = ({
    booking,
    onAccept,
    onReject,
}: {
    booking: Booking;
    onAccept: () => void;
    onReject: () => void;
}) => {
    if (booking.status !== 'Pending') {
        return (
            <button className="p-2 hover:bg-gray-100 rounded-lg text-[#667085]">
                <IconDotsVertical size={18} />
            </button>
        );
    }

    return (
        <div className="flex items-center gap-2">
            <button
                type="button"
                onClick={onAccept}
                title="Accept booking"
                className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center hover:bg-orange-200"
            >
                <IconCheck size={18} />
            </button>
            <button
                type="button"
                onClick={onReject}
                title="Reject booking"
                className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center hover:bg-red-700"
            >
                <IconX size={18} />
            </button>
        </div>
    );
};

// ─── Main Component ────────────────────────────────────────────────────────────

const PujaBookingManagement = () => {
    const [bookings, setBookings] = useState<Booking[]>(initialBookings);

    const handleStatusUpdate = (id: string, newStatus: 'Accepted' | 'Rejected') => {
        setBookings(prev =>
            prev.map(b => (b.id === id ? { ...b, status: newStatus } : b))
        );

        // Log the status change for debugging / audit trail
        console.log('[BookingManagement] Status Updated:', {
            bookingId:  id,
            newStatus,
            timestamp:  new Date().toISOString(),
            allBookings: bookings,
        });

        toast.success(`Booking ${id} ${newStatus.toLowerCase()} successfully`);
    };

    // Table column definitions
    const columns = [
        {
            name: 'BOOKING ID',
            selector: (row: Booking) => row.id,
            cell: (row: Booking) => (
                <span className="font-bold text-[#1A1F4D]">{row.id}</span>
            ),
        },
        {
            name: 'USER NAME',
            selector: (row: Booking) => row.userName,
            cell: (row: Booking) => (
                <span className="font-bold text-[#0A0E27]">{row.userName}</span>
            ),
        },
        {
            name: 'SERVICE NAME',
            selector: (row: Booking) => row.serviceName,
            cell: (row: Booking) => (
                <span className="text-[#667085]">{row.serviceName}</span>
            ),
        },
        {
            name: 'DATE & TIME',
            selector: (row: Booking) => row.dateTime,
            cell: (row: Booking) => <DateTimeCell dateTime={row.dateTime} />,
        },
        {
            name: 'AMOUNT (INR)',
            selector: (row: Booking) => row.amount,
            cell: (row: Booking) => (
                <span className="font-black text-[#0A0E27]">{row.amount}</span>
            ),
        },
        {
            name: 'STATUS',
            selector: (row: Booking) => row.status,
            cell: (row: Booking) => <StatusBadge status={row.status as BookingStatus} />,
        },
        {
            name: 'ACTIONS',
            right: true,
            cell: (row: Booking) => (
                <ActionButtons
                    booking={row}
                    onAccept={() => handleStatusUpdate(row.id, 'Accepted')}
                    onReject={() => handleStatusUpdate(row.id, 'Rejected')}
                />
            ),
        },
    ];

    return (
        <div className="space-y-8">
            {/* ── Bookings Table ── */}
            <div className="bg-white rounded-[20px] border border-[#EDEDF2] shadow-sm overflow-hidden">
                {/* Table Header */}
                <div className="p-6 border-b border-[#EDEDF2] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <h2 className="text-[18px] font-black text-[#1A1F4D]">Incoming Bookings</h2>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <Button
                            variant="ghost"
                            className="h-10 px-4 flex items-center gap-2 text-[#667085] font-bold border border-[#EDEDF2] bg-white rounded-xl flex-1 sm:flex-none"
                        >
                            <IconFilter size={18} /> Filter
                        </Button>
                        <Button
                            variant="primary"
                            className="h-10 px-4 flex items-center gap-2 bg-[#0A0E27] text-white font-bold rounded-xl flex-1 sm:flex-none"
                        >
                            <IconDownload size={18} /> Export Report
                        </Button>
                    </div>
                </div>

                <CustomDataTable columns={columns} data={bookings} />
            </div>

            {/* ── Heatmap ── */}
            <div className="bg-white rounded-[24px] border border-[#EDEDF2] shadow-sm p-8 space-y-6">
                <h3 className="text-[18px] font-black text-[#1A1F4D]">Popular Services Heatmap</h3>

                <div className="space-y-5">
                    {heatmapData.map((item, i) => (
                        <div key={i} className="space-y-2">
                            <div className="flex justify-between items-center text-[14px] font-bold">
                                <span className="text-[#0A0E27]">{item.name}</span>
                                <span className="text-[#1A1F4D]">{item.percentage}%</span>
                            </div>
                            <div className="h-2.5 w-full bg-[#F8F9FC] rounded-full overflow-hidden">
                                <div
                                    className={cn('h-full rounded-full transition-all duration-1000', item.color)}
                                    style={{ width: `${item.percentage}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PujaBookingManagement;
