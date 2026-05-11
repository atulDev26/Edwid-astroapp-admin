import React from 'react';
import { IconStars, IconTrendingUp } from '@tabler/icons-react';

const EngagementInsights = () => {
    return (
        <div className="bg-white rounded-[32px] border border-outline-variant p-8 space-y-6 shadow-sm">
            <h3 className="text-[12px] font-bold text-[#7C7E9A] tracking-[0.05em] uppercase">ENGAGEMENT INSIGHTS</h3>

            <div className="space-y-4">
                {/* Top Astrologer */}
                <div className="p-5 bg-[#F8F9FE] rounded-[28px] border border-[#EEF0F7] flex items-center gap-4">
                    <div className="w-14 h-14 rounded-[20px] bg-white flex items-center justify-center text-[#00B67A] shadow-sm flex-shrink-0">
                        <IconStars size={26} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                            <p className="text-[10px] font-bold text-[#7C7E9A] uppercase tracking-[0.08em]">TOP ASTROLOGER</p>
                            <span className="text-[12px] font-black text-[#00B67A] whitespace-nowrap ml-2">82% Match</span>
                        </div>
                        <p className="text-[17px] font-black text-[#1A1C3D] leading-tight truncate">Acharya Vikram</p>
                    </div>
                </div>

                {/* Main Service */}
                <div className="p-5 bg-[#F8F9FE] rounded-[28px] border border-[#EEF0F7] flex items-center gap-4">
                    <div className="w-14 h-14 rounded-[20px] bg-white flex items-center justify-center text-[#1A1C3D] shadow-sm flex-shrink-0">
                        <IconTrendingUp size={26} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-bold text-[#7C7E9A] uppercase tracking-[0.08em] mb-1">MAIN SERVICE</p>
                        <p className="text-[17px] font-black text-[#1A1C3D] leading-tight truncate">Career & Finance Chat</p>
                    </div>
                </div>

                {/* Engagement Level */}
                <div className="space-y-4 pt-2">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-[#4B4E6D]">Engagement Level</span>
                        <span className="text-sm font-black text-[#00B67A]">HIGH</span>
                    </div>
                    <div className="h-2.5 w-full bg-[#E8EDF2] rounded-full overflow-hidden">
                        <div className="h-full bg-[#00B67A] w-[78%] rounded-full shadow-[0_0_12px_rgba(0,182,122,0.3)]" />
                    </div>
                </div>

                {/* Duration Badge */}
                <div className="flex justify-center pt-2">
                    <div className="bg-[#FFF4E6] text-[#FF9500] px-6 py-2.5 rounded-full text-[11px] font-black tracking-widest uppercase">
                        AVG DURATION: 22 MINS
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EngagementInsights;
