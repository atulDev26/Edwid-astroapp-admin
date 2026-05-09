import React from 'react';
import { cn } from '../../Utils/cn';

const Dashboard = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-2">
                <h1 className="typography-h1 text-primary">Welcome back, Admin</h1>
                <p className="text-on-surface-variant typography-body-lg">
                    Monitor your application's performance and manage your users here.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {[
                    { label: 'Total Users', value: '1,284', change: '+12%', color: 'bg-primary/5 text-primary' },
                    { label: 'Active Sessions', value: '342', change: '+5%', color: 'bg-secondary/5 text-secondary' },
                    { label: 'New Requests', value: '48', change: '-2%', color: 'bg-error/5 text-error' },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-outline-variant shadow-sm space-y-3">
                        <p className="typography-label-sm text-outline uppercase tracking-wider">{stat.label}</p>
                        <div className="flex items-end justify-between">
                            <h3 className="typography-h1">{stat.value}</h3>
                            <span className={cn("px-2 py-1 rounded-lg typography-label-sm font-bold", stat.color)}>
                                {stat.change}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
