import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ScrollToTop() {
    const [showButton, setshowButton] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        // const elem = document?.querySelector(".navbar-brand") as HTMLElement | null;
        // elem?.focus();
    };

    useEffect(() => {
        const toggleVisibility = () => {
            setshowButton(window.scrollY > 1000);
        };
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <span className="fixed bottom-6 right-6 z-50">
            {showButton && (
                <Button
                    className="rounded-full"
                    onClick={scrollToTop}
                    variant="secondary"
                >
                    <ArrowUp className="h-[1.2rem] w-[1.2rem]" aria-label="Scroll to top" />
                </Button>
            )}
        </span>
    );
}
