import { BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";

const About = () => {
  return (
    <div id="about" className="mb-16">
      <SectionHeader sectionName="about me" />
      <p className="mb-4">
        I'm a final year student at the <b>University of Toronto</b>, majoring
        in Computer Science. I have over 1.5 years of experience building
        large-scale front-end applications on the web using React, TypeScript
        and PHP. I'm passionate about web accessibility, problem-solving and
        developing rich user experiences. <br />
        <br />
        I'm currently seeking New Grad Software Engineering roles for 2023. If
        you have an opportunity for me or want to chat about anything from
        technology to basketball, feel free to connect with me on LinkedIn.
      </p>
      <Button variant="outline" asChild>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <BookOpen className="mr-2 h-[1.2rem] w-[1.2rem]" /> Check out my
          resume!
        </a>
      </Button>
    </div>
  );
};

export default About;
