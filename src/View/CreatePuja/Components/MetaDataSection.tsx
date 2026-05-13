import React, { useState } from 'react';
import { IconTag, IconPlus, IconX } from '@tabler/icons-react';
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

const MetaDataSection: React.FC<Props> = ({ formData, onChange }) => {
    const [newTag, setNewTag] = useState('');

    const addBenefitPoint = () => {
        if (newTag.trim()) {
            onChange('benefitPoints', [...formData.benefitPoints, newTag.trim()]);
            setNewTag('');
        }
    };

    const removeBenefitPoint = (index: number) => {
        onChange('benefitPoints', formData.benefitPoints.filter((_, i) => i !== index));
    };

    return (
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
    );
};

export default MetaDataSection;
