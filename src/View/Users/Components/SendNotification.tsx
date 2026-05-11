import React, { useState, useRef } from 'react';
import { IconBell, IconUpload, IconX, IconPhoto, IconMessage2, IconPencil } from '@tabler/icons-react';
import Button from '../../../Components/Common/Button';
import CustomModel from '../../../Components/Common/CustomModel';
import Input from '../../../Components/Common/Input';
import { cn } from '../../../Utils/cn';

interface SendNotificationProps {
    userName: string;
}

const SendNotification: React.FC<SendNotificationProps> = ({ userName }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setImage(null);
        setImagePreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleSend = () => {
        // Handle send notification logic here
        console.log({ title, description, image });
        setIsOpen(false);
        // Reset fields
        setTitle('');
        setDescription('');
        removeImage();
    };

    return (
        <>
            <Button
                variant="outlined"
                size="icon"
                icon={IconBell}
                onClick={() => setIsOpen(true)}
                className="rounded-xl border-outline-variant hover:bg-primary/5 hover:border-primary group"
                title="Send Notification"
            />

            <CustomModel
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Send Notification"
                drawer={true}
                primaryButton="Send Notification"
                secondaryButton="Cancel"
                onPrimaryClick={handleSend}
            >
                <div className="space-y-8 py-4">
                    {/* Header Info */}
                    <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/10">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <IconBell size={20} />
                        </div>
                        <div>
                            <p className="text-xs font-black text-primary uppercase tracking-widest">SENDING TO</p>
                            <p className="text-sm font-bold text-on-surface">{userName}</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Title */}
                        <div className="space-y-2">
                            <label className="text-xs font-black text-on-surface-variant tracking-widest uppercase">Notification Title</label>
                            <Input
                                placeholder="Enter notification title..."
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                icon={IconPencil}
                            />
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <label className="text-xs font-black text-on-surface-variant tracking-widest uppercase">Message Description</label>
                            <div className="relative group">
                                <div className="absolute left-3.5 top-4 text-outline group-focus-within:text-primary transition-colors">
                                    <IconMessage2 size={18} />
                                </div>
                                <textarea
                                    placeholder="Type your message here..."
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-full min-h-[120px] pl-11 pr-4 py-3.5 bg-white border border-outline-variant rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-outline-variant"
                                />
                            </div>
                        </div>

                        {/* Image Upload */}
                        <div className="space-y-2">
                            <label className="text-xs font-black text-on-surface-variant tracking-widest uppercase">Notification Image (Optional)</label>
                            
                            {imagePreview ? (
                                <div className="relative rounded-2xl overflow-hidden border border-outline-variant group">
                                    <img src={imagePreview} alt="Preview" className="w-full h-48 object-cover" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                        <button 
                                            onClick={() => fileInputRef.current?.click()}
                                            className="p-2 bg-white rounded-full text-on-surface hover:bg-surface-container-low transition-colors"
                                        >
                                            <IconPencil size={20} />
                                        </button>
                                        <button 
                                            onClick={removeImage}
                                            className="p-2 bg-white rounded-full text-error hover:bg-error/10 transition-colors"
                                        >
                                            <IconX size={20} />
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div 
                                    onClick={() => fileInputRef.current?.click()}
                                    className="border-2 border-dashed border-outline-variant rounded-2xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-primary hover:bg-primary/5 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                        <IconUpload size={24} />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm font-bold text-on-surface">Click to upload or drag and drop</p>
                                        <p className="text-xs text-on-surface-variant">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                    </div>
                                </div>
                            )}
                            <input 
                                type="file" 
                                ref={fileInputRef}
                                className="hidden" 
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>

                    {/* Preview Tips */}
                    <div className="p-4 bg-surface-container-low rounded-2xl border border-outline-variant/30 flex gap-3">
                        <div className="text-warning">
                            <IconPhoto size={20} />
                        </div>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                            <span className="font-bold text-on-surface">Pro Tip:</span> Notifications with images have a 40% higher click-through rate. Ensure your image is clear and relevant.
                        </p>
                    </div>
                </div>
            </CustomModel>
        </>
    );
};

export default SendNotification;
