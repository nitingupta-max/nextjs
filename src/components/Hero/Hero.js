import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To<br/>
        My Personal Portfolio<br/>
        I'm Nitin Gupta
      </SectionTitle>
      <SectionText>
      I am Currently a Third Year Student at IIIT Bhopal. Pursuing B.Tech Degree in Computer Science & Engineering.
      <Button onClick = {()=>window.location = 'https://nitingupta-max.github.io/resume.pdf'}>Download CV</Button>
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;