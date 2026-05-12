import React from 'react';

const TopAstrologersTable = () => {
    const topAstrologers = [
        { id: 1, name: 'Astro Sharma', initials: 'AS', color: 'bg-[#E0E7FF] text-[#4338CA]', consultations: 1245, revenue: '₹85,000' },
        { id: 2, name: 'Vedic Guru', initials: 'VG', color: 'bg-[#FEF3C7] text-[#D97706]', consultations: 980, revenue: '₹72,400' },
        { id: 3, name: 'Tarot Rose', initials: 'TR', color: 'bg-[#FCE7F3] text-[#DB2777]', consultations: 850, revenue: '₹61,200' },
        { id: 4, name: 'Pandit Narayan', initials: 'PN', color: 'bg-[#D1FAE5] text-[#059669]', consultations: 710, revenue: '₹55,800' },
    ];

    return (
        <div className="bg-white rounded-2xl border border-[#EDEDF2] shadow-sm overflow-hidden">
            <div className="flex items-center justify-between p-4 md:p-6 border-bottom border-[#F2F4F7]">
                <h3 className="typography-h3 text-[#101828]">Top 10 Astrologers</h3>
                <button className="text-sm font-semibold text-[#040052] hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-[#F9FAFB] border-y border-[#EAECF0]">
                        <tr>
                            <th className="px-4 md:px-6 py-3 text-xs font-medium text-[#667085] uppercase tracking-wider">#</th>
                            <th className="px-4 md:px-6 py-3 text-xs font-medium text-[#667085] uppercase tracking-wider min-w-[150px]">Name</th>
                            <th className="px-4 md:px-6 py-3 text-xs font-medium text-[#667085] uppercase tracking-wider text-right">Consultations</th>
                            <th className="px-4 md:px-6 py-3 text-xs font-medium text-[#667085] uppercase tracking-wider text-right">Revenue</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EAECF0]">
                        {topAstrologers.map((astro) => (
                            <tr key={astro.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 md:px-6 py-4 text-sm text-[#667085]">{astro.id}</td>
                                <td className="px-4 md:px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${astro.color}`}>
                                            {astro.initials}
                                        </div>
                                        <span className="text-sm font-semibold text-[#101828] truncate">{astro.name}</span>
                                    </div>
                                </td>
                                <td className="px-4 md:px-6 py-4 text-sm text-[#475467] text-right">{astro.consultations.toLocaleString()}</td>
                                <td className="px-4 md:px-6 py-4 text-sm font-semibold text-[#101828] text-right">{astro.revenue}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TopAstrologersTable;
