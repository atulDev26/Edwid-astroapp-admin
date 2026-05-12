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

const Reports = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('Daily');
    const [compareWithPrevious, setCompareWithPrevious] = useState(true);
    const [startDate, setStartDate] = useState<Date | null>(new Date(new Date().getFullYear(), new Date().getMonth(), 1));
    const [endDate, setEndDate] = useState<Date | null>(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0));

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
            <ReportFilters 
                selectedPeriod={selectedPeriod}
                setSelectedPeriod={setSelectedPeriod}
                compareWithPrevious={compareWithPrevious}
                setCompareWithPrevious={setCompareWithPrevious}
                startDate={startDate}
                endDate={endDate}
                onDateChange={handleDateChange}
            />

            {/* Stats Grid */}
            <ReportStats />

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
