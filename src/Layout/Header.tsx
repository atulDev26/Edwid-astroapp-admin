import React from 'react';
import { 
    IconMenu2, 
    IconSearch, 
    IconBell, 
    IconQuestionMark, 
    IconGridDots 
} from '@tabler/icons-react';

import Button from '../Components/Common/Button';

interface HeaderProps {
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    return (
        <header className="bg-white border-b border-outline-variant h-16 sticky top-0 z-30">
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
                    
                    {/* Search Bar */}
                    <div className="hidden sm:flex items-center flex-1 max-w-md ml-4">
                        <div className="relative w-full">
                            <IconSearch size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
                            <input 
                                type="text" 
                                placeholder="Search..."
                                className="w-full bg-[#F5F6FA] border-none rounded-full py-2.5 pl-11 pr-4 focus:ring-2 focus:ring-primary/20 text-sm transition-all"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-1 sm:gap-1">
                    <Button
                        variant="ghost"
                        size="icon"
                        icon={IconBell}
                        className="text-on-surface-variant"
                    />
                    <Button
                        variant="ghost"
                        size="icon"
                        icon={IconQuestionMark}
                        className="text-on-surface-variant hidden sm:inline-flex"
                    />
                    <Button
                        variant="ghost"
                        size="icon"
                        icon={IconGridDots}
                        className="text-on-surface-variant hidden sm:inline-flex"
                    />
                    
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant ml-2 cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all">
                        <img 
                            src="https://randomuser.me/api/portraits/men/32.jpg" 
                            alt="User" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
