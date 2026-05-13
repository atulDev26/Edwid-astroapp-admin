import React, { useRef } from 'react';
import { IconPhoto, IconVideo, IconPlus, IconX } from '@tabler/icons-react';
import { type PujaServiceFormData } from '../types';
import Input from '../../../Components/Common/Input';

interface Props {
    formData: PujaServiceFormData;
    onChange: (field: keyof PujaServiceFormData, value: any) => void;
}

const MediaManagementSection: React.FC<Props> = ({ formData, onChange }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const galleryInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            onChange('heroImage', url);
        }
    };

    const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && formData.gallery.length < 5) {
            onChange('gallery', [...formData.gallery, URL.createObjectURL(file)]);
            if (galleryInputRef.current) galleryInputRef.current.value = '';
        }
    };

    const removeGalleryImage = (index: number) => {
        onChange('gallery', formData.gallery.filter((_, i) => i !== index));
    };

    return (
        <div className="bg-white rounded-[24px] border border-[#EDEDF2] p-6 md:p-8 space-y-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-[#EDEDF2] pb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                    <IconPhoto size={24} />
                </div>
                <h2 className="text-[20px] font-black text-[#0A0E27]">Media Management</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Main Hero Image</label>
                    <div
                        onClick={() => fileInputRef.current?.click()}
                        className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer border-2 border-dashed border-[#EDEDF2] hover:border-primary/30 transition-all"
                    >
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImageUpload}
                            accept="image/*"
                            className="hidden"
                        />
                        {formData.heroImage ? (
                            <img src={formData.heroImage} className="w-full h-full object-cover" alt="Hero" />
                        ) : (
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#F8F9FC]">
                                <IconPhoto size={24} className="text-[#667085]" />
                                <span className="text-[13px] font-bold text-[#667085]">Upload Image</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Video URL</label>
                        <Input
                            id="video-url"
                            value={formData.videoUrl}
                            onChange={(e) => onChange('videoUrl', e.target.value)}
                            placeholder="https://youtube.com/watch?v=..."
                            icon={IconVideo}
                        />
                    </div>

                    {/* Gallery Assets */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <label className="text-[13px] font-bold text-[#667085] uppercase tracking-wider">Gallery Assets</label>
                            <span className="text-[11px] font-semibold text-[#667085] bg-[#F8F9FC] border border-[#EDEDF2] px-2 py-0.5 rounded-full">
                                {formData.gallery.length}/5
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {formData.gallery.map((img, i) => (
                                <div key={i} className="relative w-20 h-20 rounded-xl overflow-hidden group border border-[#EDEDF2]">
                                    <img src={img} className="w-full h-full object-cover" alt={`Gallery ${i + 1}`} />
                                    <button
                                        type="button"
                                        onClick={() => removeGalleryImage(i)}
                                        className="absolute top-1 right-1 w-5 h-5 bg-black/60 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <IconX size={10} />
                                    </button>
                                </div>
                            ))}
                            {formData.gallery.length < 5 && (
                                <button
                                    type="button"
                                    onClick={() => galleryInputRef.current?.click()}
                                    className="w-20 h-20 rounded-xl border-2 border-dashed border-[#EDEDF2] hover:border-purple-300 hover:bg-purple-50 transition-all flex items-center justify-center text-[#667085] hover:text-purple-500"
                                >
                                    <IconPlus size={22} />
                                </button>
                            )}
                        </div>
                        <input type="file" ref={galleryInputRef} onChange={handleGalleryUpload} accept="image/*" className="hidden" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaManagementSection;
