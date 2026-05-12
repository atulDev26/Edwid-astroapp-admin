import {
    IconCheck,
    IconDotsVertical,
    IconDownload,
    IconFilter,
    IconX
} from '@tabler/icons-react';
import Badge from '../../../Components/Common/Badge';
import Button from '../../../Components/Common/Button';
import CustomDataTable from '../../../Components/Common/DataTable';
import { cn } from '../../../Utils/cn';

const bookingsData = [
    { id: '#PUJ-29384', userName: 'Rajesh Kumar Sharma', serviceName: 'Satyanarayan Katha', dateTime: 'Oct 24, 2023 10:30 AM', amount: '₹ 5,100', status: 'Pending' },
    { id: '#PUJ-29385', userName: 'Anjali Deshpande', serviceName: 'Ganesh Chaturthi Puja', dateTime: 'Oct 25, 2023 08:00 AM', amount: '₹ 11,000', status: 'Accepted' },
    { id: '#PUJ-29386', userName: 'Vikram Singh', serviceName: 'Navagraha Shanti', dateTime: 'Oct 25, 2023 02:15 PM', amount: '₹ 2,500', status: 'Pending' },
    { id: '#PUJ-29387', userName: 'Sneha Patil', serviceName: 'Maha Mrityunjaya Jaap', dateTime: 'Oct 26, 2023 06:30 AM', amount: '₹ 21,000', status: 'Rejected' },
    { id: '#PUJ-29388', userName: 'Mohit Verma', serviceName: 'Saraswati Puja', dateTime: 'Oct 27, 2023 09:00 AM', amount: '₹ 3,500', status: 'Pending' },
];

const heatmapData = [
    { name: 'Satyanarayan Katha', percentage: 64, color: 'bg-[#1A1F4D]' },
    { name: 'Maha Mrityunjaya', percentage: 18, color: 'bg-orange-400' },
    { name: 'Navagraha Shanti', percentage: 12, color: 'bg-gray-400' },
];

const PujaBookingManagement = () => {
    return (
        <div className="space-y-8">
            <div className="bg-white rounded-[20px] border border-[#EDEDF2] shadow-sm overflow-hidden">
                <div className="p-6 border-b border-[#EDEDF2] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <h2 className="text-[18px] font-black text-[#1A1F4D]">Incoming Bookings</h2>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <Button variant="ghost" className="h-10 px-4 flex items-center gap-2 text-[#667085] font-bold border border-[#EDEDF2] bg-white rounded-xl flex-1 sm:flex-none"><IconFilter size={18} />Filter</Button>
                        <Button variant="primary" className="h-10 px-4 flex items-center gap-2 bg-[#0A0E27] text-white font-bold rounded-xl flex-1 sm:flex-none"><IconDownload size={18} />Export Report</Button>
                    </div>
                </div>
                <CustomDataTable
                    columns={[
                        { name: 'BOOKING ID', selector: (row: any) => row.id, cell: (row: any) => <span className="font-bold text-[#1A1F4D]">{row.id}</span> },
                        { name: 'USER NAME', selector: (row: any) => row.userName, cell: (row: any) => <span className="font-bold text-[#0A0E27]">{row.userName}</span> },
                        { name: 'SERVICE NAME', selector: (row: any) => row.serviceName, cell: (row: any) => <span className="text-[#667085]">{row.serviceName}</span> },
                        { name: 'DATE & TIME', selector: (row: any) => row.dateTime, cell: (row: any) => <div className="flex flex-col"><span className="text-[13px] font-bold text-[#0A0E27]">{row.dateTime.split(' ').slice(0, 3).join(' ')}</span><span className="text-[11px] font-medium text-[#667085]">{row.dateTime.split(' ').slice(3).join(' ')}</span></div> },
                        { name: 'AMOUNT (INR)', selector: (row: any) => row.amount, cell: (row: any) => <span className="font-black text-[#0A0E27]">{row.amount}</span> },
                        { name: 'STATUS', selector: (row: any) => row.status, cell: (row: any) => <Badge variant={row.status === 'Accepted' ? 'success' : row.status === 'Rejected' ? 'error' : 'warning'} className={cn("border-none px-3", row.status === 'Accepted' ? "bg-blue-50 text-blue-600" : row.status === 'Rejected' ? "bg-red-50 text-red-600" : "bg-orange-50 text-orange-600")}><div className="flex items-center gap-1.5"><div className={cn("w-1.5 h-1.5 rounded-full", row.status === 'Accepted' ? "bg-blue-600" : row.status === 'Rejected' ? "bg-red-600" : "bg-orange-600")} />{row.status}</div></Badge> },
                        { name: 'ACTIONS', cell: (row: any) => <div className="flex items-center gap-2">{row.status === 'Pending' ? <><button className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center"><IconCheck size={18} /></button><button className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center"><IconX size={18} /></button></> : <button className="p-2 hover:bg-gray-100 rounded-lg text-[#667085]"><IconDotsVertical size={18} /></button>}</div>, right: true }
                    ]}
                    data={bookingsData}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="relative rounded-[24px] overflow-hidden min-h-[280px] bg-[#1A1F4D] flex items-center p-8">
                    <div className="absolute inset-0 opacity-40"><img src="https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&q=80&w=800" alt="Background" className="w-full h-full object-cover" /></div>
                    <div className="relative z-10 max-w-md space-y-6">
                        <div className="space-y-3"><h3 className="text-[24px] font-black text-white leading-tight">Optimize Puja Schedules</h3><p className="text-[14px] text-white/80 font-medium">Manage priest availability and temple slots with AI-driven scheduling.</p></div>
                        <Button className="bg-[#FFB020] text-[#0A0E27] font-black h-12 px-8 rounded-xl shadow-lg">Explore Planner</Button>
                    </div>
                </div>
                <div className="bg-white rounded-[24px] border border-[#EDEDF2] shadow-sm p-8 space-y-8">
                    <h3 className="text-[18px] font-black text-[#1A1F4D]">Popular Services Heatmap</h3>
                    <div className="space-y-6">{heatmapData.map((item, i) => (<div key={i} className="space-y-2"><div className="flex justify-between items-center text-[14px] font-bold"><span className="text-[#0A0E27]">{item.name}</span><span className="text-[#1A1F4D]">{item.percentage}%</span></div><div className="h-2.5 w-full bg-[#F8F9FC] rounded-full overflow-hidden"><div className={cn("h-full rounded-full transition-all duration-1000", item.color)} style={{ width: `${item.percentage}%` }} /></div></div>))}</div>
                </div>
            </div>
        </div>
    );
};

export default PujaBookingManagement;
