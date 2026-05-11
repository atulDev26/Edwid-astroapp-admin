import { IconChecks, IconPlus, IconShieldCheck, IconUserCheck } from '@tabler/icons-react';
import Button from '../../../Components/Common/Button';

export interface KYCData {
    idFront: string;
    idPortrait: string;
    pan: string;
    verificationDate: string;
    banking: {
        holderName: string;
        bankName: string;
        accountNumber: string;
        ifscCode: string;
    }
}

interface KYCBankingSectionProps {
    data: KYCData;
}

export default function KYCBankingSection({ data }: KYCBankingSectionProps) {
    return (
        <div className="bg-white rounded-[2rem] border border-outline-variant shadow-sm p-6 space-y-8">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                    <IconShieldCheck size={24} />
                </div>
                <h2 className="text-xl font-bold text-on-surface">KYC & Banking</h2>
            </div>

            <div className="space-y-6">
                <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-[0.1em]">DOCUMENTS</p>
                <div className="grid grid-cols-3 gap-3">
                    <div className="relative group cursor-pointer">
                        <img src={data.idFront} alt="ID Front" className="w-full h-20 rounded-xl object-cover" />
                        <div className="absolute -bottom-1 -right-1 bg-[#00A344] text-white p-1 rounded-full border-2 border-white">
                            <IconChecks size={12} />
                        </div>
                    </div>
                    <div className="relative">
                        <img src={data.idPortrait} alt="Portrait" className="w-full h-20 rounded-xl object-cover" />
                        <div className="absolute -bottom-1 -right-1 bg-[#00A344] text-white p-1 rounded-full border-2 border-white">
                            <IconChecks size={12} />
                        </div>
                    </div>
                    {data.pan ? (
                        <div className="relative group cursor-pointer">
                            <img src={data.pan} alt="PAN" className="w-full h-20 rounded-xl object-cover" />
                            <div className="absolute -bottom-1 -right-1 bg-[#00A344] text-white p-1 rounded-full border-2 border-white">
                                <IconChecks size={12} />
                            </div>
                        </div>
                    ) : (
                        <div className="border-2 border-dashed border-outline-variant rounded-xl flex flex-col items-center justify-center gap-1 text-on-surface-variant hover:border-primary hover:text-primary transition-colors cursor-pointer">
                            <IconPlus size={20} />
                            <span className="text-[10px] font-bold uppercase">PAN</span>
                        </div>
                    )}
                </div>

                <div className="bg-[#E6FFF0] p-4 rounded-2xl flex items-center gap-3">
                    <div className="bg-white/50 p-1.5 rounded-lg text-[#00A344]">
                        <IconUserCheck size={20} />
                    </div>
                    <p className="text-[14px] font-bold text-[#00A344]">Identity Verified {data.verificationDate}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <Button variant="outlined" className="bg-white border-[#C7C5D3] text-on-surface font-bold text-sm h-11">
                        Re-Verify
                    </Button>
                    <Button variant="primary" className="bg-[#FFE5E5] text-[#BA1A1A] border-none font-bold text-sm h-11">
                        Reject
                    </Button>
                </div>

                <div className="space-y-6 pt-4 border-t border-outline-variant">
                    <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-[0.1em]">BANKING DETAILS</p>
                    <div className="space-y-5">
                        <div className="space-y-1">
                            <p className="text-[12px] font-medium text-on-surface-variant">Acc. Holder</p>
                            <p className="text-[15px] font-bold text-on-surface">{data.banking.holderName}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[12px] font-medium text-on-surface-variant">Bank Name</p>
                            <p className="text-[15px] font-bold text-on-surface uppercase">{data.banking.bankName}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[12px] font-medium text-on-surface-variant">A/C Number</p>
                            <p className="text-[15px] font-bold text-on-surface">{data.banking.accountNumber}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[12px] font-medium text-on-surface-variant">IFSC Code</p>
                            <p className="text-[15px] font-bold text-on-surface">{data.banking.ifscCode}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
