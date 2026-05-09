import React from 'react';

const Wallets = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-2">
                <h1 className="typography-h1 text-[#0A0E27]">Wallets</h1>
                <p className="text-on-surface-variant typography-body-lg">Manage user balances and transaction history.</p>
            </div>
            <div className="bg-white p-12 rounded-2xl border border-outline-variant shadow-sm text-center">
                <p className="text-on-surface-variant">Wallet management interface will be here.</p>
            </div>
        </div>
    );
};

export default Wallets;
