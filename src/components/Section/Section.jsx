import { Header, SectionWrapper } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <Header>{title}</Header>
      {children}
    </SectionWrapper>
  );
};
