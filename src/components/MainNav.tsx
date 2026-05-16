import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ModeToggle";
import MobileNav from "./MobileNav";

const navLinkClassName =
    "rounded-md px-3 py-2 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-300";

const MainNav = () => {
    return (
        <header className="flex justify-between h-14">
            <NavigationMenu>
                <NavigationMenuLink href="/" className="text-2xl xsm:text-3xl font-bold mr-5">
                    {"<Яohan/>"}
                </NavigationMenuLink>
                <NavigationMenuList className="gap-3 hidden sm:flex">
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#about" className={navLinkClassName}>About</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#experience" className={navLinkClassName}>
                            Experience
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={navLinkClassName}
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
