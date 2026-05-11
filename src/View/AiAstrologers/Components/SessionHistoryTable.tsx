import { IconClock, IconHistory, IconMessage2, IconStar, IconUser } from '@tabler/icons-react';
import { useState } from 'react';
import Button from '../../../Components/Common/Button';
import CustomModel from '../../../Components/Common/CustomModel';

export interface Session {
    id: string;
    dateTime: string;
    user: string;
    duration: string;
    rating: string;
    transcript?: { role: 'bot' | 'user'; message: string }[];
}

interface SessionHistoryTableProps {
    sessions: Session[];
}

export default function SessionHistoryTable({ sessions }: SessionHistoryTableProps) {
    const [selectedSession, setSelectedSession] = useState<Session | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleViewSession = (session: Session) => {
        setSelectedSession(session);
        setIsModalOpen(true);
    };

    return (
        <>
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
                                        <Button
                                            variant="ghost"
                                            onClick={() => handleViewSession(session)}
                                            className="text-[#246BFD] font-bold text-[15px] hover:underline hover:bg-transparent p-0 h-auto"
                                        >
                                            View
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <CustomModel
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Session Transcript"
                size="xl"
            >
                {selectedSession && (
                    <div className="space-y-6">
                        {/* Session Metadata */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#F8F9FC] rounded-2xl border border-outline-variant">
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider flex items-center gap-1">
                                    <IconUser size={12} /> User
                                </p>
                                <p className="text-sm font-bold text-[#0A0E27]">{selectedSession.user}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider flex items-center gap-1">
                                    <IconHistory size={12} /> Date
                                </p>
                                <p className="text-sm font-bold text-[#0A0E27]">{selectedSession.dateTime.split(',')[0]}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider flex items-center gap-1">
                                    <IconClock size={12} /> Duration
                                </p>
                                <p className="text-sm font-bold text-[#0A0E27]">{selectedSession.duration}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider flex items-center gap-1">
                                    <IconStar size={12} /> Rating
                                </p>
                                <p className="text-sm font-bold text-[#0A0E27]">{selectedSession.rating}</p>
                            </div>
                        </div>

                        {/* Chat Transcript */}
                        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                            {selectedSession.transcript ? (
                                selectedSession.transcript.map((chat, idx) => (
                                    <div key={idx} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-[80%] p-4 rounded-2xl text-sm font-medium ${chat.role === 'user'
                                                ? 'bg-[#246BFD] text-white rounded-tr-none'
                                                : 'bg-[#F2F4FF] text-[#0A0E27] rounded-tl-none border border-[#D0D5FF]'
                                            }`}>
                                            {chat.message}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-12 space-y-4">
                                    <div className="w-16 h-16 bg-[#F8F9FC] rounded-full flex items-center justify-center mx-auto text-outline-variant">
                                        <IconMessage2 size={32} />
                                    </div>
                                    <p className="text-on-surface-variant font-medium italic">No transcript available for this session.</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </CustomModel>
        </>
    );
}
