import Image from "next/image";

import styled from "styled-components";
import PizzaVeggie from "../public/pizza.jpg";

export default function Home() {
  return (
    <>
      {/* <h1>Recipes App</h1> */}

      <Wrapper>
        <Title>Recipes App</Title>
      </Wrapper>

      <Image
        src={PizzaVeggie}
        alt=""
        layout="responsive"
        width={2400}
        height={1599}
      />
    </>
  );
}

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: rebeccapurple;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

const Wrapper = styled.section`
  background: transparent;
`;
