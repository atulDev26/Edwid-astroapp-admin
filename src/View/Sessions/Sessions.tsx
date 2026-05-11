import {
    IconCalendar,
    IconCircleFilled,
    IconClock,
    IconDownload,
    IconEye,
    IconFilter,
    IconMessageChatbot,
    IconRotate,
    IconStar,
    IconUsers
} from '@tabler/icons-react';
import { useMemo, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Button from '../../Components/Common/Button';
import CustomDataTable from '../../Components/Common/DataTable';
import MultiSelectFilter from '../../Components/Common/MultiSelectFilter';
import Pagination from '../../Components/Common/Pagination';
import { cn } from '../../Utils/cn';

const Sessions = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Filter States
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [selectedAstrologer, setSelectedAstrologer] = useState<string[]>([]);
    const [selectedType, setSelectedType] = useState<string[]>([]);
    const [selectedRating, setSelectedRating] = useState<string[]>([]);
    const [appliedFilters, setAppliedFilters] = useState({
        startDate: null as Date | null,
        endDate: null as Date | null,
        astrologer: [] as string[],
        type: [] as string[],
        rating: [] as string[]
    });

    const stats = [
        {
            label: 'SESSION RATING',
            value: '4.27',
            icon: <IconStar size={18} className="text-[#FEAE2C] fill-[#FEAE2C]" />,
            progress: 85,
            color: 'bg-[#FEAE2C]'
        },
        {
            label: 'AVG. DURATION',
            value: '3m 46s',
            icon: <IconClock size={18} className="text-[#246BFD]" />,
            progress: 60,
            color: 'bg-[#246BFD]'
        },
        {
            label: 'TOTAL REVENUE',
            value: '₹4,555.00',
            icon: <span className="text-lg font-bold text-[#12B76A]">₹</span>,
            progress: 75,
            color: 'bg-[#12B76A]'
        },
        {
            label: 'ADMIN EARNINGS',
            value: '₹3,188.50',
            icon: <span className="text-lg font-bold text-[#7F56D9]">₹</span>,
            progress: 70,
            color: 'bg-[#7F56D9]'
        },
        {
            label: 'REPEAT USERS',
            value: '37.2%',
            icon: <IconUsers size={18} className="text-[#0A0E27]" />,
            progress: 37,
            color: 'bg-[#0A0E27]',
            subValue: 'GOAL: 50%',
            trend: '↓ 1.2%',
            trendColor: 'text-red-500'
        }
    ];

    const initialSessionData = [
        {
            id: '1',
            date: new Date('2024-05-11'),
            user: {
                name: 'sahila',
                gender: 'FEMALE',
                location: 'ALIGARH, UTTAR PRADESH',
                image: 'https://i.pravatar.cc/150?u=sahila'
            },
            astrologer: {
                name: 'Astroguru',
                image: 'https://i.pravatar.cc/150?u=astroguru'
            },
            type: 'Chat',
            duration: '1m 00s',
            revenue: '₹1.00',
            revenueVal: 1,
            split: '70/30 Split',
            rating: null,
            status: 'COMPLETED'
        },
        {
            id: '2',
            date: new Date('2024-05-10'),
            user: {
                name: 'vrinda gupta',
                gender: 'FEMALE',
                location: 'DELHI',
                image: 'https://i.pravatar.cc/150?u=vrinda'
            },
            astrologer: {
                name: 'Riddhi Narang',
                image: 'https://i.pravatar.cc/150?u=riddhi'
            },
            type: 'Chat',
            duration: '1m 00s',
            revenue: '₹1.00',
            revenueVal: 1,
            split: '70/30 Split',
            rating: null,
            status: 'COMPLETED'
        },
        {
            id: '3',
            date: new Date('2024-05-09'),
            user: {
                name: 'Deepak Meghwal',
                gender: 'MALE',
                location: 'JAWAR, RAJASTHAN',
                image: 'https://i.pravatar.cc/150?u=deepak'
            },
            astrologer: {
                name: 'Astro Shivitesh',
                image: 'https://i.pravatar.cc/150?u=shivitesh'
            },
            type: 'Chat',
            duration: '1m 00s',
            revenue: '₹1.00',
            revenueVal: 1,
            split: '70/30 Split',
            rating: 4,
            status: 'COMPLETED'
        },
        {
            id: '4',
            date: new Date('2024-05-08'),
            user: {
                name: 'surendra sharma',
                gender: 'MALE',
                location: 'CHHATTISGARH RAIPUR',
                image: 'https://i.pravatar.cc/150?u=surendra'
            },
            astrologer: {
                name: 'Astroguru',
                image: 'https://i.pravatar.cc/150?u=astroguru2'
            },
            type: 'Chat',
            duration: '1m 00s',
            revenue: '₹1.00',
            revenueVal: 1,
            split: '70/30 Split',
            rating: null,
            status: 'COMPLETED'
        }
    ];

    const filteredData = useMemo(() => {
        return initialSessionData.filter(session => {
            const dateMatch = (!appliedFilters.startDate || session.date >= appliedFilters.startDate) &&
                (!appliedFilters.endDate || session.date <= appliedFilters.endDate);
            const astrologerMatch = appliedFilters.astrologer.length === 0 || appliedFilters.astrologer.includes(session.astrologer.name);
            const typeMatch = appliedFilters.type.length === 0 || appliedFilters.type.includes(session.type);
            const ratingMatch = appliedFilters.rating.length === 0 || (session.rating && appliedFilters.rating.includes(`${session.rating} Star${session.rating > 1 ? 's' : ''}`));

            return dateMatch && astrologerMatch && typeMatch && ratingMatch;
        });
    }, [appliedFilters]);

    const handleApplyFilters = () => {
        setAppliedFilters({
            startDate,
            endDate,
            astrologer: selectedAstrologer,
            type: selectedType,
            rating: selectedRating
        });
        setCurrentPage(1);
    };

    const handleReset = () => {
        setStartDate(null);
        setEndDate(null);
        setSelectedAstrologer([]);
        setSelectedType([]);
        setSelectedRating([]);
        setAppliedFilters({
            startDate: null,
            endDate: null,
            astrologer: [],
            type: [],
            rating: []
        });
        setCurrentPage(1);
    };

    const columns = [
        {
            name: 'USER',
            width: '280px',
            cell: (row: any) => (
                <div className="flex items-center gap-3 py-4">
                    <img src={row.user.image} alt={row.user.name} className="w-10 h-10 rounded-full border border-outline-variant" />
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-[#246BFD]">{row.user.name}</span>
                        <span className="text-[10px] text-on-surface-variant font-medium">
                            {row.user.gender} • {row.user.location}
                        </span>
                    </div>
                </div>
            )
        },
        {
            name: 'ASTROLOGER',
            width: '200px',
            cell: (row: any) => (
                <div className="flex items-center gap-3 py-4">
                    <img src={row.astrologer.image} alt={row.astrologer.name} className="w-8 h-8 rounded-full border border-outline-variant" />
                    <span className="text-sm font-bold text-[#0A0E27]">{row.astrologer.name}</span>
                </div>
            )
        },
        {
            name: 'TYPE',
            width: '100px',
            cell: (row: any) => (
                <div className="flex items-center gap-2 text-[#246BFD]">
                    <IconMessageChatbot size={18} />
                    <span className="text-sm font-bold">{row.type}</span>
                </div>
            )
        },
        {
            name: 'DURATION',
            width: '100px',
            cell: (row: any) => <span className="text-sm font-medium text-on-surface-variant">{row.duration}</span>
        },
        {
            name: 'REVENUE',
            width: '120px',
            cell: (row: any) => (
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#0A0E27]">{row.revenue}</span>
                    <span className="text-[10px] text-on-surface-variant font-medium">{row.split}</span>
                </div>
            )
        },
        {
            name: 'RATING',
            width: '140px',
            cell: (row: any) => (
                <div className="flex items-center gap-0.5">
                    {row.rating ? (
                        [...Array(5)].map((_, i) => (
                            <IconStar
                                key={i}
                                size={14}
                                className={i < row.rating ? 'text-[#FEAE2C] fill-[#FEAE2C]' : 'text-outline-variant'}
                            />
                        ))
                    ) : (
                        <span className="text-xs italic text-on-surface-variant">No Rating</span>
                    )}
                </div>
            )
        },
        {
            name: 'STATUS',
            width: '120px',
            cell: (row: any) => (
                <span className="bg-[#E7F9ED] text-[#12B76A] px-2 py-0.5 rounded-md text-[10px] font-black tracking-wider uppercase border border-[#D1FADF]">
                    {row.status}
                </span>
            )
        },
        {
            name: 'ACTION',
            right: true,
            width: '120px',
            cell: (row: any) => (
                <div className="flex items-center gap-2">
                    <Button
                        variant="primary"
                        size="sm"
                        className="bg-[#0A0E27] hover:bg-[#1a1f3d] px-4 rounded-lg text-xs font-bold whitespace-nowrap"
                    >
                        View
                    </Button>
                    <button className="p-1.5 hover:bg-surface-container-low rounded-md transition-colors text-on-surface-variant">
                        <IconEye size={18} />
                    </button>
                </div>
            )
        }
    ];

    return (
        <div className="space-y-6 md:space-y-8 pb-10 px-4 lg:px-8 max-w-[1600px] mx-auto">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                    <h1 className="text-3xl md:text-4xl font-black text-[#0A0E27] tracking-tight">Completed Sessions</h1>
                    <p className="text-[#667085] text-sm md:text-base font-medium">Review historical session performance and revenue metrics.</p>
                </div>
                <div className="flex items-center gap-2 bg-[#E7F9ED] text-[#12B76A] px-4 py-1.5 rounded-full border border-[#D1FADF] w-fit">
                    <IconCircleFilled size={8} />
                    <span className="text-sm font-bold">11 Online</span>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-[20px] border border-outline-variant/30 shadow-sm flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <span className="text-xs font-bold text-[#667085] uppercase tracking-widest">{stat.label}</span>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-black text-[#101828]">{stat.value}</span>
                                {stat.icon}
                            </div>
                        </div>

                        <div className="w-full h-2 bg-surface-container-low rounded-full overflow-hidden">
                            <div className={cn("h-full rounded-full transition-all duration-1000", stat.color)} style={{ width: `${stat.progress}%` }} />
                        </div>

                        {stat.subValue && (
                            <div className="flex items-center justify-between mt-1">
                                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">{stat.subValue}</span>
                                <span className={cn("text-[10px] font-bold flex items-center gap-0.5", stat.trendColor)}>
                                    {stat.trend}
                                </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Filters Section */}
            <div className="space-y-4 md:space-y-6">
                {/* Date Filter Bar */}
                <div className="p-4 rounded-[20px] border border-outline-variant/30 flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-6 bg-white/50 w-full md:w-fit">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 align-middle">
                        <div className="w-full sm:w-[200px] space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Start Date</label>
                            <div className="relative">
                                <IconCalendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant z-10" />
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    placeholderText="dd-mm-yyyy"
                                    dateFormat="dd-MM-yyyy"
                                    className="w-full h-11 pl-11 pr-4 rounded-xl border border-outline-variant bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-[#98A2B3]"
                                />
                            </div>
                        </div>
                        <div className="w-full sm:w-[200px] space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">End Date</label>
                            <div className="relative">
                                <IconCalendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant z-10" />
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    placeholderText="dd-mm-yyyy"
                                    dateFormat="dd-MM-yyyy"
                                    className="w-full h-11 pl-11 pr-4 rounded-xl border border-outline-variant bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-[#98A2B3]"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Button
                            variant="primary"
                            icon={IconFilter}
                            onClick={handleApplyFilters}
                            className="bg-[#0A0E27] hover:bg-[#1a1f3d] h-11 px-8 rounded-xl shadow-lg shadow-black/5 text-sm font-bold md:w-auto"
                        >
                            Filter
                        </Button>
                    </div>

                </div>

                {/* Dropdown Filters Bar */}
                <div className="bg-white p-4 rounded-[20px] border border-outline-variant/30 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <MultiSelectFilter
                            label="All Astrologers"
                            options={['Astroguru', 'Riddhi Narang', 'Astro Shivitesh']}
                            selectedValues={selectedAstrologer}
                            onChange={setSelectedAstrologer}
                        />
                        <MultiSelectFilter
                            label="All Types"
                            options={['Chat', 'Call']}
                            selectedValues={selectedType}
                            onChange={setSelectedType}
                        />
                        <MultiSelectFilter
                            label="All Ratings"
                            options={['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars']}
                            selectedValues={selectedRating}
                            onChange={setSelectedRating}
                        />
                    </div>
                    <div className="flex items-center justify-between sm:justify-start sm:gap-8 md:gap-6 md:pr-2">
                        <button className="flex items-center gap-2 text-on-surface font-bold text-sm hover:text-primary transition-colors whitespace-nowrap">
                            <IconDownload size={18} className="text-on-surface-variant" />
                            Export CSV
                        </button>
                        <button
                            onClick={handleReset}
                            className="flex items-center gap-2 text-[#D32F2F] font-bold text-sm hover:text-red-700 transition-colors whitespace-nowrap"
                        >
                            <IconRotate size={18} />
                            Reset
                        </button>
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-[24px] border border-outline-variant/30 shadow-sm overflow-hidden">
                <div className="overflow-x-auto scrollbar-hide md:scrollbar-default">
                    <div className="min-w-max md:min-w-full">
                        <CustomDataTable
                            columns={columns}
                            data={filteredData}
                            selectableRows={false}
                            customStyles={{
                                header: {
                                    style: {
                                        backgroundColor: '#F9FAFB',
                                        minHeight: '48px',
                                    },
                                },
                                headRow: {
                                    style: {
                                        backgroundColor: '#F9FAFB',
                                        borderBottomWidth: '1px',
                                        borderColor: 'var(--color-outline-variant)',
                                    },
                                },
                                headCells: {
                                    style: {
                                        color: 'var(--color-on-surface-variant)',
                                        fontSize: '11px',
                                        fontWeight: '700',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        paddingLeft: '24px',
                                        paddingRight: '24px',
                                    },
                                },
                                cells: {
                                    style: {
                                        paddingLeft: '24px',
                                        paddingRight: '24px',
                                    },
                                },
                            }}
                        />
                    </div>
                </div>
                <div className="p-6 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-center gap-4 bg-white">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={1}
                        totalResults={filteredData.length}
                        rowsPerPage={10}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Sessions;
