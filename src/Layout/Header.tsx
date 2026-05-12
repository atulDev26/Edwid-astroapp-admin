import {
    IconBell,
    IconMenu2
} from '@tabler/icons-react';
import React from 'react';

import Button from '../Components/Common/Button';
import UserProfileDropdown from './UserProfileDropdown';

interface HeaderProps {
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    return (
        <header className="bg-white border-b border-outline-variant h-16 sticky top-0 z-60">
            <div className="h-full px-4 sm:px-6 flex justify-between items-center">
                <div className="flex items-center gap-4 flex-1">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onMenuClick}
                        icon={IconMenu2}
                        className="lg:hidden text-on-surface"
                    />
                    <h2 className="typography-h2 text-[#0A0E27] font-bold hidden md:block shrink-0">Astro Hora Admin</h2>
                </div>

                <div className="flex items-center gap-1 sm:gap-1">
                    <Button
                        variant="ghost"
                        size="icon"
                        icon={IconBell}
                        className="text-on-surface-variant"
                    />
                    <UserProfileDropdown />
                </div>
            </div>
        </header>
    );
};

export default Header;
