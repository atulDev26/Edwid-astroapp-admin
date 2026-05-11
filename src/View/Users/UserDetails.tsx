import {
    IconBan,
    IconBell,
    IconBuildingBank,
    IconCalendar,
    IconCheck,
    IconHistory,
    IconMail,
    IconMapPin,
    IconMessageCircle,
    IconNotes,
    IconPencil,
    IconPhone,
    IconPhoneCall,
    IconPlayerPlay,
    IconStar,
    IconStars,
    IconTrendingUp,
    IconVideo
} from '@tabler/icons-react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../Components/Common/Breadcrumb';
import EditProfile from './Components/EditProfile';
import { cn } from '../../Utils/cn';

const UserDetails = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('Session History');

    const mockUser = {
        name: 'Aaryan Sharma',
        status: 'ACTIVE',
        type: 'PREMIUM',
        joinedDate: '14 Mar 2023',
        location: 'Mumbai, Maharashtra, IN',
        email: 'aaryan.sharma@example.com',
        phone: '+91 98765 43210',
        avatar: 'https://i.pravatar.cc/150?u=aaryan',
        stats: {
            sessions: '142',
            sessionTrend: '+12%',
            totalSpent: '₹24,500',
            lifetimeDeposit: '₹30,000',
            walletBalance: '₹5,500'
        },
        birthDetails: {
            dob: '12 October 1992',
            tob: '14:45 (IST)',
            pob: 'Pune, Maharashtra, India',
            sunSign: 'Libra',
            moonSign: 'Aries'
        }
    };

    const tabs = ['Session History', 'Wallet History', 'Kundli Details', 'Deposit Log'];

    return (
        <div className="space-y-6 max-w-[1600px] mx-auto pb-10">
            {/* Breadcrumb */}
            <Breadcrumb
                items={[
                    { label: 'Users', href: '/users' },
                    { label: mockUser.name }
                ]}
            />

            {/* Header Card */}
            <div className="bg-white rounded-[24px] border border-outline-variant p-8 shadow-sm">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Avatar */}
                    <div className="relative">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/10">
                            <img src={mockUser.avatar} alt={mockUser.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute bottom-0 right-0 w-7 h-7 bg-[#00B67A] rounded-full border-4 border-white flex items-center justify-center">
                            <IconCheck size={14} className="text-white" stroke={3} />
                        </div>
                    </div>

                    {/* User Info */}
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3">
                            <h1 className="text-3xl font-black text-[#1A1C3D]">{mockUser.name}</h1>
                            <span className="px-3 py-1 rounded-full bg-[#E6F8F1] text-[#00B67A] text-[10px] font-black tracking-wider">ACTIVE</span>
                            <span className="px-3 py-1 rounded-full bg-[#FFF4E6] text-[#FF9500] text-[10px] font-black tracking-wider">PREMIUM</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-sm font-medium text-on-surface-variant">
                            <div className="flex items-center gap-2">
                                <IconCalendar size={18} className="text-on-surface-variant/60" />
                                <span>Joined: {mockUser.joinedDate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <IconMail size={18} className="text-on-surface-variant/60" />
                                <span>{mockUser.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <IconMapPin size={18} className="text-on-surface-variant/60" />
                                <span>{mockUser.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <IconPhone size={18} className="text-on-surface-variant/60" />
                                <span>{mockUser.phone}</span>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <EditProfile 
                            userData={{
                                name: mockUser.name,
                                email: mockUser.email,
                                phone: mockUser.phone,
                                location: mockUser.location
                            }}
                        />
                        <button className="p-2.5 rounded-xl border border-outline-variant hover:bg-primary/5 hover:border-primary group transition-all" title="Send Notification">
                            <IconBell size={20} className="text-on-surface-variant group-hover:text-primary" />
                        </button>
                        <button className="p-2.5 rounded-xl border border-outline-variant hover:bg-error/5 hover:border-error group transition-all">
                            <IconBan size={20} className="text-on-surface-variant group-hover:text-error" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-[24px] border border-outline-variant space-y-4 shadow-sm">
                    <p className="text-[10px] font-black text-on-surface-variant tracking-widest uppercase">TOTAL SESSIONS</p>
                    <div className="flex items-end justify-between">
                        <h2 className="text-3xl font-black text-on-surface">{mockUser.stats.sessions}</h2>
                        <div className="flex items-center gap-1 text-[10px] font-bold text-success pb-1">
                            <IconTrendingUp size={14} />
                            {mockUser.stats.sessionTrend}
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-[24px] border border-outline-variant space-y-4 shadow-sm">
                    <p className="text-[10px] font-black text-on-surface-variant tracking-widest uppercase">TOTAL SPENT</p>
                    <div className="flex items-end justify-between">
                        <h2 className="text-3xl font-black text-on-surface">{mockUser.stats.totalSpent}</h2>
                        <IconStars size={24} className="text-[#FFB800] opacity-60" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-[24px] border border-outline-variant space-y-4 shadow-sm">
                    <p className="text-[10px] font-black text-on-surface-variant tracking-widest uppercase">LIFETIME DEPOSIT</p>
                    <div className="flex items-end justify-between">
                        <h2 className="text-3xl font-black text-on-surface">{mockUser.stats.lifetimeDeposit}</h2>
                        <IconBuildingBank size={24} className="text-on-surface-variant/40" />
                    </div>
                </div>

                <div className="bg-[#1A1C3D] p-6 rounded-[24px] border border-transparent space-y-4 relative overflow-hidden group shadow-lg shadow-[#1A1C3D]/20">
                    <p className="text-[10px] font-black text-white/60 tracking-widest uppercase relative z-10">WALLET BALANCE</p>
                    <div className="flex items-end justify-between relative z-10">
                        <h2 className="text-3xl font-black text-white">{mockUser.stats.walletBalance}</h2>
                        <button className="bg-white/10 text-white text-[10px] font-black tracking-widest px-3 py-1.5 rounded-lg hover:bg-white/20 transition-all uppercase">
                            MANAGE
                        </button>
                    </div>
                    {/* Background decoration */}
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Column (8/12) */}
                <div className="lg:col-span-8 space-y-6">
                    {/* Tabs & Table Card */}
                    <div className="bg-white rounded-[24px] border border-outline-variant overflow-hidden shadow-sm">
                        {/* Tabs */}
                        <div className="flex border-b border-outline-variant px-6 overflow-x-auto no-scrollbar">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={cn(
                                        "px-6 py-5 text-sm font-bold transition-all relative whitespace-nowrap cursor-pointer",
                                        activeTab === tab ? "text-[#1A1C3D]" : "text-on-surface-variant hover:text-on-surface"
                                    )}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1A1C3D] rounded-t-full" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Table Content */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-surface-container-low/30 text-[10px] font-black text-on-surface-variant tracking-widest uppercase border-b border-outline-variant">
                                        <th className="px-6 py-4">TYPE</th>
                                        <th className="px-6 py-4">ASTROLOGER</th>
                                        <th className="px-6 py-4">DATE & TIME</th>
                                        <th className="px-6 py-4">DURATION</th>
                                        <th className="px-6 py-4">AMOUNT</th>
                                        <th className="px-6 py-4">RATING</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm font-medium text-on-surface">
                                    {[
                                        { type: 'Chat', icon: IconMessageCircle, astro: 'Acharya Vikram', date: 'Oct 24, 2023', time: '14:30', duration: '18 mins', amount: '₹360', rating: 4 },
                                        { type: 'Video', icon: IconVideo, astro: 'Dr. Meena Iyer', date: 'Oct 22, 2023', time: '09:15', duration: '45 mins', amount: '₹2,250', rating: 5 },
                                        { type: 'Call', icon: IconPhoneCall, astro: 'Pandit Rajesh', date: 'Oct 20, 2023', time: '21:00', duration: '12 mins', amount: '₹240', rating: null },
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-outline-variant last:border-0 hover:bg-surface-container-low transition-colors">
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center">
                                                        <row.icon size={18} className="text-[#1A1C3D]" />
                                                    </div>
                                                    <span>{row.type}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 font-bold">{row.astro}</td>
                                            <td className="px-6 py-5">
                                                <div className="flex flex-col">
                                                    <span>{row.date}</span>
                                                    <span className="text-xs text-on-surface-variant">{row.time}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">{row.duration}</td>
                                            <td className="px-6 py-5 font-black">{row.amount}</td>
                                            <td className="px-6 py-5">
                                                {row.rating ? (
                                                    <div className="flex items-center gap-1.5">
                                                        <IconStar size={16} fill="#FFB800" className="text-[#FFB800]" />
                                                        <span className="font-bold text-[#1A1C3D]">{row.rating}</span>
                                                    </div>
                                                ) : (
                                                    <span className="text-on-surface-variant/40 italic text-xs">N/A</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Footer */}
                        <div className="p-6 text-center border-t border-outline-variant">
                            <button className="text-[10px] font-black text-[#1A1C3D] tracking-widest uppercase hover:underline">
                                VIEW ALL SESSIONS
                            </button>
                        </div>
                    </div>

                    {/* Administrative Notes Section */}
                    <div className="bg-white rounded-[24px] border border-outline-variant p-8 space-y-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <IconNotes size={24} className="text-on-surface-variant" />
                                <h3 className="text-lg font-black text-[#1A1C3D]">Administrative Notes</h3>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant text-[10px] font-black tracking-widest uppercase">PRIVATE TO ADMNS</span>
                        </div>

                        <div className="space-y-4">
                            <textarea
                                placeholder="Add a new administrative note about Aaryan's behavior, preferences, or issues..."
                                className="w-full min-h-[120px] p-4 bg-surface-container-low border border-outline-variant rounded-2xl text-sm focus:outline-none focus:border-primary transition-all placeholder:text-on-surface-variant/40"
                            />
                            <div className="flex justify-end">
                                <button className="flex items-center gap-2 bg-[#1A1C3D] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-[#1A1C3D]/20">
                                    <IconPlayerPlay size={18} fill="white" />
                                    Save Note
                                </button>
                            </div>
                        </div>

                        {/* Note Items */}
                        <div className="space-y-6 pt-6 border-t border-outline-variant">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-[10px] font-black">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-[#1A1C3D] flex items-center justify-center text-white text-[10px]">SA</div>
                                        <span className="text-on-surface uppercase">Senior Admin Sarah</span>
                                    </div>
                                    <span className="text-on-surface-variant">25 Oct 2023 • 09:20 AM</span>
                                </div>
                                <p className="text-sm text-on-surface-variant leading-relaxed">
                                    Client prefers weekend evening sessions. Has expressed interest in more detailed financial transits for the upcoming fiscal year. Very polite but expects high accuracy.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-[10px] font-black">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-[#6200EE] flex items-center justify-center text-white text-[10px]">RM</div>
                                        <span className="text-on-surface uppercase">Relationship Manager Raj</span>
                                    </div>
                                    <span className="text-on-surface-variant">15 Oct 2023 • 04:45 PM</span>
                                </div>
                                <p className="text-sm text-on-surface-variant leading-relaxed">
                                    Account flagged for frequent recharges. VIP status maintained. Sent a thank-you Diwali hamper last week.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column (4/12) */}
                <div className="lg:col-span-4 space-y-6">
                    {/* Birth Details Card */}
                    <div className="bg-[#1A1C3D] rounded-[24px] p-8 text-white space-y-8 relative overflow-hidden shadow-lg shadow-[#1A1C3D]/20">
                        <div className="flex items-center gap-3 relative z-10">
                            <IconStars size={24} className="text-[#FFB800]" />
                            <h3 className="text-xl font-black">Birth Details</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-y-8 gap-x-4 relative z-10">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black text-white/40 tracking-widest uppercase">DATE OF BIRTH</p>
                                <p className="text-sm font-black">{mockUser.birthDetails.dob}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-black text-white/40 tracking-widest uppercase">TIME OF BIRTH</p>
                                <p className="text-sm font-black">{mockUser.birthDetails.tob}</p>
                            </div>
                            <div className="col-span-2 space-y-1">
                                <p className="text-[10px] font-black text-white/40 tracking-widest uppercase">PLACE OF BIRTH</p>
                                <p className="text-sm font-black">{mockUser.birthDetails.pob}</p>
                            </div>
                        </div>

                        <div className="flex gap-4 relative z-10 pt-4">
                            <div className="flex-1 bg-white/10 rounded-2xl p-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <IconTrendingUp size={20} className="text-[#FFB800]" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-white/40 uppercase">SUN SIGN</p>
                                    <p className="text-lg font-black">{mockUser.birthDetails.sunSign}</p>
                                </div>
                            </div>
                            <div className="flex-1 bg-white/10 rounded-2xl p-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <IconHistory size={20} className="text-[#64B5F6]" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-white/40 uppercase">MOON SIGN</p>
                                    <p className="text-lg font-black">{mockUser.birthDetails.moonSign}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Engagement Insights Card */}
                    <div className="bg-white rounded-[24px] border border-outline-variant p-8 space-y-6 shadow-sm">
                        <h3 className="text-[10px] font-black text-on-surface-variant tracking-widest uppercase">ENGAGEMENT INSIGHTS</h3>

                        <div className="space-y-4">
                            <div className="p-4 bg-surface-container-low rounded-2xl flex items-center justify-between border border-outline-variant/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                                        <IconCheck size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-on-surface-variant uppercase">TOP ASTROLOGER</p>
                                        <p className="text-sm font-black">Acharya Vikram</p>
                                    </div>
                                </div>
                                <span className="text-[10px] font-black text-success">82% Match</span>
                            </div>

                            <div className="p-4 bg-surface-container-low rounded-2xl flex items-center justify-between border border-outline-variant/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                                        <IconMessageCircle size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-on-surface-variant uppercase">MAIN SERVICE</p>
                                        <p className="text-sm font-black">Career & Finance Chat</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-black text-on-surface-variant uppercase">Engagement Level</span>
                                    <span className="text-[10px] font-black text-success uppercase">HIGH</span>
                                </div>
                                <div className="h-1.5 w-full bg-surface-container-low rounded-full overflow-hidden">
                                    <div className="h-full bg-success w-[85%]" />
                                </div>
                            </div>

                            <div className="text-center pt-2">
                                <span className="bg-[#FFF4E6] text-[#FF9500] px-4 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase">AVG DURATION: 22 MINS</span>
                            </div>
                        </div>
                    </div>

                    {/* Diagnostic System Info */}
                    <div className="bg-white rounded-[24px] border border-outline-variant p-8 space-y-6 shadow-sm">
                        <h3 className="text-[10px] font-black text-on-surface-variant tracking-widest uppercase">DIAGNOSTIC SYSTEM INFO</h3>
                        <div className="space-y-4">
                            {[
                                { label: 'Last Login IP', value: '103.21.144.12' },
                                { label: 'Device', value: 'iPhone 14 Pro (Safari)' },
                                { label: 'Last Login', value: '20 Oct, 18:30 IST' },
                                { label: 'System Status', value: 'ONLINE', isStatus: true },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <span className="text-xs font-medium text-on-surface-variant">{item.label}</span>
                                    {item.isStatus ? (
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                                            <span className="text-[10px] font-black text-success uppercase">{item.value}</span>
                                        </div>
                                    ) : (
                                        <span className="text-xs font-black text-on-surface">{item.value}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
