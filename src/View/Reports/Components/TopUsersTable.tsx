import React from 'react';

const TopUsersTable = () => {
    const topUsers = [
        { id: 1, name: 'Rohan M.', email: 'rohan.m@email.com', transactions: 42, totalSpend: '₹24,500' },
        { id: 2, name: 'Sneha P.', email: 'sneha99@email.com', transactions: 38, totalSpend: '₹18,200' },
        { id: 3, name: 'Amit S.', email: 'amit.singh@email.com', transactions: 25, totalSpend: '₹15,400' },
        { id: 4, name: 'Priya K.', email: 'priya.k@gmail.com', transactions: 20, totalSpend: '₹12,800' },
    ];

    return (
        <div className="bg-white rounded-2xl border border-[#EDEDF2] shadow-sm overflow-hidden">
            <div className="flex items-center justify-between p-4 md:p-6 border-bottom border-[#F2F4F7]">
                <h3 className="typography-h3 text-[#101828]">Top 10 Users by Spend</h3>
                <button className="text-sm font-semibold text-[#040052] hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-[#F9FAFB] border-y border-[#EAECF0]">
                        <tr>
                            <th className="px-4 md:px-6 py-3 text-xs font-medium text-[#667085] uppercase tracking-wider">#</th>
                            <th className="px-4 md:px-6 py-3 text-xs font-medium text-[#667085] uppercase tracking-wider min-w-[200px]">User Info</th>
                            <th className="px-4 md:px-6 py-3 text-xs font-medium text-[#667085] uppercase tracking-wider text-right">Transactions</th>
                            <th className="px-4 md:px-6 py-3 text-xs font-medium text-[#667085] uppercase tracking-wider text-right">Total Spend</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EAECF0]">
                        {topUsers.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 md:px-6 py-4 text-sm text-[#667085]">{user.id}</td>
                                <td className="px-4 md:px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold text-[#101828] truncate">{user.name}</span>
                                        <span className="text-xs text-[#667085] truncate">{user.email}</span>
                                    </div>
                                </td>
                                <td className="px-4 md:px-6 py-4 text-sm text-[#475467] text-right">{user.transactions}</td>
                                <td className="px-4 md:px-6 py-4 text-sm font-semibold text-[#101828] text-right">{user.totalSpend}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TopUsersTable;
