'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { checkKeywords } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

export default function FurnishifyComponent() {
    const t = useTranslations('furnishify');

    const [prompt, setPrompt] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setImageUrl('');

        if (!checkKeywords(prompt)) {
            setError('Invlaid inputs');

            setLoading(false);
            return;
        }

        if (!image) {
            setError('Please upload an image file.');
            setLoading(false);
            return;
        }

        const formData = new FormData();
        formData.append('prompt', prompt);
        formData.append('image', image);

        try {
            const response = await fetch('/api/inpaint-image', {
                method: 'POST',
                body: formData,
            });
            console.log(response.body);
            if (!response.ok) {
                throw new Error('Failed to generate image');
            }

            const data = await response.json();
            setImageUrl(data.imageUrl);
            setPrompt('');
            setImage(null);
        } catch (error) {
            setError('Failed to generate image');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="flex flex-col items-start flex-1 max-w-2xl gap-8 px-4 mx-auto">
                <div className="flex items-start gap-4">
                    <Avatar className="w-6 h-6 border">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>YO</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <div className="font-bold">{t('You')}</div>
                        <div className="prose text-muted-foreground">
                            <p>{t('tur')}</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Avatar className="w-6 h-6 border">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>OA</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <div className="font-bold">{t('v')}</div>
                        <div className="prose text-muted-foreground">
                            <p>{t('can')}</p>
                        </div>
                        <div className="flex items-center gap-2 py-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                            >
                                <ClipboardIcon className="w-4 h-4" />
                                <span className="sr-only">{t('c')}</span>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                            >
                                <ThumbsUpIcon className="w-4 h-4" />
                                <span className="sr-only">{t('Upvote')}</span>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                            >
                                <ThumbsDownIcon className="w-4 h-4" />
                                <span className="sr-only">{t('Downvote')}</span>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                            >
                                <RefreshCcwIcon className="w-4 h-4" />
                                <span className="sr-only">{t('re')}</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center max-w-2xl w-full mx-auto px-4">
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt="Generated furniture"
                        className="w-full h-auto mt-4 rounded-lg shadow-md"
                    />
                )}

                <form
                    onSubmit={handleSubmit}
                    className="max-w-2xl w-full sticky bottom-0 mx-auto py-2 flex flex-col gap-1.5 px-4 bg-background"
                >
                    <div className="relative flex items-center gap-2">
                        <Textarea
                            placeholder={t('placeholder')}
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            name="prompt"
                            id="prompt"
                            rows={1}
                            className="min-h-[48px] rounded-2xl resize-none p-4 border border-neutral-400 shadow-sm flex-1"
                        />
                        <Input
                            placeholder="Select image"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-8 h-8"
                            id="imageUpload"
                        />
                        {/* <label htmlFor="imageUpload" className="cursor-pointer">
                            <Button
                                size="icon"
                                className="w-8 h-8"
                                disabled={loading}
                            >
                                <PaperclipIcon className="w-4 h-4" />
                                <span className="sr-only">Attach file</span>
                            </Button>
                        </label> */}
                        <Button
                            type="submit"
                            size="icon"
                            className="w-8 h-8"
                            disabled={loading}
                        >
                            <ArrowUpIcon className="w-4 h-4" />
                            <span className="sr-only">{t('s')}</span>
                        </Button>
                    </div>
                    <p className="text-xs font-medium text-center text-neutral-700">
                        {t('m')}
                    </p>
                    {loading && (
                        <p className="text-xs font-medium text-center text-neutral-700">
                            {t('g')}
                        </p>
                    )}
                    {error && (
                        <p className="text-xs font-medium text-center text-red-700">
                            {error}
                        </p>
                    )}
                </form>
            </div>
        </>
    );
}

// SVG Icons

function PaperclipIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
        </svg>
    );
}

function ArrowUpIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m5 12 7-7 7 7" />
            <path d="M12 19V5" />
        </svg>
    );
}

function ClipboardIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        </svg>
    );
}

function ThumbsUpIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M7 10v12" />
            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
        </svg>
    );
}

function ThumbsDownIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17 14V2" />
            <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
        </svg>
    );
}

function RefreshCcwIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
            <path d="M16 16h5v5" />
        </svg>
    );
}
