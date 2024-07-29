import Card from "../components/home/Card";
import Navbar from "../components/Navbar";

export default function Products() {
  return (
    <>
      <div>
        <Navbar />
        <div className="w-full px-10 grid grid-cols-4 gap-8 rounded-md shadow-2xl py-[100px] grid-rows-2">
          {/* <div className="h-[300px] shadow-2xl"></div>
          <div className="shadow-2xl"></div>
          <div className="shadow-2xl"></div>
          <div className="shadow-2xl"></div>
          <div className="shadow-2xl"></div>
          <div className="shadow-2xl"></div>
          <div className="shadow-2xl"></div>
          <div className="shadow-2xl"></div> */}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
