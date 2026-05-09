import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
    IconLayoutDashboard, 
    IconUsers, 
    IconSettings, 
    IconStars,
    IconRobot,
    IconDeviceTv,
    IconWallet,
    IconCash,
    IconChartBar,
    IconCalendarEvent,
    IconShoppingBag,
    IconFileText,
    IconBell,
    IconX,
    IconPlus
} from '@tabler/icons-react';
import Button from '../Components/Common/Button';
import { cn } from '../Utils/cn';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { icon: IconLayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: IconUsers, label: 'Users', path: '/users' },
    { icon: IconStars, label: 'Astrologers', path: '/astrologers' },
    { icon: IconRobot, label: 'AI Astrologers', path: '/ai-astrologers' },
    { icon: IconDeviceTv, label: 'Live Monitor', path: '/live-monitor' },
    { icon: IconWallet, label: 'Wallets', path: '/wallets' },
    { icon: IconCash, label: 'Payouts', path: '/payouts' },
    { icon: IconChartBar, label: 'Reports', path: '/reports' },
    { icon: IconCalendarEvent, label: 'Puja Booking', path: '/puja-booking' },
    { icon: IconShoppingBag, label: 'Store', path: '/store' },
    { icon: IconFileText, label: 'Content', path: '/content' },
    { icon: IconBell, label: 'Notifications', path: '/notifications' },
    { icon: IconSettings, label: 'Settings', path: '/settings' },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Backdrop for mobile */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity duration-300"
                    onClick={onClose}
                />
            )}

            {/* Sidebar Container */}
            <aside className={cn(
                "fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-outline-variant transition-transform duration-300 transform lg:translate-x-0 flex flex-col",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                {/* Logo Section */}
                <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-surface-container-low rounded-full flex items-center justify-center border border-outline-variant">
                            <IconStars size={24} className="text-primary" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-primary font-bold text-lg leading-tight">Astro Hora</span>
                            <span className="text-on-surface-variant text-[10px] font-semibold uppercase tracking-wider">Admin Dashboard</span>
                        </div>
                    </div>
                    <button onClick={onClose} className="lg:hidden p-1 hover:bg-surface-container-low rounded-md transition-colors">
                        <IconX size={20} className="text-on-surface" />
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-0 py-2 space-y-0.5 overflow-y-auto">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={() => {
                                if (window.innerWidth < 1024) onClose();
                            }}
                            className={({ isActive }) => cn(
                                "relative flex items-center gap-3 px-6 py-2.5 transition-all duration-200 group",
                                isActive 
                                    ? "bg-surface-container-low text-primary font-bold" 
                                    : "text-on-surface-variant hover:bg-surface-container-lowest hover:text-primary"
                            )}
                        >
                            {({ isActive }) => (
                                <>
                                    {isActive && (
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF8A00] rounded-r-full" />
                                    )}
                                    <item.icon size={20} className={cn(
                                        "transition-transform duration-200 group-hover:scale-110",
                                        isActive ? "text-primary" : "text-on-surface-variant"
                                    )} />
                                    <span className="text-sm">{item.label}</span>
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>

                {/* Bottom Section */}
                <div className="p-4 mt-auto">
                    <Button 
                        variant="primary"
                        icon={IconPlus}
                        className="w-full py-3 bg-[#0A0E27] hover:bg-[#1a1f3d] border-none text-white shadow-lg shadow-black/10"
                    >
                        New Puja Event
                    </Button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;

