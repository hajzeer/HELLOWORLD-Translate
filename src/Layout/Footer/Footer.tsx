import {
  Anchor,
  CreatorDiv,
  CreatorParagraph,
  H2,
  IconStyled,
  Outer,
  Paragraph,
} from './style';
import Image from 'next/image';

const Footer = () => {
  return (
    <Outer>
      <IconStyled>
        <Image src="/13.svg" width={500} height={500} />
      </IconStyled>
      <H2>Lest's work together.</H2>
      <Paragraph>Mailing Address</Paragraph>
      <Anchor>address 2/3, 12-345 Address</Anchor>
      <Paragraph>Phone Number</Paragraph>
      <Anchor href="tel:+48-123-456-789">+48 123 456 789</Anchor>
      <Paragraph>Email Address</Paragraph>
      <Anchor href="mailto:site@site.com">site@site.com</Anchor>
      <CreatorDiv>
        <CreatorParagraph>
          ©{new Date().getFullYear()} HELLOWORLD
        </CreatorParagraph>
        <CreatorParagraph>Design by Breath Design Studio</CreatorParagraph>
      </CreatorDiv>
    </Outer>
  );
};
export default Footer;
