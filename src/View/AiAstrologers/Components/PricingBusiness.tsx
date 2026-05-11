import { IconBusinessplan } from '@tabler/icons-react';

interface PricingBusinessProps {
    chatRate: number;
    totalRevenue: string;
    revenue30d: string;
}

export default function PricingBusiness({ chatRate, totalRevenue, revenue30d }: PricingBusinessProps) {
    return (
        <div className="bg-white rounded-[2rem] border border-outline-variant shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-outline-variant flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F2F4FF] rounded-xl flex items-center justify-center text-[#246BFD]">
                    <IconBusinessplan size={24} />
                </div>
                <h2 className="text-xl font-bold text-[#0A0E27]">Pricing & Business</h2>
            </div>

            <div className="p-6 space-y-6">
                <div className="space-y-2">
                    <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Chat Rate (₹/min)</label>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-[#0A0E27]">₹</span>
                        <input
                            type="number"
                            min="0"
                            defaultValue={chatRate}
                            onKeyDown={(e) => {
                                if (e.key === '-' || e.key === 'e') {
                                    e.preventDefault();
                                }
                            }}
                            onWheel={(e) => (e.target as HTMLInputElement).blur()}
                            className="w-full bg-white border border-outline-variant rounded-xl pl-8 pr-4 py-3 font-bold text-[#0A0E27] focus:outline-none focus:border-[#246BFD] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-outline-variant">
                    <div className="space-y-1">
                        <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Total Revenue</p>
                        <p className="text-2xl font-black text-[#0A0E27]">₹{totalRevenue}</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Revenue (30D)</p>
                        <p className="text-2xl font-black text-[#0A0E27]">₹{revenue30d}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
