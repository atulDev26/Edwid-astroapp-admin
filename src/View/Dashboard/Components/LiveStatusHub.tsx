import React from 'react';
import { IconCircleFilled } from '@tabler/icons-react';
import Button from '../../../Components/Common/Button';

const LiveStatusHub: React.FC = () => (
    <div className="space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
                <IconCircleFilled size={12} className="text-red-500 animate-pulse" />
                <h3 className="text-[18px] sm:text-[20px] font-black text-[#0A0E27]">Live Status Hub</h3>
            </div>
            <div className="flex items-center gap-2 ml-auto flex-wrap">
                <span className="px-2.5 sm:px-3 py-1 bg-purple-50 text-purple-700 text-[10px] sm:text-[11px] font-black uppercase tracking-widest rounded-lg border border-purple-100 whitespace-nowrap">
                    Astrologers Live: 111
                </span>
                <span className="px-2.5 sm:px-3 py-1 bg-green-50 text-green-700 text-[10px] sm:text-[11px] font-black uppercase tracking-widest rounded-lg border border-green-100 whitespace-nowrap">
                    Active Sessions: 1
                </span>
            </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {/* Live Sessions - dark card */}
            <div className="bg-[#0A0E27] p-6 sm:p-8 rounded-[32px] text-white space-y-6 sm:space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
                <div className="space-y-1 sm:space-y-2">
                    <p className="text-[10px] sm:text-[11px] font-black text-white/50 uppercase tracking-widest">Current Live Sessions</p>
                    <h2 className="text-[52px] sm:text-[64px] font-black leading-none">1</h2>
                </div>
                <Button className="w-full bg-white/10 hover:bg-white/20 border-white/20 text-white rounded-2xl h-11 sm:h-12 font-black text-sm">
                    Monitor Stream
                </Button>
            </div>

            {/* Upcoming Sessions */}
            <div className="bg-white p-6 sm:p-8 rounded-[32px] border border-[#EDEDF2] shadow-sm space-y-6 sm:space-y-8">
                <div className="space-y-1 sm:space-y-2">
                    <p className="text-[10px] sm:text-[11px] font-black text-[#667085] uppercase tracking-widest">Upcoming Sessions</p>
                    <h2 className="text-[52px] sm:text-[64px] font-black text-[#0A0E27] leading-none">0</h2>
                </div>
                <Button variant="outlined" className="w-full border-[#EDEDF2] text-[#0A0E27] rounded-2xl h-11 sm:h-12 font-black text-sm">
                    View Schedule
                </Button>
            </div>

            {/* Completed Sessions */}
            <div className="bg-white p-6 sm:p-8 rounded-[32px] border border-[#EDEDF2] shadow-sm space-y-6 sm:space-y-8">
                <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                        <p className="text-[10px] sm:text-[11px] font-black text-[#667085] uppercase tracking-widest">Complete Session</p>
                        <span className="px-2 py-0.5 bg-green-50 text-green-600 text-[10px] font-black rounded-full whitespace-nowrap">Last: 0s ago</span>
                    </div>
                    <h2 className="text-[52px] sm:text-[64px] font-black text-[#0A0E27] leading-none">144</h2>
                </div>
                <Button variant="outlined" className="w-full border-[#EDEDF2] text-[#0A0E27] rounded-2xl h-11 sm:h-12 font-black text-sm">
                    View History
                </Button>
            </div>
        </div>
    </div>
);

export default LiveStatusHub;
