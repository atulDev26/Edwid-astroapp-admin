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
    const series = [
        {
            name: 'Active',
            data: USER_GROWTH_DATA.map(d => d.active)
        },
        {
            name: 'Regs',
            data: USER_GROWTH_DATA.map(d => d.regs - d.active)
        }
    ];

    const options: any = {
        chart: {
            type: 'bar',
            stacked: true,
            toolbar: { show: false },
            zoom: { enabled: false },
            fontFamily: 'inherit'
        },
        plotOptions: {
            bar: {
                borderRadius: 8,
                borderRadiusApplication: 'end', // Only top of stack
                columnWidth: '50%',
            }
        },
        colors: ['#1A1F4D', '#E8EBF4'],
        dataLabels: { enabled: false },
        xaxis: {
            categories: USER_GROWTH_DATA.map(d => d.week),
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: { 
                style: { 
                    fontSize: '12px', 
                    fontWeight: 600, 
                    colors: '#98A2B3' 
                } 
            },
        },
        yaxis: { show: false },
        grid: { show: false },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            fontWeight: 700,
            fontSize: '12px',
            markers: { width: 10, height: 10, radius: 2 },
            labels: { colors: '#667085' },
            itemMargin: { horizontal: 10 }
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: (val: any, { series, seriesIndex, dataPointIndex }: any) => {
                    if (seriesIndex === 1) {
                        // Show Total Regs for the top part
                        return `${series[0][dataPointIndex] + val} (Total)`;
                    }
                    return `${val} (Active)`;
                }
            }
        }
    };

    return (
        <div className="h-[280px]">
            <Chart
                options={options}
                series={series}
                type="bar"
                height="100%"
            />
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
