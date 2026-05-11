import React from 'react';
import { IconUser, IconStar, IconHistory } from '@tabler/icons-react';
import CustomModel from '../../../Components/Common/CustomModel';
import { type Completion } from '../../../api/types';

interface SessionDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    session: Completion | null;
}

const SessionDetailsModal: React.FC<SessionDetailsModalProps> = ({ isOpen, onClose, session }) => {
    return (
        <CustomModel
            isOpen={isOpen}
            onClose={onClose}
            title="Session Details"
            size="lg"
        >
            {session && (
                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-[#F8F9FC] rounded-xl border border-outline-variant space-y-3">
                            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider flex items-center gap-2">
                                <IconUser size={14} /> Participant Details
                            </p>
                            <div className="space-y-1">
                                <p className="text-sm font-bold text-[#0A0E27]">{session.participant.name}</p>
                                <p className="text-xs text-on-surface-variant">
                                    {session.participant.gender} • {session.participant.dob}
                                </p>
                                <p className="text-xs text-on-surface-variant">{session.participant.location}</p>
                            </div>
                        </div>
                        <div className="p-4 bg-[#F8F9FC] rounded-xl border border-outline-variant space-y-3">
                            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider flex items-center gap-2">
                                <IconStar size={14} /> Expert Details
                            </p>
                            <div className="space-y-1">
                                <p className="text-sm font-bold text-[#0A0E27]">{session.expert}</p>
                                <p className="text-xs text-on-surface-variant italic">Astrology Expert</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 bg-white rounded-xl border border-outline-variant text-center space-y-1">
                            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Duration</p>
                            <p className="text-lg font-black text-[#0A0E27]">{session.duration}</p>
                        </div>
                        <div className="p-4 bg-white rounded-xl border border-outline-variant text-center space-y-1">
                            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Amount</p>
                            <p className="text-lg font-black text-[#0A0E27]">₹{session.amount}</p>
                        </div>
                        <div className="p-4 bg-white rounded-xl border border-outline-variant text-center space-y-1">
                            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Status</p>
                            <p className="text-sm font-bold text-[#12B76A]">{session.status}</p>
                        </div>
                    </div>

                    <div className="p-4 bg-[#F2F4FF] rounded-xl border border-[#D0D5FF] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#246BFD] shadow-sm">
                                <IconHistory size={20} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-[#246BFD] uppercase tracking-wider">Session Timing</p>
                                <p className="text-sm font-bold text-[#0A0E27]">{session.startTime} - {session.endTime}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] font-bold text-[#246BFD] uppercase tracking-wider">Rating Given</p>
                            <div className="flex items-center gap-0.5 mt-0.5">
                                {session.rating ? (
                                    [...Array(5)].map((_, i) => (
                                        <IconStar
                                            key={i}
                                            size={14}
                                            className={i < session.rating! ? 'text-[#FEAE2C] fill-[#FEAE2C]' : 'text-outline-variant'}
                                        />
                                    ))
                                ) : (
                                    <span className="text-xs font-medium text-on-surface-variant">No Rating</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </CustomModel>
    );
};

export default SessionDetailsModal;
