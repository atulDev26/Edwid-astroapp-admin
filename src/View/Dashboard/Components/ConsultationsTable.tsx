import React from 'react';
import { IconMessageChatbot, IconPhone, IconVideo, IconChevronRight } from '@tabler/icons-react';
import Button from '../../../Components/Common/Button';
import { cn } from '../../../Utils/cn';

const CONSULTATIONS = [
    { user: 'Rahul Sharma', phone: '+91 98765-XXXXX', astro: 'Acharya Vaman', type: 'Chat', icon: IconMessageChatbot, segment: 'Human', time: '10:45 AM', status: 'Completed', color: 'bg-green-50 text-green-600' },
    { user: 'Vikram K.', phone: '+91 88234-XXXXX', astro: 'Shakti AI', type: 'Chat', icon: IconMessageChatbot, segment: 'AI AI', time: '09:55 AM', status: 'Completed', color: 'bg-green-50 text-green-600' },
    { user: 'Ananya D.', phone: '+91 77234-XXXXX', astro: 'Pandit Ji', type: 'Audio Call', icon: IconPhone, segment: 'Human', time: '09:30 AM', status: 'Missed', color: 'bg-orange-50 text-orange-600' },
    { user: 'Mohit K.', phone: '+91 99123-XXXXX', astro: 'Shakti AI', type: 'Chat', icon: IconMessageChatbot, segment: 'AI AI', time: '08:45 AM', status: 'Active', color: 'bg-blue-50 text-blue-600' },
    { user: 'Suman L.', phone: '+91 63211-XXXXX', astro: 'Guru Dev', type: 'Video', icon: IconVideo, segment: 'Human', time: '08:15 AM', status: 'Completed', color: 'bg-green-50 text-green-600' },
];

const ConsultationsTable: React.FC = () => (
    <div className="bg-white rounded-[32px] border border-[#EDEDF2] shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-[#F2F4F7] flex items-center justify-between">
            <h3 className="text-[18px] sm:text-[20px] font-black text-[#0A0E27]">Last 5 Consultations [todo need to Change in Data Table]</h3>
            <Button variant="ghost" className="text-[#1A1F4D] font-black flex items-center gap-1 group text-sm">
                View All <IconChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
        </div>

        {/* Desktop table */}
        <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-[#F8F9FC]">
                        {['User', 'Astrologer', 'Type', 'Segment', 'Start Time', 'Status'].map((h, i) => (
                            <th
                                key={i}
                                className={cn(
                                    'px-6 py-4 text-[11px] font-black text-[#667085] uppercase tracking-widest',
                                    i === 5 && 'text-right'
                                )}
                            >
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#F2F4F7]">
                    {CONSULTATIONS.map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-[#1A1F4D]/5 text-[#1A1F4D] flex items-center justify-center font-bold text-[13px] shrink-0">
                                        {row.user.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <p className="text-[14px] font-black text-[#0A0E27]">{row.user}</p>
                                        <p className="text-[11px] font-medium text-[#667085]">{row.phone}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-[13px] font-black text-[#0A0E27]">{row.astro}</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-1.5 text-[13px] font-medium text-[#0A0E27]">
                                    <row.icon size={16} className="text-[#667085]" /> {row.type}
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className={cn(
                                    'px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest',
                                    row.segment.includes('AI') ? 'bg-orange-50 text-orange-700 border border-orange-100' : 'bg-gray-50 text-gray-700 border border-gray-100'
                                )}>
                                    {row.segment}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-[13px] font-medium text-[#667085]">{row.time}</td>
                            <td className="px-6 py-4 text-right">
                                <span className={cn('px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest', row.color)}>
                                    {row.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/* Mobile card list */}
        <div className="sm:hidden divide-y divide-[#F2F4F7]">
            {CONSULTATIONS.map((row, i) => (
                <div key={i} className="p-4 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1A1F4D]/5 text-[#1A1F4D] flex items-center justify-center font-bold text-[13px] shrink-0">
                        {row.user.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0 space-y-1">
                        <div className="flex items-center justify-between gap-2">
                            <p className="text-[14px] font-black text-[#0A0E27] truncate">{row.user}</p>
                            <span className={cn('px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest shrink-0', row.color)}>
                                {row.status}
                            </span>
                        </div>
                        <p className="text-[12px] text-[#667085]">{row.astro} · {row.type} · {row.time}</p>
                        <span className={cn(
                            'inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest',
                            row.segment.includes('AI') ? 'bg-orange-50 text-orange-700' : 'bg-gray-50 text-gray-600'
                        )}>
                            {row.segment}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default ConsultationsTable;
