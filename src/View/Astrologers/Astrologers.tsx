import {
    IconAlertCircle,
    IconBroadcast,
    IconDotsVertical,
    IconDownload,
    IconMessage2,
    IconPhone,
    IconPlus,
    IconTrendingUp,
    IconUsers,
    IconWallet,
    IconX
} from '@tabler/icons-react';
import { useState } from 'react';
import Breadcrumb from '../../Components/Common/Breadcrumb';
import Button from '../../Components/Common/Button';
import CustomDataTable from '../../Components/Common/DataTable';
import MultiSelectFilter from '../../Components/Common/MultiSelectFilter';
import Pagination from '../../Components/Common/Pagination';
import SearchInput from '../../Components/Common/SearchInput';

const Astrologers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState<string[]>([]);
    const [ratingFilter, setRatingFilter] = useState<string[]>([]);
    const [expertiseFilter, setExpertiseFilter] = useState<string[]>([]);

    const handleClearFilters = () => {
        setSearchQuery('');
        setStatusFilter([]);
        setRatingFilter([]);
        setExpertiseFilter([]);
    };

    const rowsPerPage = 10;
    const totalResults = 4280; // Example total
    const totalPages = Math.ceil(totalResults / rowsPerPage);

    const breadcrumbItems = [
        { label: 'Dashboard', href: '/' },
        { label: 'Astrologers' }
    ];

    const stats = [
        {
            title: 'TOTAL ONBOARDED',
            value: '4,280',
            trend: '+12%',
            icon: IconUsers,
            iconBg: 'bg-[#F0EFFF]',
            iconColor: 'text-[#5456A6]',
            trendColor: 'text-[#00A344]'
        },
        {
            title: 'CURRENTLY ONLINE',
            value: '156',
            badge: 'LIVE',
            badgeBg: 'bg-[#E6FFF0]',
            badgeColor: 'text-[#00A344]',
            icon: IconBroadcast,
            iconBg: 'bg-[#E6FFF0]',
            iconColor: 'text-[#00A344]'
        },
        {
            title: 'TOTAL PAYOUT (TODAY)',
            value: '$12,450.00',
            icon: IconWallet,
            iconBg: 'bg-[#FFF7E6]',
            iconColor: 'text-[#B28200]'
        },
        {
            title: 'PENDING WITHDRAWALS',
            value: '28',
            badge: 'ACTION REQUIRED',
            badgeBg: 'bg-[#FFF0F0]',
            badgeColor: 'text-[#BA1A1A]',
            icon: IconAlertCircle,
            iconBg: 'bg-[#FFF0F0]',
            iconColor: 'text-[#BA1A1A]'
        }
    ];

    const tableData = [
        {
            id: 'AST-1042',
            name: 'Dr. Priya Sharma',
            avatar: 'https://i.pravatar.cc/150?u=priya',
            type: 'Human',
            expertise: ['Vedic', 'Tarot'],
            rating: 'Online',
            status: 'Online',
            comm: '25%',
            rates: { call: '25/min', chat: '20/min' },
            earnings: '₹ 1,45,200',
            joined: '2024-03-10',
            actions: ['edit', 'more']
        },
        {
            id: 'AST-2019',
            name: 'Rahul Mishra',
            avatar: 'RM',
            type: 'Human',
            expertise: ['Vastu'],
            rating: 'Offline',
            status: 'Offline',
            comm: '30%',
            rates: { call: '40/min', chat: '35/min' },
            earnings: '₹ 82,500',
            joined: '2024-02-15',
            actions: ['edit', 'more']
        },
        {
            id: 'AST-3102',
            name: 'Suresh Kumar',
            avatar: 'https://i.pravatar.cc/150?u=suresh',
            type: 'AI',
            expertise: ['Numerology'],
            rating: 'Pending KYC',
            status: 'Pending KYC',
            comm: '-',
            rates: { request: '15/min' },
            earnings: '₹ 0',
            joined: '2024-05-01',
            actions: ['review_app', 'review']
        },
        {
            id: 'AST-0844',
            name: 'Anita Verma',
            avatar: 'https://i.pravatar.cc/150?u=anita',
            type: 'Human',
            expertise: ['Vedic'],
            rating: 'Banned',
            status: 'Banned',
            comm: '20%',
            rates: { call: '15/min' },
            earnings: '₹ 12,400',
            joined: '2023-11-20',
            actions: ['view_violation', 'details']
        }
    ];

    const columns = [
        {
            name: 'ASTROLOGER',
            selector: (row: any) => row.name,
            minWidth: '220px',
            cell: (row: any) => (
                <div className="flex items-center gap-3 py-2">
                    {row.avatar.startsWith('http') ? (
                        <img src={row.avatar} alt={row.name} className="h-10 w-10 rounded-full object-cover border border-outline-variant" />
                    ) : (
                        <div className="h-10 w-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface typography-label-sm font-bold border border-outline-variant">
                            {row.avatar}
                        </div>
                    )}
                    <div className="flex flex-col">
                        <span className="font-semibold text-[#0A0E27]">{row.name}</span>
                        <span className="text-[11px] text-outline">ID: {row.id}</span>
                    </div>
                </div>
            ),
        },
        {
            name: 'TYPE',
            selector: (row: any) => row.type,
            width: '100px',
            cell: (row: any) => (
                <span className={`px-2.5 py-1 rounded-full text-[12px] font-medium ${row.type === 'Human' ? 'bg-[#EBEBFF] text-[#5456A6]' : 'bg-[#FFF4E5] text-[#B28200]'
                    }`}>
                    {row.type}
                </span>
            ),
        },
        {
            name: 'EXPERTISE',
            selector: (row: any) => row.expertise.join(', '),
            minWidth: '160px',
            cell: (row: any) => (
                <div className="flex flex-wrap gap-1">
                    {row.expertise.map((exp: string) => (
                        <span key={exp} className="px-2 py-0.5 bg-[#F1F1F5] text-on-surface-variant rounded text-[11px] font-medium border border-[#EDEDF2]">
                            {exp}
                        </span>
                    ))}
                </div>
            ),
        },
        {
            name: 'RATING',
            selector: (row: any) => row.rating,
            width: '140px',
            cell: (row: any) => {
                const statusStyles: any = {
                    'Online': 'bg-[#E6FFF0] text-[#00A344]',
                    'Offline': 'bg-[#F1F1F5] text-[#777682]',
                    'Pending KYC': 'bg-[#FFF4E5] text-[#B28200]',
                    'Banned': 'bg-[#FFF0F0] text-[#BA1A1A]',
                };
                return (
                    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium whitespace-nowrap ${statusStyles[row.rating] || 'bg-gray-100'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${row.rating === 'Online' ? 'bg-[#00A344]' : row.rating === 'Banned' ? 'bg-[#BA1A1A]' : 'bg-current'}`} />
                        {row.rating}
                    </div>
                );
            },
        },
        {
            name: 'STATUS',
            selector: (row: any) => row.status,
            width: '140px',
            cell: (row: any) => {
                const statusStyles: any = {
                    'Online': 'bg-[#E6FFF0] text-[#00A344]',
                    'Offline': 'bg-[#F1F1F5] text-[#777682]',
                    'Pending KYC': 'bg-[#FFF4E5] text-[#B28200]',
                    'Banned': 'bg-[#FFF0F0] text-[#BA1A1A]',
                };
                return (
                    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium whitespace-nowrap ${statusStyles[row.status] || 'bg-gray-100'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${row.status === 'Online' ? 'bg-[#00A344]' : row.status === 'Banned' ? 'bg-[#BA1A1A]' : 'bg-current'}`} />
                        {row.status}
                    </div>
                );
            },
        },
        {
            name: 'COMM. %',
            selector: (row: any) => row.comm,
            width: '90px',
            cell: (row: any) => <span className="font-medium">{row.comm}</span>,
        },
        {
            name: 'RATES (₹)',
            selector: (row: any) => JSON.stringify(row.rates),
            minWidth: '130px',
            cell: (row: any) => (
                <div className="flex flex-col gap-0.5 text-[11px]">
                    {row.rates.call && (
                        <div className="flex items-center gap-1 text-on-surface-variant">
                            <IconPhone size={12} stroke={2} />
                            <span>{row.rates.call}</span>
                        </div>
                    )}
                    {row.rates.chat && (
                        <div className="flex items-center gap-1 text-on-surface-variant">
                            <IconMessage2 size={12} stroke={2} />
                            <span>{row.rates.chat}</span>
                        </div>
                    )}
                    {row.rates.request && (
                        <div className="flex items-center gap-1 text-on-surface-variant">
                            <span>Req: {row.rates.request}</span>
                        </div>
                    )}
                </div>
            ),
        },
        {
            name: 'EARNINGS',
            selector: (row: any) => row.earnings,
            width: '120px',
            cell: (row: any) => <span className="font-semibold text-[#1B1B20]">{row.earnings}</span>,
        },
        {
            name: 'JOINED',
            selector: (row: any) => row.joined,
            minWidth: '180px',
            cell: (row: any) => {
                if (row.actions.includes('review_app')) {
                    return (
                        <Button variant="primary" size="sm" className="bg-[#040052] text-white hover:opacity-90 font-bold px-4 py-2 rounded h-auto whitespace-nowrap">
                            Review Application
                        </Button>
                    );
                }
                if (row.actions.includes('view_violation')) {
                    return (
                        <span className="text-[#BA1A1A] font-semibold text-[13px] cursor-pointer hover:underline">
                            View Violation
                        </span>
                    );
                }
                return null;
            }
        },
        {
            name: 'ACTIONS',
            width: '160px',
            right: true,
            cell: (row: any) => (
                <div className="flex items-center gap-2">
                    {row.actions.includes('edit') && (
                        <>
                            <Button variant="outlined" size="sm" className="bg-white border-[#C7C5D3] text-on-surface-variant px-3 py-1 h-auto text-[12px] font-bold">
                                Edit
                            </Button>
                            <button className="p-1 text-outline hover:bg-surface-container-low rounded transition-colors">
                                <IconDotsVertical size={18} />
                            </button>
                        </>
                    )}
                    {row.actions.includes('review') && (
                        <Button variant="secondary" size="sm" className="bg-[#FEAE2C] text-white hover:opacity-90 font-bold px-4 py-1.5 rounded h-auto">
                            Review
                        </Button>
                    )}
                    {row.actions.includes('details') && (
                        <span className="text-[#FEAE2C] font-semibold text-[13px] cursor-pointer hover:underline pr-4">
                            Details
                        </span>
                    )}
                </div>
            ),
        }
    ];

    return (
        <div className="space-y-6 bg-[#FCF8FF]">
            {/* Header section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-1">
                    <Breadcrumb items={breadcrumbItems} />
                    <h1 className="typography-h1 text-[#0A0E27] text-2xl sm:text-3xl">Astrologer Management</h1>
                </div>
                <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                    <Button variant="outlined" className="flex-1 sm:flex-none bg-white border-[#C7C5D3] text-on-surface-variant flex items-center justify-center gap-2" icon={IconDownload}>
                        Export CSV
                    </Button>
                    <Button variant="primary" className="flex-1 sm:flex-none bg-[#040052] text-white flex items-center justify-center gap-2" icon={IconPlus}>
                        Onboard Astrologer
                    </Button>
                </div>
            </div>

            {/* Stats section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-xl border border-[#EDEDF2] shadow-sm flex flex-col justify-between min-h-[140px] relative">
                        <div className="flex justify-between items-start">
                            <div className={`${stat.iconBg} p-2 rounded-lg`}>
                                <stat.icon size={22} className={stat.iconColor} />
                            </div>
                            {stat.trend && (
                                <div className={`flex items-center gap-0.5 ${stat.trendColor} text-[12px] font-bold`}>
                                    <IconTrendingUp size={14} />
                                    {stat.trend}
                                </div>
                            )}
                            {stat.badge && (
                                <div className={`px-2 py-0.5 rounded-md ${stat.badgeBg} ${stat.badgeColor} text-[10px] font-bold uppercase tracking-wider`}>
                                    {stat.badge}
                                </div>
                            )}
                        </div>
                        <div className="mt-4 space-y-1">
                            <p className="text-[11px] font-bold text-outline tracking-wider uppercase">{stat.title}</p>
                            <p className="text-2xl font-bold text-[#0A0E27] leading-none">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Filter section */}
            <div className="bg-white p-4 rounded-xl border border-[#EDEDF2] shadow-sm overflow-hidden">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                    <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 w-full lg:w-auto">
                        <div className="w-full sm:w-[280px]">
                            <SearchInput
                                placeholder="Search name, ID, or phone..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <MultiSelectFilter
                                label="Status"
                                options={['Online', 'Offline', 'Banned', 'Pending KYC']}
                                selectedValues={statusFilter}
                                onChange={setStatusFilter}
                            />
                            <MultiSelectFilter
                                label="Rating"
                                options={['5 Star', '4 Star', '3 Star', '2 Star', '1 Star']}
                                selectedValues={ratingFilter}
                                onChange={setRatingFilter}
                            />
                            <MultiSelectFilter
                                label="Expertise"
                                options={['Vedic', 'Tarot', 'Vastu', 'Numerology', 'Palmistry']}
                                selectedValues={expertiseFilter}
                                onChange={setExpertiseFilter}
                            />
                        </div>
                    </div>
                    {(searchQuery || statusFilter.length > 0 || ratingFilter.length > 0 || expertiseFilter.length > 0) && (
                        <div
                            onClick={handleClearFilters}
                            className="flex items-center gap-2 text-[13px] font-semibold text-error cursor-pointer hover:opacity-80 transition-all ml-auto lg:ml-0"
                        >
                            <IconX size={18} />
                            Clear Filters
                        </div>
                    )}
                </div>

                <div className="mt-4">
                    <CustomDataTable
                        columns={columns}
                        data={tableData}
                    />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        totalResults={totalResults}
                        rowsPerPage={rowsPerPage}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Astrologers;

