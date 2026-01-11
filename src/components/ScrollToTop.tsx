import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ScrollToTop() {
    const [showButton, setshowButton] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
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
        <span className="fixed bottom-12 right-6 z-50">
            {showButton && (
                <Button
                    className="rounded-full"
                    onClick={scrollToTop}
                    variant="secondary"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="h-[1.2rem] w-[1.2rem]" />
                </Button>
            )}
        </span>
    );
}
