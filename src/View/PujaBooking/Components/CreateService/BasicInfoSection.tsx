import React from 'react';
import { IconInfoCircle, IconBold, IconItalic, IconList, IconLink } from '@tabler/icons-react';

const BasicInfoSection = () => {
    return (
        <div className="bg-white rounded-[24px] border border-[#EDEDF2] p-6 md:p-8 space-y-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-[#EDEDF2] pb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                    <IconInfoCircle size={24} />
                </div>
                <h2 className="text-[20px] font-black text-[#0A0E27]">Basic Information</h2>
            </div>

            <div className="space-y-6">
                {/* Service Title */}
                <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Service Title</label>
                    <input 
                        type="text" 
                        placeholder="e.g., Shani Jayanti and Shani Amavasya - Shani Mool Mantra Jaap"
                        className="w-full h-12 px-4 rounded-xl border border-[#EDEDF2] bg-[#F8F9FC] focus:bg-white focus:ring-2 focus:ring-[#0A0E27]/5 outline-none transition-all text-[15px] font-medium"
                    />
                </div>

                {/* Category & Badge */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Category</label>
                        <select className="w-full h-12 px-4 rounded-xl border border-[#EDEDF2] bg-[#F8F9FC] focus:bg-white outline-none transition-all text-[15px] font-medium">
                            <option>Special Occasion</option>
                            <option>Health & Well-being</option>
                            <option>Festivals</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Benefit Tag (Badge)</label>
                        <input 
                            type="text" 
                            placeholder="e.g., 13 Year Rare Event"
                            className="w-full h-12 px-4 rounded-xl border border-[#EDEDF2] bg-[#F8F9FC] focus:bg-white outline-none transition-all text-[15px] font-medium"
                        />
                    </div>
                </div>

                {/* Short Description */}
                <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Short Description</label>
                    <textarea 
                        rows={3}
                        placeholder="A brief overview to transform difficult times..."
                        className="w-full p-4 rounded-xl border border-[#EDEDF2] bg-[#F8F9FC] focus:bg-white outline-none transition-all text-[15px] font-medium resize-none"
                    />
                </div>

                {/* Rich Text Editor Placeholder */}
                <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Rich Text: About Puja Content</label>
                    <div className="rounded-xl border border-[#EDEDF2] overflow-hidden bg-[#F8F9FC]">
                        <div className="flex items-center gap-1 p-2 bg-white border-b border-[#EDEDF2]">
                            <button className="p-2 hover:bg-gray-100 rounded-lg text-[#667085]"><IconBold size={18} /></button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg text-[#667085]"><IconItalic size={18} /></button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg text-[#667085]"><IconList size={18} /></button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg text-[#667085]"><IconLink size={18} /></button>
                        </div>
                        <textarea 
                            rows={6}
                            placeholder="Enter the divine mythology and technical significance..."
                            className="w-full p-4 bg-transparent outline-none text-[15px] font-medium resize-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasicInfoSection;
