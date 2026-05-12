import React, { useState } from 'react';
import { IconDownload, IconFileText } from '@tabler/icons-react';
import Breadcrumb from '../../Components/Common/Breadcrumb';
import Button from '../../Components/Common/Button';

// Feature Components
import ReportStats from './Components/ReportStats';
import ReportFilters from './Components/ReportFilters';
import RevenueChart from './Components/RevenueChart';
import TopAstrologersTable from './Components/TopAstrologersTable';
import TopUsersTable from './Components/TopUsersTable';

import {
    startOfDay,
    endOfDay,
    startOfWeek,
    endOfWeek,
    startOfMonth,
    endOfMonth
} from 'date-fns';

const Reports = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('Monthly');
    const [compareWithPrevious, setCompareWithPrevious] = useState(true);
    const [startDate, setStartDate] = useState<Date | null>(startOfMonth(new Date()));
    const [endDate, setEndDate] = useState<Date | null>(endOfMonth(new Date()));

    const handlePeriodChange = (period: string) => {
        setSelectedPeriod(period);
        const now = new Date();

        switch (period) {
            case 'Daily':
                setStartDate(startOfDay(now));
                setEndDate(endOfDay(now));
                break;
            case 'Weekly':
                setStartDate(startOfWeek(now, { weekStartsOn: 1 })); // Monday
                setEndDate(endOfWeek(now, { weekStartsOn: 1 }));
                break;
            case 'Monthly':
                setStartDate(startOfMonth(now));
                setEndDate(endOfMonth(now));
                break;
            default:
                break;
        }
    };

    const handleDateChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <div className="space-y-6 md:space-y-8 p-4 md:p-6 max-w-[1600px] mx-auto">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                    <Breadcrumb items={[{ label: 'Dashboard', href: '/' }, { label: 'Reports' }]} />
                    <h1 className="typography-h1 text-[#0A0E27]">Earnings & Reports</h1>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outlined" className="h-10 px-4 flex items-center gap-2 border-[#D0D5DD]">
                        <IconDownload size={18} />
                        Export CSV
                    </Button>
                    <Button className="h-10 px-4 flex items-center gap-2 bg-[#040052]">
                        <IconFileText size={18} />
                        Export PDF
                    </Button>
                </div>
            </div>

            {/* Filters Section */}
            <div className="relative z-50">
                <ReportFilters
                    selectedPeriod={selectedPeriod}
                    setSelectedPeriod={handlePeriodChange}
                    compareWithPrevious={compareWithPrevious}
                    setCompareWithPrevious={setCompareWithPrevious}
                    startDate={startDate}
                    endDate={endDate}
                    onDateChange={handleDateChange}
                />
            </div>

            {/* Stats Grid */}
            <div className="relative z-0">
                <ReportStats />
            </div>

            {/* Main Chart Section */}
            <RevenueChart />

            {/* Bottom Tables Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <TopAstrologersTable />
                <TopUsersTable />
            </div>
        </div>
    );
};

export default Reports;
