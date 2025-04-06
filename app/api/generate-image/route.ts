// app/api/generate-image/route.js

import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
const openai = new OpenAI();

export const runtime = 'edge'; // Mark as Edge function
export async function POST(request: NextRequest) {
    const { prompt } = await request.json();
    try {
        const response = await openai.images.generate({
            model: 'dall-e-2',
            prompt: prompt,
            size: '1024x1024',
            n: 1,
            user: 'user-12345',
        });
        const imageUrl = response.data[0].url;
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
