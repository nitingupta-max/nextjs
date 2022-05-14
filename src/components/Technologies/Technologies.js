import React from 'react';
import { DiFirebase, DiReact, DiZend, DiCode } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/><br/><br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with range of Technologies in the web developemnt world.
      From Backend To FrontEnd.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="4rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience With<br/>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="4rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience With<br/>
            Node and Express
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiCode size="4rem"/>
        <ListContainer>
          <ListTitle>Programming</ListTitle>
          <ListParagraph>
            Experience With<br/>
            C, C++ and Data Structure
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="4rem"/>
        <ListContainer>
          <ListTitle>Design</ListTitle>
          <ListParagraph>
            Experience With<br/>
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
