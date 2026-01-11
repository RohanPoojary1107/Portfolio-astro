import { useState } from 'react';
import { Menu } from 'lucide-react';

import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";


const MobileNav = () => {
    const [open, setOpen] = useState(false);

    return(
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className="h-[1.2rem] w-[1.2rem] md:hidden" aria-label='Toggle Menu' />
                </Button>
            </SheetTrigger>
        <SheetContent side="right">
            <div className="flex flex-col space-y-3 mt-4">
                <MobileLink href="#about" onOpenChange={setOpen}>About</MobileLink>
                <MobileLink href="#experience" onOpenChange={setOpen}>Experience</MobileLink>
                <MobileLink 
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onOpenChange={setOpen}
                >
                    Resume
                </MobileLink>
            </div>
        </SheetContent>
        </Sheet>
    );
};

interface MobileLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode
    onOpenChange?: (open: boolean) => void
}

const MobileLink = ({ href, onOpenChange, children }: MobileLinkProps) => {
    return(
        <a href={href} onClick={() => onOpenChange?.(false)}>
            {children}
        </a>
    );
};

export default MobileNav;