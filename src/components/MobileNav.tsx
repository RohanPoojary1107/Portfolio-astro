import { useState, type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from 'react';
import { Menu } from 'lucide-react';

import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";


const MobileNav = () => {
    const [open, setOpen] = useState(false);

    return(
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Toggle menu">
                    <Menu className="h-[1.2rem] w-[1.2rem] md:hidden" aria-hidden="true" />
                </Button>
            </SheetTrigger>
        <SheetContent side="right">
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
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

interface MobileLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode
    onOpenChange?: (open: boolean) => void
}

const MobileLink = ({ href, onOpenChange, onClick, children, ...props }: MobileLinkProps) => {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        onClick?.(event);
        onOpenChange?.(false);
    };

    return(
        <a href={href} onClick={handleClick} {...props}>
            {children}
        </a>
    );
};

export default MobileNav;
