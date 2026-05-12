import React from 'react';
import { IconPhoto, IconVideo, IconTag, IconPlus, IconX, IconChevronDown } from '@tabler/icons-react';

const MediaMetaSection = () => {
    return (
        <div className="space-y-6">
            {/* Media Management */}
            <div className="bg-white rounded-[24px] border border-[#EDEDF2] p-6 md:p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-3 border-b border-[#EDEDF2] pb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                        <IconPhoto size={24} />
                    </div>
                    <h2 className="text-[20px] font-black text-[#0A0E27]">Media Management</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Main Hero Image (Banner)</label>
                        <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer border-2 border-dashed border-[#EDEDF2] hover:border-primary/30 transition-all">
                            <img src="https://images.unsplash.com/photo-1605648916319-cf082f7524a1?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" alt="Hero" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                                <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#0A0E27]">
                                    <IconPhoto size={24} />
                                </div>
                                <span className="text-[13px] font-bold text-[#0A0E27]">Change Image</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Process Video URL (YouTube/Vimeo)</label>
                            <div className="relative">
                                <IconVideo className="absolute left-4 top-1/2 -translate-y-1/2 text-[#667085]" size={18} />
                                <input type="text" placeholder="https://youtube.com/watch?v=..." className="w-full h-12 pl-12 pr-4 rounded-xl border border-[#EDEDF2] bg-[#F8F9FC] focus:bg-white outline-none transition-all text-[14px] font-medium" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Gallery Assets</label>
                            <div className="flex flex-wrap gap-3">
                                <button className="w-16 h-16 rounded-xl border-2 border-dashed border-[#EDEDF2] flex items-center justify-center text-[#667085] hover:bg-[#F8F9FC] transition-all">
                                    <IconPlus size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Meta Data */}
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
                        <div className="relative">
                            <select className="w-full h-12 px-4 rounded-xl border border-[#EDEDF2] bg-[#F8F9FC] focus:bg-white appearance-none outline-none transition-all text-[15px] font-medium">
                                <option>Lord Shani</option>
                                <option>Lord Shiva</option>
                                <option>Goddess Durga</option>
                            </select>
                            <IconChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#667085] pointer-events-none" />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Benefit Points (Short)</label>
                        <div className="flex flex-wrap gap-2">
                            {['Negativity Removal', 'Obstacle Protection'].map((tag, i) => (
                                <span key={i} className="px-3 py-1.5 bg-[#F8F9FC] border border-[#EDEDF2] rounded-lg text-[13px] font-bold text-[#1A1F4D] flex items-center gap-2">
                                    {tag}
                                    <IconX size={14} className="text-[#667085] cursor-pointer" />
                                </span>
                            ))}
                            <button className="px-3 py-1.5 border border-dashed border-[#EDEDF2] rounded-lg text-[13px] font-bold text-[#667085] flex items-center gap-1.5 hover:bg-gray-50">
                                <IconPlus size={14} /> Add Point
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaMetaSection;
