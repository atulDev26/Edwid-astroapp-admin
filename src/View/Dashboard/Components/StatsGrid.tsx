import React from 'react';
import {
    IconUsers, IconChartBar, IconUsersGroup, IconWifi,
    IconCurrencyRupee, IconWallet, IconCalendarEvent, IconPhone,
} from '@tabler/icons-react';
import StatCard from './StatCard';

const StatsGrid: React.FC = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
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
);

export default StatsGrid;
