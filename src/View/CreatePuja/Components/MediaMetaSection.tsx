import React, { useState, useRef } from 'react';
import { IconPhoto, IconVideo, IconTag, IconPlus, IconX } from '@tabler/icons-react';
import { type PujaServiceFormData } from '../types';
import Input from '../../../Components/Common/Input';
import SelectDropdown from '../../../Components/Common/SelectDropdown';

const DEITY_OPTIONS = [
    { value: 'Lord Shani', label: 'Lord Shani' },
    { value: 'Lord Shiva', label: 'Lord Shiva' },
];

interface Props {
    formData: PujaServiceFormData;
    onChange: (field: keyof PujaServiceFormData, value: any) => void;
}

const MediaMetaSection: React.FC<Props> = ({ formData, onChange }) => {
    const [newTag, setNewTag] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const addBenefitPoint = () => {
        if (newTag.trim()) {
            onChange('benefitPoints', [...formData.benefitPoints, newTag.trim()]);
            setNewTag('');
        }
    };

    const removeBenefitPoint = (index: number) => {
        onChange('benefitPoints', formData.benefitPoints.filter((_, i) => i !== index));
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // For demo purposes, we create an object URL. In a real app, you'd upload this to a server.
            const url = URL.createObjectURL(file);
            onChange('heroImage', url);
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-[24px] border border-[#EDEDF2] p-6 md:p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-3 border-b border-[#EDEDF2] pb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                        <IconPhoto size={24} />
                    </div>
                    <h2 className="text-[20px] font-black text-[#0A0E27]">Media Management</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Main Hero Image</label>
                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer border-2 border-dashed border-[#EDEDF2] hover:border-primary/30 transition-all"
                        >
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                                accept="image/*"
                                className="hidden"
                            />
                            {formData.heroImage ? (
                                <img src={formData.heroImage} className="w-full h-full object-cover" alt="Hero" />
                            ) : (
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#F8F9FC]">
                                    <IconPhoto size={24} className="text-[#667085]" />
                                    <span className="text-[13px] font-bold text-[#667085]">Upload Image</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Video URL</label>
                            <Input
                                id="video-url"
                                value={formData.videoUrl}
                                onChange={(e) => onChange('videoUrl', e.target.value)}
                                placeholder="https://youtube.com/watch?v=..."
                                icon={IconVideo}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[24px] border border-[#EDEDF2] p-6 md:p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-3 border-b border-[#EDEDF2] pb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <IconTag size={24} />
                    </div>
                    <h2 className="text-[20px] font-black text-[#0A0E27]">Meta Data</h2>
                </div>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Primary Deity</label>
                        <SelectDropdown
                            id="primary-deity"
                            value={formData.primaryDeity}
                            onChange={(val) => onChange('primaryDeity', val)}
                            options={DEITY_OPTIONS}
                        />
                    </div>

                    <div className="space-y-3">
                        <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Benefit Points</label>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-wrap gap-2">
                                {formData.benefitPoints.map((tag, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-[#F8F9FC] border border-[#EDEDF2] rounded-lg text-[13px] font-bold text-[#1A1F4D] flex items-center gap-2">
                                        {tag}
                                        <button type="button" onClick={() => removeBenefitPoint(i)} className="text-[#667085] hover:text-red-500">
                                            <IconX size={14} />
                                        </button>
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <Input
                                    id="new-benefit-point"
                                    value={newTag}
                                    onChange={(e) => setNewTag(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addBenefitPoint())}
                                    placeholder="Add new benefit point"
                                />
                                <button type="button" onClick={addBenefitPoint} className="h-11 px-4 bg-[#1A1F4D] text-white rounded-xl text-[13px] font-bold flex items-center gap-1.5 hover:bg-opacity-90 shrink-0">
                                    <IconPlus size={16} /> Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaMetaSection;
