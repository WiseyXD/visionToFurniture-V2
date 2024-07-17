// app/api/generate-image/route.js

import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const { prompt } = await request.json();

    try {
        const response = await axios.post(
            'http://ec2-18-199-223-42.eu-central-1.compute.amazonaws.com:4000/api/generate-image',
            { prompt },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log(response.data);
        const imageUrl = response.data;
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
