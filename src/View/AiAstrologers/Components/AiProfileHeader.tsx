import React from 'react';
import { IconEdit, IconTrash, IconArrowLeft } from '@tabler/icons-react';
import Button from '../../../Components/Common/Button';
import { cn } from '../../../Utils/cn';

interface AiProfileHeaderProps {
    name: string;
    description: string;
    botId: string;
    createdAt: string;
    status: 'ACTIVE' | 'INACTIVE';
    onBack: () => void;
}

export default function AiProfileHeader({ name, description, botId, createdAt, status, onBack }: AiProfileHeaderProps) {
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

    return (
        <div className="space-y-6">
            <button 
                onClick={onBack}
                className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors font-medium"
            >
                <IconArrowLeft size={20} />
                Back to AI Astrologers
            </button>

            <div className="bg-white p-8 rounded-[2rem] border border-outline-variant shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-full bg-[#F2F4FF] flex items-center justify-center text-[#246BFD] text-4xl font-black shadow-inner">
                        {initials}
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-3">
                            <h1 className="text-4xl font-black text-[#0A0E27] tracking-tight">{name}</h1>
                            <span className={cn(
                                "px-3 py-1 rounded-full text-[11px] font-bold tracking-wider",
                                status === 'ACTIVE' ? "bg-[#E6F9EE] text-[#00A344]" : "bg-gray-100 text-gray-500"
                            )}>
                                {status}
                            </span>
                        </div>
                        <p className="text-xl font-medium text-[#464651]">{description}</p>
                        <p className="text-sm font-medium text-on-surface-variant">
                            Bot ID: {botId} • Created: {createdAt}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Button 
                        variant="outlined" 
                        className="bg-white border-[#C7C5D3] text-[#0A0E27] font-bold h-12 px-6 rounded-xl hover:bg-gray-50"
                        icon={IconEdit}
                    >
                        Edit Profile
                    </Button>
                    <Button 
                        variant="primary" 
                        className="bg-[#FFE5E5] text-[#BA1A1A] border-none shadow-none hover:bg-[#FFD5D5] font-bold h-12 px-6 rounded-xl"
                        icon={IconTrash}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
}
