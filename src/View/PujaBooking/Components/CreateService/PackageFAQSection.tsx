import React from 'react';
import { IconPackage, IconQuestionMark, IconPlus, IconTrash, IconCircleCheck } from '@tabler/icons-react';

const PackageFAQSection = () => {
    return (
        <div className="space-y-6">
            {/* Package Configuration */}
            <div className="bg-white rounded-[24px] border border-[#EDEDF2] p-6 md:p-8 space-y-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-[#EDEDF2] pb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                            <IconPackage size={24} />
                        </div>
                        <h2 className="text-[20px] font-black text-[#0A0E27]">Package Configuration</h2>
                    </div>
                    <button className="flex items-center gap-1.5 text-[13px] font-bold text-primary hover:underline">
                        <IconPlus size={16} /> Add Tier
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Standard Tier */}
                    <div className="relative p-6 rounded-2xl border-2 border-[#EDEDF2] bg-white group hover:border-[#EDEDF2] transition-all">
                        <div className="absolute top-4 right-4">
                            <button className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                <IconTrash size={18} />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-[10px] font-black tracking-widest uppercase rounded">Standard</span>
                            <div className="space-y-1">
                                <h4 className="text-[18px] font-black text-[#0A0E27]">Individual Puja</h4>
                                <div className="text-[22px] font-black text-[#0A0E27]">₹ 1251</div>
                            </div>
                            <ul className="space-y-2.5">
                                <li className="flex items-center gap-2 text-[13px] font-medium text-[#667085]">
                                    <IconCircleCheck size={16} className="text-[#12B76A]" /> Sankalp with Name/Gotra
                                </li>
                                <li className="flex items-center gap-2 text-[13px] font-medium text-[#667085]">
                                    <IconCircleCheck size={16} className="text-[#12B76A]" /> Live Video Link
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Premium Tier */}
                    <div className="relative p-6 rounded-2xl border-2 border-primary/20 bg-primary/5 group">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#FFB020] text-[#0A0E27] text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm">
                            Recommended
                        </div>
                        <div className="space-y-4">
                            <span className="px-2.5 py-1 bg-[#1A1F4D] text-white text-[10px] font-black tracking-widest uppercase rounded">Premium</span>
                            <div className="space-y-1">
                                <h4 className="text-[18px] font-black text-[#0A0E27]">Family + Bhog</h4>
                                <div className="text-[22px] font-black text-[#0A0E27]">₹ 3001</div>
                            </div>
                            <ul className="space-y-2.5">
                                <li className="flex items-center gap-2 text-[13px] font-medium text-[#1A1F4D]">
                                    <IconCircleCheck size={16} className="text-[#12B76A]" /> Personalized Sankalp for 4
                                </li>
                                <li className="flex items-center gap-2 text-[13px] font-medium text-[#1A1F4D]">
                                    <IconCircleCheck size={16} className="text-[#12B76A]" /> Prasad delivered home
                                </li>
                                <li className="flex items-center gap-2 text-[13px] font-medium text-[#1A1F4D]">
                                    <IconCircleCheck size={16} className="text-[#12B76A]" /> Ann Daan in your name
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Frequently Asked Questions */}
            <div className="bg-white rounded-[24px] border border-[#EDEDF2] p-6 md:p-8 space-y-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-[#EDEDF2] pb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                            <IconQuestionMark size={24} />
                        </div>
                        <h2 className="text-[20px] font-black text-[#0A0E27]">Frequently Asked Questions</h2>
                    </div>
                    <button className="h-9 px-4 bg-[#F8F9FC] border border-[#EDEDF2] rounded-lg text-[12px] font-bold text-[#0A0E27] hover:bg-gray-50">
                        Add FAQ
                    </button>
                </div>

                <div className="space-y-4">
                    <div className="flex gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-[#1A1F4D] text-white flex items-center justify-center text-[14px] font-black shrink-0 shadow-lg shadow-black/5">01</div>
                        <div className="flex-1 space-y-4">
                            <input 
                                type="text" 
                                defaultValue="Why should I choose Shri Mandir for performing a Puja?"
                                className="w-full h-11 px-4 rounded-xl border border-[#EDEDF2] bg-white font-bold text-[15px] text-[#0A0E27] outline-none focus:ring-2 focus:ring-[#1A1F4D]/5"
                            />
                            <textarea 
                                rows={3}
                                defaultValue="Our platform ensures authenticity by partnering with renowned temples and experienced Pandits to offer the most spiritually accurate experience."
                                className="w-full p-4 rounded-xl border border-[#EDEDF2] bg-white text-[14px] font-medium text-[#667085] resize-none outline-none focus:ring-2 focus:ring-[#1A1F4D]/5"
                            />
                        </div>
                        <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg shrink-0 h-fit mt-1">
                            <IconTrash size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageFAQSection;
