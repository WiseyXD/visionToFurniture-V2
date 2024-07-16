// app/api/generate-image/route.js

import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const { prompt } = await request.json();

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/images/generations',
            {
                prompt: prompt,
                n: 1, // Number of images to generate
                size: '512x512', // Adjust the size as needed
            },
            {
                headers: {
                    Authorization: process.env.OPENAI_API_KEY,
                    'Content-Type': 'application/json',
                },
            }
        );

        const imageUrl = response.data.data[0].url;
        return NextResponse.json({ imageUrl }, { status: 200 });
    } catch (error: any) {
        console.log(error);
        console.error(
            'Error generating image:',
            error.response ? error.response.data : error.message
        );
        return NextResponse.json(
            { error: 'Failed to generate image' },
            { status: 500 }
        );
    }
}
