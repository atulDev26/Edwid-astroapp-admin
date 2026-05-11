import React from 'react';
import { IconStar, IconEyeOff } from '@tabler/icons-react';
import Button from '../../../Components/Common/Button';

interface Review {
    id: string;
    rating: number;
    comment: string;
    user: string;
    date: string;
}

interface RatingsReviewsProps {
    averageRating: number;
    totalReviews: string;
    reviews: Review[];
}

export default function RatingsReviews({ averageRating, totalReviews, reviews }: RatingsReviewsProps) {
    return (
        <div className="bg-white rounded-[2rem] border border-outline-variant shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-outline-variant flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F2F4FF] rounded-xl flex items-center justify-center text-[#FEAE2C]">
                    <IconStar size={24} fill="currentColor" />
                </div>
                <h2 className="text-xl font-bold text-[#0A0E27]">Ratings & Reviews</h2>
            </div>

            <div className="p-6 space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-[#FFF9F0] border-4 border-[#FEAE2C]/20 flex items-center justify-center text-[#FEAE2C] text-3xl font-black">
                        {averageRating}
                    </div>
                    <div className="space-y-1">
                        <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <IconStar key={s} size={20} className={s <= Math.floor(averageRating) ? "text-[#FEAE2C]" : "text-gray-200"} fill="currentColor" />
                            ))}
                        </div>
                        <p className="text-xs font-medium text-on-surface-variant">Based on {totalReviews} reviews</p>
                    </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-outline-variant">
                    {reviews.map((review) => (
                        <div key={review.id} className="p-4 rounded-2xl border border-outline-variant bg-[#F8F9FC] space-y-2 relative group">
                            <button className="absolute top-4 right-4 text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">
                                <IconEyeOff size={18} />
                            </button>
                            <div className="flex items-center gap-1 text-[#FEAE2C]">
                                <IconStar size={14} fill="currentColor" />
                                <span className="text-xs font-black">{review.rating.toFixed(1)}</span>
                            </div>
                            <p className="text-sm font-medium text-[#464651] line-clamp-2">"{review.comment}"</p>
                            <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                                {review.user} • {review.date}
                            </p>
                        </div>
                    ))}
                </div>

                <Button variant="outlined" className="w-full bg-[#F2F4FF] border-none text-[#5456A6] font-bold h-12 rounded-xl hover:bg-[#EBEBFF]">
                    Moderate All Reviews
                </Button>
            </div>
        </div>
    );
}
