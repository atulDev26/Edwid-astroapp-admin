import React from 'react';
import { IconSettings } from '@tabler/icons-react';
import { cn } from '../../../Utils/cn';
import Button from '../../../Components/Common/Button';

interface AiConfigurationHubProps {
    config: {
        systemPrompt: string;
        modelVersion: string;
        temperature: number;
        maxTokens: number;
        tone: string;
        astrologyStyle: string;
        languages: string[];
    };
}

export default function AiConfigurationHub({ config }: AiConfigurationHubProps) {
    const [temp, setTemp] = React.useState(config.temperature);

    return (
        <div className="bg-white rounded-[2rem] border border-outline-variant shadow-sm overflow-hidden flex flex-col">
            <div className="p-8 border-b border-outline-variant flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F2F4FF] rounded-xl flex items-center justify-center text-[#246BFD]">
                    <IconSettings size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#0A0E27]">AI Configuration Hub</h2>
            </div>

            <div className="p-8 space-y-8">
                {/* System Prompt */}
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-bold text-[#0A0E27]">System Prompt</label>
                        <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Supports markdown</span>
                    </div>
                    <textarea 
                        className="w-full h-40 bg-[#F8F9FC] border border-outline-variant rounded-2xl p-6 text-[#464651] font-medium leading-relaxed focus:outline-none focus:border-[#246BFD] resize-none"
                        defaultValue={config.systemPrompt}
                    />
                </div>

                {/* Model Parameters */}
                <div className="space-y-6">
                    <h3 className="text-sm font-bold text-[#0A0E27] uppercase tracking-wider">Model Parameters</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Model Version</label>
                            <select className="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 font-bold text-[#0A0E27] focus:outline-none focus:border-[#246BFD] appearance-none">
                                <option>{config.modelVersion}</option>
                                <option>GPT-4</option>
                                <option>GPT-3.5-Turbo</option>
                            </select>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Temperature: {temp}</label>
                            </div>
                            <div className="relative h-2 bg-[#EBEBFF] rounded-full mt-4">
                                <div 
                                    className="absolute top-0 left-0 h-full bg-[#0A0E27] rounded-full" 
                                    style={{ width: `${temp * 100}%` }}
                                />
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="1" 
                                    step="0.1" 
                                    value={temp} 
                                    onChange={(e) => setTemp(parseFloat(e.target.value))}
                                    className="absolute -top-2 left-0 w-full h-6 opacity-0 cursor-pointer z-20"
                                />
                                <div 
                                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0A0E27] border-2 border-white rounded-full shadow-lg pointer-events-none z-10"
                                    style={{ left: `calc(${temp * 100}% - 8px)` }}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Max Tokens</label>
                            <input 
                                type="number" 
                                defaultValue={config.maxTokens}
                                className="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 font-bold text-[#0A0E27] focus:outline-none focus:border-[#246BFD]"
                            />
                        </div>
                    </div>
                </div>

                {/* Persona & Voice */}
                <div className="space-y-6">
                    <h3 className="text-sm font-bold text-[#0A0E27] uppercase tracking-wider">Persona & Voice</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Tone</label>
                            <select className="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 font-bold text-[#0A0E27] focus:outline-none focus:border-[#246BFD] appearance-none">
                                <option>{config.tone}</option>
                                <option>Professional</option>
                                <option>Friendly</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Astrology Style</label>
                            <select className="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 font-bold text-[#0A0E27] focus:outline-none focus:border-[#246BFD] appearance-none">
                                <option>{config.astrologyStyle}</option>
                                <option>Western</option>
                                <option>Chinese</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Primary Languages</label>
                            <div className="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 font-bold text-[#0A0E27] flex flex-wrap gap-2">
                                {config.languages.join(', ')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-8 bg-[#F8F9FC] border-t border-outline-variant flex justify-end gap-3">
                <Button variant="outlined" className="bg-white border-[#C7C5D3] text-[#0A0E27] font-bold h-12 px-8 rounded-xl">
                    Discard
                </Button>
                <Button variant="primary" className="bg-[#0A0E27] text-white border-none h-12 px-8 rounded-xl hover:bg-black font-bold">
                    Save Configuration
                </Button>
            </div>
        </div>
    );
}
