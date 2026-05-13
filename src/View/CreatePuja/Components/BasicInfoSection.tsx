import React from 'react';
import { IconInfoCircle } from '@tabler/icons-react';
import { type PujaServiceFormData } from '../types';
import { cn } from '../../../Utils/cn';
import RichTextEditor from '../../../Components/Common/RichTextEditor';
import SelectDropdown from '../../../Components/Common/SelectDropdown';

const CATEGORY_OPTIONS = [
    { value: 'Special Occasion', label: 'Special Occasion' },
    { value: 'Health & Well-being', label: 'Health & Well-being' },
    { value: 'Festivals', label: 'Festivals' },
];

interface Props {
    formData: PujaServiceFormData;
    onChange: (field: keyof PujaServiceFormData, value: unknown) => void;
    errors: Record<string, string>;
}



const BasicInfoSection: React.FC<Props> = ({ formData, onChange, errors }) => {
    return (
        <div className="bg-white rounded-[24px] border border-[#EDEDF2] p-6 md:p-8 space-y-6 shadow-sm">
            {/* Section Header */}
            <div className="flex items-center gap-3 border-b border-[#EDEDF2] pb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                    <IconInfoCircle size={24} />
                </div>
                <h2 className="text-[20px] font-black text-[#0A0E27]">Basic Information</h2>
            </div>

            <div className="space-y-6">
                {/* Service Title */}
                <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">
                        Service Title
                    </label>
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => onChange('title', e.target.value)}
                        placeholder="e.g., Shani Jayanti and Shani Amavasya"
                        className={cn(
                            'w-full h-12 px-4 rounded-xl border bg-[#F8F9FC] focus:bg-white outline-none transition-all text-[15px] font-medium',
                            errors.title ? 'border-red-500' : 'border-[#EDEDF2]'
                        )}
                    />
                    {errors.title && (
                        <p className="text-xs text-red-500 font-bold ml-1">{errors.title}</p>
                    )}
                </div>

                {/* Category + Benefit Tag */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">
                            Category
                        </label>
                        <SelectDropdown
                            id="puja-category"
                            value={formData.category}
                            onChange={(val) => onChange('category', val)}
                            options={CATEGORY_OPTIONS}
                            placeholder="Select a category"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">
                            Benefit Tag (Badge)
                        </label>
                        <input
                            type="text"
                            value={formData.benefitTag}
                            onChange={(e) => onChange('benefitTag', e.target.value)}
                            placeholder="e.g., 13 Year Rare Event"
                            className="w-full h-12 px-4 rounded-xl border border-[#EDEDF2] bg-[#F8F9FC] focus:bg-white outline-none transition-all text-[15px] font-medium"
                        />
                    </div>
                </div>

                {/* Short Description */}
                <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">
                        Short Description
                    </label>
                    <textarea
                        rows={3}
                        value={formData.shortDescription}
                        onChange={(e) => onChange('shortDescription', e.target.value)}
                        placeholder="A brief overview..."
                        className="w-full p-4 rounded-xl border border-[#EDEDF2] bg-[#F8F9FC] focus:bg-white outline-none transition-all text-[15px] font-medium resize-none"
                    />
                </div>

                {/* Rich Text Editor — About / Detailed Content */}
                <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">
                        About Puja Content
                    </label>
                    <div className="quill-wrapper rounded-xl border border-[#EDEDF2] overflow-hidden">
                        <RichTextEditor
                            value={formData.aboutContent}
                            onChange={(html) => onChange('aboutContent', html)}
                            placeholder="Describe the mythology, significance, and benefits of this Puja..."
                            minHeight={200}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasicInfoSection;
