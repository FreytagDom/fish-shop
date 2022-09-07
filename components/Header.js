import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <Nav>
        <Link href="/">
          <Sides>Startseite</Sides>
        </Link>
        <Link href="/veggie">
          <Sides>Veggie</Sides>
        </Link>
        <Link href="/dessert">
          <Sides>Dessert</Sides>
        </Link>
      </Nav>
    </Wrapper>
  );
}

const Nav = styled.nav`
  font-size: 1em;
  color: darkcyan;
`;
const Wrapper = styled.header`
  justify-content: space-evenly;
`;

const Sides = styled.a`
  justify-content: space-between;
`;
