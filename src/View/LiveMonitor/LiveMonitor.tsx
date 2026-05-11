import {
    IconCircleFilled
} from '@tabler/icons-react';
import { useState } from 'react';

// Sub-components
import OngoingSessionsSection from './Components/OngoingSessionsSection';
import RecentCompletionsSection from './Components/RecentCompletionsSection';
import SessionDetailsModal from './Components/SessionDetailsModal';

// Types
import { type Completion, type Session } from '../../api/types';

const LiveMonitor = () => {
    const [recentPage, setRecentPage] = useState(1);
    const [selectedSession, setSelectedSession] = useState<Completion | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Mock data for Ongoing Sessions
    const ongoingSessions: Session[] = [
        {
            id: '1',
            type: 'chat',
            astrologer: {
                name: 'Nitya Chowdhury',
                image: 'https://i.pravatar.cc/150?u=nitya'
            },
            user: {
                name: 'muskan',
                gender: 'female',
                dob: 'Jan 18, 2003',
                location: 'hapur uttar pradesh'
            },
            startTime: '08:19 PM',
            duration: '01:02 min',
            status: 'ACTIVE',
            value: '5.08'
        }
    ];

    // Mock data for Recent Completions
    const recentCompletions: Completion[] = [
        {
            id: '1',
            participant: {
                name: 'vrinda gupta',
                gender: 'female',
                dob: 'Dec 20, 2005',
                location: 'Delhi'
            },
            expert: 'Riddhi Narang',
            startTime: '08:15 PM',
            endTime: '08:16 PM',
            status: 'ENDED',
            duration: '01:00 min',
            amount: '1',
            rating: null
        },
        {
            id: '2',
            participant: {
                name: 'Kiran Sharma',
                gender: 'female',
                dob: 'Feb 22, 2002',
                location: 'delhi'
            },
            expert: 'Ravi Verma',
            startTime: '08:03 PM',
            endTime: '08:04 PM',
            status: 'ENDED',
            duration: '01:00 min',
            amount: '1',
            rating: null
        },
        {
            id: '3',
            participant: {
                name: 'Deepak Meghwal',
                gender: 'male',
                dob: 'Aug 12, 2003',
                location: 'Jawar, Rajasthan, India'
            },
            expert: 'Astro Shivitesh',
            startTime: '07:47 PM',
            endTime: '07:48 PM',
            status: 'ENDED',
            duration: '01:00 min',
            amount: '1',
            rating: 4
        },
        {
            id: '4',
            participant: {
                name: 'surendra sharma',
                gender: 'male',
                dob: 'Apr 04, 2008',
                location: 'Chhattisgarh Raipur'
            },
            expert: 'Astroguru',
            startTime: '07:43 PM',
            endTime: '07:44 PM',
            status: 'ENDED',
            duration: '01:00 min',
            amount: '1',
            rating: null
        },
        {
            id: '5',
            participant: {
                name: 'Jyothirmai',
                gender: 'female',
                dob: 'Apr 03, 1997',
                location: 'Khammam, Telangana, India'
            },
            expert: 'Astro Shivitesh',
            startTime: '07:42 PM',
            endTime: '07:43 PM',
            status: 'ENDED',
            duration: '01:00 min',
            amount: '5',
            rating: null
        }
    ];

    const handleViewSession = (session: Completion) => {
        setSelectedSession(session);
        setIsModalOpen(true);
    };

    return (
        <div className="space-y-10 pb-10">
            {/* Header Section */}
            <div className="bg-white rounded-xl border border-outline-variant shadow-sm p-6 flex items-center justify-between">
                <h1 className="text-3xl font-black text-[#0A0E27]">Live Sessions</h1>
                <div className="flex items-center gap-2 bg-[#E7F9ED] text-[#12B76A] px-6 py-2.5 rounded-full border border-[#D1FADF]">
                    <IconCircleFilled size={12} />
                    <span className="text-sm font-bold">7 ONLINE</span>
                </div>
            </div>

            {/* Ongoing Sessions Section */}
            <OngoingSessionsSection sessions={ongoingSessions} />

            {/* Recent Completions Section */}
            <RecentCompletionsSection
                completions={recentCompletions}
                currentPage={recentPage}
                onPageChange={setRecentPage}
                onViewSession={handleViewSession}
            />

            {/* Modals */}
            <SessionDetailsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                session={selectedSession}
            />
        </div>
    );
};

export default LiveMonitor;
