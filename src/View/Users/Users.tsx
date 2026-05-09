import React from 'react';

const Users = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-2">
                <h1 className="typography-h1 text-[#0A0E27]">Users</h1>
                <p className="text-on-surface-variant typography-body-lg">
                    Manage and monitor your application's user base.
                </p>
            </div>
            
            <div className="bg-white p-12 rounded-2xl border border-outline-variant shadow-sm flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                    <span className="text-2xl font-bold">U</span>
                </div>
                <h3 className="typography-h3">No Users Found</h3>
                <p className="text-on-surface-variant typography-body-md max-w-md mx-auto">
                    Start by adding new users or importing them from your database.
                </p>
            </div>
        </div>
    );
};

export default Users;
