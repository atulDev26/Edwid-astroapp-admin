import React from 'react';
import { IconHistory, IconFileText, IconWallet, IconCheck } from '@tabler/icons-react';
import { cn } from '../../../Utils/cn';

const activities = [
    {
        id: 1,
        title: 'Detailed Kundli Generated',
        description: "Comprehensive life report generated for 'Career & Marriage'. Downloaded PDF successfully.",
        date: 'Today, 11:45 AM',
        icon: IconFileText,
        iconBg: 'bg-[#E8EAF6]',
        iconColor: 'text-[#3F51B5]'
    },
    {
        id: 2,
        title: 'Wallet Recharge Success',
        description: 'Successfully added ₹2,000 using UPI (PhonePe). Transaction ID: #TXN998822.',
        date: 'Yesterday, 06:20 PM',
        icon: IconWallet,
        iconBg: 'bg-[#E8F5E9]',
        iconColor: 'text-[#4CAF50]'
    }
];

const UserRecentActivity = () => {
    return (
        <div className="bg-white rounded-[24px] border border-outline-variant p-8 space-y-8 shadow-sm">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-on-surface">
                    <IconHistory size={24} />
                </div>
                <h3 className="text-xl font-black text-[#1A1C3D]">Recent Activity</h3>
            </div>

            <div className="relative space-y-6">
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-outline-variant" />

                {activities.map((activity, index) => (
                    <div key={activity.id} className="relative pl-12">
                        {/* Icon on Line */}
                        <div className={cn(
                            "absolute left-0 top-1 w-10 h-10 rounded-full border-4 border-white flex items-center justify-center z-10",
                            activity.iconBg,
                            activity.iconColor
                        )}>
                            <activity.icon size={18} />
                        </div>

                        {/* Content Box */}
                        <div className="bg-white border border-outline-variant rounded-2xl p-5 space-y-2 hover:border-primary transition-colors group">
                            <div className="flex items-center justify-between">
                                <h4 className="font-bold text-[#1A1C3D] group-hover:text-primary transition-colors">{activity.title}</h4>
                                <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-wider">{activity.date}</span>
                            </div>
                            <p className="text-sm text-on-surface-variant leading-relaxed">
                                {activity.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserRecentActivity;
