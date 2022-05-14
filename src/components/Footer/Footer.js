import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin,AiFillTwitterCircle} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel : 9995486954">9995486954</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:masternitin1234@gmail.com">masternitin1234@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <slogan>“I have not failed. I’ve just found 10,000 ways that won’t work.”</slogan>
        </CompanyContainer>

        <SocialContainer>
          <SocialIcons href="https://github.com">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://instagram.com">
            <AiFillInstagram size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://linkedin.com">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://twitter.com">
            <AiFillTwitterCircle size="3rem"/>
          </SocialIcons>
        </SocialContainer>

      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
