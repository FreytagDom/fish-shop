import Image from "next/image";
import PizzaVeggie from "../public/pizza.jpg";

export default function Home() {
  return (
    <>
      <h1>Recipes App</h1>
      <Image src={PizzaVeggie} alt="" />
    </>
  );
}
