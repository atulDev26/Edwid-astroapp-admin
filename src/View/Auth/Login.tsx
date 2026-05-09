import { useState, useRef, useEffect } from 'react';
import { IconArrowRight, IconMail, IconSparkles, IconArrowLeft } from '@tabler/icons-react';
import Button from '../../Components/Common/Button';
import Input from '../../Components/Common/Input';

const Header = () => (
    <div className="flex flex-col items-center mb-8 text-center animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="bg-white p-3 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] mb-4">
            <IconSparkles size={32} className="text-primary" />
        </div>
        <h1 className="typography-h2 text-white font-bold mb-1">Astro Hora</h1>
        <p className="text-white/70 typography-body-md tracking-wide uppercase text-xs font-semibold">Admin Dashboard Portal</p>
    </div>
);

const Login = () => {
    const [step, setStep] = useState<'email' | 'otp'>('email');
    const [email, setEmail] = useState('');
    const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleSendOTP = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        setEmail(formData.get('email') as string);
        setStep('otp');
    };

    const handleOTPChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) {
            if (otpRefs.current[index]) otpRefs.current[index]!.value = '';
            return;
        }

        if (value.length === 1 && index < 5) {
            otpRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
            otpRefs.current[index - 1]?.focus();
        }
    };

    useEffect(() => {
        if (step === 'otp') {
            otpRefs.current[0]?.focus();
        }
    }, [step]);



    return (
        <div className="min-h-screen bg-primary flex flex-col items-center justify-center p-4">
            <Header />

            <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-[440px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-in fade-in zoom-in-95 duration-500">
                <div className="text-center mb-6 sm:mb-8">
                    <h2 className="typography-h2 text-primary font-bold mb-2">
                        {step === 'email' ? 'Sign In' : 'Verify OTP'}
                    </h2>
                    <p className="text-on-surface-variant typography-body-md px-2">
                        {step === 'email'
                            ? 'Enter your administrative email to continue'
                            : `Enter the 6-digit code sent to ${email}`}
                    </p>
                </div>

                <div className="space-y-6">
                    {step === 'email' ? (
                        <form onSubmit={handleSendOTP} className="space-y-6">
                            <Input
                                id="email"
                                name="email"
                                label="Email Address"
                                type="email"
                                icon={IconMail}
                                placeholder="admin@astrohora.com"
                                required
                                defaultValue={email}
                            />

                            <Button
                                type="submit"
                                variant="primary"
                                className="w-full py-4 rounded-md flex items-center justify-center gap-2 group shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
                            >
                                Send OTP
                                <IconArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                            </Button>


                        </form>
                    ) : (
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                console.log("Verifying OTP...");
                            }}
                            className="space-y-6"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <label className="typography-label-sm text-on-surface font-semibold text-outline">
                                        Enter 6-Digit OTP
                                    </label>
                                    <button type="button" className="text-secondary-container typography-label-sm font-semibold hover:underline cursor-pointer transition-colors">
                                        Resend
                                    </button>
                                </div>

                                <div className="grid grid-cols-6 gap-1.5 sm:gap-2.5">
                                    {[...Array(6)].map((_, i) => (
                                        <input
                                            key={i}
                                            ref={(el) => { otpRefs.current[i] = el; }}
                                            type="tel"
                                            maxLength={1}
                                            onChange={(e) => handleOTPChange(i, e.target.value)}
                                            onKeyDown={(e) => handleKeyDown(i, e)}
                                            className="w-full aspect-square text-center typography-h3 border border-outline-variant rounded-sm focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary bg-surface-container-low transition-all duration-200"
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Button
                                    type="submit"
                                    variant="outlined"
                                    className="w-full py-4 border-2 border-secondary-container text-on-secondary-container rounded-md font-bold typography-body-md hover:bg-secondary-container/10 transition-all duration-200"
                                >
                                    Verify & Login
                                </Button>

                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    icon={IconArrowLeft}
                                    onClick={() => setStep('email')}
                                    className="w-full text-outline hover:text-primary transition-colors duration-200"
                                >
                                    Change Email Address
                                </Button>
                            </div>
                        </form>
                    )}
                </div>
            </div>

            <p className="mt-8 text-white/60 typography-body-md text-center">
                Forgot access? <span className="text-white hover:underline cursor-pointer transition-colors font-medium">Contact Super Admin</span>
            </p>
        </div>
    );
};

export default Login;


