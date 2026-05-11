import { IconBan, IconChecks, IconTrendingUp } from '@tabler/icons-react';
import { cn } from '../../../Utils/cn';

export interface WithdrawalRecord {
    amount: string;
    date: string;
    status: 'Pending' | 'Approved' | 'Rejected';
}

interface RecentWithdrawalsProps {
    data: WithdrawalRecord[];
}

export default function RecentWithdrawals({ data }: RecentWithdrawalsProps) {
    return (
        <div className="bg-white rounded-4xl border border-outline-variant shadow-sm p-8 space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <IconTrendingUp size={24} className="text-[#0A0E27] rotate-45" />
                    <h2 className="text-xl font-bold text-[#0A0E27]">Recent Withdrawals</h2>
                </div>
                <button className="text-sm font-bold text-on-surface-variant hover:text-primary">View History</button>
            </div>

            <div className="space-y-4">
                {data.map((withdrawal, i) => (
                    <div key={i} className="bg-[#F8F9FC] p-4 rounded-2xl border border-outline-variant flex items-center justify-between">
                        <div className="space-y-1">
                            <p className="text-lg font-black text-[#0A0E27]">₹ {withdrawal.amount}</p>
                            <p className="text-xs text-on-surface-variant font-medium">Requested on {withdrawal.date}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className={cn(
                                "px-3 py-1 rounded-full text-xs font-bold",
                                withdrawal.status === 'Pending' ? "bg-[#FFF8E6] text-[#FEAE2C]" :
                                    withdrawal.status === 'Approved' ? "bg-[#E6FFF0] text-[#00A344]" :
                                        "bg-[#FFE5E5] text-[#BA1A1A]"
                            )}>
                                {withdrawal.status}
                            </span>
                            <div className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center cursor-pointer",
                                withdrawal.status === 'Pending' ? "bg-red-50 text-[#BA1A1A]" :
                                    withdrawal.status === 'Approved' ? "bg-green-50 text-[#00A344]" :
                                        "bg-gray-100 text-gray-500"
                            )}>
                                {withdrawal.status === 'Pending' ? <IconBan size={18} /> :
                                    withdrawal.status === 'Approved' ? <IconChecks size={18} /> :
                                        <IconBan size={18} />}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
