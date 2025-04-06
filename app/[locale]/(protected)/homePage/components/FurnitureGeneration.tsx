'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { checkKeywords } from '@/lib/utils';
import { useLocale, useTranslations } from 'next-intl';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowUpIcon,
    ClipboardIcon,
    RefreshCcwIcon,
    ThumbsDownIcon,
    ThumbsUpIcon,
} from 'lucide-react';

// New loading spinner component
function LoadingSpinner({ className = '' }) {
    return (
        <div className={`flex justify-center items-center ${className}`}>
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
        </div>
    );
}

export default function FurnitureGeneration() {
    const activeLocale = useLocale();
    const t = useTranslations('gen');

    const [prompt, setPrompt] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [textareaHeight, setTextareaHeight] = useState(48);
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleTextareaChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setPrompt(e.target.value);
        // Auto-resize textarea
        e.target.style.height = '48px';
        e.target.style.height = `${Math.min(e.target.scrollHeight, 200)}px`;
        setTextareaHeight(Math.min(e.target.scrollHeight, 200));
    };

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (!prompt.trim()) return;

        setLoading(true);
        setError('');
        setImageLoaded(false);

        if (!checkKeywords(prompt)) {
            setError(t('Invalid inputs'));
            setLoading(false);
            return;
        }

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
            console.log('Image response:', data); // Debug log

            // Make sure we're accessing the correct property from the response
            if (data.imageUrl) {
                // Handle both potential response formats
                const url =
                    typeof data.imageUrl === 'string'
                        ? data.imageUrl
                        : data.imageUrl.imageUrl;
                setImageUrl(url);
                console.log('Setting image URL to:', url); // Debug log
            } else {
                console.error('No image URL in response:', data);
                throw new Error('No image URL in response');
            }

            setPrompt('');
            // Reset textarea height
            setTextareaHeight(48);
        } catch (error) {
            console.error('Error generating image:', error);
            setError(t('Failed to generate image'));
        } finally {
            setLoading(false);
        }
    };

    const handleImageLoad = () => {
        console.log('Image loaded successfully'); // Debug log
        setImageLoaded(true);
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        console.error('Image failed to load:', e);
        setError('Failed to load the generated image');
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-950 text-gray-200">
            <div className="flex-1 mx-auto w-full max-w-3xl px-4 py-8">
                <div className="space-y-10">
                    <div className="flex items-start gap-4">
                        <Avatar className="w-10 h-10 border border-gray-700 bg-gray-800">
                            <AvatarImage
                                src="/placeholder-user.jpg"
                                alt="User"
                            />
                            <AvatarFallback className="bg-gray-800 text-gray-300">
                                YO
                            </AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1.5">
                            <div className="font-medium text-gray-300">
                                {t('You')}
                            </div>
                            <div className="prose text-gray-400 max-w-none">
                                <p>{t('tur')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Avatar className="w-10 h-10 border border-gray-700 bg-gray-800">
                            <AvatarImage
                                src="/placeholder-user.jpg"
                                alt="Vision"
                            />
                            <AvatarFallback className="bg-gray-800 text-gray-300">
                                VI
                            </AvatarFallback>
                        </Avatar>
                        <div className="grid gap-2 w-full">
                            <div className="font-medium text-gray-300">
                                {t('v')}
                            </div>
                            <div className="prose text-gray-400 max-w-none">
                                <p>{t('can')}</p>
                            </div>

                            <AnimatePresence>
                                {imageUrl && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                            opacity: imageLoaded ? 1 : 0.5,
                                            y: 0,
                                        }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="mt-4 overflow-hidden rounded-xl border border-gray-700 bg-gray-900 relative"
                                    >
                                        {!imageLoaded && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                                                <LoadingSpinner className="text-blue-500" />
                                            </div>
                                        )}
                                        <img
                                            key={imageUrl} // Key helps React recognize when to re-render the image
                                            src={imageUrl}
                                            alt="Generated furniture"
                                            className="w-full h-auto object-cover"
                                            onLoad={handleImageLoad}
                                            onError={handleImageError}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="flex items-center gap-3 mt-2">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-gray-400 hover:text-gray-200 hover:bg-gray-800 rounded-full p-2 h-8 w-8"
                                >
                                    <ClipboardIcon className="w-4 h-4" />
                                    <span className="sr-only">{t('c')}</span>
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-gray-400 hover:text-gray-200 hover:bg-gray-800 rounded-full p-2 h-8 w-8"
                                >
                                    <ThumbsUpIcon className="w-4 h-4" />
                                    <span className="sr-only">
                                        {t('Upvote')}
                                    </span>
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-gray-400 hover:text-gray-200 hover:bg-gray-800 rounded-full p-2 h-8 w-8"
                                >
                                    <ThumbsDownIcon className="w-4 h-4" />
                                    <span className="sr-only">
                                        {t('Downvote')}
                                    </span>
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-gray-400 hover:text-gray-200 hover:bg-gray-800 rounded-full p-2 h-8 w-8"
                                >
                                    <RefreshCcwIcon className="w-4 h-4" />
                                    <span className="sr-only">{t('re')}</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sticky bottom-0 w-full bg-gray-900 border-t border-gray-800 shadow-md px-4 py-4">
                <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                    <div className="relative flex items-end gap-2 rounded-xl p-1">
                        <Textarea
                            placeholder={t('placeholder')}
                            value={prompt}
                            onChange={handleTextareaChange}
                            name="prompt"
                            id="prompt"
                            style={{ height: `${textareaHeight}px` }}
                            className="min-h-[48px] rounded-lg resize-none py-3 px-4 border border-gray-700 bg-gray-850 text-gray-200 shadow-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all flex-1 pr-12"
                        />

                        <div className="absolute right-3 bottom-3 flex gap-2">
                            {!loading && (
                                <Button
                                    type="submit"
                                    size="icon"
                                    className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 shadow-sm"
                                    disabled={loading || !prompt.trim()}
                                >
                                    <ArrowUpIcon className="w-5 h-5 text-white" />
                                    <span className="sr-only">{t('s')}</span>
                                </Button>
                            )}

                            {loading && (
                                <div className="w-9 h-9 rounded-full bg-blue-900 flex items-center justify-center">
                                    <LoadingSpinner className="text-blue-400" />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-2 text-center">
                        <AnimatePresence>
                            {loading && (
                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-sm font-medium text-blue-400 flex items-center justify-center gap-2"
                                >
                                    <LoadingSpinner className="h-4 w-4" />
                                    {t('g')}
                                </motion.p>
                            )}

                            {error && (
                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-sm font-medium text-red-400"
                                >
                                    {error}
                                </motion.p>
                            )}

                            {!loading && !error && (
                                <p className="text-xs text-gray-500">
                                    {t('m')}
                                </p>
                            )}
                        </AnimatePresence>
                    </div>
                </form>
            </div>
        </div>
    );
}
