import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { IconCalendar, IconChevronDown } from '@tabler/icons-react';
import { format } from 'date-fns';
import { cn } from '../../Utils/cn';
import styled from 'styled-components';

const StyledDatePickerWrapper = styled.div`
  .react-datepicker-wrapper {
    width: auto;
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
  .react-datepicker__current-month {
    font-weight: 700;
    color: var(--color-primary);
  }
  .react-datepicker__day-name {
    color: var(--color-on-surface-variant);
    font-weight: 600;
  }
  .react-datepicker__day {
    border-radius: 8px;
    &:hover {
      background-color: var(--color-surface-container-high);
    }
  }
  .react-datepicker__day--selected, 
  .react-datepicker__day--in-selecting-range, 
  .react-datepicker__day--in-range {
    background-color: var(--color-primary) !important;
    color: white !important;
    border-radius: 8px;
  }
  .react-datepicker__day--keyboard-selected {
    background-color: transparent;
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
  }
  .react-datepicker__navigation-icon::before {
    border-color: var(--color-on-surface-variant);
  }
`;

interface DateRangeFilterProps {
    startDate: Date | null;
    endDate: Date | null;
    onChange: (dates: [Date | null, Date | null]) => void;
}

const DateRangeFilter: React.FC<DateRangeFilterProps> = ({ startDate, endDate, onChange }) => {
    const label = startDate && endDate 
        ? `${format(startDate, 'MMM d')} - ${format(endDate, 'MMM d')}` 
        : 'Date Range';

    return (
        <StyledDatePickerWrapper>
            <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                customInput={
                    <div className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-full border border-outline-variant bg-white text-sm font-medium cursor-pointer hover:border-primary transition-all active:scale-95 select-none"
                    )}>
                        <IconCalendar size={16} className="text-on-surface-variant" />
                        <span className="text-on-surface-variant whitespace-nowrap">
                            Date Range{startDate && endDate && ": "}
                            {startDate && endDate && (
                                <span className="text-on-surface font-bold">{label}</span>
                            )}
                        </span>
                        <IconChevronDown size={16} className="text-on-surface-variant" />
                    </div>
                }
                popperPlacement="bottom-start"
            />
        </StyledDatePickerWrapper>
    );
};

export default DateRangeFilter;
