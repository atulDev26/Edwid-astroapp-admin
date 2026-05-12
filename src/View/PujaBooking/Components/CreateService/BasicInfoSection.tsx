import React from 'react';
import { IconInfoCircle, IconBold, IconItalic, IconList, IconLink } from '@tabler/icons-react';
import { type PujaServiceFormData } from '../../types';
import { cn } from '../../../../Utils/cn';

interface Props {
    formData: PujaServiceFormData;
    onChange: (field: keyof PujaServiceFormData, value: any) => void;
    errors: Record<string, string>;
}

const BasicInfoSection: React.FC<Props> = ({ formData, onChange, errors }) => {
    return (
        <div className="bg-white rounded-[24px] border border-[#EDEDF2] p-6 md:p-8 space-y-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-[#EDEDF2] pb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                    <IconInfoCircle size={24} />
                </div>
                <h2 className="text-[20px] font-black text-[#0A0E27]">Basic Information</h2>
            </div>

            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Service Title</label>
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => onChange('title', e.target.value)}
                        placeholder="e.g., Shani Jayanti and Shani Amavasya"
                        className={cn(
                            "w-full h-12 px-4 rounded-xl border bg-[#F8F9FC] focus:bg-white outline-none transition-all text-[15px] font-medium",
                            errors.title ? "border-red-500" : "border-[#EDEDF2]"
                        )}
                    />
                    {errors.title && <p className="text-xs text-red-500 font-bold ml-1">{errors.title}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Category</label>
                        <select
                            value={formData.category}
                            onChange={(e) => onChange('category', e.target.value)}
                            className="w-full h-12 px-4 rounded-xl border border-[#EDEDF2] bg-[#F8F9FC] focus:bg-white outline-none transition-all text-[15px] font-medium"
                        >
                            <option value="Special Occasion">Special Occasion</option>
                            <option value="Health & Well-being">Health & Well-being</option>
                            <option value="Festivals">Festivals</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Benefit Tag (Badge)</label>
                        <input
                            type="text"
                            value={formData.benefitTag}
                            onChange={(e) => onChange('benefitTag', e.target.value)}
                            placeholder="e.g., 13 Year Rare Event"
                            className="w-full h-12 px-4 rounded-xl border border-[#EDEDF2] bg-[#F8F9FC] focus:bg-white outline-none transition-all text-[15px] font-medium"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Short Description</label>
                    <textarea
                        rows={3}
                        value={formData.shortDescription}
                        onChange={(e) => onChange('shortDescription', e.target.value)}
                        placeholder="A brief overview..."
                        className="w-full p-4 rounded-xl border border-[#EDEDF2] bg-[#F8F9FC] focus:bg-white outline-none transition-all text-[15px] font-medium resize-none"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Rich Text Content</label>
                    <div className="rounded-xl border border-[#EDEDF2] overflow-hidden bg-[#F8F9FC]">
                        <div className="flex items-center gap-1 p-2 bg-white border-b border-[#EDEDF2]">
                            <button type="button" className="p-2 hover:bg-gray-100 rounded-lg text-[#667085]"><IconBold size={18} /></button>
                            <button type="button" className="p-2 hover:bg-gray-100 rounded-lg text-[#667085]"><IconItalic size={18} /></button>
                        </div>
                        <textarea
                            rows={6}
                            value={formData.aboutContent}
                            onChange={(e) => onChange('aboutContent', e.target.value)}
                            placeholder="Detailed mythology and significance..."
                            className="w-full p-4 bg-transparent outline-none text-[15px] font-medium resize-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasicInfoSection;
