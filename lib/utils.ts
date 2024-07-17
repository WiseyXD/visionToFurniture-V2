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
];

export function checkKeywords(prompt: string): boolean {
    for (const keyword of keywords) {
        if (prompt.includes(keyword)) {
            return true;
        }
    }
    return false;
}
