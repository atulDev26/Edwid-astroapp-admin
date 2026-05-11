import React, { useState } from 'react';
import { IconCheck, IconBan, IconClock, IconAlertCircle } from '@tabler/icons-react';
import Button from '../../../Components/Common/Button';
import CustomModel from '../../../Components/Common/CustomModel';
import { type UserStatus, STATUS_OPTIONS } from '../../../api/types';
import { cn } from '../../../Utils/cn';

interface UpdateStatusProps {
    currentStatus: UserStatus;
    userName: string;
}

const UpdateStatus: React.FC<UpdateStatusProps> = ({ currentStatus, userName }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState<UserStatus>(currentStatus);

    const getStatusConfig = (status: UserStatus) => {
        switch (status) {
            case 'Active':
                return {
                    icon: IconCheck,
                    color: 'text-success',
                    bg: 'bg-success/10',
                    border: 'border-success/20',
                    description: 'User has full access to all features.'
                };
            case 'Inactive':
                return {
                    icon: IconClock,
                    color: 'text-warning',
                    bg: 'bg-warning/10',
                    border: 'border-warning/20',
                    description: 'User access is temporarily suspended.'
                };
            case 'Blocked':
                return {
                    icon: IconBan,
                    color: 'text-error',
                    bg: 'bg-error/10',
                    border: 'border-error/20',
                    description: 'User is completely restricted from the platform.'
                };
        }
    };

    return (
        <>
            <Button
                variant="outlined"
                size="icon"
                icon={IconBan}
                onClick={() => setIsOpen(true)}
                className="rounded-xl border-outline-variant hover:bg-error/5 hover:border-error group"
                title="Change User Status"
            />

            <CustomModel
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Update User Status"
                size="md"
                primaryButton="Update Status"
                secondaryButton="Cancel"
                onPrimaryClick={() => {
                    // Handle update logic here
                    setIsOpen(false);
                }}
            >
                <div className="space-y-6">
                    <div className="flex items-center gap-3 p-4 bg-surface-container-low rounded-2xl border border-outline-variant/30">
                        <IconAlertCircle size={20} className="text-on-surface-variant" />
                        <p className="text-sm font-medium text-on-surface-variant">
                            Updating status for <span className="text-on-surface font-bold">{userName}</span>
                        </p>
                    </div>

                    <div className="space-y-3">
                        {STATUS_OPTIONS.map((status) => {
                            const config = getStatusConfig(status);
                            const isSelected = selectedStatus === status;

                            return (
                                <button
                                    key={status}
                                    onClick={() => setSelectedStatus(status)}
                                    className={cn(
                                        "w-full flex items-start gap-4 p-4 rounded-[20px] border-2 transition-all text-left",
                                        isSelected 
                                            ? "border-primary bg-primary/5" 
                                            : "border-outline-variant hover:border-outline hover:bg-surface-container-low"
                                    )}
                                >
                                    <div className={cn("p-2.5 rounded-xl", config.bg, config.color)}>
                                        <config.icon size={20} />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-black text-on-surface uppercase tracking-wider">{status}</span>
                                            {isSelected && (
                                                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                                                    <IconCheck size={14} className="text-white" stroke={3} />
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                                            {config.description}
                                        </p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </CustomModel>
        </>
    );
};

export default UpdateStatus;
