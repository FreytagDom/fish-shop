import Image from "next/image";
import styled from "styled-components";
export default function Dessert() {
  return (
    <>
      <Wrapper>
        <Title>Dessert</Title>
      </Wrapper>
      <p>Quarkschale</p>
      <p>Fruchsalat</p>
      <Image
        alt=""
        src="https://images.unsplash.com/photo-1469533778471-92a68acc3633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        layout="responsive"
        width={2400}
        height={1599}
      />
    </>
  );
}

const Title = styled.h2`
  font-size: 2.5em;
  text-align: center;
  color: rebeccapurple;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

const Wrapper = styled.section`
  background: transparent;
`;
