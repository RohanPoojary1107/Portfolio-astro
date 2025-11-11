import { BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";

const About = () => {
  return (
    <section id="about" className="mb-16">
      <SectionHeader sectionName="about me" />
      <p className="mb-4">
        I'm a Software Engineer at <a className="underline" href="https://company.wattpad.com/" target="_blank" rel="noopener noreferrer">Wattpad</a> based in Toronto, Canada, with over 4 years of professional experience building and scaling both backend and frontend systems. 
        <br />
        <br />
        At Wattpad, I've led the development of high-impact features like Polls and Reading Lists, architected scalable APIs with Go, AWS, and Kubernetes, and played a key role in on-call engineering and mentoring new team members. My experience also includes migrating legacy systems to React, developing design system foundations, and collaborating closely with product, design, and client teams to deliver accessible and engaging user experiences.
        <br />
        <br />
        Outside of work, I'm a huge basketball fan, a proud supporter of LeBron James, and a bit of a nerd when it comes to all things airplanes.
        <br />
        <br />
        I'm always open to connecting — whether it's about technology, basketball, or aviation. Feel free to reach out!
      </p>
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
