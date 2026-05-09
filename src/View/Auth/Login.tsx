import { IconArrowRight, IconMail, IconSparkles } from '@tabler/icons-react';
import Button from '../../Components/Common/Button';

const Login = () => {
    return (
        <div className="min-h-screen bg-primary flex flex-col items-center justify-center p-4">
            {/* Logo and Header */}
            <div className="flex flex-col items-center mb-8 text-center animate-in fade-in slide-in-from-top-4 duration-700">
                <div className="bg-white p-3 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] mb-4">
                    <IconSparkles size={32} className="text-primary" />
                </div>
                <h1 className="typography-h2 text-white font-bold mb-1">Astro Hora</h1>
                <p className="text-white/70 typography-body-md tracking-wide uppercase text-xs font-semibold">Admin Dashboard Portal</p>
            </div>

            {/* Login Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-[440px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-in fade-in zoom-in-95 duration-500">
                <div className="text-center mb-6 sm:mb-8">
                    <h2 className="typography-h2 text-primary font-bold mb-2">Sign In</h2>
                    <p className="text-on-surface-variant typography-body-md px-2">Enter your administrative email to continue</p>
                </div>

                <div className="space-y-6">
                    {/* Email Input */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="typography-label-sm text-on-surface block font-semibold">
                            Email Address
                        </label>
                        <div className="relative group">
                            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors duration-200">
                                <IconMail size={18} />
                            </div>
                            <input
                                id="email"
                                type="email"
                                placeholder="admin@astrohora.com"
                                className="w-full pl-11 pr-4 py-3.5 bg-white border border-outline-variant rounded-md typography-body-md focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all duration-200 placeholder:text-outline-variant"
                            />
                        </div>
                    </div>

                    {/* Send OTP Button */}
                    <Button
                        variant="primary"
                        className="w-full py-4 rounded-md flex items-center justify-center gap-2 group shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
                    >
                        Send OTP
                        <IconArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>

                    {/* Divider */}
                    <div className="relative flex items-center py-2">
                        <div className="grow border-t border-outline-variant"></div>
                        <span className="shrink mx-4 text-outline-variant typography-label-sm font-bold">OR</span>
                        <div className="grow border-t border-outline-variant"></div>
                    </div>

                    {/* OTP Section */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="typography-label-sm text-on-surface font-semibold text-outline">
                                Enter 6-Digit OTP
                            </label>
                            <button className="text-secondary-container typography-label-sm font-semibold hover:underline cursor-pointer transition-colors">
                                Resend
                            </button>
                        </div>

                        <div className="grid grid-cols-6 gap-1.5 sm:gap-2.5">
                            {[...Array(6)].map((_, i) => (
                                <input
                                    key={i}
                                    type="text"
                                    maxLength={1}
                                    className="w-full aspect-square text-center typography-h3 border border-outline-variant rounded-sm focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary bg-surface-container-low transition-all duration-200"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Verify & Login Button */}
                    <Button
                        variant="outlined"
                        className="w-full py-4 border-2 border-secondary-container text-on-secondary-container rounded-md font-bold typography-body-md hover:bg-secondary-container/10 transition-all duration-200"
                    >
                        Verify & Login
                    </Button>
                </div>
            </div>

            {/* Footer */}
            <p className="mt-8 text-white/60 typography-body-md text-center">
                Forgot access? <span className="text-white hover:underline cursor-pointer transition-colors font-medium">Contact Super Admin</span>
            </p>
        </div>
    );
};

export default Login;

