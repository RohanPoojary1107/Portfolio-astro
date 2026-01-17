import { BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";

const About = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16">
      <SectionHeader sectionName="about me" />
      <div className="mb-4 space-y-4">
        <p>
          I'm a backend engineer with over 4 years of experience building and scaling <strong>distributed systems</strong> that serve millions of users. Currently at <a className="underline" href="https://company.wattpad.com/" target="_blank" rel="noopener noreferrer">Wattpad</a>, I specialize in architecting <strong>scalable APIs</strong> with <strong>Go, AWS, and Kubernetes</strong>, and I've led the development of high-impact features that drove measurable business results, including features that increased user engagement by <strong>15%</strong> and saw <strong>180% growth</strong> in key metrics.
        </p>
        <p>
          Beyond technical execution, I'm passionate about engineering excellence and team growth. I serve as a core member of the <strong>on-call engineering team</strong>, maintaining high system reliability for millions of users, and I actively <strong>mentor</strong> new team members to foster collaborative and inclusive environments. My experience spans the <strong>full stack</strong>, from migrating legacy systems to <strong>React</strong> and building design system foundations, to collaborating closely with product, design, and client teams to deliver accessible and engaging user experiences.
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
