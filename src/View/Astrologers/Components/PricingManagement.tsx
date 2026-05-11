import React from 'react';
import { IconCreditCard, IconMessage2, IconPhone, IconVideo, IconTrendingUp } from '@tabler/icons-react';
import { Switch } from '@headlessui/react';
import { cn } from '../../../Utils/cn';

export interface PricingData {
    chat: { actual: string; offer: string };
    voice: { actual: string; offer: string };
    video: { actual: string; offer: string };
    platformCommission: number; // e.g. 35 for 35%
}

interface PricingManagementProps {
    data: PricingData;
    pricingToggles: { chat: boolean; voice: boolean; video: boolean };
    setPricingToggles: React.Dispatch<React.SetStateAction<{ chat: boolean; voice: boolean; video: boolean }>>;
}

export default function PricingManagement({ data, pricingToggles, setPricingToggles }: PricingManagementProps) {
    return (
        <div className="bg-white rounded-[2rem] border border-outline-variant shadow-sm p-8 space-y-8">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                    <IconCreditCard size={24} />
                </div>
                <h2 className="text-2xl font-bold text-on-surface">Pricing Management</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Chat Pricing */}
                <div className="bg-[#F8F9FC] p-6 rounded-[1.5rem] border border-outline-variant space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-[#EBEBFF] rounded-xl flex items-center justify-center text-[#5456A6]">
                                <IconMessage2 size={24} />
                            </div>
                            <div>
                                <p className="font-bold text-on-surface">Chat</p>
                                <p className="text-[11px] text-on-surface-variant font-medium">Consultation</p>
                            </div>
                        </div>
                        <Switch
                            checked={pricingToggles.chat}
                            onChange={(val) => setPricingToggles(prev => ({ ...prev, chat: val }))}
                            className={cn(
                                pricingToggles.chat ? 'bg-[#00A344]' : 'bg-gray-200',
                                'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none'
                            )}
                        >
                            <span className={cn(pricingToggles.chat ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200')} />
                        </Switch>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Actual Price (₹/min)</label>
                            <input type="text" value={data.chat.actual} className="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 font-bold text-on-surface focus:outline-none focus:border-primary" readOnly />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Offer Price (₹/min)</label>
                            <input type="text" value={data.chat.offer} className="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 font-bold text-on-surface focus:outline-none focus:border-primary" readOnly />
                        </div>
                    </div>
                </div>

                {/* Voice Pricing */}
                <div className="bg-[#F8F9FC] p-6 rounded-[1.5rem] border border-outline-variant space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-[#EBEBFF] rounded-xl flex items-center justify-center text-[#5456A6]">
                                <IconPhone size={24} />
                            </div>
                            <div>
                                <p className="font-bold text-on-surface">Voice</p>
                                <p className="text-[11px] text-on-surface-variant font-medium">Call</p>
                            </div>
                        </div>
                        <Switch
                            checked={pricingToggles.voice}
                            onChange={(val) => setPricingToggles(prev => ({ ...prev, voice: val }))}
                            className={cn(
                                pricingToggles.voice ? 'bg-[#00A344]' : 'bg-gray-200',
                                'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none'
                            )}
                        >
                            <span className={cn(pricingToggles.voice ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200')} />
                        </Switch>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Actual Price (₹/min)</label>
                            <input type="text" value={data.voice.actual} className="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 font-bold text-on-surface focus:outline-none focus:border-primary" readOnly />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Offer Price (₹/min)</label>
                            <input type="text" value={data.voice.offer} className="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 font-bold text-on-surface focus:outline-none focus:border-primary" readOnly />
                        </div>
                    </div>
                </div>

                {/* Video Pricing */}
                <div className="bg-[#F8F9FC] p-6 rounded-[1.5rem] border border-outline-variant space-y-6 opacity-60">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-[#EBEBFF] rounded-xl flex items-center justify-center text-[#5456A6]">
                                <IconVideo size={24} />
                            </div>
                            <div>
                                <p className="font-bold text-on-surface">Video</p>
                                <p className="text-[11px] text-on-surface-variant font-medium">Call</p>
                            </div>
                        </div>
                        <Switch
                            checked={pricingToggles.video}
                            onChange={(val) => setPricingToggles(prev => ({ ...prev, video: val }))}
                            className={cn(
                                pricingToggles.video ? 'bg-[#00A344]' : 'bg-gray-200',
                                'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none'
                            )}
                        >
                            <span className={cn(pricingToggles.video ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200')} />
                        </Switch>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Actual Price (₹/min)</label>
                            <input type="text" value={data.video.actual} className="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 font-bold text-on-surface focus:outline-none focus:border-primary" readOnly />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Offer Price (₹/min)</label>
                            <input type="text" value={data.video.offer} className="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 font-bold text-on-surface focus:outline-none focus:border-primary" readOnly />
                        </div>
                    </div>
                </div>
            </div>

            {/* Platform Commission slider */}
            <div className="bg-[#F8F9FC] p-6 rounded-[1.5rem] border border-outline-variant space-y-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[#5456A6]">
                        <IconTrendingUp size={24} />
                        <h3 className="text-lg font-bold text-on-surface">Platform Commission Control</h3>
                    </div>
                    <span className="text-2xl font-black text-[#0A0E27]">{data.platformCommission}%</span>
                </div>
                
                <div className="px-4 space-y-6">
                    <div className="relative h-2 bg-[#EBEBFF] rounded-full">
                        <div className="absolute top-0 left-0 h-full bg-[#0A0E27] rounded-full" style={{ width: `${data.platformCommission}%` }} />
                        <div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-[#0A0E27] border-4 border-white rounded-full shadow-lg cursor-pointer" style={{ left: `${data.platformCommission}%` }} />
                    </div>
                    <div className="flex justify-between text-[13px] font-bold text-on-surface-variant">
                        <span>0%</span>
                        <span>50%</span>
                        <span>100%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

