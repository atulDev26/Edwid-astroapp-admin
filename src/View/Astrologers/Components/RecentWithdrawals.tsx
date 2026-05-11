import React from 'react';
import { IconTrendingUp, IconBan, IconChecks } from '@tabler/icons-react';

export default function RecentWithdrawals() {
    return (
        <div className="bg-white rounded-[2rem] border border-outline-variant shadow-sm p-8 space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <IconTrendingUp size={24} className="text-[#0A0E27] rotate-45" />
                    <h2 className="text-xl font-bold text-[#0A0E27]">Recent Withdrawals</h2>
                </div>
                <button className="text-sm font-bold text-on-surface-variant hover:text-primary">View History</button>
            </div>

            <div className="space-y-4">
                <div className="bg-[#F8F9FC] p-4 rounded-2xl border border-outline-variant flex items-center justify-between">
                    <div className="space-y-1">
                        <p className="text-lg font-black text-[#0A0E27]">₹ 15,000.00</p>
                        <p className="text-xs text-on-surface-variant font-medium">Requested on 12 Mar, 2024</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="bg-[#FFF8E6] text-[#FEAE2C] px-3 py-1 rounded-full text-xs font-bold">Pending</span>
                        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-[#BA1A1A] cursor-pointer">
                            <IconBan size={18} />
                        </div>
                    </div>
                </div>

                <div className="bg-[#F8F9FC] p-4 rounded-2xl border border-outline-variant flex items-center justify-between">
                    <div className="space-y-1">
                        <p className="text-lg font-black text-[#0A0E27]">₹ 8,250.00</p>
                        <p className="text-xs text-on-surface-variant font-medium">Requested on 05 Mar, 2024</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="bg-[#E6FFF0] text-[#00A344] px-3 py-1 rounded-full text-xs font-bold">Approved</span>
                        <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-[#00A344]">
                            <IconChecks size={18} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
