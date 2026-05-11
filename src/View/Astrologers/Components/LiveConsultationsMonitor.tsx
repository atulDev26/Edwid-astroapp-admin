import React from 'react';
import { IconTrendingUp, IconStar } from '@tabler/icons-react';
import { cn } from '../../../Utils/cn';

export interface ConsultationSession {
    user: string;
    plan: string;
    type: string;
    icon: any;
    color: string;
    bg: string;
    start: string;
    duration: string;
    rating: number;
    earning: string;
}

export interface LiveConsultationsData {
    activeSessions: number;
    avgDuration: string;
    sessions: ConsultationSession[];
}

interface LiveConsultationsMonitorProps {
    data: LiveConsultationsData;
}

export default function LiveConsultationsMonitor({ data }: LiveConsultationsMonitorProps) {
    return (
        <div className="bg-white rounded-[2rem] border border-outline-variant shadow-sm p-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                    <h2 className="text-2xl font-bold text-[#0A0E27]">Live Consultations Monitor</h2>
                    <p className="text-on-surface-variant font-medium">Real-time session monitoring and historical log</p>
                </div>
                <div className="flex gap-3">
                    <div className="bg-[#EBEBFF] px-6 py-3 rounded-2xl text-center">
                        <p className="text-[11px] font-bold text-[#5456A6] uppercase tracking-wider">ACTIVE SESSIONS</p>
                        <p className="text-xl font-black text-[#0A0E27]">{data.activeSessions} Today</p>
                    </div>
                    <div className="bg-[#E6FFF0] px-6 py-3 rounded-2xl text-center">
                        <p className="text-[11px] font-bold text-[#00A344] uppercase tracking-wider">AVG DURATION</p>
                        <p className="text-xl font-black text-[#0A0E27]">{data.avgDuration}</p>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left border-b border-outline-variant">
                            <th className="pb-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">USER</th>
                            <th className="pb-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">CONSULTATION TYPE</th>
                            <th className="pb-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">START TIME</th>
                            <th className="pb-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">DURATION</th>
                            <th className="pb-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">RATING</th>
                            <th className="pb-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">EARNING</th>
                            <th className="pb-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">ACTION</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant">
                        {data.sessions.map((row, i) => (
                            <tr key={i} className="group">
                                <td className="py-4">
                                    <div className="flex items-center gap-3">
                                        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm", i === 0 ? "bg-[#E6FFF0] text-[#00A344]" : "bg-[#FFF0D0] text-[#FEAE2C]")}>
                                            {row.user.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <p className="font-bold text-on-surface">{row.user}</p>
                                            <p className="text-[11px] text-on-surface-variant font-medium">{row.plan}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4">
                                    <div className={cn("inline-flex items-center gap-2 px-3 py-1.5 rounded-lg", row.bg)}>
                                        <row.icon size={16} className={row.color} />
                                        <span className={cn("text-xs font-bold", row.color)}>{row.type}</span>
                                    </div>
                                </td>
                                <td className="py-4 text-sm font-medium text-on-surface">{row.start}</td>
                                <td className="py-4 text-sm font-bold text-on-surface">{row.duration}</td>
                                <td className="py-4">
                                    <div className="flex items-center gap-0.5 text-[#FEAE2C]">
                                        {[...Array(5)].map((_, idx) => (
                                            <IconStar key={idx} size={16} fill={idx < row.rating ? "currentColor" : "none"} strokeWidth={idx < row.rating ? 0 : 2} className={idx < row.rating ? "" : "text-outline-variant"} />
                                        ))}
                                    </div>
                                </td>
                                <td className="py-4 text-sm font-black text-on-surface">{row.earning}</td>
                                <td className="py-4">
                                    <button className="text-[#0A0E27] font-bold text-sm hover:underline">Monitor</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button className="flex items-center gap-2 text-[#0A0E27] font-bold text-sm hover:gap-3 transition-all">
                View All Consultations
                <IconTrendingUp size={18} className="rotate-45" />
            </button>
        </div>
    );
}
