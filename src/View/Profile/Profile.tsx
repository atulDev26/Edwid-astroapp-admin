import React from 'react';

const Profile: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="typography-h1 text-on-surface">My Profile</h1>
                    <p className="typography-body-md text-on-surface-variant mt-1">
                        Manage your account settings and personal information.
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-outline-variant p-6">
                <div className="flex items-center gap-6 mb-8">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-sm ring-1 ring-outline-variant">
                        <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="Admin User"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="typography-h2 text-on-surface">Admin User</h2>
                        <p className="typography-body-md text-on-surface-variant">admin@astrohora.com</p>
                        <span className="inline-block px-3 py-1 mt-2 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                            Administrator
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="typography-h3 text-on-surface border-b border-outline-variant pb-2">Personal Information</h3>
                        <div>
                            <label className="block text-sm font-medium text-on-surface-variant mb-1">Full Name</label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-2 border border-outline-variant rounded-lg bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" 
                                defaultValue="Admin User" 
                                disabled 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-on-surface-variant mb-1">Email Address</label>
                            <input 
                                type="email" 
                                className="w-full px-4 py-2 border border-outline-variant rounded-lg bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" 
                                defaultValue="admin@astrohora.com" 
                                disabled 
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <h3 className="typography-h3 text-on-surface border-b border-outline-variant pb-2">Security & Access</h3>
                        <div>
                            <label className="block text-sm font-medium text-on-surface-variant mb-1">System Role</label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-2 border border-outline-variant rounded-lg bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" 
                                defaultValue="Super Admin" 
                                disabled 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-on-surface-variant mb-1">Last Login</label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-2 border border-outline-variant rounded-lg bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" 
                                defaultValue="Today, 10:45 AM" 
                                disabled 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
