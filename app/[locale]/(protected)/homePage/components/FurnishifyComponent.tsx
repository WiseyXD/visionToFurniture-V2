'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { checkKeywords } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowUpIcon,
    ClipboardIcon,
    PaperclipIcon,
    RefreshCcwIcon,
    ThumbsDownIcon,
    ThumbsUpIcon,
} from 'lucide-react';

export default function FurnishifyComponent() {
    const t = useTranslations('furnishify');
    const [prompt, setPrompt] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [textareaHeight, setTextareaHeight] = useState(48);
    const [imageLoaded, setImageLoaded] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleTextareaChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setPrompt(e.target.value);
        // Auto-resize textarea
        e.target.style.height = '48px';
        e.target.style.height = `${Math.min(e.target.scrollHeight, 200)}px`;
        setTextareaHeight(Math.min(e.target.scrollHeight, 200));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setImage(selectedFile);

            // Create preview URL
            const reader = new FileReader();
            reader.onload = (event) => {
                setImagePreview(event.target?.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        setError('Failed to load the generated image');
    };

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setImageLoaded(false);

        if (!checkKeywords(prompt)) {
            setError('Invalid inputs');
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
            // Update API endpoint to match your new Next.js route handler
            const response = await fetch('/api/inpaint-image', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to generate image');
            }

            const data = await response.json();
            console.log('Response data:', data);

            // The new API returns data with imageUrl directly
            if (data && typeof data.imageUrl === 'string') {
                setImageUrl(data.imageUrl);
            } else {
                console.error('Unexpected response format:', data);
                throw new Error('Invalid response format');
            }

            setPrompt('');
            // Don't reset the image immediately to allow comparing before/after
        } catch (error: any) {
            console.error('Error:', error);
            setError(error.message || 'Failed to generate image');
        } finally {
            setLoading(false);
        }
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

                            <div className="flex flex-col md:flex-row gap-4 mt-4">
                                {/* Original uploaded image preview */}
                                <AnimatePresence>
                                    {imagePreview && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden rounded-xl border border-gray-700 bg-gray-900 flex-1"
                                        >
                                            <div className="text-xs text-gray-400 p-2 bg-gray-800">
                                                Original Image
                                            </div>
                                            <img
                                                src={imagePreview}
                                                alt="Uploaded image"
                                                className="w-full h-auto object-cover"
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Generated image result */}
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
                                            className="overflow-hidden rounded-xl border border-gray-700 bg-gray-900 flex-1 relative"
                                        >
                                            <div className="text-xs text-gray-400 p-2 bg-gray-800">
                                                Generated Result
                                            </div>
                                            {!imageLoaded && (
                                                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                                                    <LoadingSpinner className="text-blue-500" />
                                                </div>
                                            )}
                                            <img
                                                key={imageUrl}
                                                src={imageUrl}
                                                alt="Generated furniture"
                                                className="w-full h-auto object-cover"
                                                onLoad={handleImageLoad}
                                                onError={handleImageError}
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

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
                    <div className="flex flex-col md:flex-row gap-3 mb-3">
                        {/* Hidden file input */}
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                            id="imageUpload"
                        />

                        {/* File upload button */}
                        <Button
                            type="button"
                            onClick={handleUploadClick}
                            className={`flex items-center gap-2 ${image ? 'bg-green-700 hover:bg-green-800' : 'bg-gray-700 hover:bg-gray-600'}`}
                            variant="secondary"
                        >
                            <PaperclipIcon className="w-4 h-4" />
                            {image ? 'Image Selected' : 'Upload Image'}
                        </Button>

                        {/* Selected file name display */}
                        {image && (
                            <p className="text-xs text-gray-400 py-2 truncate">
                                {image.name} ({Math.round(image.size / 1024)}{' '}
                                KB)
                            </p>
                        )}
                    </div>

                    <div className="relative flex items-end gap-2 rounded-xl p-1">
                        <Textarea
                            placeholder={t('placeholder')}
                            value={prompt}
                            onChange={handleTextareaChange}
                            name="prompt"
                            id="prompt"
                            style={{ height: `${textareaHeight}px` }}
                            className="min-h-[48px] rounded-lg resize-none py-3 px-4 border border-gray-700 bg-gray-850 text-gray-200 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all flex-1 pr-12"
                        />

                        <div className="absolute right-3 bottom-3 flex gap-2">
                            {!loading && (
                                <Button
                                    type="submit"
                                    size="icon"
                                    className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 shadow-sm"
                                    disabled={
                                        loading || !prompt.trim() || !image
                                    }
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

// LoadingSpinner component
function LoadingSpinner({ className = '' }) {
    return (
        <div className={`flex justify-center items-center ${className}`}>
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
        </div>
    );
}
