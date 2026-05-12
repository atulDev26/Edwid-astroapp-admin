import React from 'react';
import { IconClock, IconMapPin } from '@tabler/icons-react';

const ScheduleVenueSection = () => {
    return (
        <div className="space-y-6">
            {/* Schedule & Tithi */}
            <div className="bg-white rounded-[24px] border border-[#EDEDF2] p-6 md:p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-3 border-b border-[#EDEDF2] pb-4">
                    <div className="w-10 h-10 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center">
                        <IconClock size={24} />
                    </div>
                    <h2 className="text-[20px] font-black text-[#0A0E27]">Schedule & Tithi</h2>
                </div>
                
                <div className="space-y-5">
                    <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Puja Date</label>
                        <input type="date" className="w-full h-12 px-4 rounded-xl border border-[#EDEDF2] bg-[#F8F9FC] focus:bg-white outline-none transition-all text-[15px] font-medium" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Tithi Name</label>
                        <input type="text" placeholder="e.g., Shani Amavasya" className="w-full h-12 px-4 rounded-xl border border-[#EDEDF2] bg-[#F8F9FC] focus:bg-white outline-none transition-all text-[15px] font-medium" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Muhurat (Time Window)</label>
                        <input type="text" placeholder="e.g., 4:30 AM - 6:15 PM" className="w-full h-12 px-4 rounded-xl border border-[#EDEDF2] bg-[#F8F9FC] focus:bg-white outline-none transition-all text-[15px] font-medium" />
                    </div>
                </div>
            </div>

            {/* Venue Details */}
            <div className="bg-white rounded-[24px] border border-[#EDEDF2] p-6 md:p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-3 border-b border-[#EDEDF2] pb-4">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                        <IconMapPin size={24} />
                    </div>
                    <h2 className="text-[20px] font-black text-[#0A0E27]">Venue Details</h2>
                </div>
                
                <div className="space-y-5">
                    <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Temple Name</label>
                        <input type="text" placeholder="Shri Navgraha Shani Temple" className="w-full h-12 px-4 rounded-xl border border-[#EDEDF2] bg-[#F8F9FC] focus:bg-white outline-none transition-all text-[15px] font-medium" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">City</label>
                            <input type="text" placeholder="Dabra" className="w-full h-12 px-4 rounded-xl border border-[#EDEDF2] bg-[#F8F9FC] focus:bg-white outline-none transition-all text-[15px] font-medium" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">State</label>
                            <input type="text" placeholder="Madhya Pradesh" className="w-full h-12 px-4 rounded-xl border border-[#EDEDF2] bg-[#F8F9FC] focus:bg-white outline-none transition-all text-[15px] font-medium" />
                        </div>
                    </div>
                    <div className="h-40 rounded-2xl bg-gray-100 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-2">
                        <div className="px-4 py-2 bg-white rounded-lg shadow-sm text-[12px] font-bold text-[#0A0E27]">Map Preview</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScheduleVenueSection;
