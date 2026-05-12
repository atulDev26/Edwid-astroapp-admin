import {
    IconArrowRight,
    IconCalendar,
    IconEdit,
    IconFilter,
    IconMapPin,
    IconSearch,
    IconTrash
} from '@tabler/icons-react';
import Badge from '../../../Components/Common/Badge';
import Button from '../../../Components/Common/Button';
import CustomDataTable from '../../../Components/Common/DataTable';
import { cn } from '../../../Utils/cn';

const services = [
    {
        id: '001',
        title: '131 Brahmin 23,00,000 Shani Mool Mantra Jaap',
        description: 'For Removing Negativity and Ensuring Protection from Obstacles in Life.',
        location: 'Shri Navgraha Shani Temple, Dabra, MP',
        date: '16 May, Saturday, Shani Amavasya',
        image: 'https://images.unsplash.com/photo-1605648916319-cf082f7524a1?auto=format&fit=crop&q=80&w=400',
        badges: ['13-YEAR RARE', 'LIVE'],
    },
    {
        id: '002',
        title: 'Shani Saade Saati Peeda Shanti Mahapuja',
        description: 'For Overcoming Challenges and Adversities in Life and Purity of Mind.',
        location: 'Shri Navgraha Shani Mandir, Ujjain, MP',
        date: '16 May, Saturday, Shani Amavasya',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
        badges: ['13-YEAR RARE', 'LIVE'],
    },
    {
        id: '003',
        title: 'Kaal Sarp Dosh Shanti Puja at Trimbakeshwar',
        description: 'Removal of Kaal Sarp Dosh and its Negative Effects on Growth and Success.',
        location: 'Trimbakeshwar Godavari Tirth, Nashik',
        date: '11 May, Monday, Jyeshtha Krishna Navami',
        image: 'https://images.unsplash.com/photo-1590059536293-847ba8374d6f?auto=format&fit=crop&q=80&w=400',
        badges: ['DOSH NIVARAN PUJA'],
    }
];

const catalogData = [
    { id: '1', name: 'Satyanarayan Katha', category: 'Special Occasion', price: '₹2,100', status: 'Active' },
    { id: '2', name: 'Maha Mrityunjaya Jaap', category: 'Health & Well-being', price: '₹11,000', status: 'Active' },
    { id: '3', name: 'Ganesh Chaturthi Puja', category: 'Festivals', price: '₹5,500', status: 'Active' },
    { id: '4', name: 'Navratri Durga Puja', category: 'Festivals', price: '₹7,500', status: 'Active' },
];

const PujaServiceList = () => {
    return (
        <div className="space-y-6">
            <div className="bg-[#F8F9FC] p-4 rounded-[20px] border border-[#EDEDF2] shadow-sm">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="relative flex-1 min-w-0">
                        <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#667085]" size={20} />
                        <input type="text" placeholder="Search services..." className="w-full h-11 pl-10 pr-4 bg-white border border-[#EDEDF2] rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-[#0A0E27]/5" />
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <select className="h-11 px-4 bg-white border border-[#EDEDF2] rounded-xl text-[14px] font-medium text-[#0A0E27] min-w-[150px]"><option>All Categories</option></select>
                        <select className="h-11 px-4 bg-white border border-[#EDEDF2] rounded-xl text-[14px] font-medium text-[#0A0E27] min-w-[150px]"><option>All Statuses</option></select>
                        <Button variant="ghost" className="h-11 px-4 flex items-center gap-2 text-[#0A0E27] font-bold border border-[#EDEDF2] bg-white rounded-xl"><IconFilter size={18} />More Filters</Button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, i) => (
                    <div key={i} className="bg-white rounded-[24px] border border-[#EDEDF2] overflow-hidden shadow-sm hover:shadow-md transition-all group">
                        <div className="relative h-56 overflow-hidden">
                            <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute top-3 left-3 flex gap-2">
                                {service.badges.map((badge, bi) => (
                                    <span key={bi} className={cn("px-2 py-1 rounded-md text-[10px] font-black tracking-wider uppercase", badge === 'LIVE' ? "bg-red-500 text-white" : "bg-[#FFB020] text-[#0A0E27]")}>{badge}</span>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="space-y-2">
                                <span className="text-[10px] font-black text-red-500 uppercase tracking-widest block">TRIMBAKESHWAR KAAL SARP DOSH SPECIAL</span>
                                <h3 className="text-[18px] font-black text-[#0A0E27] leading-tight group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-[13px] font-medium text-[#667085] leading-relaxed line-clamp-2">{service.description}</p>
                            </div>
                            <div className="space-y-2.5">
                                <div className="flex items-center gap-2 text-[#667085]"><IconMapPin size={16} className="text-[#FFB020]" /><span className="text-[12px] font-bold">{service.location}</span></div>
                                <div className="flex items-center gap-2 text-[#667085]"><IconCalendar size={16} className="text-[#FFB020]" /><span className="text-[12px] font-bold">{service.date}</span></div>
                            </div>
                            <Button className="w-full h-12 bg-[#12B76A] hover:bg-[#0E9F5D] text-white font-black rounded-xl flex items-center justify-center gap-2 transition-all">Puja {service.id}<IconArrowRight size={18} /></Button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="space-y-4">
                <h2 className="text-[20px] font-black text-[#0A0E27] px-2">All Services Catalog</h2>
                <div className="bg-white rounded-[20px] border border-[#EDEDF2] shadow-sm overflow-hidden">
                    <CustomDataTable
                        columns={[
                            { name: 'SERVICE NAME', selector: (row: any) => row.name, cell: (row: any) => <span className="font-bold text-[#0A0E27]">{row.name}</span> },
                            { name: 'CATEGORY', selector: (row: any) => row.category, cell: (row: any) => <span className="text-[#667085]">{row.category}</span> },
                            { name: 'BASE PRICE', selector: (row: any) => row.price, cell: (row: any) => <span className="font-bold text-[#0A0E27]">{row.price}</span> },
                            { name: 'STATUS', selector: (row: any) => row.status, cell: () => <Badge variant="success" className="bg-[#E7F9ED] text-[#12B76A] border-none">Active</Badge> },
                            { name: 'ACTIONS', cell: () => <div className="flex items-center gap-2"><button className="p-2 hover:bg-gray-100 rounded-lg text-[#667085]"><IconEdit size={18} /></button><button className="p-2 hover:bg-red-50 rounded-lg text-red-500"><IconTrash size={18} /></button></div>, right: true }
                        ]}
                        data={catalogData}
                        selectableRows={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default PujaServiceList;
