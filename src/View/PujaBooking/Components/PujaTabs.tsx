import React from 'react';
import { cn } from '../../../Utils/cn';

interface PujaTabsProps {
    activeTab: number;
    setActiveTab: (index: number) => void;
}

const PujaTabs: React.FC<PujaTabsProps> = ({ activeTab, setActiveTab }) => {
    return (
        <div className="bg-[#F8F9FC] p-1.5 rounded-[14px] border border-[#EDEDF2] w-fit">
            <div className="flex items-center">
                {['Service List', 'Booking Management'].map((tab, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveTab(i)}
                        className={cn(
                            "px-6 py-2.5 text-[14px] font-bold transition-all whitespace-nowrap cursor-pointer rounded-[10px]",
                            activeTab === i
                                ? "bg-white text-[#1A1F4D] shadow-sm ring-1 ring-[#EDEDF2]"
                                : "text-[#667085] hover:text-[#1A1F4D]"
                        )}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PujaTabs;
