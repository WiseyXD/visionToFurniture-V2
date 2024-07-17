import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };

export const revalidate = 0;

export async function POST(request: NextRequest) {
    try {
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

        // Prepare the data for the API request
        const apiFormData = new FormData();
        apiFormData.append('prompt', prompt);
        apiFormData.append('image', image);

        // Make the API request
        const apiUrl =
            'http://ec2-18-199-223-42.eu-central-1.compute.amazonaws.com:4000/api/inpaint-image2';
        const response = await axios.post(apiUrl, apiFormData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (response.status !== 200) {
            throw new Error(
                `API responded with status ${response.status}: ${JSON.stringify(response.data)}`
            );
        }

        const imageUrl = response.data.imageUrl;

        if (!imageUrl) {
            throw new Error('API response does not contain an image URL');
        }

        return NextResponse.json({ imageUrl }, { status: 200 });
    } catch (error: any) {
        console.error('Error generating edited image:', error);

        let errorMessage = 'Failed to generate edited image';
        let statusCode = 500;

        // if (axios.isAxiosError(error)) {
        //   errorMessage += : ${error.message};
        //   statusCode = error.response?.status || 500;
        // } else if (error instanceof Error) {
        //   errorMessage += : ${error.message};
        // }

        return NextResponse.json(
            { error: errorMessage },
            { status: statusCode }
        );
    }
}
