import React from 'react';
import { IconStar } from '@tabler/icons-react';
import Button from '../../../Components/Common/Button';

export default function FinancialVaultCard() {
    return (
        <div className="bg-[#0A0E27] rounded-[2rem] p-8 text-white relative overflow-hidden">
            <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                    <IconStar size={28} className="text-[#FEAE2C]" fill="currentColor" />
                    <h2 className="text-2xl font-black">Financial Vault</h2>
                </div>
                <span className="bg-white/10 px-4 py-1.5 rounded-full text-[13px] font-medium text-white/90">Updated: Just now</span>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
                <div className="md:col-span-4 space-y-4 border-r border-white/10 pr-8">
                    <div className="space-y-4">
                        <p className="text-white/60 text-[11px] font-bold uppercase tracking-[0.1em]">AVAILABLE BALANCE</p>
                        <div className="space-y-1">
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-black text-white">₹</span>
                                <span className="text-5xl font-black text-white">42,850.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4">
                        <Button className="bg-[#FEAE2C] text-[#0A0E27] font-black text-[15px] py-4 px-10 rounded-xl hover:bg-[#ffb947] transition-all border-none h-auto">
                            Withdraw Now
                        </Button>
                    </div>
                </div>

                <div className="md:col-span-8 grid grid-cols-2 gap-x-12 gap-y-10 pl-4">
                    <div className="space-y-3">
                        <p className="text-white/60 text-[11px] font-bold uppercase tracking-[0.1em]">MONTHLY REV.</p>
                        <p className="text-3xl font-black text-white">₹ 1.2L</p>
                    </div>
                    <div className="space-y-3">
                        <p className="text-white/60 text-[11px] font-bold uppercase tracking-[0.1em]">LIFETIME EARNINGS</p>
                        <p className="text-3xl font-black text-white">₹ 14.8L</p>
                    </div>
                    <div className="space-y-3">
                        <p className="text-white/60 text-[11px] font-bold uppercase tracking-[0.1em]">TOTAL WITHDRAWALS</p>
                        <p className="text-3xl font-black text-white">₹ 12.4L</p>
                    </div>
                    <div className="space-y-3">
                        <p className="text-white/60 text-[11px] font-bold uppercase tracking-[0.1em]">PENDING PAYOUTS</p>
                        <p className="text-3xl font-black text-white">₹ 18.2K</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
