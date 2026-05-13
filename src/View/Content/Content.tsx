import React, { useState } from 'react';
import {
    IconPlus, IconPencil, IconTrash, IconRefresh,
    IconCoins, IconHeadset, IconPhoto, IconCurrencyRupee
} from '@tabler/icons-react';
import { cn } from '../../Utils/cn';
import Button from '../../Components/Common/Button';
import Input from '../../Components/Common/Input';
import Badge from '../../Components/Common/Badge';

// --- Types ---
interface Banner {
    id: string;
    name: string;
    position: string;
    image: string;
    status: 'Active' | 'Inactive';
}

// --- Mock Data ---
const MOCK_BANNERS: Banner[] = [
    {
        id: 'BAN-001',
        name: 'Diwali Special Offer',
        position: 'Home Hero',
        image: 'https://images.unsplash.com/photo-1541339907198-e08759df9a13?w=800&auto=format&fit=crop',
        status: 'Active'
    },
    {
        id: 'BAN-002',
        name: 'New AI Astrologer',
        position: 'Dashboard Sidebar',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop',
        status: 'Active'
    },
    {
        id: 'BAN-003',
        name: 'Summer Solstice',
        position: 'Store Top',
        image: '', // Empty to test placeholder
        status: 'Inactive'
    }
];

const Content = () => {
    const [activeTab, setActiveTab] = useState('Banners');
    const tabs = ['Banners', 'FAQs', 'Static Pages'];

    return (
        <div className="space-y-8 pb-10">
            {/* Header Section */}
            <div className="space-y-1">
                <h1 className="text-[32px] font-black text-[#0A0E27] tracking-tight">Content Management</h1>
                <p className="text-[15px] font-medium text-[#667085]">Manage banners, FAQs, and static content across the platform.</p>
            </div>

            {/* Tabs & Main Section Container */}
            <div className="bg-white rounded-[24px] border border-[#EDEDF2] shadow-sm overflow-hidden">
                {/* Tabs Header */}
                <div className="flex border-b border-[#F2F4F7] px-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                "px-6 py-5 text-[14px] font-bold transition-all relative cursor-pointer",
                                activeTab === tab ? "text-primary" : "text-outline hover:text-primary"
                            )}
                        >
                            {tab}
                            {activeTab === tab && (
                                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-t-full" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Tab Content: Banners (Default) */}
                <div className="p-8">
                    {activeTab === 'Banners' && (
                        <div className="space-y-8">
                            <div className="flex items-center justify-between">
                                <h2 className="text-[24px] font-black text-[#0A0E27]">Active Banners</h2>
                                <Button
                                    className="bg-[#0A0E27] text-white rounded-xl h-11 px-6 font-black"
                                    icon={IconPlus}
                                >
                                    Add Banner
                                </Button>
                            </div>

                            {/* Banners Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {MOCK_BANNERS.map((banner) => (
                                    <div key={banner.id} className="group bg-white rounded-2xl border border-[#EDEDF2] overflow-hidden hover:shadow-lg transition-all duration-300">
                                        {/* Image Area */}
                                        <div className="relative h-44 bg-[#F8F9FC] flex items-center justify-center">
                                            {banner.image ? (
                                                <img
                                                    src={banner.image}
                                                    alt={banner.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <IconPhoto size={48} className="text-[#D0D5DD]" />
                                            )}

                                            {/* Status Badge */}
                                            <div className="absolute top-4 right-4">
                                                <Badge variant={banner.status === 'Active' ? 'success' : 'neutral'}>
                                                    {banner.status}
                                                </Badge>
                                            </div>
                                        </div>

                                        {/* Banner Details */}
                                        <div className="p-5 space-y-4">
                                            <div className="space-y-1">
                                                <h3 className="text-[18px] font-black text-[#0A0E27]">{banner.name}</h3>
                                                <p className="text-[13px] font-medium text-[#667085]">Position: {banner.position}</p>
                                            </div>

                                            <div className="pt-4 border-t border-[#F2F4F7] flex items-center justify-between">
                                                <span className="text-[12px] font-bold text-[#98A2B3] uppercase tracking-wider">ID: {banner.id}</span>
                                                <div className="flex items-center gap-2">
                                                    <button className="p-2 text-[#667085] hover:bg-[#F8F9FC] rounded-lg transition-colors">
                                                        <IconPencil size={18} />
                                                    </button>
                                                    <button className="p-2 text-[#F04438] hover:bg-red-50 rounded-lg transition-colors">
                                                        <IconTrash size={18} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab !== 'Banners' && (
                        <div className="h-64 flex items-center justify-center text-[#667085]">
                            Coming Soon: {activeTab} Management
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Content;
