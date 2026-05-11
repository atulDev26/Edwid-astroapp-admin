import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IconMessage2, IconPhone, IconVideo, IconStar } from '@tabler/icons-react';
import Breadcrumb from '../../Components/Common/Breadcrumb';

// Sub-components
import ProfileHeader from './Components/ProfileHeader';
import QuickStatsGrid from './Components/QuickStatsGrid';
import FinancialVaultCard from './Components/FinancialVaultCard';
import PricingManagement from './Components/PricingManagement';
import KYCBankingSection from './Components/KYCBankingSection';
import LiveConsultationsMonitor from './Components/LiveConsultationsMonitor';
import RecentWithdrawals from './Components/RecentWithdrawals';
import RecentReviews from './Components/RecentReviews';

const AstrologerDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [statusActive, setStatusActive] = useState(true);
    const [pricingToggles, setPricingToggles] = useState({
        chat: true,
        voice: true,
        video: false
    });

    const breadcrumbItems = [
        { label: 'Astrologers', href: '/astrologers' },
        { label: 'Acharya Vedant' }
    ];

    const stats = [
        { label: 'Chat Success', value: '4,821', trend: '+12% Month', icon: IconMessage2, color: 'text-primary' },
        { label: 'Call Success', value: '3,105', trend: '+8% Month', icon: IconPhone, color: 'text-primary' },
        { label: 'Video Calls', value: '942', trend: 'Stable', icon: IconVideo, color: 'text-primary' },
        { label: 'Avg Rating', value: '4.92', trend: 'Top Rated', icon: IconStar, color: 'text-secondary-container' }
    ];

    return (
        <div className="space-y-6 bg-[#FCF8FF] min-h-screen">
            <div className="space-y-1">
                <Breadcrumb items={breadcrumbItems} />
            </div>

            <ProfileHeader 
                statusActive={statusActive} 
                setStatusActive={setStatusActive} 
            />

            <QuickStatsGrid stats={stats} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                <div className="lg:col-span-2 space-y-6">
                    <FinancialVaultCard />
                    <PricingManagement 
                        pricingToggles={pricingToggles} 
                        setPricingToggles={setPricingToggles} 
                    />
                </div>
                
                <KYCBankingSection />
            </div>

            <LiveConsultationsMonitor />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-12">
                <RecentWithdrawals />
                <RecentReviews />
            </div>
        </div>
    );
};

export default AstrologerDetails;
