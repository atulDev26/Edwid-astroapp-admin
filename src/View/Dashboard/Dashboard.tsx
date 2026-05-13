import React, { useState } from 'react';
import {
    IconUsers, IconChartBar, IconUsersGroup, IconWifi,
    IconCurrencyRupee, IconWallet, IconCalendarEvent,
    IconShoppingBag, IconCircleFilled, IconClock,
    IconMessageChatbot, IconPhone, IconVideo, IconCalendar,
    IconTrendingUp, IconChevronRight
} from '@tabler/icons-react';
import Chart from 'react-apexcharts';
import { cn } from '../../Utils/cn';
import Button from '../../Components/Common/Button';

// --- Stat Card Component ---
interface StatCardProps {
    title: string;
    value: string;
    trend?: string;
    icon: React.ElementType;
    iconColor: string;
    badge?: string;
    badgeColor?: string;
    subValues?: { label: string; value: string }[];
    footer?: string;
    progress?: number;
}

const StatCard: React.FC<StatCardProps> = ({
    title, value, trend, icon: Icon, iconColor, badge, badgeColor, subValues, footer, progress
}) => (
    <div className="bg-white p-6 rounded-[24px] border border-[#EDEDF2] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <p className="text-[11px] font-black text-[#667085] uppercase tracking-widest">{title}</p>
                <div className={cn("p-2 rounded-xl bg-opacity-10", iconColor.replace('text-', 'bg-'))}>
                    <Icon className={iconColor} size={20} />
                </div>
            </div>

            <div className="flex items-end gap-3">
                <h3 className="text-[28px] font-black text-[#0A0E27] tracking-tight">{value}</h3>
                {trend && (
                    <div className="flex items-center gap-0.5 px-2 py-0.5 rounded-lg bg-green-50 text-[#12B76A] text-[12px] font-bold mb-2">
                        <IconTrendingUp size={14} />
                        {trend}
                    </div>
                )}
                {badge && (
                    <span className={cn("px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider mb-2 ml-auto", badgeColor)}>
                        {badge}
                    </span>
                )}
            </div>

            {footer && <p className="text-[12px] font-medium text-[#667085]">{footer}</p>}

            {progress !== undefined && (
                <div className="space-y-2">
                    <div className="h-1.5 w-full bg-[#F2F4F7] rounded-full overflow-hidden">
                        <div
                            className="h-full bg-orange-400 rounded-full"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            )}
        </div>

        {subValues && (
            <div className="pt-4 mt-4 border-t border-[#F2F4F7] grid grid-cols-2 gap-4">
                {subValues.map((sv, i) => (
                    <div key={i} className="space-y-0.5">
                        <p className="text-[10px] font-bold text-[#98A2B3] uppercase tracking-wider">{sv.label}</p>
                        <p className="text-[13px] font-black text-[#344054]">{sv.value}</p>
                    </div>
                ))}
            </div>
        )}
    </div>
);

// --- Custom User Growth Chart (overlapping bars: Regs behind Active) ---
const USER_GROWTH_DATA = [
    { week: 'W1', active: 44, regs: 76 },
    { week: 'W2', active: 55, regs: 85 },
    { week: 'W3', active: 57, regs: 101 },
    { week: 'W4', active: 56, regs: 98 },
    { week: 'W5', active: 61, regs: 87 },
    { week: 'W6', active: 58, regs: 105 },
];

const UserGrowthChart: React.FC = () => {
    const maxVal = Math.max(...USER_GROWTH_DATA.map(d => d.regs));
    const chartHeight = 220;

    return (
        <div className="space-y-4">
            {/* Legend */}
            <div className="flex items-center gap-6 justify-end pr-1">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm bg-[#1A1F4D]" />
                    <span className="text-[12px] font-bold text-[#667085]">Active</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm bg-[#E2E8F0]" />
                    <span className="text-[12px] font-bold text-[#667085]">Regs</span>
                </div>
            </div>

            {/* Bars row */}
            <div className="flex items-end justify-between gap-3 px-1" style={{ height: chartHeight }}>
                {USER_GROWTH_DATA.map((d, i) => {
                    const regsH = Math.round((d.regs / maxVal) * chartHeight);
                    const activeH = Math.round((d.active / maxVal) * chartHeight);
                    return (
                        <div
                            key={i}
                            className="relative flex-1"
                            style={{ height: regsH }}
                        >
                            {/* Gray background bar (Regs) */}
                            <div className="absolute inset-0 bg-[#E8EBF4] rounded-t-md" />
                            {/* Navy foreground bar (Active) — anchored to bottom */}
                            <div
                                className="absolute bottom-0 left-0 right-0 bg-[#1A1F4D] rounded-t-md"
                                style={{ height: activeH }}
                            />
                        </div>
                    );
                })}
            </div>

            {/* Week labels row — completely outside bar container so they never get hidden */}
            <div className="flex justify-between gap-3 px-1">
                {USER_GROWTH_DATA.map((d, i) => (
                    <div key={i} className="flex-1 text-center">
                        <span className="text-[12px] font-semibold text-[#98A2B3]">{d.week}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Dashboard = () => {
    const [timeRange, setTimeRange] = useState('Today');

    // Revenue Growth – large lavender fill for Human, thin orange for AI
    const revenueChartOptions: any = {
        chart: {
            toolbar: { show: false },
            zoom: { enabled: false },
        },
        stroke: { curve: 'smooth', width: [4, 3] },
        fill: {
            type: ['gradient', 'gradient'],
            gradient: [
                {
                    type: 'vertical',
                    shadeIntensity: 1,
                    colorStops: [
                        [{ offset: 0, color: '#B0B8E8', opacity: 0.8 }, { offset: 100, color: '#B0B8E8', opacity: 0.1 }]
                    ]
                },
                {
                    type: 'vertical',
                    shadeIntensity: 1,
                    colorStops: [
                        [{ offset: 0, color: '#FFB020', opacity: 0.5 }, { offset: 100, color: '#FFB020', opacity: 0.05 }]
                    ]
                }
            ]
        },
        colors: ['#1A1F4D', '#FFB020'],
        dataLabels: { enabled: false },
        markers: { size: 0 },
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: { style: { fontSize: '12px', fontWeight: 600, colors: '#98A2B3' } },
        },
        yaxis: { show: false },
        grid: { show: false },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            fontWeight: 700,
            fontSize: '12px',
            markers: { width: 10, height: 10, radius: 50 },
        },
        tooltip: { x: { show: true } },
    };

    // User Growth – pill-shaped grouped bars, Active (navy) + Regs (light gray)
    // (removed – replaced with custom UserGrowthChart component)

    return (
        <div className="space-y-8 pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-[32px] font-black text-[#0A0E27] tracking-tight">System Overview</h1>
                    <p className="text-[15px] font-medium text-[#667085]">Real-time performance metrics and astrologer segments.</p>
                </div>

                <div className="flex items-center gap-2 p-1 bg-white border border-[#EDEDF2] rounded-2xl shadow-sm">
                    {['Today', '7 Days', '30 Days'].map((range) => (
                        <button
                            key={range}
                            onClick={() => setTimeRange(range)}
                            className={cn(
                                "px-6 py-2.5 rounded-xl text-[14px] font-black transition-all",
                                timeRange === range ? "bg-[#0A0E27] text-white shadow-lg" : "text-[#667085] hover:bg-gray-50"
                            )}
                        >
                            {range}
                        </button>
                    ))}
                    <div className="w-px h-6 bg-[#EDEDF2] mx-2" />
                    <button className="p-2.5 text-[#667085] hover:bg-gray-50 rounded-xl transition-colors">
                        <IconCalendar size={20} />
                    </button>
                </div>
            </div>

            {/* Main Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Users"
                    value="124,592"
                    trend="+12%"
                    icon={IconUsersGroup}
                    iconColor="text-gray-600"
                />
                <StatCard
                    title="Active Users"
                    value="8,942"
                    trend="+4%"
                    icon={IconUsers}
                    iconColor="text-[#12B76A]"
                    badge="Daily"
                    badgeColor="bg-blue-50 text-blue-600"
                    footer="42,105 Monthly Active (MAU)"
                />
                <StatCard
                    title="Total Astrologers"
                    value="1,450"
                    icon={IconChartBar}
                    iconColor="text-purple-600"
                    subValues={[
                        { label: 'Human', value: '1,200' },
                        { label: 'AI', value: '250' }
                    ]}
                />
                <StatCard
                    title="Online Now"
                    value="342"
                    icon={IconWifi}
                    iconColor="text-orange-500"
                    progress={85}
                    subValues={[
                        { label: 'Human', value: '290' },
                        { label: 'AI', value: '52' }
                    ]}
                />
                <StatCard
                    title="Total Revenue"
                    value="₹2.4M"
                    icon={IconCurrencyRupee}
                    iconColor="text-green-600"
                    subValues={[
                        { label: 'Human', value: '₹1.9M' },
                        { label: 'AI', value: '₹0.5M' }
                    ]}
                />
                <StatCard
                    title="Today's Revenue"
                    value="₹14,250"
                    icon={IconCalendarEvent}
                    iconColor="text-blue-600"
                    subValues={[
                        { label: 'Human', value: '₹11.2k' },
                        { label: 'AI', value: '₹3.0k' }
                    ]}
                />
                <StatCard
                    title="Active Sessions"
                    value="128"
                    icon={IconPhone}
                    iconColor="text-indigo-600"
                    subValues={[
                        { label: 'Chat', value: '82' },
                        { label: 'Call', value: '46' }
                    ]}
                    footer="Human: 94 | AI: 34"
                />
                <StatCard
                    title="Wallet Liability"
                    value="₹345k"
                    icon={IconWallet}
                    iconColor="text-gray-500"
                    footer="Cumulative pending balances"
                />
            </div>

            {/* Quick Actions Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-[24px] border border-[#EDEDF2] flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
                            <IconShoppingBag size={24} />
                        </div>
                        <div>
                            <p className="text-[11px] font-black text-[#667085] uppercase tracking-widest">Store Orders</p>
                            <h4 className="text-[20px] font-black text-[#0A0E27]">42 New <span className="text-[#667085] text-[14px] font-medium">/ Today</span></h4>
                        </div>
                    </div>
                    <Button variant="outlined" size="sm" className="rounded-xl border-[#EDEDF2] font-black">View All</Button>
                </div>
                <div className="bg-white p-6 rounded-[24px] border border-[#EDEDF2] flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
                            <IconCalendar size={24} />
                        </div>
                        <div>
                            <p className="text-[11px] font-black text-[#667085] uppercase tracking-widest">Remedies Booking</p>
                            <h4 className="text-[20px] font-black text-[#0A0E27]">18 Upcoming <span className="text-[#667085] text-[14px] font-medium">/ Today</span></h4>
                        </div>
                    </div>
                    <Button variant="outlined" size="sm" className="rounded-xl border-orange-200 text-orange-600 font-black">Schedule</Button>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-[32px] border border-[#EDEDF2] shadow-sm space-y-6">
                    <div className="space-y-1">
                        <h3 className="text-[20px] font-black text-[#0A0E27]">Revenue Growth</h3>
                        <p className="text-[13px] font-medium text-[#667085]">Comparison between Human & AI revenue</p>
                    </div>
                    <Chart
                        options={revenueChartOptions}
                        series={[
                            { name: 'Human', data: [31, 40, 28, 51, 42, 109, 100] },
                            { name: 'AI', data: [11, 32, 45, 32, 34, 52, 41] }
                        ]}
                        type="area"
                        height={300}
                    />
                </div>
                <div className="bg-white p-8 rounded-[32px] border border-[#EDEDF2] shadow-sm space-y-4">
                    <div className="space-y-1">
                        <h3 className="text-[20px] font-black text-[#0A0E27]">User Growth</h3>
                        <p className="text-[13px] font-medium text-[#667085]">Registrations vs Active Users</p>
                    </div>
                    <UserGrowthChart />
                </div>
            </div>

            {/* Live Status Hub */}
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <IconCircleFilled size={12} className="text-red-500 animate-pulse" />
                        <h3 className="text-[20px] font-black text-[#0A0E27]">Live Status Hub</h3>
                    </div>
                    <div className="flex items-center gap-2 ml-auto">
                        <span className="px-3 py-1 bg-purple-50 text-purple-700 text-[11px] font-black uppercase tracking-widest rounded-lg border border-purple-100">Astrologers Live: 111</span>
                        <span className="px-3 py-1 bg-green-50 text-green-700 text-[11px] font-black uppercase tracking-widest rounded-lg border border-green-100">Active Sessions: 1</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#0A0E27] p-8 rounded-[32px] text-white space-y-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
                        <div className="space-y-2">
                            <p className="text-[11px] font-black text-white/50 uppercase tracking-widest">Current Live Sessions</p>
                            <h2 className="text-[64px] font-black leading-none">1</h2>
                        </div>
                        <Button className="w-full bg-white/10 hover:bg-white/20 border-white/20 text-white rounded-2xl h-12 font-black">Monitor Stream</Button>
                    </div>
                    <div className="bg-white p-8 rounded-[32px] border border-[#EDEDF2] shadow-sm space-y-8">
                        <div className="space-y-2">
                            <p className="text-[11px] font-black text-[#667085] uppercase tracking-widest">Upcoming Sessions</p>
                            <h2 className="text-[64px] font-black text-[#0A0E27] leading-none">0</h2>
                        </div>
                        <Button variant="outlined" className="w-full border-[#EDEDF2] text-[#0A0E27] rounded-2xl h-12 font-black">View Schedule</Button>
                    </div>
                    <div className="bg-white p-8 rounded-[32px] border border-[#EDEDF2] shadow-sm space-y-8">
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <p className="text-[11px] font-black text-[#667085] uppercase tracking-widest">Complete Session</p>
                                <span className="px-2 py-0.5 bg-green-50 text-green-600 text-[10px] font-black rounded-full">Last: 0s ago</span>
                            </div>
                            <h2 className="text-[64px] font-black text-[#0A0E27] leading-none">144</h2>
                        </div>
                        <Button variant="outlined" className="w-full border-[#EDEDF2] text-[#0A0E27] rounded-2xl h-12 font-black">View History</Button>
                    </div>
                </div>
            </div>

            {/* Consultations Table */}
            <div className="bg-white rounded-[32px] border border-[#EDEDF2] shadow-sm overflow-hidden">
                <div className="p-8 border-b border-[#F2F4F7] flex items-center justify-between">
                    <h3 className="text-[20px] font-black text-[#0A0E27]">Last 5 Consultations</h3>
                    <Button variant="ghost" className="text-[#1A1F4D] font-black flex items-center gap-1 group">
                        View All <IconChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#F8F9FC]">
                                <th className="px-8 py-4 text-[11px] font-black text-[#667085] uppercase tracking-widest">User</th>
                                <th className="px-8 py-4 text-[11px] font-black text-[#667085] uppercase tracking-widest">Astrologer</th>
                                <th className="px-8 py-4 text-[11px] font-black text-[#667085] uppercase tracking-widest">Type</th>
                                <th className="px-8 py-4 text-[11px] font-black text-[#667085] uppercase tracking-widest">Segment</th>
                                <th className="px-8 py-4 text-[11px] font-black text-[#667085] uppercase tracking-widest">Start Time</th>
                                <th className="px-8 py-4 text-[11px] font-black text-[#667085] uppercase tracking-widest text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F2F4F7]">
                            {[
                                { user: 'Rahul Sharma', phone: '+91 98765-XXXXX', astro: 'Acharya Vaman', type: 'Chat', icon: IconMessageChatbot, segment: 'Human', time: '10:45 AM', status: 'Completed', color: 'bg-green-50 text-green-600' },
                                { user: 'Vikram K.', phone: '+91 88234-XXXXX', astro: 'Shakti AI', type: 'Chat', icon: IconMessageChatbot, segment: 'AI AI', time: '09:55 AM', status: 'Completed', color: 'bg-green-50 text-green-600' },
                                { user: 'Ananya D.', phone: '+91 77234-XXXXX', astro: 'Pandit Ji', type: 'Audio Call', icon: IconPhone, segment: 'Human', time: '09:30 AM', status: 'Missed', color: 'bg-orange-50 text-orange-600' },
                                { user: 'Mohit K.', phone: '+91 99123-XXXXX', astro: 'Shakti AI', type: 'Chat', icon: IconMessageChatbot, segment: 'AI AI', time: '08:45 AM', status: 'Active', color: 'bg-blue-50 text-blue-600' },
                                { user: 'Suman L.', phone: '+91 63211-XXXXX', astro: 'Guru Dev', type: 'Video', icon: IconVideo, segment: 'Human', time: '08:15 AM', status: 'Completed', color: 'bg-green-50 text-green-600' },
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[#1A1F4D]/5 text-[#1A1F4D] flex items-center justify-center font-bold text-[14px]">
                                                {row.user.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <p className="text-[15px] font-black text-[#0A0E27]">{row.user}</p>
                                                <p className="text-[12px] font-medium text-[#667085]">{row.phone}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-[14px] font-black text-[#0A0E27]">{row.astro}</td>
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-2 text-[14px] font-medium text-[#0A0E27]">
                                            <row.icon size={18} className="text-[#667085]" /> {row.type}
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className={cn(
                                            "px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest",
                                            row.segment.includes('AI') ? "bg-orange-50 text-orange-700 border border-orange-100" : "bg-gray-50 text-gray-700 border border-gray-100"
                                        )}>
                                            {row.segment}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-[14px] font-medium text-[#667085]">{row.time}</td>
                                    <td className="px-8 py-5 text-right">
                                        <span className={cn("px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest", row.color)}>
                                            {row.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

