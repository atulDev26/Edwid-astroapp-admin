import React from 'react';
import { IconClock, IconMapPin } from '@tabler/icons-react';
import { type PujaServiceFormData } from '../types';
import { cn } from '../../../Utils/cn';

interface Props {
    formData: PujaServiceFormData;
    onChange: (field: keyof PujaServiceFormData, value: any) => void;
    errors: Record<string, string>;
}

const ScheduleVenueSection: React.FC<Props> = ({ formData, onChange, errors }) => {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-[24px] border border-[#EDEDF2] p-6 md:p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-3 border-b border-[#EDEDF2] pb-4">
                    <div className="w-10 h-10 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center">
                        <IconClock size={24} />
                    </div>
                    <h2 className="text-[20px] font-black text-[#0A0E27]">Schedule &amp; Tithi</h2>
                </div>

                <div className="space-y-5">
                    <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Puja Date</label>
                        <input
                            type="date"
                            value={formData.pujaDate}
                            onChange={(e) => onChange('pujaDate', e.target.value)}
                            className={cn(
                                "w-full h-12 px-4 rounded-xl border bg-[#F8F9FC] focus:bg-white outline-none transition-all text-[15px] font-medium",
                                errors.pujaDate ? "border-red-500" : "border-[#EDEDF2]"
                            )}
                        />
                        {errors.pujaDate && <p className="text-xs text-red-500 font-bold">{errors.pujaDate}</p>}
                    </div>
                    <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Tithi Name</label>
                        <input
                            type="text"
                            value={formData.tithiName}
                            onChange={(e) => onChange('tithiName', e.target.value)}
                            placeholder="e.g., Shani Amavasya"
                            className="w-full h-12 px-4 rounded-xl border border-[#EDEDF2] bg-[#F8F9FC] focus:bg-white outline-none transition-all text-[15px] font-medium"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Muhurat</label>
                        <input
                            type="text"
                            value={formData.muhurat}
                            onChange={(e) => onChange('muhurat', e.target.value)}
                            placeholder="e.g., 4:30 AM - 6:15 PM"
                            className="w-full h-12 px-4 rounded-xl border border-[#EDEDF2] bg-[#F8F9FC] focus:bg-white outline-none transition-all text-[15px] font-medium"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[24px] border border-[#EDEDF2] p-6 md:p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-3 border-b border-[#EDEDF2] pb-4">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                        <IconMapPin size={24} />
                    </div>
                    <h2 className="text-[20px] font-black text-[#0A0E27]">Venue Details</h2>
                </div>

                <div className="space-y-5">
                    <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Temple Name</label>
                        <input
                            type="text"
                            value={formData.templeName}
                            onChange={(e) => onChange('templeName', e.target.value)}
                            placeholder="Shri Navgraha Shani Temple"
                            className={cn(
                                "w-full h-12 px-4 rounded-xl border bg-[#F8F9FC] focus:bg-white outline-none transition-all text-[15px] font-medium",
                                errors.templeName ? "border-red-500" : "border-[#EDEDF2]"
                            )}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">City</label>
                            <input
                                type="text"
                                value={formData.city}
                                onChange={(e) => onChange('city', e.target.value)}
                                placeholder="Dabra"
                                className="w-full h-12 px-4 rounded-xl border border-[#EDEDF2] bg-[#F8F9FC] focus:bg-white outline-none transition-all text-[15px] font-medium"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">State</label>
                            <input
                                type="text"
                                value={formData.state}
                                onChange={(e) => onChange('state', e.target.value)}
                                placeholder="Madhya Pradesh"
                                className="w-full h-12 px-4 rounded-xl border border-[#EDEDF2] bg-[#F8F9FC] focus:bg-white outline-none transition-all text-[15px] font-medium"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScheduleVenueSection;
