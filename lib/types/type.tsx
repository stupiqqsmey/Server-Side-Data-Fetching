export type ProductResponse = {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    category: string;
    images: string[];
}

export type UserResponse = {
    id: number;
    email: string;
    password: string;
    name: string;
    role: string;
    avatar: string;
    creationAt: string;
    updatedAt: string;
}