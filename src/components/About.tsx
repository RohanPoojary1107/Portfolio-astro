import { BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";

const About = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16">
      <SectionHeader sectionName="about me" />
      <div className="mb-4 space-y-4">
        <p>
          I'm a full stack engineer with over 4 years of experience building scalable, user-focused products. Currently at <a className="underline" href="https://canny.io/" target="_blank" rel="noopener noreferrer">Canny</a>, I work on tools that help product teams collect customer feedback, prioritize feature development, build roadmaps, and share product updates through changelogs using <strong>AWS, Node.js, React, and TypeScript</strong>.
        </p>
        <p>
          Previously, I spent several years at <a className="underline" href="https://company.wattpad.com/" target="_blank" rel="noopener noreferrer">Wattpad</a>, where I built and scaled backend systems for millions of users with <strong>Go, AWS, and Kubernetes</strong>. I also led product features that improved engagement, contributed to reliability as part of the on-call team, and mentored new engineers.
        </p>
        <p>
          When I'm not coding, you'll find me following basketball or geeking out about aviation. I'm always open to connecting, whether it's about technology, engineering culture, or just to chat!
        </p>
      </div>
      <Button variant="outline" asChild>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <BookOpen className="mr-2 h-[1.2rem] w-[1.2rem]" /> Check out my
          resume!
        </a>
      </Button>
    </section>
  );
};

export default About;
