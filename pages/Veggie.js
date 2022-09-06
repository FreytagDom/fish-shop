import Image from "next/image";
import PizzaVeggie from "../public/pizza.jpg";

export default function veggies() {
  return (
    <>
      <h1>Vegetarisch</h1>
      <p>Obst</p>
      <Image src={PizzaVeggie} alt="" />
    </>
  );
}
