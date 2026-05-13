import React from 'react';
import { IconShoppingBag, IconCalendar } from '@tabler/icons-react';
import Button from '../../../Components/Common/Button';

const QuickActions: React.FC = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white p-5 sm:p-6 rounded-[24px] border border-[#EDEDF2] flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <IconShoppingBag size={22} />
                </div>
                <div className="min-w-0">
                    <p className="text-[10px] sm:text-[11px] font-black text-[#667085] uppercase tracking-widest">Store Orders</p>
                    <h4 className="text-[17px] sm:text-[20px] font-black text-[#0A0E27] truncate">
                        42 New <span className="text-[#667085] text-[13px] sm:text-[14px] font-medium">/ Today</span>
                    </h4>
                </div>
            </div>
            <Button variant="outlined" size="sm" className="rounded-xl border-[#EDEDF2] font-black shrink-0 ml-3">View All</Button>
        </div>

        <div className="bg-white p-5 sm:p-6 rounded-[24px] border border-[#EDEDF2] flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                    <IconCalendar size={22} />
                </div>
                <div className="min-w-0">
                    <p className="text-[10px] sm:text-[11px] font-black text-[#667085] uppercase tracking-widest">Remedies Booking</p>
                    <h4 className="text-[17px] sm:text-[20px] font-black text-[#0A0E27] truncate">
                        18 Upcoming <span className="text-[#667085] text-[13px] sm:text-[14px] font-medium">/ Today</span>
                    </h4>
                </div>
            </div>
            <Button variant="outlined" size="sm" className="rounded-xl border-orange-200 text-orange-600 font-black shrink-0 ml-3">Schedule</Button>
        </div>
    </div>
);

export default QuickActions;
