import Image from "next/image";
import PizzaVeggie from "../public/pizza.jpg";
import styled from "styled-components";

export default function Veggie() {
  return (
    <>
      <Wrapper>
        <Title>Vegetarisch</Title>
      </Wrapper>

      <p>Obst</p>
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

const Title = styled.h2`
  font-size: 2.5em;
  text-align: center;
  color: rebeccapurple;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

const Wrapper = styled.section`
  background: transparent;
`;
