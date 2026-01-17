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
        <header className="flex justify-between h-14">
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
