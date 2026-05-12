import React from 'react';
import { IconPackage, IconQuestionMark, IconPlus, IconTrash, IconCircleCheck } from '@tabler/icons-react';
import { type PujaServiceFormData } from '../../types';
import { cn } from '../../../../Utils/cn';

interface Props {
    formData: PujaServiceFormData;
    onChange: (field: keyof PujaServiceFormData, value: any) => void;
}

const PackageFAQSection: React.FC<Props> = ({ formData, onChange }) => {
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {formData.tiers.map((tier) => (
                        <div key={tier.id} className={cn(
                            "relative p-6 rounded-2xl border-2 transition-all",
                            tier.isRecommended ? "border-primary/20 bg-primary/5" : "border-[#EDEDF2] bg-white"
                        )}>
                            {tier.isRecommended && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#FFB020] text-[#0A0E27] text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm">
                                    Recommended
                                </div>
                            )}
                            <div className="space-y-4">
                                <span className={cn(
                                    "px-2.5 py-1 text-[10px] font-black tracking-widest uppercase rounded",
                                    tier.isRecommended ? "bg-[#1A1F4D] text-white" : "bg-blue-50 text-blue-600"
                                )}>
                                    {tier.name.includes('Premium') || tier.isRecommended ? 'Premium' : 'Standard'}
                                </span>
                                <div className="space-y-1">
                                    <h4 className="text-[18px] font-black text-[#0A0E27]">{tier.name}</h4>
                                    <div className="text-[22px] font-black text-[#0A0E27]">₹ {tier.price}</div>
                                </div>
                                <ul className="space-y-2.5">
                                    {tier.features.map((feature, fi) => (
                                        <li key={fi} className="flex items-center gap-2 text-[13px] font-medium text-[#667085]">
                                            <IconCircleCheck size={16} className="text-[#12B76A]" /> {feature}
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
                    <button type="button" onClick={addFAQ} className="h-9 px-4 bg-[#F8F9FC] border border-[#EDEDF2] rounded-lg text-[12px] font-bold text-[#0A0E27] hover:bg-gray-50">
                        Add FAQ
                    </button>
                </div>

                <div className="space-y-6">
                    {formData.faqs.map((faq, i) => (
                        <div key={faq.id} className="flex gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-[#1A1F4D] text-white flex items-center justify-center text-[14px] font-black shrink-0 shadow-lg shadow-black/5">
                                {(i + 1).toString().padStart(2, '0')}
                            </div>
                            <div className="flex-1 space-y-3">
                                <input
                                    type="text"
                                    value={faq.question}
                                    onChange={(e) => updateFAQ(faq.id, 'question', e.target.value)}
                                    placeholder="Question"
                                    className="w-full h-11 px-4 rounded-xl border border-[#EDEDF2] bg-white font-bold text-[15px] text-[#0A0E27] outline-none focus:ring-2 focus:ring-[#1A1F4D]/5"
                                />
                                <textarea
                                    rows={2}
                                    value={faq.answer}
                                    onChange={(e) => updateFAQ(faq.id, 'answer', e.target.value)}
                                    placeholder="Answer"
                                    className="w-full p-4 rounded-xl border border-[#EDEDF2] bg-white text-[14px] font-medium text-[#667085] resize-none outline-none focus:ring-2 focus:ring-[#1A1F4D]/5"
                                />
                            </div>
                            <button type="button" onClick={() => removeFAQ(faq.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg shrink-0 h-fit mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <IconTrash size={20} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PackageFAQSection;
