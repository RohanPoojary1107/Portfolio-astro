import { FolderDot, Github, Lock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export type Project = {
    name: string;
    techStack: string[];
    desc: string;
    link: string;
    isPrivate: boolean;
};

export const ProjectCard = ({
    name,
    techStack,
    desc,
    link,
    isPrivate,
}: Project) => {
    return (
        <Card className="flex flex-col">
            <CardHeader>
                <CardTitle className="flex items-center">
                    <FolderDot className="mr-2 self-start" aria-hidden />
                    <div>{name}</div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="mb-4">{desc}</div>
                <span className="sr-only">Technology stack</span>
                <div>
                    {techStack.map((tool, index) => (
                        <Badge className="mr-2" key={index}>
                            {tool}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="justify-end mt-auto">
                {isPrivate ? (
                    <Lock className="h-[1.2rem] w-[1.2rem]" aria-label="This project is private." />
                ) : (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github
                            className="h-[1.2rem] w-[1.2rem] hover:animate-pulse"
                            aria-label="view github repository"
                        />
                    </a>
                )}
            </CardFooter>
        </Card>
    );
};
