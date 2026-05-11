import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
    IconStar, 
    IconPhone, 
    IconMail, 
    IconLanguage, 
    IconBriefcase, 
    IconShieldCheck, 
    IconEdit, 
    IconBan, 
    IconTrendingUp, 
    IconMessage2, 
    IconVideo, 
    IconWallet,
    IconClock,
    IconChecks,
    IconUserCheck,
    IconCreditCard,
    IconBuildingBank,
    IconCamera,
    IconId,
    IconPlus
} from '@tabler/icons-react';
import Breadcrumb from '../../Components/Common/Breadcrumb';
import Button from '../../Components/Common/Button';
import { Switch } from '@headlessui/react';
import { cn } from '../../Utils/cn';

const AstrologerDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [statusActive, setStatusActive] = useState(true);
    const [pricingToggles, setPricingToggles] = useState({
        chat: true,
        voice: true,
        video: false
    });

    const breadcrumbItems = [
        { label: 'Astrologers', href: '/astrologers' },
        { label: 'Acharya Vedant' }
    ];

    const stats = [
        { label: 'Chat Success', value: '4,821', trend: '+12% Month', icon: IconMessage2, color: 'text-primary' },
        { label: 'Call Success', value: '3,105', trend: '+8% Month', icon: IconPhone, color: 'text-primary' },
        { label: 'Video Calls', value: '942', trend: 'Stable', icon: IconVideo, color: 'text-primary' },
        { label: 'Avg Rating', value: '4.92', trend: 'Top Rated', icon: IconStar, color: 'text-secondary-container' }
    ];

    return (
        <div className="space-y-6 bg-[#FCF8FF] min-h-screen">
            <div className="space-y-1">
                <Breadcrumb items={breadcrumbItems} />
            </div>

            {/* Main Profile Header */}
            <div className="bg-white p-6 rounded-2xl border border-outline-variant shadow-sm flex flex-col md:flex-row gap-8 items-start relative">
                <div className="relative shrink-0">
                    <img 
                        src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg" 
                        alt="Profile" 
                        className="w-48 h-48 rounded-2xl object-cover"
                    />
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#00A344] text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 border-2 border-white">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        Online
                    </div>
                </div>

                <div className="flex-1 space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-2">
                            <h1 className="text-4xl font-bold text-[#040052]">Acharya Vedant</h1>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1 text-[#FEAE2C]">
                                    <IconStar size={18} fill="currentColor" />
                                    <span className="font-bold text-on-surface">4.92</span>
                                    <span className="text-on-surface-variant text-sm">(12,450 reviews)</span>
                                </div>
                                <span className="bg-surface-container px-3 py-1 rounded text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                                    AST-2024-X
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <Button variant="outlined" className="bg-white border-outline-variant text-on-surface-variant font-bold flex items-center gap-2" icon={IconEdit}>
                                Edit Profile
                            </Button>
                            <Button variant="primary" className="bg-[#FFF0F0] text-[#BA1A1A] border-none shadow-none hover:bg-red-50 font-bold flex items-center gap-2" icon={IconBan}>
                                Suspend/Ban
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 max-w-2xl">
                        <div className="flex items-center gap-3 text-on-surface-variant">
                            <div className="w-9 h-9 bg-surface-container rounded-lg flex items-center justify-center text-primary">
                                <IconPhone size={20} />
                            </div>
                            <span className="font-medium text-on-surface">+91 98765 43210</span>
                        </div>
                        <div className="flex items-center gap-3 text-on-surface-variant">
                            <div className="w-9 h-9 bg-surface-container rounded-lg flex items-center justify-center text-primary">
                                <IconMail size={20} />
                            </div>
                            <span className="font-medium text-on-surface">vedant.astro@celestial.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-on-surface-variant">
                            <div className="w-9 h-9 bg-surface-container rounded-lg flex items-center justify-center text-primary">
                                <IconBriefcase size={20} />
                            </div>
                            <span className="font-medium text-on-surface">12 Years Exp</span>
                        </div>
                        <div className="flex items-center gap-3 text-on-surface-variant">
                            <div className="w-9 h-9 bg-surface-container rounded-lg flex items-center justify-center text-primary">
                                <IconLanguage size={20} />
                            </div>
                            <span className="font-medium text-on-surface">English, Hindi, Sanskrit</span>
                        </div>
                    </div>
                </div>

                {/* Status Toggle Card */}
                <div className="md:absolute top-6 right-6 w-full md:w-auto">
                    <div className="bg-white border border-outline-variant p-3 rounded-xl flex items-center justify-between gap-8 shadow-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#5456A6] rounded-full" />
                            <span className="text-sm font-semibold text-on-surface">Status: Active</span>
                        </div>
                        <Switch
                            checked={statusActive}
                            onChange={setStatusActive}
                            className={cn(
                                statusActive ? 'bg-[#1a1a6c]' : 'bg-gray-200',
                                'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none'
                            )}
                        >
                            <span
                                aria-hidden="true"
                                className={cn(
                                    statusActive ? 'translate-x-5' : 'translate-x-0',
                                    'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                )}
                            />
                        </Switch>
                    </div>
                </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-outline-variant shadow-sm flex flex-col items-center text-center space-y-2">
                        <p className="text-sm font-medium text-on-surface-variant uppercase tracking-wide">{stat.label}</p>
                        <p className="text-4xl font-bold text-on-surface">{stat.value}</p>
                        <div className={cn(
                            "flex items-center gap-1 text-[13px] font-bold",
                            stat.trend.includes('+') ? "text-[#00A344]" : "text-on-surface-variant"
                        )}>
                            {stat.trend.includes('+') && <IconTrendingUp size={16} />}
                            {stat.trend}
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Financial Vault Card */}
                <div className="lg:col-span-2 bg-[#1a1a6c] rounded-[2rem] p-8 text-white relative overflow-hidden">
                    <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                                <IconStar size={24} className="text-[#FEAE2C]" fill="currentColor" />
                            </div>
                            <h2 className="text-2xl font-bold">Financial Vault</h2>
                        </div>
                        <span className="bg-white/10 px-4 py-1.5 rounded-full text-sm font-medium">Updated: Just now</span>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        <div className="md:col-span-1 space-y-4">
                            <p className="text-white/60 text-sm font-bold uppercase tracking-widest">AVAILABLE BALANCE</p>
                            <div className="space-y-1">
                                <p className="text-5xl font-bold flex items-start">
                                    <span className="text-2xl mt-2 mr-2">₹</span>
                                    42,850.00
                                </p>
                            </div>
                            <div className="pt-8">
                                <Button className="bg-[#FEAE2C] text-[#040052] font-black text-lg py-4 px-8 rounded-2xl hover:bg-[#ffb947] transition-all border-none">
                                    Withdraw Now
                                </Button>
                            </div>
                        </div>

                        <div className="md:col-span-2 grid grid-cols-2 gap-8 border-l border-white/10 pl-8">
                            <div className="space-y-2">
                                <p className="text-white/60 text-[11px] font-bold uppercase tracking-widest">MONTHLY REV.</p>
                                <p className="text-3xl font-bold">₹ 1.2L</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-white/60 text-[11px] font-bold uppercase tracking-widest">LIFETIME EARNINGS</p>
                                <p className="text-3xl font-bold">₹ 14.8L</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-white/60 text-[11px] font-bold uppercase tracking-widest">TOTAL WITHDRAWALS</p>
                                <p className="text-2xl font-bold">₹ 12.4L</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-white/60 text-[11px] font-bold uppercase tracking-widest">PENDING PAYOUTS</p>
                                <p className="text-2xl font-bold">₹ 18.2K</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* KYC & Banking Section */}
                <div className="bg-white rounded-[2rem] border border-outline-variant shadow-sm p-6 space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                            <IconShieldCheck size={24} />
                        </div>
                        <h2 className="text-xl font-bold text-on-surface">KYC & Banking</h2>
                    </div>

                    <div className="space-y-6">
                        <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">DOCUMENTS</p>
                        <div className="grid grid-cols-3 gap-3">
                            <div className="relative group cursor-pointer">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Nn9V3kCj7L6QfI0_8m-6q9r4T7a-xX8V-g&s" alt="ID Front" className="w-full h-20 rounded-xl object-cover" />
                                <div className="absolute -bottom-1 -right-1 bg-[#00A344] text-white p-1 rounded-full border-2 border-white">
                                    <IconChecks size={12} />
                                </div>
                            </div>
                            <div className="relative">
                                <img src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg" alt="Portrait" className="w-full h-20 rounded-xl object-cover" />
                                <div className="absolute -bottom-1 -right-1 bg-[#00A344] text-white p-1 rounded-full border-2 border-white">
                                    <IconChecks size={12} />
                                </div>
                            </div>
                            <div className="border-2 border-dashed border-outline-variant rounded-xl flex flex-col items-center justify-center gap-1 text-on-surface-variant hover:border-primary hover:text-primary transition-colors cursor-pointer">
                                <IconPlus size={20} />
                                <span className="text-[10px] font-bold uppercase">PAN</span>
                            </div>
                        </div>

                        <div className="bg-[#E6FFF0] p-4 rounded-2xl flex items-start gap-3">
                            <div className="bg-white/50 p-1.5 rounded-lg text-[#00A344]">
                                <IconUserCheck size={18} />
                            </div>
                            <div className="space-y-0.5">
                                <p className="text-[13px] font-bold text-[#00A344]">Identity Verified 01 Jan 2024</p>
                                <p className="text-[11px] text-[#00A344]/80">All documents are valid and up to date.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-2">
                            <Button variant="outlined" className="bg-white border-outline-variant text-on-surface font-bold text-sm py-2.5">
                                Re-Verify
                            </Button>
                            <Button variant="primary" className="bg-[#FFF0F0] text-[#BA1A1A] border-none font-bold text-sm py-2.5">
                                Reject
                            </Button>
                        </div>

                        <div className="space-y-6 pt-4">
                            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">BANKING DETAILS</p>
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <p className="text-[11px] font-medium text-on-surface-variant">Acc. Holder</p>
                                    <p className="text-sm font-bold text-on-surface">VEDANT SHARMA</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[11px] font-medium text-on-surface-variant">Bank Name</p>
                                    <p className="text-sm font-bold text-on-surface uppercase">HDFC BANK LTD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Management */}
            <div className="bg-white rounded-[2rem] border border-outline-variant shadow-sm p-8 space-y-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                        <IconCreditCard size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-on-surface">Pricing Management</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Chat Pricing */}
                    <div className="bg-[#F8F9FC] p-6 rounded-[1.5rem] border border-outline-variant space-y-6 relative">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#5456A6]">
                                    <IconMessage2 size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-on-surface">Chat</p>
                                    <p className="text-xs text-on-surface-variant">Consultation</p>
                                </div>
                            </div>
                            <Switch
                                checked={pricingToggles.chat}
                                onChange={(val) => setPricingToggles(prev => ({ ...prev, chat: val }))}
                                className={cn(
                                    pricingToggles.chat ? 'bg-[#00A344]' : 'bg-gray-200',
                                    'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none'
                                )}
                            >
                                <span className={cn(pricingToggles.chat ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200')} />
                            </Switch>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase">Actual Price (₹/min)</label>
                            <input 
                                type="text" 
                                value="15.00" 
                                className="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 font-bold text-on-surface focus:outline-none focus:border-primary"
                                readOnly
                            />
                        </div>
                    </div>

                    {/* Voice Pricing */}
                    <div className="bg-[#F8F9FC] p-6 rounded-[1.5rem] border border-outline-variant space-y-6 relative">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#5456A6]">
                                    <IconPhone size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-on-surface">Voice</p>
                                    <p className="text-xs text-on-surface-variant">Call</p>
                                </div>
                            </div>
                            <Switch
                                checked={pricingToggles.voice}
                                onChange={(val) => setPricingToggles(prev => ({ ...prev, voice: val }))}
                                className={cn(
                                    pricingToggles.voice ? 'bg-[#00A344]' : 'bg-gray-200',
                                    'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none'
                                )}
                            >
                                <span className={cn(pricingToggles.voice ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200')} />
                            </Switch>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase">Actual Price (₹/min)</label>
                            <input 
                                type="text" 
                                value="25.00" 
                                className="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 font-bold text-on-surface focus:outline-none focus:border-primary"
                                readOnly
                            />
                        </div>
                    </div>

                    {/* Video Pricing */}
                    <div className="bg-[#F8F9FC] p-6 rounded-[1.5rem] border border-outline-variant space-y-6 relative opacity-60">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#5456A6]">
                                    <IconVideo size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-on-surface">Video</p>
                                    <p className="text-xs text-on-surface-variant">Call</p>
                                </div>
                            </div>
                            <Switch
                                checked={pricingToggles.video}
                                onChange={(val) => setPricingToggles(prev => ({ ...prev, video: val }))}
                                className={cn(
                                    pricingToggles.video ? 'bg-[#00A344]' : 'bg-gray-200',
                                    'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none'
                                )}
                            >
                                <span className={cn(pricingToggles.video ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200')} />
                            </Switch>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase">Actual Price (₹/min)</label>
                            <input 
                                type="text" 
                                value="45.00" 
                                className="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 font-bold text-on-surface focus:outline-none focus:border-primary"
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AstrologerDetails;
