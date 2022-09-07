import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <PageHeader>
      <Navigation>
        <Link href="/">
          <Sides>Startseite</Sides>
        </Link>
        <Link href="/veggie">
          <Sides>Veggie</Sides>
        </Link>
        <Link href="/dessert">
          <Sides>Dessert</Sides>
        </Link>
      </Navigation>
    </PageHeader>
  );
}

const Navigation = styled.nav`
  display: flex;
  font-size: 1em;
  color: darkcyan;
  justify-content: space-evenly;
  padding-top: 1rem;
`;
const PageHeader = styled.header`
  justify-content: space-evenly;
  border-bottom: 1px #000;
`;

const Sides = styled.a`
  display: flex;
  justify-content: space-between;
`;
