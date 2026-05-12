import React from 'react';
import { IconSend, IconCloudUpload } from '@tabler/icons-react';
import BasicInfoSection from './Components/CreateService/BasicInfoSection';
import ScheduleVenueSection from './Components/CreateService/ScheduleVenueSection';
import MediaMetaSection from './Components/CreateService/MediaMetaSection';
import PackageFAQSection from './Components/CreateService/PackageFAQSection';
import Button from '../../Components/Common/Button';
import { toast } from 'sonner';

const CreatePujaService = () => {
    const handlePublish = () => {
        console.log('--- PUBLISHING PUJA SERVICE ---');
        console.log('Timestamp:', new Date().toISOString());
        console.log('Action: PUBLISH_SERVICE');
        // In a real app, we would collect form state here
        toast.success('Puja Service Published Successfully!');
        console.log('-------------------------------');
    };

    const handleSaveDraft = () => {
        console.log('--- SAVING DRAFT ---');
        console.log('Timestamp:', new Date().toISOString());
        console.log('Action: SAVE_DRAFT');
        toast.info('Draft saved successfully');
        console.log('--------------------');
    };

    return (
        <div className="space-y-8 max-w-[1200px] mx-auto pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/50 backdrop-blur-sm p-6 rounded-[28px] border border-[#EDEDF2] shadow-sm sticky top-4 z-50">
                <div className="space-y-1">
                    <h1 className="text-[28px] md:text-[32px] font-black text-[#1A1F4D] tracking-tight leading-tight">
                        Create New Puja Service
                    </h1>
                    <p className="text-[14px] md:text-[15px] font-medium text-[#667085]">
                        Drafting a high-impact spiritual experience for devotees.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Button 
                        variant="outlined" 
                        onClick={handleSaveDraft}
                        className="h-11 px-6 rounded-xl border-[#D0D5DD] text-[#344054] font-bold text-[14px] hover:bg-gray-50"
                    >
                        Save Draft
                    </Button>
                    <Button 
                        variant="primary" 
                        onClick={handlePublish}
                        className="h-11 px-6 rounded-xl bg-[#0A0E27] text-white font-bold text-[14px] flex items-center gap-2 shadow-lg shadow-black/10 hover:bg-[#1A1F4D]"
                    >
                        <IconSend size={18} />
                        Publish Service
                    </Button>
                </div>
            </div>

            {/* Form Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Main Info */}
                <div className="lg:col-span-2 space-y-8">
                    <BasicInfoSection />
                    <MediaMetaSection />
                    <PackageFAQSection />
                </div>

                {/* Right Column - Sidebar Info */}
                <div className="space-y-8">
                    <ScheduleVenueSection />
                </div>
            </div>

            {/* Bottom Actions for Mobile */}
            <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
                <Button 
                    variant="primary" 
                    onClick={handlePublish}
                    className="w-full h-14 rounded-2xl bg-[#0A0E27] text-white font-black text-[16px] shadow-2xl flex items-center justify-center gap-2"
                >
                    <IconSend size={20} />
                    Publish Service
                </Button>
            </div>
        </div>
    );
};

export default CreatePujaService;
