import { Switch } from '@headlessui/react';
import { IconBan, IconBriefcase, IconEdit, IconLanguage, IconMail, IconPhone, IconStar } from '@tabler/icons-react';
import Button from '../../../Components/Common/Button';
import { cn } from '../../../Utils/cn';

export interface ProfileData {
    name: string;
    profileImage: string;
    isOnline: boolean;
    rating: string;
    reviewsCount: string;
    astrologerId: string;
    phone: string;
    email: string;
    experience: string;
    languages: string;
}

interface ProfileHeaderProps {
    data: ProfileData;
    statusActive: boolean;
    setStatusActive: (val: boolean) => void;
}

export default function ProfileHeader({ data, statusActive, setStatusActive }: ProfileHeaderProps) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-outline-variant shadow-sm flex flex-col md:flex-row gap-8 items-start relative">
            <div className="relative shrink-0">
                <img
                    src={data.profileImage}
                    alt="Profile"
                    className="w-40 h-40 rounded-2xl object-cover"
                />
                {data.isOnline && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#246BFD] text-white text-[12px] font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 border-2 border-white shadow-lg">
                        <div className="w-2 h-2 bg-white rounded-full" />
                        Online
                    </div>
                )}
            </div>

            <div className="flex-1 space-y-6 pt-2">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-black text-[#0A0E27]">{data.name}</h1>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 text-[#FEAE2C]">
                                <IconStar size={20} fill="currentColor" />
                                <span className="font-bold text-[#0A0E27] text-lg">{data.rating}</span>
                                <span className="text-on-surface-variant text-sm font-medium">({data.reviewsCount} reviews)</span>
                            </div>
                            <div className="bg-[#F1F1F5] px-3 py-1 rounded text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                                {data.astrologerId}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-4">
                        <div className="flex flex-wrap gap-3">
                            <Button variant="outlined" className="bg-white border-[#C7C5D3] text-on-surface-variant font-bold flex items-center gap-2 h-11" icon={IconEdit}>
                                Edit Profile
                            </Button>
                            <Button variant="primary" className="bg-[#FFE5E5] text-[#BA1A1A] border-none shadow-none hover:bg-[#FFD5D5] font-bold flex items-center gap-2 h-11" icon={IconBan}>
                                Suspend/Ban
                            </Button>
                        </div>

                        <div className="bg-[#F2F4FF] border border-[#D0D5FF] p-3 rounded-xl flex items-center justify-between gap-8 shadow-sm w-full md:w-[280px]">
                            <div className="flex items-center gap-2.5">
                                <div className={cn("w-2 h-2 rounded-full", statusActive ? "bg-[#246BFD]" : "bg-gray-400")} />
                                <span className="text-[15px] font-bold text-[#0A0E27]">Status: {statusActive ? 'Active' : 'Inactive'}</span>
                            </div>
                            <Switch
                                checked={statusActive}
                                onChange={setStatusActive}
                                className={cn(
                                    statusActive ? 'bg-[#246BFD]' : 'bg-gray-200',
                                    'relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none'
                                )}
                            >
                                <span
                                    aria-hidden="true"
                                    className={cn(
                                        statusActive ? 'translate-x-5' : 'translate-x-0',
                                        'pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 max-w-2xl pt-4">
                    <div className="flex items-center gap-3 text-on-surface-variant">
                        <div className="w-10 h-10 bg-[#F2F4FF] rounded-lg flex items-center justify-center text-[#5456A6]">
                            <IconPhone size={20} />
                        </div>
                        <span className="font-medium text-[#464651] text-lg">{data.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-on-surface-variant">
                        <div className="w-10 h-10 bg-[#F2F4FF] rounded-lg flex items-center justify-center text-[#5456A6]">
                            <IconMail size={20} />
                        </div>
                        <span className="font-medium text-[#464651] text-lg">{data.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-on-surface-variant">
                        <div className="w-10 h-10 bg-[#F2F4FF] rounded-lg flex items-center justify-center text-[#5456A6]">
                            <IconBriefcase size={20} />
                        </div>
                        <span className="font-medium text-[#464651] text-lg">{data.experience}</span>
                    </div>
                    <div className="flex items-center gap-3 text-on-surface-variant">
                        <div className="w-10 h-10 bg-[#F2F4FF] rounded-lg flex items-center justify-center text-[#5456A6]">
                            <IconLanguage size={20} />
                        </div>
                        <span className="font-medium text-[#464651] text-lg">{data.languages}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

