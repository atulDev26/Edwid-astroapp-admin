import React from 'react';
import Chart from 'react-apexcharts';

const REVENUE_OPTIONS: any = {
    chart: { toolbar: { show: false }, zoom: { enabled: false } },
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
            <div className="flex items-end justify-between gap-2 sm:gap-3 px-1" style={{ height: chartHeight }}>
                {USER_GROWTH_DATA.map((d, i) => {
                    const regsH = Math.round((d.regs / maxVal) * chartHeight);
                    const activeH = Math.round((d.active / maxVal) * chartHeight);
                    return (
                        <div key={i} className="relative flex-1" style={{ height: regsH }}>
                            <div className="absolute inset-0 bg-[#E8EBF4] rounded-t-md" />
                            <div
                                className="absolute bottom-0 left-0 right-0 bg-[#1A1F4D] rounded-t-md"
                                style={{ height: activeH }}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-between gap-2 sm:gap-3 px-1">
                {USER_GROWTH_DATA.map((d, i) => (
                    <div key={i} className="flex-1 text-center">
                        <span className="text-[11px] sm:text-[12px] font-semibold text-[#98A2B3]">{d.week}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ChartsSection: React.FC = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <div className="bg-white p-6 sm:p-8 rounded-[32px] border border-[#EDEDF2] shadow-sm space-y-4 sm:space-y-6">
            <div className="space-y-1">
                <h3 className="text-[18px] sm:text-[20px] font-black text-[#0A0E27]">Revenue Growth</h3>
                <p className="text-[12px] sm:text-[13px] font-medium text-[#667085]">Comparison between Human & AI revenue</p>
            </div>
            <Chart
                options={REVENUE_OPTIONS}
                series={[
                    { name: 'Human', data: [31, 40, 28, 51, 42, 109, 100] },
                    { name: 'AI', data: [11, 32, 45, 32, 34, 52, 41] }
                ]}
                type="area"
                height={260}
            />
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-[32px] border border-[#EDEDF2] shadow-sm space-y-4">
            <div className="space-y-1">
                <h3 className="text-[18px] sm:text-[20px] font-black text-[#0A0E27]">User Growth</h3>
                <p className="text-[12px] sm:text-[13px] font-medium text-[#667085]">Registrations vs Active Users</p>
            </div>
            <UserGrowthChart />
        </div>
    </div>
);

export default ChartsSection;
