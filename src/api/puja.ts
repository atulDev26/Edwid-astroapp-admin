import { type PujaServiceFormData } from '../View/PujaBooking/types';

// In a real app, this would use axios or fetch to call the backend
export const pujaApi = {
    createService: async (data: PujaServiceFormData) => {
        console.log('[API] Creating Puja Service:', data);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        return { success: true, id: Math.random().toString(36).substr(2, 9) };
    },

    saveDraft: async (data: Partial<PujaServiceFormData>) => {
        console.log('[API] Saving Draft:', data);
        await new Promise(resolve => setTimeout(resolve, 500));
        return { success: true };
    },

    getServices: async () => {
        // Simulate fetching services
        return [];
    }
};
