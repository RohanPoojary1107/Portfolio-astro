import { Github } from "lucide-react";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import MobileNav from "./MobileNav";

const MainNav = () => {
    return (
        <header className="flex justify-between h-14 sticky top-0 z-50 backdrop-blur">
            <NavigationMenu>
                <NavigationMenuLink href="/" className="text-2xl xsm:text-3xl font-bold mr-5">
                    {"<Яohan/>"}
                </NavigationMenuLink>
                <NavigationMenuList className="gap-6 hidden sm:flex">
                    <NavigationMenuItem className="hover:underline">
                        <NavigationMenuLink href="#about">About</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="hover:underline">
                        <NavigationMenuLink href="#experience">
                            Experience
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="hover:underline">
                        <NavigationMenuLink href="#projects">Projects</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="hover:underline">
                        <NavigationMenuLink
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Button variant="ghost" size="icon" asChild>
                            <NavigationMenuLink
                                href="https://github.com/RohanPoojary1107"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="h-[1.2rem] w-[1.2rem]" aria-label="Github" />
                            </NavigationMenuLink>
                        </Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <ModeToggle />
                    </NavigationMenuItem>
                    <NavigationMenuItem className="sm:hidden">
                        <MobileNav />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
};

export default MainNav;
