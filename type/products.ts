export interface Product {
    id: number;
    name: string;
    title: string;
    avatar?: string;
    description?: string;
    icon?: React.ReactNode;
    features: string[];
    tags?: string[];
    reviews?: number;
    testimonial?: {
        quote: string;
        author: string;
        role?: string;
        avatar?: string;
    };
}
