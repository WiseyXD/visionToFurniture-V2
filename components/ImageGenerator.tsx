'use client';

import { useState } from 'react';

const ImageGenerator = () => {
    const [prompt, setPrompt] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/generate-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });

            if (!response.ok) {
                console.log(response);
                throw new Error('Failed to generate image');
            }

            const data = await response.json();
            setImageUrl(data.imageUrl);
        } catch (error) {
            setError('Failed to generate image');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter image description"
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Generating...' : 'Generate Image'}
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {imageUrl && <img src={imageUrl} alt="Generated" />}
        </div>
    );
};

export default ImageGenerator;
