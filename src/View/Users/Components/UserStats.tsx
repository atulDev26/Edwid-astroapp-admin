import React from 'react';
import { IconTrendingUp, IconStars, IconBuildingBank } from '@tabler/icons-react';

interface UserStatsProps {
    stats: {
        sessions: string;
        sessionTrend: string;
        totalSpent: string;
        lifetimeDeposit: string;
        walletBalance: string;
    };
}

const UserStats: React.FC<UserStatsProps> = ({ stats }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-[24px] border border-outline-variant space-y-4 shadow-sm">
                <p className="text-[10px] font-black text-on-surface-variant tracking-widest uppercase">TOTAL SESSIONS</p>
                <div className="flex items-end justify-between">
                    <h2 className="text-3xl font-black text-on-surface">{stats.sessions}</h2>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-success pb-1">
                        <IconTrendingUp size={14} />
                        {stats.sessionTrend}
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-[24px] border border-outline-variant space-y-4 shadow-sm">
                <p className="text-[10px] font-black text-on-surface-variant tracking-widest uppercase">TOTAL SPENT</p>
                <div className="flex items-end justify-between">
                    <h2 className="text-3xl font-black text-on-surface">{stats.totalSpent}</h2>
                    <IconStars size={24} className="text-[#FFB800] opacity-60" />
                </div>
            </div>

            <div className="bg-white p-6 rounded-[24px] border border-outline-variant space-y-4 shadow-sm">
                <p className="text-[10px] font-black text-on-surface-variant tracking-widest uppercase">LIFETIME DEPOSIT</p>
                <div className="flex items-end justify-between">
                    <h2 className="text-3xl font-black text-on-surface">{stats.lifetimeDeposit}</h2>
                    <IconBuildingBank size={24} className="text-on-surface-variant/40" />
                </div>
            </div>

            <div className="bg-[#1A1C3D] p-6 rounded-[24px] border border-transparent space-y-4 relative overflow-hidden group shadow-lg shadow-[#1A1C3D]/20">
                <p className="text-[10px] font-black text-white/60 tracking-widest uppercase relative z-10">WALLET BALANCE</p>
                <div className="flex items-end justify-between relative z-10">
                    <h2 className="text-3xl font-black text-white">{stats.walletBalance}</h2>
                    <button className="bg-white/10 text-white text-[10px] font-black tracking-widest px-3 py-1.5 rounded-lg hover:bg-white/20 transition-all uppercase">
                        MANAGE
                    </button>
                </div>
                {/* Background decoration */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
            </div>
        </div>
    );
};

export default UserStats;
