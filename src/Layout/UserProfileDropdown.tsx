import React, { Fragment, useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';
import { IconUser, IconLogout, IconChevronDown } from '@tabler/icons-react';
import { cn } from '../Utils/cn';
import CustomModel from '../Components/Common/CustomModel';

const UserProfileDropdown: React.FC = () => {
    const navigate = useNavigate();
    const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

    const handleLogout = () => {
        // Clear tokens/state here
        console.log("Logging out...");
        navigate('/login');
    };

    return (
        <>
            <Menu as="div" className="relative ml-2">
                <div>
                    <MenuButton className="flex items-center gap-2 p-1 rounded-full hover:bg-surface-container-low transition-all group border border-transparent hover:border-outline-variant">
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant ring-primary/20 group-hover:ring-2 transition-all">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="User"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <IconChevronDown size={16} className="text-outline group-hover:text-primary transition-colors" />
                    </MenuButton>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-outline-variant rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50 overflow-hidden border border-outline-variant">
                        <div className="py-1">
                            <MenuItem>
                                {({ active }) => (
                                    <Link
                                        to="/profile"
                                        className={cn(
                                            "group flex w-full items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors",
                                            active ? "bg-surface-container-low text-primary" : "text-on-surface"
                                        )}
                                    >
                                        <IconUser size={18} stroke={1.5} className={cn("transition-colors", active ? "text-primary" : "text-on-surface-variant")} />
                                        My Profile
                                    </Link>
                                )}
                            </MenuItem>
                        </div>
                        <div className="py-1">
                            <MenuItem>
                                {({ active }) => (
                                    <button
                                        onClick={() => setLogoutModalOpen(true)}
                                        className={cn(
                                            "group flex w-full items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors",
                                            active ? "bg-error/5 text-error" : "text-error"
                                        )}
                                    >
                                        <IconLogout size={18} stroke={1.5} />
                                        Logout
                                    </button>
                                )}
                            </MenuItem>
                        </div>
                    </MenuItems>
                </Transition>
            </Menu>

            <CustomModel
                isOpen={isLogoutModalOpen}
                onClose={() => setLogoutModalOpen(false)}
                onPrimaryClick={handleLogout}
                title="Logout Confirmation"
                primaryButton="Logout"
                secondaryButton="Cancel"
            >
                Are you sure you want to log out of the Astro Admin dashboard?
            </CustomModel>
        </>
    );
};

export default UserProfileDropdown;
