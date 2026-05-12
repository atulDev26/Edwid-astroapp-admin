import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { IconDotsVertical } from '@tabler/icons-react';

const RevenueChart = () => {
    const chartOptions: any = {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: { show: false },
            zoom: { enabled: false }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 4,
                columnWidth: '35%',
            },
        },
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        yaxis: {
            labels: {
                formatter: (val: number) => `${val}k`
            }
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            markers: { radius: 12 },
            itemMargin: { horizontal: 10, vertical: 20 }
        },
        fill: { opacity: 1 },
        colors: ['#040052', '#D9D9F2', '#FEAE2C'],
        grid: {
            borderColor: '#F1F1F1',
            strokeDashArray: 4,
            xaxis: { lines: { show: false } }
        },
        dataLabels: { enabled: false }
    };

    const chartSeries = [
        { name: 'Call', data: [55, 75, 48, 65, 75, 40, 85] },
        { name: 'Chat', data: [55, 45, 70, 38, 60, 25, 42] },
        { name: 'Other', data: [15, 28, 10, 32, 22, 45, 30] }
    ];

    return (
        <div className="bg-white p-4 md:p-6 rounded-2xl border border-[#EDEDF2] shadow-sm">
            <div className="flex items-center justify-between mb-8">
                <h3 className="typography-h3 text-[#101828]">Revenue Breakdown by Source</h3>
                <button className="p-2 hover:bg-gray-50 rounded-lg">
                    <IconDotsVertical size={20} className="text-[#667085]" />
                </button>
            </div>
            <div className="h-[300px] sm:h-[400px] w-full">
                <ReactApexChart 
                    options={chartOptions} 
                    series={chartSeries} 
                    type="bar" 
                    height="100%" 
                />
            </div>
        </div>
    );
};

export default RevenueChart;
