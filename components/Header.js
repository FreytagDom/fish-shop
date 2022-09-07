import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <PageHeader>
      <Navigation>
        <Link href="/">
          <a>Startseite</a>
        </Link>
        <Link href="/veggie">
          <a>Veggie</a>
        </Link>
        <Link href="/dessert">
          <a>Dessert</a>
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
