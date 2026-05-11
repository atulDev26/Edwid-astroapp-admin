import AiConfigurationHub from './Components/AiConfigurationHub';
import AiProfileHeader from './Components/AiProfileHeader';
import PricingBusiness from './Components/PricingBusiness';
import RatingsReviews from './Components/RatingsReviews';
import SessionHistoryTable, { type Session } from './Components/SessionHistoryTable';

const AiAstrologers = () => {
    // Mock data based on the screenshot
    const profileData = {
        name: "Arya The Sage",
        description: "Elderly Vedic Scholar",
        botId: "AI-VED-8832",
        createdAt: "Jan 12, 2024",
        status: "ACTIVE" as const,
    };

    const configData = {
        systemPrompt: "You are Arya, an 80-year-old Vedic Astrologer from Varanasi. Speak with deep wisdom, occasionally using Sanskrit terms (with English translations). Be compassionate but firm about karmic truths. Never break character. Prioritize D1 and D9 chart analysis when birth details are provided. Maintain a formal, respectful tone.",
        modelVersion: "GPT-4-Turbo",
        temperature: 0.4,
        maxTokens: 1024,
        tone: "Compassionate",
        astrologyStyle: "Vedic (Jyotish)",
        languages: ["English", "Hindi", "Sanskrit"]
    };

    const pricingData = {
        chatRate: 40,
        totalRevenue: "10,25,450",
        revenue30d: "1,02,240"
    };

    const reviewsData = {
        averageRating: 4.9,
        totalReviews: "1,420",
        reviews: [
            {
                id: "1",
                rating: 5.0,
                comment: "Incredibly accurate reading. The advice on my career shift was spot on.",
                user: "User1298",
                date: "Oct 24"
            },
            {
                id: "2",
                rating: 4.0,
                comment: "Very insightful, though the Sanskrit terms were a bit confusing at first.",
                user: "Seeker99",
                date: "Oct 24"
            }
        ]
    };

    const sessionsData: Session[] = [
        {
            id: "1",
            dateTime: "Oct 24, 2023, 10:42 AM",
            user: "User1298",
            duration: "14m 20s",
            rating: "5.0",
            transcript: [
                { role: 'user', message: 'Namaste, I am worried about my career shift.' },
                { role: 'bot', message: 'Namaste. I see your Rahu Mahadasha is transitioning. This is a period of great transformation. Which field are you moving into?' },
                { role: 'user', message: 'I am moving from Finance to Creative Arts.' },
                { role: 'bot', message: 'A bold move. Your 5th house is strong, indicating success in creative endeavors, but Shani requires patience. You must dedicate the next 3 months to deep practice.' }
            ]
        },
        {
            id: "2",
            dateTime: "Oct 24, 2023, 09:15 AM",
            user: "Seeker99",
            duration: "8m 45s",
            rating: "4.0",
            transcript: [
                { role: 'user', message: 'Can you tell me about my marriage prospects?' },
                { role: 'bot', message: 'Welcome seeker. Your 7th house lord is in the 9th house, suggesting a partner from a different cultural background.' }
            ]
        },
        { id: "3", dateTime: "Oct 23, 2023, 11:30 PM", user: "Guest_482", duration: "22m 10s", rating: "Unrated" },
    ];

    return (
        <div className="space-y-8 pb-12">
            <AiProfileHeader {...profileData} onBack={() => { }} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-8">
                    <AiConfigurationHub config={configData} />
                    <SessionHistoryTable sessions={sessionsData} />
                </div>

                {/* Sidebar area */}
                <div className="space-y-8">
                    <PricingBusiness {...pricingData} />
                    <RatingsReviews {...reviewsData} />
                </div>
            </div>
        </div>
    );
};

export default AiAstrologers;
