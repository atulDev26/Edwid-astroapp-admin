import React from 'react';
import { IconStar, IconTrendingUp } from '@tabler/icons-react';

export default function RecentReviews() {
    return (
        <div className="bg-white rounded-[2rem] border border-outline-variant shadow-sm p-8 space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 border-2 border-[#0A0E27] rounded flex items-center justify-center">
                        <IconStar size={14} className="text-[#0A0E27]" />
                    </div>
                    <h2 className="text-xl font-bold text-[#0A0E27]">Recent Reviews</h2>
                </div>
                <div className="flex items-center gap-4">
                    <button className="text-sm font-bold text-on-surface-variant hover:text-primary flex items-center gap-2">
                        View All Reviews
                        <IconTrendingUp size={16} className="rotate-45" />
                    </button>
                    <div className="flex items-center gap-1.5 text-lg font-black text-[#0A0E27]">
                        <IconStar size={20} className="text-[#FEAE2C]" fill="currentColor" />
                        4.9
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img src="https://i.pravatar.cc/150?u=meera" alt="Meera" className="w-10 h-10 rounded-full object-cover" />
                            <div>
                                <p className="font-bold text-on-surface">Meera Joshi</p>
                                <p className="text-xs text-on-surface-variant">2 hours ago</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 text-[#FEAE2C]">
                            {[...Array(5)].map((_, idx) => <IconStar key={idx} size={16} fill="currentColor" />)}
                        </div>
                    </div>
                    <p className="text-sm text-on-surface-variant font-medium leading-relaxed">
                        Acharya Vedant is incredibly accurate! He precisely pinpointed my career shifts and gave very practical remedies. Truly blessed to have found him.
                    </p>
                </div>

                <div className="flex items-center justify-between border-t border-outline-variant pt-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-bold text-sm text-on-surface-variant">SR</div>
                        <div>
                            <p className="font-bold text-on-surface">Suresh Raina</p>
                            <p className="text-xs text-on-surface-variant">Yesterday</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 text-[#FEAE2C]">
                        <IconStar size={16} fill="currentColor" />
                        <IconStar size={16} fill="currentColor" />
                    </div>
                </div>
            </div>
        </div>
    );
}
