import { SectionContainer, Title } from './Section.css';

export const Section = ({ children, title }) => {
  return (
    <SectionContainer>
      <Title>{title}</Title>
      {children}
    </SectionContainer>
  );
};
