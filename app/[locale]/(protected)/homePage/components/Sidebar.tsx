'use client';

// import { AcmeLogo } from '@/components/AcmeLogo';
// import { Button } from '@/components/ui/button';

// import { Flame, LampDesk, PenIcon } from 'lucide-react';
// import Link from 'next/link';

// const SidebarContent = [
//     { text: 'Furiture Generation', logo: <LampDesk /> },
//     { text: 'Furnishify', logo: <Flame /> },
// ];

// export default function Sidebar() {
//     return (
//         <div className="flex-col hidden gap-2 text-foreground bg-background md:flex border-r-2 border border-zinc-800">
//             <div className="sticky top-0 p-2">
//                 <Button
//                     variant="ghost"
//                     className="justify-start w-full gap-2 px-2 text-left"
//                 >
//                     <div className="flex items-center justify-center rounded-full w-7 h-7">
//                         <AcmeLogo />
//                     </div>
//                     <div className="overflow-hidden text-sm grow text-ellipsis whitespace-nowrap">
//                         Vision
//                     </div>
//                     <PenIcon className="w-4 h-4" />
//                 </Button>
//             </div>
//             <div className="flex-1 overflow-auto">
//                 <div className="grid gap-1 p-2 text-foreground">
//                     {SidebarContent.map((item) => {
//                         return (
//                             <Link
//                                 href="#"
//                                 className="flex gap-2 p-2 overflow-hidden text-sm truncate transition-colors rounded-md whitespace-nowrap hover:bg-muted/50"
//                                 prefetch={false}
//                                 key={item.text}
//                             >
//                                 {item.logo}
//                                 <p className="text-xl">{item.text}</p>
//                             </Link>
//                         );
//                     })}

//                     {/* <Link
//                         href="#"
//                         className="flex-1 block p-2 overflow-hidden text-sm truncate transition-colors rounded-md whitespace-nowrap hover:bg-muted/50"
//                         prefetch={false}
//                     >
//                         <p>Edit Furniture</p>
//                     </Link> */}
//                 </div>
//             </div>
//         </div>
//     );
// }

import { AcmeLogo } from '@/components/AcmeLogo';
import { Button } from '@/components/ui/button';
import { Flame, LampDesk, PenIcon } from 'lucide-react';
import Link from 'next/link';
import { ReactNode, useState } from 'react';

interface SidebarItem {
    id: string;
    text: string;
    logo: ReactNode;
}

const SidebarContent: SidebarItem[] = [
    { id: 'furniture', text: 'Furniture Generation', logo: <LampDesk /> },
    { id: 'furnishify', text: 'Furnishify', logo: <Flame /> },
];

interface SidebarProps {
    onSelectItem: (itemId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectItem }) => {
    const [selectedItem, setSelectedItem] = useState(SidebarContent[0].id);

    const handleItemClick = (itemId: string) => {
        setSelectedItem(itemId);
        onSelectItem(itemId);
    };

    return (
        <div className="flex-col hidden gap-2 text-foreground bg-background md:flex border-r-2 border border-zinc-800">
            <div className="sticky top-0 p-2">
                <Button
                    variant="ghost"
                    className="justify-start w-full gap-2 px-2 text-left"
                >
                    <div className="flex items-center justify-center rounded-full w-7 h-7">
                        <AcmeLogo />
                    </div>
                    <div className="overflow-hidden text-sm grow text-ellipsis whitespace-nowrap">
                        Vision
                    </div>
                    <PenIcon className="w-4 h-4" />
                </Button>
            </div>
            <div className="flex-1 overflow-auto">
                <div className="grid gap-1 p-2 text-foreground">
                    {SidebarContent.map((item) => (
                        <Link
                            key={item.id}
                            href="#"
                            onClick={() => handleItemClick(item.id)}
                            className={`flex gap-2 p-2 overflow-hidden text-sm truncate transition-colors rounded-md whitespace-nowrap hover:bg-muted/50 ${
                                selectedItem === item.id ? 'bg-primary/50' : ''
                            }`}
                            prefetch={false}
                        >
                            {item.logo}
                            <p className="text-xl">{item.text}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
