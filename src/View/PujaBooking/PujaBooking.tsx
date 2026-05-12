import React, { useState } from 'react';
import { IconPlus } from '@tabler/icons-react';
import Breadcrumb from '../../Components/Common/Breadcrumb';
import Button from '../../Components/Common/Button';
import PujaStats from './Components/PujaStats';
import PujaTabs from './Components/PujaTabs';
import PujaServiceList from './Components/PujaServiceList';
import PujaBookingManagement from './Components/PujaBookingManagement';

const PujaBooking = () => {
    const [activeTab, setActiveTab] = useState(0);

    const breadcrumbItems = [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Puja Booking' }
    ];

    return (
        <div className="space-y-8 w-full max-w-full overflow-x-hidden pb-10">
            {/* Header Section */}
            <div className="flex flex-col gap-6">
                <Breadcrumb items={breadcrumbItems} />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                        <h1 className="text-[28px] md:text-[32px] font-black text-[#0A0E27] tracking-tight leading-tight">
                            Puja Booking Management
                        </h1>
                        <p className="text-[14px] md:text-[15px] font-medium text-[#667085]">
                            Manage services, view schedules, and handle customer bookings.
                        </p>
                    </div>
                    <Button variant="primary" className="h-11 px-6 rounded-xl bg-[#0A0E27] text-white font-bold flex items-center gap-2 shadow-lg shadow-black/5">
                        <IconPlus size={20} />
                        Add Puja Service
                    </Button>
                </div>
            </div>

            {/* Stats Grid */}
            <PujaStats activeTab={activeTab} />

            {/* Main Tabs */}
            <PujaTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Conditional Main Content */}
            {activeTab === 0 ? <PujaServiceList /> : <PujaBookingManagement />}
        </div>
    );
};

export default PujaBooking;
