import React, { useState } from 'react';
import { IconUser, IconMail, IconPhone, IconMapPin, IconPencil } from '@tabler/icons-react';
import Input from '../../../Components/Common/Input';
import Button from '../../../Components/Common/Button';
import CustomModel from '../../../Components/Common/CustomModel';

interface EditProfileProps {
    userData: {
        name: string;
        email: string;
        phone: string;
        location: string;
    };
}

const EditProfile: React.FC<EditProfileProps> = ({ userData }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setIsOpen(true)}
                variant="primary"
                icon={IconPencil}
                className="bg-[#1A1C3D] hover:bg-[#1A1C3D]/90 rounded-xl px-5 py-2.5"
            >
                Edit Profile
            </Button>

            <CustomModel
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Edit User Profile"
                size="xl"
                primaryButton="Save Changes"
                secondaryButton="Cancel"
                onPrimaryClick={() => {
                    // Handle save logic here
                    setIsOpen(false);
                }}
            >
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-black text-on-surface-variant tracking-widest uppercase">Full Name</label>
                            <Input
                                placeholder="Enter full name"
                                defaultValue={userData.name}
                                icon={IconUser}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black text-on-surface-variant tracking-widest uppercase">Email Address</label>
                            <Input
                                placeholder="Enter email"
                                defaultValue={userData.email}
                                icon={IconMail}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black text-on-surface-variant tracking-widest uppercase">Phone Number</label>
                            <Input
                                placeholder="Enter phone number"
                                defaultValue={userData.phone}
                                icon={IconPhone}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black text-on-surface-variant tracking-widest uppercase">Location</label>
                            <Input
                                placeholder="Enter location"
                                defaultValue={userData.location}
                                icon={IconMapPin}
                            />
                        </div>
                    </div>
                </div>
            </CustomModel>
        </>
    );
};

export default EditProfile;
