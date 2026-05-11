import React from 'react';
import { IconHistory } from '@tabler/icons-react';

interface Session {
    id: string;
    dateTime: string;
    user: string;
    duration: string;
    rating: string;
}

interface SessionHistoryTableProps {
    sessions: Session[];
}

export default function SessionHistoryTable({ sessions }: SessionHistoryTableProps) {
    return (
        <div className="bg-white rounded-[2rem] border border-outline-variant shadow-sm overflow-hidden flex flex-col">
            <div className="p-8 border-b border-outline-variant flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#F2F4FF] rounded-xl flex items-center justify-center text-[#246BFD]">
                        <IconHistory size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-[#0A0E27]">Session History</h2>
                </div>
                <button className="text-sm font-bold text-[#246BFD] hover:underline">View All Logs</button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#F8F9FC] border-b border-outline-variant">
                            <th className="px-8 py-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Date & Time</th>
                            <th className="px-8 py-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">User</th>
                            <th className="px-8 py-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Duration</th>
                            <th className="px-8 py-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Rating</th>
                            <th className="px-8 py-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider text-right">Transcript</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant text-[#464651]">
                        {sessions.map((session) => (
                            <tr key={session.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-8 py-5 text-[15px] font-medium">{session.dateTime}</td>
                                <td className="px-8 py-5 text-[15px] font-medium">{session.user}</td>
                                <td className="px-8 py-5 text-[15px] font-medium">{session.duration}</td>
                                <td className="px-8 py-5">
                                    <div className="flex items-center gap-1.5 font-bold">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#FEAE2C]" />
                                        {session.rating}
                                    </div>
                                </td>
                                <td className="px-8 py-5 text-right">
                                    <button className="text-[#246BFD] font-bold text-[15px] hover:underline">View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
