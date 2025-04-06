import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import os from 'os';

// Initialize OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const revalidate = 0;

export async function POST(request: NextRequest) {
    try {
        const startTime = Date.now();

        // Check if the request is multipart/form-data
        const contentType = request.headers.get('content-type');
        if (!contentType || !contentType.includes('multipart/form-data')) {
            return NextResponse.json(
                { error: 'Content-Type must be multipart/form-data' },
                { status: 400 }
            );
        }

        // Read the form data
        const formData = await request.formData();
        const prompt = formData.get('prompt') as string;
        const image = formData.get('image') as File | null;

        if (!prompt) {
            return NextResponse.json(
                { error: 'Prompt is required' },
                { status: 400 }
            );
        }

        if (!image || !(image instanceof File)) {
            return NextResponse.json(
                { error: 'Image file is required' },
                { status: 400 }
            );
        }

        // Find mask file based on image name
        const imageBuffer = await image.arrayBuffer();
        const imageFilename = path.parse(image.name).name;
        const maskFilename = `${imageFilename}_mask.png`;
        const maskBasePath = './public';
        const maskImagePath = path.join(maskBasePath, maskFilename);

        // Check if mask exists
        if (!fs.existsSync(maskImagePath)) {
            return NextResponse.json(
                {
                    error: `Mask image not found for ${image.name}`,
                },
                { status: 400 }
            );
        }

        // Read mask file
        const maskBuffer = fs.readFileSync(maskImagePath);

        // Create temporary files for image and mask
        const tmpDir = os.tmpdir();
        const tmpImagePath = path.join(tmpDir, `${Date.now()}_image.png`);
        const tmpMaskPath = path.join(tmpDir, `${Date.now()}_mask.png`);

        // Write buffers to temporary files
        fs.writeFileSync(tmpImagePath, Buffer.from(imageBuffer));
        fs.writeFileSync(tmpMaskPath, maskBuffer);

        // Create ReadStream for both files
        const imageStream = fs.createReadStream(tmpImagePath);
        const maskStream = fs.createReadStream(tmpMaskPath);

        // Make the OpenAI API request
        const response = await openai.images.edit({
            prompt: prompt,
            image: imageStream,
            mask: maskStream,
            n: 1,
            size: '512x512',
        });

        const endTime = Date.now();

        // Clean up temporary files
        try {
            fs.unlinkSync(tmpImagePath);
            fs.unlinkSync(tmpMaskPath);
        } catch (err) {
            console.error('Error cleaning up temporary files:', err);
        }

        // Get the image URL from the response
        const imageUrl = response.data[0].url;

        if (!imageUrl) {
            throw new Error('API response does not contain an image URL');
        }

        return NextResponse.json(
            { imageUrl },
            {
                status: 200,
                headers: {
                    'Server-Timing': `total;dur=${endTime - startTime}`,
                },
            }
        );
    } catch (error: any) {
        console.error('Error generating edited image:', error);

        let errorMessage = 'Failed to generate edited image';
        if (error instanceof Error) {
            errorMessage += `: ${error.message}`;
        }

        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
} //app/api/inpaint-image/route.ts
