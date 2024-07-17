'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useTranslations } from 'next-intl';

import React, { useState } from 'react';

// export default function FurnitureGeneration() {
//     return (
//         <>
//             <div className="flex flex-col items-start flex-1 max-w-2xl gap-8 px-4 mx-auto">
//                 <div className="flex items-start gap-4">
//                     <Avatar className="w-6 h-6 border">
//                         <AvatarImage src="/placeholder-user.jpg" />
//                         <AvatarFallback>YO</AvatarFallback>
//                     </Avatar>
//                     <div className="grid gap-1">
//                         <div className="font-bold">You</div>
//                         <div className="prose text-muted-foreground">
//                             <p>
//                                 Can you explain airplane turbulence to someone
//                                 who has never flown before? Make it
//                                 conversational and concise.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                     <Avatar className="w-6 h-6 border">
//                         <AvatarImage src="/placeholder-user.jpg" />
//                         <AvatarFallback>OA</AvatarFallback>
//                     </Avatar>
//                     <div className="grid gap-1">
//                         <div className="font-bold">ChatGPT</div>
//                         <div className="prose text-muted-foreground">
//                             <p>
//                                 Of course! Imagine you&apos;re in a car driving
//                                 down a bumpy road, and the ride isn&apos;t
//                                 perfectly smooth. Sometimes, you hit small
//                                 potholes or bumps, right? Well, when you&apos;re
//                                 in an airplane, it&apos;s kind of like that, but
//                                 in the sky.
//                             </p>
//                             <p>
//                                 Airplane turbulence happens when the plane
//                                 encounters pockets of air that are moving
//                                 differently. It&apos;s like sailing a boat on
//                                 choppy water. These air pockets can make the
//                                 plane feel like it&apos;s bouncing or shaking a
//                                 bit. It&apos;s completely normal and usually not
//                                 dangerous at all.
//                             </p>
//                         </div>
//                         <div className="flex items-center gap-2 py-2">
//                             <Button
//                                 variant="ghost"
//                                 size="icon"
//                                 className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
//                             >
//                                 <ClipboardIcon className="w-4 h-4" />
//                                 <span className="sr-only">Copy</span>
//                             </Button>
//                             <Button
//                                 variant="ghost"
//                                 size="icon"
//                                 className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
//                             >
//                                 <ThumbsUpIcon className="w-4 h-4" />
//                                 <span className="sr-only">Upvote</span>
//                             </Button>
//                             <Button
//                                 variant="ghost"
//                                 size="icon"
//                                 className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
//                             >
//                                 <ThumbsDownIcon className="w-4 h-4" />
//                                 <span className="sr-only">Downvote</span>
//                             </Button>
//                             <Button
//                                 variant="ghost"
//                                 size="icon"
//                                 className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
//                             >
//                                 <RefreshCcwIcon className="w-4 h-4" />
//                                 <span className="sr-only">Regenerate</span>
//                             </Button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="max-w-2xl w-full sticky bottom-0 mx-auto py-2 flex flex-col gap-1.5 px-4 bg-background">
//                 <div className="relative flex items-center gap-2">
//                     <Textarea
//                         placeholder="Message ChatGPT..."
//                         name="message"
//                         id="message"
//                         rows={1}
//                         className="min-h-[48px] rounded-2xl resize-none p-4 border border-neutral-400 shadow-sm flex-1"
//                     />
//                     <Button type="submit" size="icon" className="w-8 h-8">
//                         <PaperclipIcon className="w-4 h-4" />
//                         <span className="sr-only">Attach file</span>
//                     </Button>
//                     <Button type="submit" size="icon" className="w-8 h-8">
//                         <ArrowUpIcon className="w-4 h-4" />
//                         <span className="sr-only">Send</span>
//                     </Button>
//                 </div>
//                 <p className="text-xs font-medium text-center text-neutral-700">
//                     ChatGPT can make mistakes. Consider checking important
//                     information.
//                 </p>
//             </div>
//         </>
//     );
// }

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

function BotIcon(props: any) {
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
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
        </svg>
    );
}

function ChevronDownIcon(props: any) {
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
            <path d="m6 9 6 6 6-6" />
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

function PenIcon(props: any) {
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
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
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

function SparkleIcon(props: any) {
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
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
        </svg>
    );
}

export default function FurnitureGeneration() {
    const t = useTranslations('gen');

    const [prompt, setPrompt] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setImageUrl('');

        try {
            const response = await fetch('/api/generate-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });

            if (!response.ok) {
                throw new Error('Failed to generate image');
            }

            const data = await response.json();

            setImageUrl(data.imageUrl.imageUrl);
            setPrompt('');
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
                            <p>{t('air')}</p>
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
