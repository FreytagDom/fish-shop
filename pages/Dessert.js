import Image from "next/image";

export default function Dessert() {
  return (
    <>
      <h1>Dessert</h1>
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
