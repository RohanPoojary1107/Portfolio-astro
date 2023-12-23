import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";

const About = () => {
  return (
    <div id="about">
        <SectionHeader sectionName="about me" />
        <p className="mb-4">
            I'm a final year student at the <b>University of Toronto</b>, majoring in Computer Science. 
            I have over 1.5 years of experience building large-scale front-end applications on the web using React, TypeScript and PHP. 
            I'm passionate about web accessibility, problem-solving and developing rich user experiences. <br />
            <br />
            I'm currently seeking New Grad Software Engineering roles for 2023. If you have an opportunity for me or want to chat about 
            anything from technology to basketball, feel free to connect with me on LinkedIn.
        </p>
        <Button asChild>
            <a href="/resume.pdf">Check out my resume!</a>
        </Button>
    </div>
  );
};

export default About;
