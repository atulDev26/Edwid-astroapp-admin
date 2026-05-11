import { IconStar, IconTrendingUp } from '@tabler/icons-react';

export interface ReviewRecord {
    user: string;
    avatar?: string;
    initials?: string;
    time: string;
    rating: number;
    comment?: string;
}

interface RecentReviewsProps {
    overallRating: string;
    reviews: ReviewRecord[];
}

export default function RecentReviews({ overallRating, reviews }: RecentReviewsProps) {
    return (
        <div className="bg-white rounded-4xl border border-outline-variant shadow-sm p-8 space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 border-2 border-[#0A0E27] rounded flex items-center justify-center">
                        <IconStar size={14} className="text-[#0A0E27]" />
                    </div>
                    <h2 className="text-xl font-bold text-[#0A0E27]">Recent Reviews</h2>
                </div>
                <div className="flex items-center gap-4">
                    <button className="text-sm font-bold text-on-surface-variant hover:text-primary flex items-center gap-2">
                        View All Reviews
                        <IconTrendingUp size={16} className="rotate-45" />
                    </button>
                    <div className="flex items-center gap-1.5 text-lg font-black text-[#0A0E27]">
                        <IconStar size={20} className="text-[#FEAE2C]" fill="currentColor" />
                        {overallRating}
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                {reviews.map((review, i) => (
                    <div key={i} className={`space-y-3 ${i !== 0 ? 'border-t border-outline-variant pt-4' : ''}`}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {review.avatar ? (
                                    <img src={review.avatar} alt={review.user} className="w-10 h-10 rounded-full object-cover" />
                                ) : (
                                    <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-bold text-sm text-on-surface-variant">
                                        {review.initials || review.user.substring(0, 2).toUpperCase()}
                                    </div>
                                )}
                                <div>
                                    <p className="font-bold text-on-surface">{review.user}</p>
                                    <p className="text-xs text-on-surface-variant">{review.time}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-[#FEAE2C]">
                                {[...Array(5)].map((_, idx) => (
                                    <IconStar
                                        key={idx}
                                        size={16}
                                        fill={idx < review.rating ? "currentColor" : "none"}
                                        strokeWidth={idx < review.rating ? 0 : 2}
                                        className={idx < review.rating ? "" : "text-outline-variant"}
                                    />
                                ))}
                            </div>
                        </div>
                        {review.comment && (
                            <p className="text-sm text-on-surface-variant font-medium leading-relaxed">
                                {review.comment}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
