import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const keywords = [
    'sofa',
    'chair',
    'table',
    'bed',
    'dresser',
    'cabinet',
    'shelf',
    'couch',
    'desk',
    'stool',
    'bench',
    'furniture',
    'armchair',
    'nightstand',
    'wardrobe',
    'bookcase',
    'rug',
    'curtain',
    'lamp',
    'vase',
    'mirror',
    'artwork',
    'throw pillow',
    'blanket',
    'ottoman',
    'chaise lounge',
    'credenza',
    'sideboard',
    'console table',
    'accent chair',
    'recliner',
    'barstool',
    'TV stand',
    'coffee table',
    'end table',
    'dining table',
    'dining chair',
    'buffet',
    'hutch',
    'media console',
    'accent table',
    'plant stand',
    'wall decor',
    'decorative accessories',
];

export function checkKeywords(prompt: string): boolean {
    for (const keyword of keywords) {
        if (prompt.includes(keyword)) {
            return true;
        }
    }
    return false;
}
