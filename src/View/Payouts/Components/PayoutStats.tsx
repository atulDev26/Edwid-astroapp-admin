import React from 'react';
import { 
    IconChartBar, 
    IconClipboardList, 
    IconClock, 
    IconBuildingBank 
} from '@tabler/icons-react';
import StatCard from '../../../Components/Common/StatCard';

const PayoutStats = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
                label="Total Payouts (Month)"
                value="$42,890.00"
                trend={{ value: "12.5%", isPositive: true }}
                subValue="last month"
                icon={<IconChartBar size={20} />}
            />
            <StatCard
                label="Pending Requests"
                value="12 Requests"
                subValue="Total value: $28,450.00"
                icon={<IconClipboardList size={20} />}
            />
            <StatCard
                label="Average Payout Time"
                value="4.2 Hours"
                trend={{ value: "1.1h", isPositive: true }}
                subValue="Improved by"
                icon={<IconClock size={20} />}
            />
            <StatCard
                label="Budget Balance"
                value="$128,500.00"
                variant="dark"
                icon={<IconBuildingBank size={20} />}
            />
        </div>
    );
};

export default PayoutStats;
