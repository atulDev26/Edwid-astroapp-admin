export interface PujaTier {
    id: string;
    name: string;
    price: string;
    features: string[];
    isRecommended?: boolean;
}

export interface PujaFAQ {
    id: string;
    question: string;
    answer: string;
}

export interface PujaServiceFormData {
    title: string;
    category: string;
    benefitTag: string;
    shortDescription: string;
    aboutContent: string;
    pujaDate: string;
    tithiName: string;
    muhurat: string;
    templeName: string;
    city: string;
    state: string;
    heroImage: string;
    videoUrl: string;
    gallery: string[];
    primaryDeity: string;
    benefitPoints: string[];
    tiers: PujaTier[];
    faqs: PujaFAQ[];
}
