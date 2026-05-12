import React, { useState } from 'react';
import { IconSend, IconLoader2 } from '@tabler/icons-react';
import BasicInfoSection from './Components/CreateService/BasicInfoSection';
import ScheduleVenueSection from './Components/CreateService/ScheduleVenueSection';
import MediaMetaSection from './Components/CreateService/MediaMetaSection';
import PackageFAQSection from './Components/CreateService/PackageFAQSection';
import Button from '../../Components/Common/Button';
import { toast } from 'sonner';
import { type PujaServiceFormData } from './types';
import { pujaApi } from '../../api/puja';
import { useNavigate } from 'react-router-dom';

const initialData: PujaServiceFormData = {
    title: '',
    category: 'Special Occasion',
    benefitTag: '',
    shortDescription: '',
    aboutContent: '',
    pujaDate: '',
    tithiName: '',
    muhurat: '',
    templeName: '',
    city: '',
    state: '',
    heroImage: '',
    videoUrl: '',
    gallery: [],
    primaryDeity: 'Lord Shani',
    benefitPoints: ['Negativity Removal', 'Obstacle Protection'],
    tiers: [
        { id: '1', name: 'Individual Puja', price: '1251', features: ['Sankalp with Name/Gotra', 'Live Video Link'] },
        { id: '2', name: 'Family + Bhog', price: '3001', features: ['Personalized Sankalp for 4', 'Prasad delivered home'], isRecommended: true }
    ],
    faqs: [
        { id: '1', question: 'Why should I choose Shri Mandir for performing a Puja?', answer: 'Our platform ensures authenticity by partnering with renowned temples...' }
    ]
};

const CreatePujaService = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<PujaServiceFormData>(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (field: keyof PujaServiceFormData, value: unknown) => {
        setFormData(prev => {
            const updated = { ...prev, [field]: value };
            console.log(`[CreatePujaService] Field changed: "${String(field)}"`, { value, fullForm: updated });
            return updated;
        });

        // Clear individual field error on change
        if (errors[field]) {
            setErrors(prev => {
                const next = { ...prev };
                delete next[field];
                return next;
            });
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};
        if (!formData.title.trim())     newErrors.title      = 'Service title is required';
        if (!formData.pujaDate)         newErrors.pujaDate   = 'Puja date is required';
        if (!formData.templeName.trim()) newErrors.templeName = 'Temple name is required';

        const isValid = Object.keys(newErrors).length === 0;
        console.log('[CreatePujaService] Validation:', { isValid, errors: newErrors, formData });

        setErrors(newErrors);
        return isValid;
    };

    const handlePublish = async () => {
        console.log('[CreatePujaService] ── Publish clicked ──────────────────');
        console.table({ title: formData.title, date: formData.pujaDate, temple: formData.templeName });
        console.log('[CreatePujaService] Full payload:', formData);

        if (!validateForm()) {
            toast.error('Please fix the errors in the form');
            return;
        }

        setIsLoading(true);
        try {
            const result = await pujaApi.createService(formData);
            console.log('[CreatePujaService] ✅ Publish result:', result);

            if (result.success) {
                toast.success('Puja Service Published Successfully!');

                // ⚠️ Delay navigation so you can see the console logs.
                // Remove this delay (and just call navigate directly) once confirmed.
                setTimeout(() => navigate('/puja-booking'), 1500);
            }
        } catch (error) {
            console.error('[CreatePujaService] ❌ Publish failed:', error);
            toast.error('Failed to publish service');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSaveDraft = async () => {
        console.log('[CreatePujaService] Save draft initiated with data:', formData);

        setIsLoading(true);
        try {
            const result = await pujaApi.saveDraft(formData);
            console.log('[CreatePujaService] Draft saved:', result);
            toast.info('Draft saved successfully');
        } catch (error) {
            console.error('[CreatePujaService] Draft save failed:', error);
            toast.error('Failed to save draft');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-8 max-w-[1200px] mx-auto pb-20 px-4">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-6 rounded-[24px] border border-[#EDEDF2] shadow-sm sticky top-4 z-40">
                <div className="space-y-1">
                    <h1 className="text-[24px] md:text-[32px] font-black text-[#1A1F4D] tracking-tight leading-tight">
                        Create New Puja Service
                    </h1>
                    <p className="text-[14px] font-medium text-[#667085]">
                        Drafting a high-impact spiritual experience for devotees.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Button
                        type="button"
                        variant="outlined"
                        onClick={handleSaveDraft}
                        disabled={isLoading}
                        className="h-11 px-6 rounded-xl border-[#D0D5DD] text-[#344054] font-bold text-[14px]"
                    >
                        Save Draft
                    </Button>
                    <Button
                        type="button"
                        variant="primary"
                        onClick={handlePublish}
                        disabled={isLoading}
                        className="h-11 px-6 rounded-xl bg-[#0A0E27] text-white font-bold text-[14px] flex items-center gap-2"
                    >
                        {isLoading ? <IconLoader2 className="animate-spin" size={18} /> : <IconSend size={18} />}
                        {isLoading ? 'Publishing...' : 'Publish Service'}
                    </Button>
                </div>
            </div>

            {/* Form Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <BasicInfoSection formData={formData} onChange={handleChange} errors={errors} />
                    <MediaMetaSection formData={formData} onChange={handleChange} />
                    <PackageFAQSection formData={formData} onChange={handleChange} />
                </div>
                <div className="space-y-8">
                    <ScheduleVenueSection formData={formData} onChange={handleChange} errors={errors} />
                </div>
            </div>
        </div>
    );
};

export default CreatePujaService;
