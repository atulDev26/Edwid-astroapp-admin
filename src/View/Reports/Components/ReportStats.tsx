import React from 'react';
import StatCard from '../../../Components/Common/StatCard';

const ReportStats = () => {
    const stats = [
        { label: 'Total Revenue', value: '₹1,245.8k', trend: '12.5%', isPositive: true },
        { label: 'Chat Earnings', value: '₹450.2k', trend: '8.2%', isPositive: true },
        { label: 'Call Earnings', value: '₹580.0k', trend: '15.1%', isPositive: true },
        { label: 'Video Earnings', value: '₹120.5k', trend: '2.4%', isPositive: false },
        { label: 'Store Sales', value: '₹45.1k', trend: '5.0%', isPositive: true },
        { label: 'Puja Bookings', value: '₹50.0k', trend: '22.8%', isPositive: true },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {stats.map((stat, index) => (
                <StatCard
                    key={index}
                    label={stat.label}
                    value={stat.value}
                    trend={{
                        value: stat.trend,
                        isPositive: stat.isPositive
                    }}
                    className="min-h-0 py-5"
                />
            ))}
        </div>
    );
};

export default ReportStats;
