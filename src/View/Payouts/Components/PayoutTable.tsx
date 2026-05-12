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
import CustomModel from '../../../Components/Common/CustomModel';
import { toast } from 'sonner';
import { cn } from '../../../Utils/cn';

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
    const [actionModal, setActionModal] = React.useState<{
        isOpen: boolean;
        type: 'approve' | 'reject' | null;
        request: PayoutRequest | null;
    }>({
        isOpen: false,
        type: null,
        request: null
    });

    const [detailModal, setDetailModal] = React.useState<{
        isOpen: boolean;
        request: PayoutRequest | null;
    }>({
        isOpen: false,
        request: null
    });

    const triggerAction = (request: PayoutRequest, type: 'approve' | 'reject') => {
        setActionModal({
            isOpen: true,
            type,
            request
        });
    };

    const executeAction = () => {
        const { type, request } = actionModal;

        toast.success(`Payout ${type === 'approve' ? 'approved' : 'rejected'} for ${request?.astrologer.name}`);

        // Close modal
        setActionModal({ isOpen: false, type: null, request: null });
    };

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
            cell: (row: PayoutRequest) => (
                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        icon={IconCheck}
                        onClick={() => triggerAction(row, 'approve')}
                        className="w-8 h-8 rounded-lg bg-[#E7F9ED] text-[#12B76A] hover:bg-[#E7F9ED]/80 border-none shadow-none"
                        title="Approve Payout"
                    />
                    <Button
                        variant="ghost"
                        size="icon"
                        icon={IconX}
                        onClick={() => triggerAction(row, 'reject')}
                        className="w-8 h-8 rounded-lg bg-[#FFF1F0] text-[#F04438] hover:bg-[#FFF1F0]/80 border-none shadow-none"
                        title="Reject Payout"
                    />
                    <Button
                        variant="ghost"
                        size="icon"
                        icon={IconEye}
                        onClick={() => setDetailModal({ isOpen: true, request: row })}
                        className="w-8 h-8 rounded-lg bg-[#FFF8E7] text-[#FFB800] hover:bg-[#FFF8E7]/80 border-none shadow-none"
                        title="View Details"
                    />
                </div>
            ),
        }
    ];

    return (
        <div className="bg-white rounded-[28px] border border-[#EDEDF2] shadow-sm overflow-hidden">
            <div className="p-6 border-b border-[#EDEDF2] flex flex-col sm:flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col">
                    <h2 className="text-[18px] font-black text-[#0A0E27]">Pending Payout Requests</h2>
                    <p className="text-[13px] font-medium text-[#667085]">Verification required for withdrawals exceeding $5,000.</p>
                </div>
                <div className="flex sm:flex-col md:flex-row items-center gap-3">
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

            <div className="p-4 sm:p-6 border-t border-[#EDEDF2] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] sm:text-[12px] font-bold text-[#667085] uppercase tracking-wider text-center sm:text-left">
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

            {/* Confirmation Modal */}
            <CustomModel
                isOpen={actionModal.isOpen}
                onClose={() => setActionModal({ ...actionModal, isOpen: false })}
                title={actionModal.type === 'approve' ? 'Approve Payout' : 'Reject Payout'}
                primaryButton={actionModal.type === 'approve' ? 'Confirm Approval' : 'Confirm Rejection'}
                secondaryButton="Cancel"
                onPrimaryClick={executeAction}
            >
                <div className="space-y-4">
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                        Are you sure you want to <span className={cn("font-bold", actionModal.type === 'approve' ? "text-[#12B76A]" : "text-[#F04438]")}>{actionModal.type}</span> the payout request for
                        <span className="font-bold text-on-surface"> {actionModal.request?.astrologer.name}</span>?
                    </p>
                    <div className="bg-surface-container-low p-4 rounded-xl space-y-2">
                        <div className="flex justify-between text-xs">
                            <span className="text-outline">Requested Amount:</span>
                            <span className="font-bold text-on-surface">{actionModal.request?.requestedAmount}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                            <span className="text-outline">Wallet Balance:</span>
                            <span className="font-bold text-on-surface">{actionModal.request?.walletBalance}</span>
                        </div>
                    </div>
                </div>
            </CustomModel>

            {/* View Details Drawer */}
            <CustomModel
                isOpen={detailModal.isOpen}
                onClose={() => setDetailModal({ ...detailModal, isOpen: false })}
                title="Payout Request Details"
                drawer={true}
                primaryButton="Approve Now"
                secondaryButton="Close"
                onPrimaryClick={() => {
                    if (detailModal.request) {
                        setDetailModal({ ...detailModal, isOpen: false });
                        triggerAction(detailModal.request, 'approve');
                    }
                }}
            >
                <div className="space-y-8">
                    {/* Astrologer Summary */}
                    <div className="flex items-center gap-4 bg-surface-container-low p-6 rounded-2xl">
                        <img
                            src={detailModal.request?.astrologer.image}
                            alt=""
                            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                        <div className="flex flex-col">
                            <h3 className="text-xl font-black text-on-surface">{detailModal.request?.astrologer.name}</h3>
                            <span className="text-sm font-medium text-outline">{detailModal.request?.astrologer.id}</span>
                            <Badge
                                variant={detailModal.request?.compliance === 'Verified' ? 'success' : 'warning'}
                                className="mt-2 w-fit"
                            >
                                {detailModal.request?.compliance} Status
                            </Badge>
                        </div>
                    </div>

                    {/* Financial Overview */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold text-outline uppercase tracking-widest">Financial Overview</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 border border-outline-variant rounded-xl">
                                <span className="text-xs text-outline block mb-1">Requested Amount</span>
                                <span className="text-lg font-black text-on-surface">{detailModal.request?.requestedAmount}</span>
                            </div>
                            <div className="p-4 border border-outline-variant rounded-xl">
                                <span className="text-xs text-outline block mb-1">Remaining Balance</span>
                                <span className="text-lg font-black text-on-surface">{detailModal.request?.walletBalance}</span>
                            </div>
                        </div>
                    </div>

                    {/* Request Details */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold text-outline uppercase tracking-widest">Submission Details</h4>
                        <div className="space-y-3 bg-surface-container-lowest border border-outline-variant p-5 rounded-2xl">
                            <div className="flex justify-between items-center pb-3 border-b border-outline-variant/30">
                                <span className="text-sm text-outline">Submission Date</span>
                                <span className="text-sm font-bold text-on-surface">{detailModal.request?.requestedDate}</span>
                            </div>
                            <div className="flex justify-between items-center pb-3 border-b border-outline-variant/30">
                                <span className="text-sm text-outline">Submission Time</span>
                                <span className="text-sm font-bold text-on-surface">{detailModal.request?.requestedTime}</span>
                            </div>
                            <div className="flex justify-between items-center pb-3 border-b border-outline-variant/30">
                                <span className="text-sm text-outline">Transaction ID</span>
                                <span className="text-sm font-mono text-primary font-bold">TXN-{detailModal.request?.id}8892</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-outline">Payout Method</span>
                                <span className="text-sm font-bold text-on-surface">Bank Transfer (Verified)</span>
                            </div>
                        </div>
                    </div>

                    {/* System Notes */}
                    <div className="p-4 bg-error-container/10 border border-error/20 rounded-xl flex gap-3">
                        <IconAlertTriangle size={20} className="text-error shrink-0" />
                        <p className="text-xs text-on-error-container leading-relaxed">
                            Withdrawals exceeding $5,000 require manual compliance audit before final approval.
                            Ensure the astrologer's bank identity matches the KYC records.
                        </p>
                    </div>
                </div>
            </CustomModel>
        </div>
    );
};

export default PayoutTable;
