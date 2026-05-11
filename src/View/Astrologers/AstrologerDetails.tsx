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
                        className="w-40 h-40 rounded-2xl object-cover"
                    />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#246BFD] text-white text-[12px] font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 border-2 border-white shadow-lg">
                        <div className="w-2 h-2 bg-white rounded-full" />
                        Online
                    </div>
                </div>

                <div className="flex-1 space-y-6 pt-2">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-black text-[#0A0E27]">Acharya Vedant</h1>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1 text-[#FEAE2C]">
                                    <IconStar size={20} fill="currentColor" />
                                    <span className="font-bold text-[#0A0E27] text-lg">4.92</span>
                                    <span className="text-on-surface-variant text-sm font-medium">(12,450 reviews)</span>
                                </div>
                                <div className="bg-[#F1F1F5] px-3 py-1 rounded text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                                    AST-2024-X
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
                                    <div className="w-2 h-2 bg-[#246BFD] rounded-full" />
                                    <span className="text-[15px] font-bold text-[#0A0E27]">Status: Active</span>
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
                            <span className="font-medium text-[#464651] text-lg">+91 98765 43210</span>
                        </div>
                        <div className="flex items-center gap-3 text-on-surface-variant">
                            <div className="w-10 h-10 bg-[#F2F4FF] rounded-lg flex items-center justify-center text-[#5456A6]">
                                <IconMail size={20} />
                            </div>
                            <span className="font-medium text-[#464651] text-lg">vedant.astro@celestial.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-on-surface-variant">
                            <div className="w-10 h-10 bg-[#F2F4FF] rounded-lg flex items-center justify-center text-[#5456A6]">
                                <IconBriefcase size={20} />
                            </div>
                            <span className="font-medium text-[#464651] text-lg">12 Years Exp</span>
                        </div>
                        <div className="flex items-center gap-3 text-on-surface-variant">
                            <div className="w-10 h-10 bg-[#F2F4FF] rounded-lg flex items-center justify-center text-[#5456A6]">
                                <IconLanguage size={20} />
                            </div>
                            <span className="font-medium text-[#464651] text-lg">English, Hindi, Sanskrit</span>
                        </div>
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                {/* Financial Vault & Pricing Column */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Financial Vault Card */}
                    <div className="bg-[#0A0E27] rounded-[2rem] p-8 text-white relative overflow-hidden">
                        <div className="flex items-center justify-between relative z-10">
                            <div className="flex items-center gap-3">
                                <IconStar size={28} className="text-[#FEAE2C]" fill="currentColor" />
                                <h2 className="text-2xl font-black">Financial Vault</h2>
                            </div>
                            <span className="bg-white/10 px-4 py-1.5 rounded-full text-[13px] font-medium text-white/90">Updated: Just now</span>
                        </div>

                        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
                            <div className="md:col-span-4 space-y-4 border-r border-white/10 pr-8">
                                <div className="space-y-4">
                                    <p className="text-white/60 text-[11px] font-bold uppercase tracking-[0.1em]">AVAILABLE BALANCE</p>
                                    <div className="space-y-1">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl font-black text-white">₹</span>
                                            <span className="text-5xl font-black text-white">42,850.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <Button className="bg-[#FEAE2C] text-[#0A0E27] font-black text-[15px] py-4 px-10 rounded-xl hover:bg-[#ffb947] transition-all border-none h-auto">
                                        Withdraw Now
                                    </Button>
                                </div>
                            </div>

                            <div className="md:col-span-8 grid grid-cols-2 gap-x-12 gap-y-10 pl-4">
                                <div className="space-y-3">
                                    <p className="text-white/60 text-[11px] font-bold uppercase tracking-[0.1em]">MONTHLY REV.</p>
                                    <p className="text-3xl font-black text-white">₹ 1.2L</p>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-white/60 text-[11px] font-bold uppercase tracking-[0.1em]">LIFETIME EARNINGS</p>
                                    <p className="text-3xl font-black text-white">₹ 14.8L</p>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-white/60 text-[11px] font-bold uppercase tracking-[0.1em]">TOTAL WITHDRAWALS</p>
                                    <p className="text-3xl font-black text-white">₹ 12.4L</p>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-white/60 text-[11px] font-bold uppercase tracking-[0.1em]">PENDING PAYOUTS</p>
                                    <p className="text-3xl font-black text-white">₹ 18.2K</p>
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
                            <div className="bg-[#F8F9FC] p-6 rounded-[1.5rem] border border-outline-variant space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-[#EBEBFF] rounded-xl flex items-center justify-center text-[#5456A6]">
                                            <IconMessage2 size={24} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-on-surface">Chat</p>
                                            <p className="text-[11px] text-on-surface-variant font-medium">Consultation</p>
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
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Actual Price (₹/min)</label>
                                        <input type="text" value="15.00" className="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 font-bold text-on-surface focus:outline-none focus:border-primary" readOnly />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Offer Price (₹/min)</label>
                                        <input type="text" value="12.00" className="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 font-bold text-on-surface focus:outline-none focus:border-primary" readOnly />
                                    </div>
                                </div>
                            </div>

                            {/* Voice Pricing */}
                            <div className="bg-[#F8F9FC] p-6 rounded-[1.5rem] border border-outline-variant space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-[#EBEBFF] rounded-xl flex items-center justify-center text-[#5456A6]">
                                            <IconPhone size={24} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-on-surface">Voice</p>
                                            <p className="text-[11px] text-on-surface-variant font-medium">Call</p>
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
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Actual Price (₹/min)</label>
                                        <input type="text" value="25.00" className="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 font-bold text-on-surface focus:outline-none focus:border-primary" readOnly />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Offer Price (₹/min)</label>
                                        <input type="text" value="20.00" className="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 font-bold text-on-surface focus:outline-none focus:border-primary" readOnly />
                                    </div>
                                </div>
                            </div>

                            {/* Video Pricing */}
                            <div className="bg-[#F8F9FC] p-6 rounded-[1.5rem] border border-outline-variant space-y-6 opacity-60">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-[#EBEBFF] rounded-xl flex items-center justify-center text-[#5456A6]">
                                            <IconVideo size={24} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-on-surface">Video</p>
                                            <p className="text-[11px] text-on-surface-variant font-medium">Call</p>
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
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Actual Price (₹/min)</label>
                                        <input type="text" value="45.00" className="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 font-bold text-on-surface focus:outline-none focus:border-primary" readOnly />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Offer Price (₹/min)</label>
                                        <input type="text" value="40.00" className="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 font-bold text-on-surface focus:outline-none focus:border-primary" readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Platform Commission slider */}
                        <div className="bg-[#F8F9FC] p-6 rounded-[1.5rem] border border-outline-variant space-y-8">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 text-[#5456A6]">
                                    <IconTrendingUp size={24} />
                                    <h3 className="text-lg font-bold text-on-surface">Platform Commission Control</h3>
                                </div>
                                <span className="text-2xl font-black text-[#0A0E27]">35%</span>
                            </div>
                            
                            <div className="px-4 space-y-6">
                                <div className="relative h-2 bg-[#EBEBFF] rounded-full">
                                    <div className="absolute top-0 left-0 h-full w-[35%] bg-[#0A0E27] rounded-full" />
                                    <div className="absolute top-1/2 left-[35%] -translate-y-1/2 w-6 h-6 bg-[#0A0E27] border-4 border-white rounded-full shadow-lg cursor-pointer" />
                                </div>
                                <div className="flex justify-between text-[13px] font-bold text-on-surface-variant">
                                    <span>0%</span>
                                    <span>50%</span>
                                    <span>100%</span>
                                </div>
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
                        <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-[0.1em]">DOCUMENTS</p>
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

                        <div className="bg-[#E6FFF0] p-4 rounded-2xl flex items-center gap-3">
                            <div className="bg-white/50 p-1.5 rounded-lg text-[#00A344]">
                                <IconUserCheck size={20} />
                            </div>
                            <p className="text-[14px] font-bold text-[#00A344]">Identity Verified 01 Jan 2024</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <Button variant="outlined" className="bg-white border-[#C7C5D3] text-on-surface font-bold text-sm h-11">
                                Re-Verify
                            </Button>
                            <Button variant="primary" className="bg-[#FFE5E5] text-[#BA1A1A] border-none font-bold text-sm h-11">
                                Reject
                            </Button>
                        </div>

                        <div className="space-y-6 pt-4 border-t border-outline-variant">
                            <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-[0.1em]">BANKING DETAILS</p>
                            <div className="space-y-5">
                                <div className="space-y-1">
                                    <p className="text-[12px] font-medium text-on-surface-variant">Acc. Holder</p>
                                    <p className="text-[15px] font-bold text-on-surface">VEDANT SHARMA</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[12px] font-medium text-on-surface-variant">Bank Name</p>
                                    <p className="text-[15px] font-bold text-on-surface uppercase">HDFC BANK LTD</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[12px] font-medium text-on-surface-variant">A/C Number</p>
                                    <p className="text-[15px] font-bold text-on-surface">**** **** 9210</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[12px] font-medium text-on-surface-variant">IFSC Code</p>
                                    <p className="text-[15px] font-bold text-on-surface">HDFC0001242</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Live Consultations Monitor */}
            <div className="bg-white rounded-[2rem] border border-outline-variant shadow-sm p-8 space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                        <h2 className="text-2xl font-bold text-[#0A0E27]">Live Consultations Monitor</h2>
                        <p className="text-on-surface-variant font-medium">Real-time session monitoring and historical log</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="bg-[#EBEBFF] px-6 py-3 rounded-2xl text-center">
                            <p className="text-[11px] font-bold text-[#5456A6] uppercase tracking-wider">ACTIVE SESSIONS</p>
                            <p className="text-xl font-black text-[#0A0E27]">12 Today</p>
                        </div>
                        <div className="bg-[#E6FFF0] px-6 py-3 rounded-2xl text-center">
                            <p className="text-[11px] font-bold text-[#00A344] uppercase tracking-wider">AVG DURATION</p>
                            <p className="text-xl font-black text-[#0A0E27]">18.5 Min</p>
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
                            {[
                                { user: 'Rohan Kapoor', plan: 'Gold Member', type: 'Chat', icon: IconMessage2, color: 'text-[#00A344]', bg: 'bg-[#E6FFF0]', start: '10:45 AM, Today', duration: '24m 12s', rating: 5, earning: '₹ 450.00' },
                                { user: 'Ananya Singh', plan: 'Silver Member', type: 'Voice', icon: IconPhone, color: 'text-[#5456A6]', bg: 'bg-[#EBEBFF]', start: '09:15 AM, Today', duration: '12m 45s', rating: 4, earning: '₹ 120.00' }
                            ].map((row, i) => (
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-12">
                {/* Recent Withdrawals */}
                <div className="bg-white rounded-[2rem] border border-outline-variant shadow-sm p-8 space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <IconTrendingUp size={24} className="text-[#0A0E27] rotate-45" />
                            <h2 className="text-xl font-bold text-[#0A0E27]">Recent Withdrawals</h2>
                        </div>
                        <button className="text-sm font-bold text-on-surface-variant hover:text-primary">View History</button>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-[#F8F9FC] p-4 rounded-2xl border border-outline-variant flex items-center justify-between">
                            <div className="space-y-1">
                                <p className="text-lg font-black text-[#0A0E27]">₹ 15,000.00</p>
                                <p className="text-xs text-on-surface-variant font-medium">Requested on 12 Mar, 2024</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="bg-[#FFF8E6] text-[#FEAE2C] px-3 py-1 rounded-full text-xs font-bold">Pending</span>
                                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-[#BA1A1A] cursor-pointer">
                                    <IconBan size={18} />
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#F8F9FC] p-4 rounded-2xl border border-outline-variant flex items-center justify-between">
                            <div className="space-y-1">
                                <p className="text-lg font-black text-[#0A0E27]">₹ 8,250.00</p>
                                <p className="text-xs text-on-surface-variant font-medium">Requested on 05 Mar, 2024</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="bg-[#E6FFF0] text-[#00A344] px-3 py-1 rounded-full text-xs font-bold">Approved</span>
                                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-[#00A344]">
                                    <IconChecks size={18} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Reviews */}
                <div className="bg-white rounded-[2rem] border border-outline-variant shadow-sm p-8 space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 border-2 border-[#0A0E27] rounded flex items-center justify-center">
                                <IconStar size={14} className="text-[#0A0E27]" />
                            </div>
                            <h2 className="text-xl font-bold text-[#0A0E27]">Recent Reviews</h2>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="text-sm font-bold text-on-surface-variant hover:text-primary flex items-center gap-2">
                                View All Reviews
                                <IconTrendingUp size={16} className="rotate-45" />
                            </button>
                            <div className="flex items-center gap-1.5 text-lg font-black text-[#0A0E27]">
                                <IconStar size={20} className="text-[#FEAE2C]" fill="currentColor" />
                                4.9
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <img src="https://i.pravatar.cc/150?u=meera" alt="Meera" className="w-10 h-10 rounded-full object-cover" />
                                    <div>
                                        <p className="font-bold text-on-surface">Meera Joshi</p>
                                        <p className="text-xs text-on-surface-variant">2 hours ago</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 text-[#FEAE2C]">
                                    {[...Array(5)].map((_, idx) => <IconStar key={idx} size={16} fill="currentColor" />)}
                                </div>
                            </div>
                            <p className="text-sm text-on-surface-variant font-medium leading-relaxed">
                                Acharya Vedant is incredibly accurate! He precisely pinpointed my career shifts and gave very practical remedies. Truly blessed to have found him.
                            </p>
                        </div>

                        <div className="flex items-center justify-between border-t border-outline-variant pt-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-bold text-sm text-on-surface-variant">SR</div>
                                <div>
                                    <p className="font-bold text-on-surface">Suresh Raina</p>
                                    <p className="text-xs text-on-surface-variant">Yesterday</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-[#FEAE2C]">
                                <IconStar size={16} fill="currentColor" />
                                <IconStar size={16} fill="currentColor" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AstrologerDetails;
