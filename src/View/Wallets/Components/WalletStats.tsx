import React from 'react';
import {
    IconBuildingBank,
    IconTrendingUp,
    IconClipboardText,
    IconPig
} from '@tabler/icons-react';
import StatCard from '../../../Components/Common/StatCard';

const WalletStats = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
                label="TOTAL USER WALLET LIABILITY"
                value="₹2,45,890"
                trend={{ value: "2.4%", isPositive: true }}
                subValue="last month"
                icon={<IconBuildingBank />}
            />
            <StatCard
                label="TODAY'S DEPOSITS"
                value="₹18,450"
                trend={{ value: "12%", isPositive: true }}
                subValue="average"
                icon={<IconPig />}
            />
            <StatCard
                label="TODAY'S SESSION REVENUE"
                value="₹42,100"
                trend={{ value: "8.1%", isPositive: true }}
                subValue="yesterday"
                icon={<IconTrendingUp />}
            />
            <StatCard
                label="REFUNDS"
                value="24"
                subValue="Requires attention"
                variant="dark"
                icon={<IconClipboardText />}
                className="cursor-pointer hover:scale-[1.02]"
            />
        </div>
    );
};

export default WalletStats;
