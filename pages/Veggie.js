import Image from "next/image";
import FischImg from "../public/pizza.jpg";

export default function veggies() {
  return (
    <>
      <h1>Vegetarisch</h1>
      <Image src={FischImg} alt="" />

      <p>Obst</p>
    </>
  );
}
