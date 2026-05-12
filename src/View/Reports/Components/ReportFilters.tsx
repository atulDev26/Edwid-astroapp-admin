import React from 'react';
import { IconCalendar } from '@tabler/icons-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import styled from 'styled-components';

const StyledDatePickerWrapper = styled.div`
  width: 100%;
  @media (min-width: 640px) {
    width: auto;
  }
  .react-datepicker-wrapper {
    width: 100%;
  }
  .react-datepicker__input-container {
    display: flex;
    align-items: center;
  }
  .react-datepicker {
    font-family: var(--font-work-sans);
    border: 1px solid var(--color-outline-variant);
    border-radius: var(--radius-lg);
    box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    background-color: #ffffff;
    overflow: hidden;
  }
  .react-datepicker__header {
    background-color: #ffffff;
    border-bottom: 1px solid var(--color-surface-container);
    padding-top: 12px;
  }
  .react-datepicker__day--selected, 
  .react-datepicker__day--in-selecting-range, 
  .react-datepicker__day--in-range {
    background-color: #040052 !important;
    color: white !important;
    border-radius: 8px;
  }
  .react-datepicker-popper {
    z-index: 9999 !important;
  }
`;

interface ReportFiltersProps {
    selectedPeriod: string;
    setSelectedPeriod: (period: string) => void;
    compareWithPrevious: boolean;
    setCompareWithPrevious: (compare: boolean) => void;
    startDate: Date | null;
    endDate: Date | null;
    onDateChange: (dates: [Date | null, Date | null]) => void;
}

const ReportFilters: React.FC<ReportFiltersProps> = ({
    selectedPeriod,
    setSelectedPeriod,
    compareWithPrevious,
    setCompareWithPrevious,
    startDate,
    endDate,
    onDateChange,
}) => {
    const dateLabel = startDate && endDate 
        ? `${format(startDate, 'MMM d, yyyy')} - ${format(endDate, 'MMM d, yyyy')}` 
        : 'Select Date Range';

    return (
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-[#EDEDF2] shadow-sm">
            <div className="flex items-center bg-[#F2F4F7] p-1 rounded-lg w-fit">
                {['Daily', 'Weekly', 'Monthly'].map((period) => (
                    <button
                        key={period}
                        onClick={() => setSelectedPeriod(period)}
                        className={`px-4 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-all ${
                            selectedPeriod === period 
                            ? 'bg-white text-[#101828] shadow-sm' 
                            : 'text-[#667085] hover:text-[#101828]'
                        }`}
                    >
                        {period}
                    </button>
                ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
                <StyledDatePickerWrapper>
                    <DatePicker
                        selected={startDate}
                        onChange={onDateChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        portalId="root"
                        customInput={
                            <button className="flex items-center gap-2 px-3 py-2 border border-[#D0D5DD] rounded-lg bg-white w-full sm:min-w-[320px] hover:border-[#040052] transition-colors text-left">
                                <IconCalendar size={18} className="text-[#667085]" />
                                <span className="text-sm text-[#101828] font-medium">{dateLabel}</span>
                            </button>
                        }
                        popperPlacement="bottom-start"
                    />
                </StyledDatePickerWrapper>
                
                <div className="flex items-center gap-3 shrink-0">
                    <span className="text-sm text-[#475467]">Compare</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                            type="checkbox" 
                            className="sr-only peer" 
                            checked={compareWithPrevious}
                            onChange={(e) => setCompareWithPrevious(e.target.checked)}
                        />
                        <div className="w-11 h-6 bg-[#E4E7EC] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#040052]"></div>
                        <span className="ml-3 text-sm font-medium text-[#475467] whitespace-nowrap">Previous Period</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ReportFilters;
