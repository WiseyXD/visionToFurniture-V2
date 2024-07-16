import { logout } from '@/actions/logout';
import { validateRequest } from '@/actions/validateRequests';
import ImageGenerator from '@/components/ImageGenerator';
import { Button } from '@/components/ui/button';

export default async function page() {
    const { session } = await validateRequest();
    return (
        <div className="min-h-[93vh]">
            {JSON.stringify(session)}
            <ImageGenerator />
            <form action={logout}>
                /<Button>Logout</Button>
            </form>
        </div>
    );
}
