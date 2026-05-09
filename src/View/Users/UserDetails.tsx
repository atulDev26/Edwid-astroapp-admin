import {
    IconArrowRight,
    IconBan,
    IconCalendar,
    IconChevronRight,
    IconId,
    IconMail,
    IconPhone,
    IconStars
} from '@tabler/icons-react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../../Components/Common/Button';
import { cn } from '../../Utils/cn';

const UserDetails = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('Overview');

    const tabs = [
        'Overview',
        'Session History',
        'Wallet History',
        'Deposit Log',
        'Kundli Details',
        'Admin Notes'
    ];

    const stats = [
        { label: 'CURRENT BALANCE', value: '₹2,450', color: 'text-primary' },
        { label: 'TOTAL SPEND', value: '₹18,200', color: 'text-primary' },
        { label: 'DEPOSITS', value: '14', color: 'text-primary' },
        { label: 'MANUAL CREDITS', value: '2', color: 'text-primary' },
        { label: 'TOTAL SESSIONS', value: '31', color: 'text-primary' },
    ];

    const kundliSnapshot = [
        { label: 'Ascendant (Lagna)', value: 'Taurus (Vrishabha)' },
        { label: 'Moon Sign (Rasi)', value: 'Leo (Simha)' },
        { label: 'Sun Sign', value: 'Aries (Mesha)' },
        { label: 'Birth Nakshatra', value: 'Magha (Pada 2)' },
    ];

    return (
        <div className="space-y-6">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
                <Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
                <IconChevronRight size={16} />
                <Link to="/users" className="hover:text-primary transition-colors">Users</Link>
                <IconChevronRight size={16} />
                <span className="text-on-surface">Sarah Jenkins</span>
            </nav>

            {/* Header Card */}
            <div className="bg-white rounded-2xl border border-outline-variant p-6 shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/10">
                            <img src="https://i.pravatar.cc/150?u=sarah" alt="Sarah" className="w-full h-full object-cover" />
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <h1 className="typography-h2 text-on-surface">Sarah Jenkins</h1>
                                <span className="px-2.5 py-0.5 rounded-full bg-primary/5 text-primary text-xs font-bold">Active</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-on-surface-variant text-sm font-medium">
                                <div className="flex items-center gap-1.5">
                                    <IconId size={16} />
                                    <span>ID: USR-8492-X</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <IconPhone size={16} />
                                    <span>+1 (555) 019-2834</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <IconMail size={16} />
                                    <span>sarah.j@example.com</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <IconCalendar size={16} />
                                    <span>Reg: Oct 12, 2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button variant="outlined" className="text-error border-error hover:bg-error/5 gap-2" icon={IconBan}>
                        Block User
                    </Button>
                </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-outline-variant flex gap-8 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                            "pb-4 text-lg font-semibold transition-all relative whitespace-nowrap",
                            activeTab === tab
                                ? "text-primary"
                                : "text-on-surface-variant hover:text-on-surface"
                        )}
                    >
                        {tab}
                        {activeTab === tab && (
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full animate-in slide-in-from-bottom-1" />
                        )}
                    </button>
                ))}
            </div>

            {/* Overview Stats Grid */}
            {activeTab === 'Overview' && (
                <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {stats.map((stat) => (
                            <div key={stat.label} className="bg-white p-5 rounded-2xl border border-outline-variant shadow-sm space-y-1 hover:border-primary transition-colors cursor-default">
                                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">{stat.label}</span>
                                <div className={cn("text-2xl font-bold", stat.color)}>{stat.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Kundli Snapshot */}
                    <div className="bg-white rounded-2xl border border-outline-variant p-6 shadow-sm space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                                    <IconStars size={24} />
                                </div>
                                <h3 className="typography-h3 text-on-surface">Kundli Snapshot</h3>
                            </div>
                            <button className="text-sm font-bold text-secondary hover:opacity-80 flex items-center gap-1.5 transition-all">
                                View Full Chart
                                <IconArrowRight size={16} />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {kundliSnapshot.map((item) => (
                                <div key={item.label} className="bg-surface-container-low/30 p-4 rounded-xl border border-outline-variant/50 space-y-1">
                                    <span className="text-xs font-medium text-on-surface-variant">{item.label}</span>
                                    <div className="text-sm font-bold text-on-surface">{item.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDetails;
