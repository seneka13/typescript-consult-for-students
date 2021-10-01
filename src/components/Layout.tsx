import styled from 'styled-components';
import { Header } from './Header';

interface LayoutProps {
  children: JSX.Element;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
`;
