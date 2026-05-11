import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IconMessage2, IconPhone, IconVideo, IconStar } from '@tabler/icons-react';
import Breadcrumb from '../../Components/Common/Breadcrumb';

// Sub-components
import ProfileHeader, { type ProfileData } from './Components/ProfileHeader';
import QuickStatsGrid from './Components/QuickStatsGrid';
import FinancialVaultCard, { type FinancialData } from './Components/FinancialVaultCard';
import PricingManagement, { type PricingData } from './Components/PricingManagement';
import KYCBankingSection, { type KYCData } from './Components/KYCBankingSection';
import LiveConsultationsMonitor, { type LiveConsultationsData } from './Components/LiveConsultationsMonitor';
import RecentWithdrawals, { type WithdrawalRecord } from './Components/RecentWithdrawals';
import RecentReviews, { type ReviewRecord } from './Components/RecentReviews';

const AstrologerDetails = () => {
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

    // --- Mock API Data ---
    const profileData: ProfileData = {
        name: 'Acharya Vedant',
        profileImage: 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg',
        isOnline: true,
        rating: '4.92',
        reviewsCount: '12,450',
        astrologerId: 'AST-2024-X',
        phone: '+91 98765 43210',
        email: 'vedant.astro@celestial.com',
        experience: '12 Years Exp',
        languages: 'English, Hindi, Sanskrit'
    };

    const statsData = [
        { label: 'Chat Success', value: '4,821', trend: '+12% Month', icon: IconMessage2, color: 'text-primary' },
        { label: 'Call Success', value: '3,105', trend: '+8% Month', icon: IconPhone, color: 'text-primary' },
        { label: 'Video Calls', value: '942', trend: 'Stable', icon: IconVideo, color: 'text-primary' },
        { label: 'Avg Rating', value: '4.92', trend: 'Top Rated', icon: IconStar, color: 'text-secondary-container' }
    ];

    const financialData: FinancialData = {
        availableBalance: '42,850.00',
        monthlyRevenue: '1.2L',
        lifetimeEarnings: '14.8L',
        totalWithdrawals: '12.4L',
        pendingPayouts: '18.2K',
        lastUpdated: 'Just now'
    };

    const pricingData: PricingData = {
        chat: { actual: '15.00', offer: '12.00' },
        voice: { actual: '25.00', offer: '20.00' },
        video: { actual: '45.00', offer: '40.00' },
        platformCommission: 35
    };

    const kycData: KYCData = {
        idFront: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Nn9V3kCj7L6QfI0_8m-6q9r4T7a-xX8V-g&s',
        idPortrait: 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg',
        pan: '', // Empty means not uploaded
        verificationDate: '01 Jan 2024',
        banking: {
            holderName: 'VEDANT SHARMA',
            bankName: 'HDFC BANK LTD',
            accountNumber: '**** **** 9210',
            ifscCode: 'HDFC0001242'
        }
    };

    const liveConsultationsData: LiveConsultationsData = {
        activeSessions: 12,
        avgDuration: '18.5 Min',
        sessions: [
            { user: 'Rohan Kapoor', plan: 'Gold Member', type: 'Chat', icon: IconMessage2, color: 'text-[#00A344]', bg: 'bg-[#E6FFF0]', start: '10:45 AM, Today', duration: '24m 12s', rating: 5, earning: '₹ 450.00' },
            { user: 'Ananya Singh', plan: 'Silver Member', type: 'Voice', icon: IconPhone, color: 'text-[#5456A6]', bg: 'bg-[#EBEBFF]', start: '09:15 AM, Today', duration: '12m 45s', rating: 4, earning: '₹ 120.00' }
        ]
    };

    const withdrawalsData: WithdrawalRecord[] = [
        { amount: '15,000.00', date: '12 Mar, 2024', status: 'Pending' },
        { amount: '8,250.00', date: '05 Mar, 2024', status: 'Approved' }
    ];

    const reviewsData: ReviewRecord[] = [
        { user: 'Meera Joshi', avatar: 'https://i.pravatar.cc/150?u=meera', time: '2 hours ago', rating: 5, comment: 'Acharya Vedant is incredibly accurate! He precisely pinpointed my career shifts and gave very practical remedies. Truly blessed to have found him.' },
        { user: 'Suresh Raina', initials: 'SR', time: 'Yesterday', rating: 2 }
    ];

    return (
        <div className="space-y-6 bg-[#FCF8FF] min-h-screen">
            <div className="space-y-1">
                <Breadcrumb items={breadcrumbItems} />
            </div>

            <ProfileHeader 
                data={profileData}
                statusActive={statusActive} 
                setStatusActive={setStatusActive} 
            />

            <QuickStatsGrid stats={statsData} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                <div className="lg:col-span-2 space-y-6">
                    <FinancialVaultCard data={financialData} />
                    <PricingManagement 
                        data={pricingData}
                        pricingToggles={pricingToggles} 
                        setPricingToggles={setPricingToggles} 
                    />
                </div>
                
                <KYCBankingSection data={kycData} />
            </div>

            <LiveConsultationsMonitor data={liveConsultationsData} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-12">
                <RecentWithdrawals data={withdrawalsData} />
                <RecentReviews overallRating="4.9" reviews={reviewsData} />
            </div>
        </div>
    );
};

export default AstrologerDetails;
