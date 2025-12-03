export interface Product {
    id: number;
    name: string;
    title: string;
    url: string;
    avatar?: string;
    description?: string;
    Icon?: (props: {className: string}) => React.ReactNode;
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
