import React, { useState } from 'react';
import { IconPackage, IconQuestionMark, IconPlus, IconTrash, IconCircleCheck, IconChevronRight } from '@tabler/icons-react';
import { type PujaServiceFormData, type PujaTier } from '../types';
import { cn } from '../../../Utils/cn';
import CustomModel from '../../../Components/Common/CustomModel';
import Input from '../../../Components/Common/Input';
import SelectDropdown from '../../../Components/Common/SelectDropdown';
import Button from '../../../Components/Common/Button';

interface Props {
    formData: PujaServiceFormData;
    onChange: (field: keyof PujaServiceFormData, value: any) => void;
}

const PackageFAQSection: React.FC<Props> = ({ formData, onChange }) => {
    const [isTierModalOpen, setIsTierModalOpen] = useState(false);
    const [newTier, setNewTier] = useState<PujaTier>({
        id: '',
        name: '',
        price: '',
        type: 'Standard',
        features: [''],
        isRecommended: false
    });

    const addFAQ = () => {
        const newFAQ = { id: Math.random().toString(), question: '', answer: '' };
        onChange('faqs', [...formData.faqs, newFAQ]);
    };

    const removeFAQ = (id: string) => {
        onChange('faqs', formData.faqs.filter(f => f.id !== id));
    };

    const updateFAQ = (id: string, field: 'question' | 'answer', value: string) => {
        onChange('faqs', formData.faqs.map(f => f.id === id ? { ...f, [field]: value } : f));
    };

    const handleAddTier = () => {
        const tierToAdd = { ...newTier, id: Math.random().toString(36).substr(2, 9) };
        onChange('tiers', [...formData.tiers, tierToAdd]);
        setNewTier({ id: '', name: '', price: '', type: 'Standard', features: [''], isRecommended: false });
        setIsTierModalOpen(false);
    };

    const removeTier = (id: string) => {
        onChange('tiers', formData.tiers.filter(t => t.id !== id));
    };

    const addFeature = () => {
        setNewTier({ ...newTier, features: [...newTier.features, ''] });
    };

    const updateFeature = (index: number, value: string) => {
        const updatedFeatures = [...newTier.features];
        updatedFeatures[index] = value;
        setNewTier({ ...newTier, features: updatedFeatures });
    };

    const removeFeature = (index: number) => {
        setNewTier({ ...newTier, features: newTier.features.filter((_, i) => i !== index) });
    };

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-[24px] border border-[#EDEDF2] p-6 md:p-8 space-y-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-[#EDEDF2] pb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                            <IconPackage size={24} />
                        </div>
                        <h2 className="text-[20px] font-black text-[#0A0E27]">Package Configuration</h2>
                    </div>
                    <Button 
                        type="button" 
                        variant="ghost"
                        onClick={() => setIsTierModalOpen(true)}
                        className="text-[#1A1F4D] hover:text-primary font-bold text-sm"
                        icon={IconPlus}
                    >
                        Add Tier
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {formData.tiers.map((tier) => (
                        <div key={tier.id} className={cn(
                            "relative p-6 rounded-2xl border-2 transition-all group",
                            tier.isRecommended ? "border-orange-400 bg-white" : "border-[#EDEDF2] bg-white"
                        )}>
                            {tier.isRecommended && (
                                <div className="absolute -top-3 right-4 px-3 py-1 bg-orange-400 text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-sm">
                                    Recommended
                                </div>
                            )}
                            <Button 
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeTier(tier.id)}
                                className="absolute top-4 right-4 text-[#667085] hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                icon={IconTrash}
                            />
                            <div className="space-y-4">
                                <span className={cn(
                                    "px-2.5 py-1 text-[10px] font-black tracking-widest uppercase rounded",
                                    tier.type === 'Premium' ? "bg-[#1A1F4D] text-white" : "bg-blue-50 text-blue-600"
                                )}>
                                    {tier.type}
                                </span>
                                <div className="space-y-1">
                                    <h4 className="text-[22px] font-black text-[#0A0E27]">{tier.name}</h4>
                                    <div className="text-[24px] font-black text-[#0A0E27] flex items-baseline gap-1">
                                        <span className="text-[18px]">₹</span> {tier.price}
                                    </div>
                                </div>
                                <ul className="space-y-2.5 pt-2">
                                    {tier.features.map((feature, fi) => (
                                        <li key={fi} className="flex items-center gap-2 text-[14px] font-medium text-[#4B5563]">
                                            <IconCircleCheck size={18} className="text-[#92400E]" /> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-[24px] border border-[#EDEDF2] p-6 md:p-8 space-y-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-[#EDEDF2] pb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                            <IconQuestionMark size={24} />
                        </div>
                        <h2 className="text-[20px] font-black text-[#0A0E27]">Frequently Asked Questions</h2>
                    </div>
                    <Button 
                        type="button" 
                        variant="outlined"
                        size="sm"
                        onClick={addFAQ} 
                        className="bg-[#F8F9FC] border-[#EDEDF2] text-[#0A0E27] hover:bg-gray-50 rounded-lg text-xs font-bold"
                    >
                        Add FAQ
                    </Button>
                </div>

                <div className="space-y-6">
                    {formData.faqs.map((faq, i) => (
                        <div key={faq.id} className="flex gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-[#1A1F4D] text-white flex items-center justify-center text-[14px] font-black shrink-0 shadow-lg shadow-black/5">
                                {(i + 1).toString().padStart(2, '0')}
                            </div>
                            <div className="flex-1 space-y-3">
                                <Input
                                    id={`faq-q-${faq.id}`}
                                    value={faq.question}
                                    onChange={(e) => updateFAQ(faq.id, 'question', e.target.value)}
                                    placeholder="Question"
                                />
                                <textarea
                                    rows={2}
                                    value={faq.answer}
                                    onChange={(e) => updateFAQ(faq.id, 'answer', e.target.value)}
                                    placeholder="Answer"
                                    className="w-full p-4 rounded-xl border border-[#EDEDF2] bg-white text-[14px] font-medium text-[#667085] resize-none outline-none focus:ring-2 focus:ring-[#1A1F4D]/5"
                                />
                            </div>
                            <Button 
                                type="button" 
                                variant="ghost"
                                size="icon"
                                onClick={() => removeFAQ(faq.id)} 
                                className="text-red-500 hover:bg-red-50 rounded-lg shrink-0 h-fit mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                icon={IconTrash}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <CustomModel
                isOpen={isTierModalOpen}
                onClose={() => setIsTierModalOpen(false)}
                title="Add New Package Tier"
                primaryButton="Add Tier"
                onPrimaryClick={handleAddTier}
                secondaryButton="Cancel"
                size="lg"
            >
                <div className="space-y-5">
                    <Input
                        id="tier-name"
                        label="Tier Name"
                        value={newTier.name}
                        onChange={(e) => setNewTier({ ...newTier, name: e.target.value })}
                        placeholder="e.g. Individual Puja"
                    />
                    <Input
                        id="tier-price"
                        label="Price (₹)"
                        type="number"
                        value={newTier.price}
                        onChange={(e) => setNewTier({ ...newTier, price: e.target.value })}
                        placeholder="1251"
                    />

                    <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Tier Type</label>
                        <SelectDropdown
                            id="tier-type"
                            value={newTier.type}
                            onChange={(val) => setNewTier({ ...newTier, type: val as 'Standard' | 'Premium' })}
                            options={[
                                { value: 'Standard', label: 'Standard' },
                                { value: 'Premium', label: 'Premium' },
                            ]}
                        />
                    </div>
                    
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Features</label>
                            <Button 
                                type="button" 
                                variant="ghost"
                                size="sm"
                                onClick={addFeature}
                                className="text-xs font-bold text-[#1A1F4D] hover:underline p-0 h-auto"
                                icon={IconPlus}
                            >
                                Add Feature
                            </Button>
                        </div>
                        <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                            {newTier.features.map((feature, idx) => (
                                <div key={idx} className="flex gap-2">
                                    <Input
                                        id={`feature-${idx}`}
                                        value={feature}
                                        onChange={(e) => updateFeature(idx, e.target.value)}
                                        placeholder="e.g. Sankalp with Name/Gotra"
                                    />
                                    <Button 
                                        type="button" 
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => removeFeature(idx)}
                                        className="text-red-500 hover:bg-red-50 rounded-lg h-12 w-12 flex items-center justify-center shrink-0"
                                        icon={IconTrash}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                        <input
                            id="is-recommended"
                            type="checkbox"
                            checked={newTier.isRecommended}
                            onChange={(e) => setNewTier({ ...newTier, isRecommended: e.target.checked })}
                            className="w-5 h-5 rounded border-[#EDEDF2] text-[#1A1F4D] focus:ring-[#1A1F4D]/20"
                        />
                        <label htmlFor="is-recommended" className="text-[14px] font-bold text-[#0A0E27] cursor-pointer">
                            Mark as Recommended
                        </label>
                    </div>
                </div>
            </CustomModel>
        </div>
    );
};

export default PackageFAQSection;
