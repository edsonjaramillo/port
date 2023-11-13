import { Section } from 'ui/src/Section';

import { ExpertiseCard, SEOIcon, ScriptingIcon, UIUXIcon, WebDevelopmentIcon } from './ExpertiseCard';

export default function ExpertiseSection() {
  return (
    <Section header="Experties" headerAs="h2" id="experties">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <ExpertiseCard
          icon={<WebDevelopmentIcon />}
          name="Web Development"
          description="Crafting dynamic, responsive websites tailored for optimal user experience. Specializing in HTML, CSS, JavaScript, and modern frameworks to deliver cutting-edge web solutions."
        />
        <ExpertiseCard
          icon={<SEOIcon />}
          name="SEO Consulting"
          description="Enhancing online visibility through strategic SEO practices. Focused on keyword optimization, on-page SEO, link building, and analytics to boost search engine rankings."
        />
        <ExpertiseCard
          icon={<UIUXIcon />}
          name="UI/UX Design"
          description="Designing intuitive, aesthetically pleasing user interfaces that enhance user interaction. Emphasizing user-centered design principles to create seamless digital experiences."
        />
        <ExpertiseCard
          icon={<ScriptingIcon />}
          name="Scripting"
          description="Developing robust scripts to automate tasks and improve efficiency. Utilizing languages like Python, Bash, and PowerShell to streamline workflows and process data."
        />
      </div>
    </Section>
  );
}
