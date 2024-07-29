import Card from "./Card";

export default function ContainerCards() {
  return (
    <>
      <div className="my-20 grid grid-cols-3 justify-center items-center px-20 gap-20 mx-10 scrollbar-hide">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
