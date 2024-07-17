// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardFooter } from '@/components/ui/card';
// import { useTranslations } from 'next-intl';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function Home() {
//     const t = useTranslations('HomePage');
//     return (
//         // <main className="min-h-[93vh] flex flex-col items-center justify-center p-24 gap-y-10 ">
//         <div>
//             <section className="w-full py-12 md:py-24 lg:py-32">
//                 <div className="container px-4 md:px-6">
//                     <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
//                         <div className="flex flex-col justify-center space-y-4">
//                             <div className="space-y-2">
//                                 <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl">
//                                     {t('title')}
//                                 </h1>
//                                 <p className="max-w-[700px] text-muted-foreground md:text-xl">
//                                     {t('head')}
//                                 </p>
//                             </div>
//                             <div className="flex flex-col gap-2 min-[400px]:flex-row">
//                                 <Link
//                                     href="#"
//                                     className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//                                     prefetch={false}
//                                 >
//                                     {t('tryIt')}
//                                 </Link>
//                                 <Link
//                                     href="#"
//                                     className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//                                     prefetch={false}
//                                 >
//                                     {t('learn')}
//                                 </Link>
//                             </div>
//                         </div>
//                         <Image
//                             src="/placeholder.svg"
//                             width="550"
//                             height="550"
//                             alt="Hero"
//                             className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
//                         />
//                     </div>
//                 </div>
//             </section>
//             <section className="w-full py-12 md:py-24 lg:py-32">
//                 <div className="container space-y-12 px-4 md:px-6">
//                     <div className="flex flex-col items-center justify-center space-y-4 text-center">
//                         <div className="space-y-2">
//                             <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
//                                 {t('feature')}
//                             </div>
//                             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
//                                 {t('discover')}
//                             </h2>
//                             <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                                 {t('browse')}
//                             </p>
//                         </div>
//                     </div>
//                     <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
//                         <Card>
//                             <CardContent>
//                                 <Image
//                                     src="/placeholder.svg"
//                                     width="300"
//                                     height="300"
//                                     alt="Product"
//                                     className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
//                                 />
//                                 <div className="mt-4 space-y-1">
//                                     <h3 className="text-lg font-bold">
//                                         {t('modern')}
//                                     </h3>
//                                     <p className="text-muted-foreground">
//                                         {t('$')}
//                                     </p>
//                                 </div>
//                             </CardContent>
//                             <CardFooter>
//                                 <Button variant="outline">{t('add')}</Button>
//                             </CardFooter>
//                         </Card>
//                         <Card>
//                             <CardContent>
//                                 <Image
//                                     src="/placeholder.svg"
//                                     width="300"
//                                     height="300"
//                                     alt="Product"
//                                     className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
//                                 />
//                                 <div className="mt-4 space-y-1">
//                                     <h3 className="text-lg font-bold">
//                                         {t('minimalist')}
//                                     </h3>
//                                     <p className="text-muted-foreground">
//                                         {t('$1')}
//                                     </p>
//                                 </div>
//                             </CardContent>
//                             <CardFooter>
//                                 <Button variant="outline">{t('add')}</Button>
//                             </CardFooter>
//                         </Card>
//                         <Card>
//                             <CardContent>
//                                 <Image
//                                     src="/placeholder.svg"
//                                     width="300"
//                                     height="300"
//                                     alt="Product"
//                                     className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
//                                 />
//                                 <div className="mt-4 space-y-1">
//                                     <h3 className="text-lg font-bold">
//                                         {t('wooden')}
//                                     </h3>
//                                     <p className="text-muted-foreground">
//                                         {t('$2')}
//                                     </p>
//                                 </div>
//                             </CardContent>
//                             <CardFooter>
//                                 <Button variant="outline">{t('add')}</Button>
//                             </CardFooter>
//                         </Card>
//                     </div>
//                 </div>
//             </section>
//             <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
//                 <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
//                     <div className="space-y-3">
//                         <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                             {t('what')}
//                         </h2>
//                         <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                             {t('hear')}
//                         </p>
//                     </div>
//                     <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                         <Card>
//                             <CardContent>
//                                 <div className="flex items-start space-x-4">
//                                     <Avatar>
//                                         <AvatarImage src="/placeholder-user.jpg" />
//                                         <AvatarFallback>
//                                             {t('jd')}
//                                         </AvatarFallback>
//                                     </Avatar>
//                                     <div className="space-y-1">
//                                         <h4 className="text-lg font-medium">
//                                             {t('john')}
//                                         </h4>
//                                         <p className="text-muted-foreground">
//                                             {t('homeowner')}
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="mt-4 text-muted-foreground">
//                                     {t('ai')}
//                                 </div>
//                             </CardContent>
//                         </Card>
//                         <Card>
//                             <CardContent>
//                                 <div className="flex items-start space-x-4">
//                                     <Avatar>
//                                         <AvatarImage src="/placeholder-user.jpg" />
//                                         <AvatarFallback>JS</AvatarFallback>
//                                     </Avatar>
//                                     <div className="space-y-1">
//                                         <h4 className="text-lg font-medium">
//                                             {t('jane')}
//                                         </h4>
//                                         <p className="text-muted-foreground">
//                                             {t('interior')}
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="mt-4 text-muted-foreground">
//                                     {t('rec')}
//                                 </div>
//                             </CardContent>
//                         </Card>
//                         <Card>
//                             <CardContent>
//                                 <div className="flex items-start space-x-4">
//                                     <Avatar>
//                                         <AvatarImage src="/placeholder-user.jpg" />
//                                         <AvatarFallback>
//                                             {t('mr')}
//                                         </AvatarFallback>
//                                     </Avatar>
//                                     <div className="space-y-1">
//                                         <h4 className="text-lg font-medium">
//                                             {t('michael')}
//                                         </h4>
//                                         <p className="text-muted-foreground">
//                                             {t('homeowner')}
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="mt-4 text-muted-foreground">
//                                     {t('home')}
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     </div>
//                 </div>
//             </section>
//             <section className="w-full py-12 md:py-24 lg:py-32">
//                 <div className="container space-y-12 px-4 md:px-6">
//                     <div className="flex flex-col items-center justify-center space-y-4 text-center">
//                         <div className="space-y-2">
//                             <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
//                                 {t('featured')}
//                             </div>
//                             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
//                                 {t('trusted')}
//                             </h2>
//                             <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                                 {t('trust')}
//                             </p>
//                         </div>
//                     </div>
//                     <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-5 lg:gap-12">
//                         <Image
//                             src="/placeholder.svg"
//                             width="140"
//                             height="70"
//                             alt="Brand Logo"
//                             className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
//                         />
//                         <Image
//                             src="/placeholder.svg"
//                             width="140"
//                             height="70"
//                             alt="Brand Logo"
//                             className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
//                         />
//                         <Image
//                             src="/placeholder.svg"
//                             width="140"
//                             height="70"
//                             alt="Brand Logo"
//                             className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
//                         />
//                         <Image
//                             src="/placeholder.svg"
//                             width="140"
//                             height="70"
//                             alt="Brand Logo"
//                             className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
//                         />
//                         <Image
//                             src="/placeholder.svg"
//                             width="140"
//                             height="70"
//                             alt="Brand Logo"
//                             className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
//                         />
//                     </div>
//                 </div>
//             </section>
//             <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
//                 <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
//                     <div className="space-y-3">
//                         <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
//                             {t('ready')}
//                         </h2>
//                         <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                             {t('start')}
//                         </p>
//                     </div>
//                     <div className="flex justify-center gap-4">
//                         <Link
//                             href="#"
//                             className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//                             prefetch={false}
//                         >
//                             {t('try')}
//                         </Link>
//                         <Link
//                             href="#"
//                             className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//                             prefetch={false}
//                         >
//                             {t('learn')}
//                         </Link>
//                     </div>
//                 </div>
//             </section>
//             <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
//                 <p className="text-xs text-muted-foreground">
//                     &copy; {t('copyright')}
//                 </p>
//                 <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//                     <Link
//                         href="#"
//                         className="text-xs hover:underline underline-offset-4"
//                         prefetch={false}
//                     >
//                         {t('terms')}
//                     </Link>
//                     <Link
//                         href="#"
//                         className="text-xs hover:underline underline-offset-4"
//                         prefetch={false}
//                     >
//                         {t('privacy')}
//                     </Link>
//                 </nav>
//             </footer>
//         </div>
//         // </main>
//     );
// }

// // test

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    const t = useTranslations('HomePage');
    return (
        // <main className="min-h-[93vh] flex flex-col items-center justify-center p-24 gap-y-10 ">
        <div>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1
                                    style={{ letterSpacing: '0.016em' }}
                                    className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl"
                                >
                                    {t('title')}
                                </h1>
                                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                                    {t('head')}
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link
                                    href="#"
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    prefetch={false}
                                >
                                    {t('tryIt')}
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    prefetch={false}
                                >
                                    {t('learn')}
                                </Link>
                            </div>
                        </div>
                        <Image
                            src="/landing-page-1-top.jpg"
                            width="550"
                            height="550"
                            alt="Hero"
                            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container space-y-12 px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                                {t('feature')}
                            </div>
                            <h2
                                style={{ letterSpacing: '0.018em' }}
                                className="text-3xl font-bold tracking-tighter sm:text-5xl"
                            >
                                {t('discover')}
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                {t('browse')}
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
                        <Card>
                            <CardContent className="mt-4">
                                <Image
                                    src="/landing-page-1-product-1-sofa.jpg"
                                    width="300"
                                    height="300"
                                    alt="Product"
                                    className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                                />
                                <div className="mt-4 space-y-1">
                                    <h3
                                        style={{ letterSpacing: '0.023em' }}
                                        className="text-lg font-bold"
                                    >
                                        {t('modern')}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {t('$')}
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline">{t('add')}</Button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardContent className="mt-4">
                                <Image
                                    src="/landing-page-1-product-2-chair.jpg"
                                    width="300"
                                    height="300"
                                    alt="Product"
                                    className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                                />
                                <div className="mt-4 space-y-1">
                                    <h3
                                        style={{ letterSpacing: '0.023em' }}
                                        className="text-lg font-bold"
                                    >
                                        {t('minimalist')}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {t('$1')}
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline">{t('add')}</Button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardContent className="mt-4">
                                <Image
                                    src="/landing-page-1-product-3-coffee-table.jpg"
                                    width="300"
                                    height="300"
                                    alt="Product"
                                    className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                                />
                                <div className="mt-4 space-y-1">
                                    <h3
                                        style={{ letterSpacing: '0.023em' }}
                                        className="text-lg font-bold"
                                    >
                                        {t('wooden')}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {t('$2')}
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline">{t('add')}</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                    <div className="space-y-3">
                        <h2
                            style={{ letterSpacing: '0.016em' }}
                            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                        >
                            {t('what')}
                        </h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            {t('hear')}
                        </p>
                    </div>
                    <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardContent>
                                <div className="flex items-start space-x-4 mt-3">
                                    <Avatar
                                        style={{
                                            width: '54px',
                                            height: '54px',
                                        }}
                                    >
                                        <AvatarImage src="/landing-page-1-user-feedback-1.jpg" />
                                        <AvatarFallback>
                                            {t('jd')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-1">
                                        <h4 className="text-lg font-medium">
                                            {t('john')}
                                        </h4>
                                        <p className="text-muted-foreground">
                                            {t('homeowner')}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4 text-muted-foreground">
                                    {t('ai')}
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent>
                                <div className="flex items-start space-x-4 mt-3">
                                    <Avatar
                                        style={{
                                            width: '54px',
                                            height: '54px',
                                        }}
                                    >
                                        <AvatarImage src="/landing-page-1-user-feedback-2.jpg" />
                                        <AvatarFallback>JS</AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-1">
                                        <h4 className="text-lg font-medium">
                                            {t('jane')}
                                        </h4>
                                        <p className="text-muted-foreground">
                                            {t('interior')}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4 text-muted-foreground">
                                    {t('rec')}
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent>
                                <div className="flex items-start space-x-4 mt-3">
                                    <Avatar
                                        style={{
                                            width: '54px',
                                            height: '54px',
                                        }}
                                    >
                                        <AvatarImage src="/landing-page-1-user-feedback-3.jpg" />
                                        <AvatarFallback>
                                            {t('mr')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-1">
                                        <h4 className="text-lg font-medium">
                                            {t('michael')}
                                        </h4>
                                        <p className="text-muted-foreground">
                                            {t('homeowner')}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4 text-muted-foreground">
                                    {t('home')}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container space-y-12 px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                                {t('featured')}
                            </div>
                            <h2
                                style={{ letterSpacing: '0.016em' }}
                                className="text-3xl font-bold tracking-tighter sm:text-5xl"
                            >
                                {t('trusted')}
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                {t('trust')}
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-5 lg:gap-12">
                        <Image
                            src="/placeholder.svg"
                            width="140"
                            height="70"
                            alt="Brand Logo"
                            className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                        />
                        <Image
                            src="/placeholder.svg"
                            width="140"
                            height="70"
                            alt="Brand Logo"
                            className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                        />
                        <Image
                            src="/placeholder.svg"
                            width="140"
                            height="70"
                            alt="Brand Logo"
                            className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                        />
                        <Image
                            src="/placeholder.svg"
                            width="140"
                            height="70"
                            alt="Brand Logo"
                            className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                        />
                        <Image
                            src="/placeholder.svg"
                            width="140"
                            height="70"
                            alt="Brand Logo"
                            className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                        />
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                    <div className="space-y-3">
                        <h2
                            style={{ letterSpacing: '0.016em' }}
                            className="text-3xl font-bold tracking-tighter md:text-4xl/tight"
                        >
                            {t('ready')}
                        </h2>
                        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            {t('start')}
                        </p>
                    </div>
                    <div className="flex justify-center gap-4">
                        <Link
                            href="#"
                            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                        >
                            {t('try')}
                        </Link>
                        <Link
                            href="#"
                            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                        >
                            {t('learn')}
                        </Link>
                    </div>
                </div>
            </section>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-muted-foreground">
                    &copy; {t('copyright')}
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link
                        href="#"
                        className="text-xs hover:underline underline-offset-4"
                        prefetch={false}
                    >
                        {t('terms')}
                    </Link>
                    <Link
                        href="#"
                        className="text-xs hover:underline underline-offset-4"
                        prefetch={false}
                    >
                        {t('privacy')}
                    </Link>
                </nav>
            </footer>
        </div>
        // </main>
    );
}

// test
